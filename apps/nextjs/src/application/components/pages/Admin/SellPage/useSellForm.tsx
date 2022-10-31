/* eslint-disable no-console */
import { useAtom } from 'jotai';
import { useState } from 'react';
import { auctionDurations, initialFormData, SellForm, sellFormAtom } from './store';

import { Errors, validateFormData } from './useSellForm/validateFormData';
import { compact, flatten, isEmpty, omit } from 'lodash-es';
import { useMutation } from 'react-query';
import { getBuyNowParams } from '$service/buyNow/getBuyNowParams';
import { getAuctionParams } from '$service/auction/getAuctionParams';
import * as auctionContract from '$service/contracts/auction-contract';
import * as buyNowContract from '$service/contracts/buynow-contract';
import { createBuyNow } from '$service/buyNow/createBuyNow';
import { createAuction } from '$service/auction/createAuction';
import { useRouter } from 'next/router';
import { getStdlib } from '$application/lib/getStdlib';
import { useSnackbar } from 'notistack';

enum CreateApplicationSteps {
  VALIDATING = 'validating form data',
  GETTING_PARAMS = 'Getting Params...',
  CREATING_APPLICATION = 'Creating an application...',
  REGISTERING = 'Registering listing...',
  REDIRECTING = 'Redirecting ...',
  DONE = 'Application Created Successfully',
}

type ErrorState = Record<SellForm['type'], Errors>;

export const useSellForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useAtom(sellFormAtom);
  const [errors, setErrors] = useState<ErrorState | null>(null);
  const { enqueueSnackbar } = useSnackbar();
  const [loadingStep, setLoadingStep] = useState<CreateApplicationSteps | null>();
  const { mutateAsync: getBuyNowParamsMutate } = useMutation(getBuyNowParams);
  const { mutateAsync: getAuctionParamsMutate } = useMutation(getAuctionParams);
  const { mutateAsync: createBuyNowMutate } = useMutation(createBuyNow);
  const { mutateAsync: createAuctionMutate } = useMutation(createAuction);

  const createApplication = async () => {
    setLoadingStep(CreateApplicationSteps.GETTING_PARAMS);

    const stdlib = await getStdlib();

    const getNFTParams =
      formData.type === 'auction' ? getAuctionParamsMutate : getBuyNowParamsMutate;
    const params = await getNFTParams(formData.asset?.index);

    setLoadingStep(CreateApplicationSteps.CREATING_APPLICATION);
    const account = await stdlib?.getDefaultAccount();

    let newAppId;

    if (formData.type === 'buynow') {
      const ctc = account.contract(buyNowContract);

      const listingParams = {
        ...params,
        nftId: formData.asset?.index,
        salesPrice: stdlib?.parseCurrency(formData.salePrice),
        charityAddress: formData.charityCampaign?.charity_wallet,
        charityPercentage: Number(formData.charityPercentage),
      };

      const appId = await new Promise<number>((resolve) => {
        try {
          buyNowContract.Seller(ctc, {
            getSale: () => {
              return listingParams;
            },
            listingReady: async () => {
              const _appId = Number(await ctc.getInfo());
              resolve(_appId);
            },
            showOutcome: (winner, amt) => {
              console.log(
                `Seller saw that ${stdlib?.formatAddress(winner)} won with ${stdlib?.formatCurrency(
                  amt,
                  10,
                )}`,
              );
            },
          });
        } catch (e) {}
      });

      setLoadingStep(CreateApplicationSteps.REGISTERING);
      await createBuyNowMutate(appId);
      newAppId = appId;
    }

    if (formData.type === 'auction') {
      const ctc = account.contract(auctionContract);
      const auctionParams = {
        ...params,
        nftId: formData.asset?.index,
        minBid: stdlib?.parseCurrency(formData.startingBid),
        endSecs: formData.auctionDuration ? auctionDurations[formData.auctionDuration] : undefined,
        reservePrice: stdlib?.parseCurrency(formData.reservedPrice),
        charityAddress: formData.charityCampaign?.charity_wallet,
        charityPercentage: Number(formData.charityPercentage),
      };

      const appId = await new Promise<number>((resolve) => {
        auctionContract.AuctionCreator(ctc, {
          getSale: () => {
            return auctionParams;
          },
          auctionReady: async () => {
            resolve(Number(await ctc.getInfo()));
          },
          seeBid: (who, amt) => {
            console.log(
              `AuctionCreator saw that ${stdlib?.formatAddress(who)} bid ${stdlib?.formatCurrency(
                amt,
                10,
              )}.`,
            );
          },
          showOutcome: (winner, amt) => {
            console.log(
              `AuctionCreator saw that ${stdlib?.formatAddress(
                winner,
              )} won with ${stdlib?.formatCurrency(amt, 10)}`,
            );
          },
        });
      });

      setLoadingStep(CreateApplicationSteps.REGISTERING);
      await createAuctionMutate(appId);
      newAppId = appId;
    }

    setLoadingStep(CreateApplicationSteps.REDIRECTING);

    router.replace(`/listing/${formData.type}/${newAppId}`);
  };

  const sellNFTHandler = async () => {
    setLoadingStep(CreateApplicationSteps.VALIDATING);
    const _errors = await validateFormData(formData);
    const errArr =
      formData.type === 'auction'
        ? Object.values(omit(_errors, 'salePrice'))
        : Object.values(omit(_errors, ['startingBid', 'reservedPrice', 'auctionDuration']));

    if (!isEmpty(compact(flatten(errArr)))) {
      setErrors({ [formData.type]: _errors } as ErrorState);
      setLoadingStep(null);
      return;
    }

    try {
      await createApplication();
      enqueueSnackbar('Application Is Created Successfully.', {
        variant: 'success',
      });
      setLoadingStep(CreateApplicationSteps.DONE);
    } catch (err) {
      enqueueSnackbar('Some Thing Went Wrong With Creating Application, Please Try Again.', {
        variant: 'error',
      });
      setLoadingStep(null);
      return;
    }

    setFormData({ ...initialFormData, type: formData.type });
    setLoadingStep(null);
  };
  const totalSteps = Object.keys(CreateApplicationSteps).length;

  const progressValue =
    ((Object.values(CreateApplicationSteps).findIndex((state) => state === loadingStep) + 1) /
      totalSteps) *
    100;

  return {
    sellNFTHandler,
    loadingStep,
    errors,
    progressValue,
  };
};
