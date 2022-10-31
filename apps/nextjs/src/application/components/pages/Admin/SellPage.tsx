import { useState } from 'react';
import { Box, Grid, Stack, Typography, Button } from '@mui/material';
import { PrimaryButton } from '../../Common/PrimaryButton';

import { useAtom } from 'jotai';
import {
  AuctionDurations,
  auctionDurations,
  sellFormAtom,
} from '$application/components/pages/Admin/SellPage/store';
import Input from '$application/components/atoms/Input';
import { Select } from '$application/components/molecules/Select';
import CampaignsModal from './SellPage/CampaignsModal';
import { Charity } from '$service/getCharities';
import { ListingFormatBtn } from './SellPage/ListingFormatBtn';
import { useSellForm } from './SellPage/useSellForm';
import styled from '@emotion/styled';
import { LinearProgressbar } from '$application/components/atoms/LinearProgressbar';
import SelectNFTs from '$application/components/organisms/SelectNFTs';

export const SellPage = () => {
  const [formData, setFormData] = useAtom(sellFormAtom);
  const { sellNFTHandler, errors, loadingStep, progressValue } = useSellForm();

  const formTypeErrors = errors?.[formData.type];

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const campaignSelectHandler = (campaign: Charity) => {
    setFormData((c) => {
      c.charityCampaign = campaign;
    });
    setIsModalOpen(false);
  };

  return (
    <>
      <Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            gridGap: '2rem',
          }}
        >
          <Box
            sx={{
              maxWidth: '367px',
              mx: 'auto',
              width: '100%',
            }}
          >
            <Stack spacing={4} direction={'column'}>
              <Box>
                <SelectNFTs
                  label="NFTs"
                  errorText={formTypeErrors?.asset?.join(', ')}
                  onSelect={(selectedAssetsArr) => {
                    const selectedAsset = selectedAssetsArr[0];
                    setFormData((c) => {
                      c.asset = selectedAsset;
                    });
                  }}
                />
              </Box>

              <Box>
                <Typography
                  variant={'body1'}
                  color={'primary'}
                  sx={{
                    mb: '8px',
                  }}
                >
                  Sell Format
                </Typography>

                <Grid spacing={1} container>
                  <Grid item xs={12}>
                    <ListingFormatBtn
                      active={formData.type === 'buynow'}
                      onClick={() => {
                        setFormData((c) => {
                          c.type = 'buynow';
                        });
                      }}
                    >
                      Fixed price
                    </ListingFormatBtn>
                  </Grid>

                  <Grid item xs={6} />

                  {formData.type === 'auction' && (
                    <Grid item xs={6}>
                      <Input
                        label="Starting Bid"
                        required
                        errorText={formTypeErrors?.startingBid?.join(', ')}
                        onKeyPress={(event) => {
                          if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                          }
                        }}
                        value={formData.startingBid}
                        onChange={(v) =>
                          setFormData((c) => {
                            c.startingBid = v as number;
                          })
                        }
                      />
                    </Grid>
                  )}

                  {formData.type === 'auction' && (
                    <Grid item xs={6}>
                      <Input
                        label="Reserved Price"
                        errorText={formTypeErrors?.reservedPrice?.join(', ')}
                        onKeyPress={(event) => {
                          if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                          }
                        }}
                        value={formData.reservedPrice}
                        onChange={(v) =>
                          setFormData((c) => {
                            c.reservedPrice = v as number;
                          })
                        }
                      />
                    </Grid>
                  )}

                  {formData.type === 'auction' && (
                    <Grid item xs={6}>
                      <Select
                        label="Duration (Days)"
                        items={Object.keys(auctionDurations) as AuctionDurations[]}
                        isRequired
                        errorText={formTypeErrors?.auctionDuration?.join(', ')}
                        placeHolder="Please Select Auction Duration"
                        selectedItems={formData.auctionDuration ? [formData.auctionDuration] : []}
                        onSelect={(v) =>
                          setFormData((c) => {
                            c.auctionDuration = v;
                          })
                        }
                      />
                    </Grid>
                  )}

                  {formData.type === 'buynow' && (
                    <Grid item xs={12}>
                      <Input
                        label="Sale Price"
                        errorText={formTypeErrors?.salePrice?.join(', ')}
                        onKeyPress={(event) => {
                          if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                          }
                        }}
                        value={formData.salePrice}
                        onChange={(v) =>
                          setFormData((c) => {
                            c.salePrice = Number(v) as number;
                          })
                        }
                      />
                    </Grid>
                  )}
                </Grid>
              </Box>
            </Stack>
          </Box>
          <Box
            sx={{
              maxWidth: '367px',
              mx: 'auto',
              width: '100%',
            }}
          >
            <Stack spacing={4} direction="column">
              <Box>
                <Typography>select what charity you want the buyer to support *</Typography>
                {!formData.charityCampaign ? (
                  <Button
                    variant="outlined"
                    fullWidth
                    color="success"
                    onClick={() => setIsModalOpen(true)}
                    sx={{ textTransform: 'capitalize' }}
                  >
                    Select charity campaign
                  </Button>
                ) : (
                  <Input
                    value={formData.charityCampaign.campaign_name}
                    onClick={() => {
                      setFormData((c) => {
                        c.charityCampaign = undefined;
                      });
                      setIsModalOpen(true);
                    }}
                  />
                )}
                {formTypeErrors?.charityCampaign && (
                  <Typography variant="subtitle1" color="error">
                    {formTypeErrors.charityCampaign.join(', ')}
                  </Typography>
                )}
              </Box>
              <Box>
                <Grid spacing={2} container>
                  <Grid item xs={12}>
                    <Input
                      label="How much to contribute?"
                      required
                      errorText={formTypeErrors?.charityPercentage?.join(', ')}
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      value={formData.charityPercentage}
                      onChange={(v) => {
                        setFormData((c) => {
                          c.charityPercentage = Number(v) as number;
                        });
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Stack>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center' },
            alignItems: 'center',
            mt: '3rem',
            mb: '1rem',
          }}
        >
          <PrimaryButton
            loading={!!loadingStep ?? false}
            onClick={sellNFTHandler}
            sx={{
              px: '4rem',
              fontSize: '20px',
            }}
          >
            List
          </PrimaryButton>
        </Box>

        <Box>
          <Typography textAlign={'center'} variant={'body1'} color={'primary'}>
            Platform Fee is {process.env.PLATFORM_PERCENTAGE}%
          </Typography>
        </Box>
      </Box>
      {loadingStep && (
        <StyledLinearProgressbar progressText={loadingStep} progressNumber={progressValue} />
      )}
      {isModalOpen && (
        <CampaignsModal
          onClose={() => setIsModalOpen(false)}
          onCampaignSelect={campaignSelectHandler}
        />
      )}
    </>
  );
};

const StyledLinearProgressbar = styled(LinearProgressbar)`
  margin-top: 2rem;
`;
