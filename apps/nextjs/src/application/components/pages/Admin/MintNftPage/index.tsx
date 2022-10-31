import { useReducer, useState } from 'react';
import { ButtonBase } from '@mui/material';

import { Box, Grid, IconButton, Input, Stack, Typography } from '@mui/material';
import { CInput } from '../../../Common/CInput';
import { PrimaryButton } from '../../../Common/PrimaryButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveIcon from '@mui/icons-material/Remove';

import { useForm } from 'react-hook-form';
import { useMint } from './useMint';
import { LinearProgressbar } from '$application/components/atoms/LinearProgressbar';
import styled from '@emotion/styled';
import LaunchIcon from '@mui/icons-material/Launch';
import { useSnackbar } from 'notistack';

const initialTraits = { traits: [] };

function traitsReducer(state, action) {
  switch (action.type) {
    case 'add':
      return {
        traits: [
          ...state.traits,
          {
            id: action.id,
          },
        ],
      };
    case 'remove':
      return {
        traits: state.traits.filter((trait) => trait.id !== action.id),
      };
    default:
      throw new Error('No action type found!!!');
  }
}

export const MintNftPage = () => {
  const [state, dispatch] = useReducer(traitsReducer, initialTraits);
  const [assetId, setAssetId] = useState<number | undefined>();

  const { enqueueSnackbar } = useSnackbar();

  const { onMint, isMinting, currentStep, progressedValue } = useMint({
    onComplete: ({ assetId: _assetId }) => {
      enqueueSnackbar('Asset Is Minted Successfully.', { variant: 'success' });
      setAssetId(_assetId);
    },
    onError: (err) => {
      enqueueSnackbar(err.message, { variant: 'error' });
    },
  });
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { unitName, quantity, description, assetImage, assetName, ...traits } = data;

    return onMint({
      unitName,
      quantity,
      description,
      assetImage,
      assetName,
      traits,
    });
  };

  return (
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
          <Stack
            spacing={4}
            direction={'column'}
            sx={{
              height: '100%',
            }}
          >
            {/*     ASSET NAME      */}

            <Box>
              <Typography
                color={'primary'}
                sx={{
                  fontSize: '16px',
                  mb: '8px',
                }}
                variant={'body1'}
              >
                Asset Name
              </Typography>
              <CInput
                {...register('assetName', {
                  required: 'Please specify your Asset Name',
                })}
                placeholder={'Display Name'}
                component="input"
              />
              {errors.assetName && (
                <Typography
                  sx={{
                    color: 'red',
                    fontSize: '12px',
                    mt: '8px',
                  }}
                >
                  {errors?.assetName?.message}
                </Typography>
              )}
            </Box>

            {/*         ASSET IMAGE         */}

            <Box>
              <Typography
                color={'primary'}
                sx={{
                  fontSize: '16px',
                  mb: '8px',
                }}
                variant={'body1'}
              >
                Asset Image
              </Typography>

              <CInput
                sx={{
                  height: '49.2px',
                }}
              >
                <input
                  placeholder={'Upload  Image*'}
                  type="file"
                  {...register('assetImage', {
                    required: 'Please specify your Asset Image',
                  })}
                />
              </CInput>
              {errors.assetImage && (
                <Typography
                  sx={{
                    color: 'red',
                    fontSize: '12px',
                    mt: '8px',
                  }}
                >
                  {errors?.assetImage?.message}
                </Typography>
              )}
            </Box>

            {/*     DESCRIPTION     */}

            <Box
              sx={{
                height: '100%',
              }}
            >
              <Typography
                color={'primary'}
                sx={{
                  fontSize: '16px',
                  mb: '8px',
                }}
                variant={'body1'}
              >
                DESCRIPTION
              </Typography>

              <CInput
                {...register('description', {
                  required: 'Please specify your Asset Description',
                })}
                component="textarea"
                // rows={7}
                placeholder={'Description*'}
                sx={{
                  height: '100%',
                }}
              />
              {errors.description && (
                <Typography
                  sx={{
                    color: 'red',
                    fontSize: '12px',
                    mt: '8px',
                  }}
                >
                  {errors?.description?.message}
                </Typography>
              )}
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
          <Stack spacing={4} direction={'column'}>
            {/*     UNIT NAME      */}

            <Box>
              <Typography
                color={'primary'}
                sx={{
                  fontSize: '16px',
                  mb: '8px',
                }}
                variant={'body1'}
              >
                UNIT NAME
              </Typography>

              <CInput
                {...register('unitName', {
                  required: 'Please specify your Unit Name',
                })}
                component="input"
                placeholder={'Unit Name*'}
              />
              {errors.unitName && (
                <Typography
                  sx={{
                    color: 'red',
                    fontSize: '12px',
                    mt: '8px',
                  }}
                >
                  {errors?.unitName?.message}
                </Typography>
              )}
            </Box>

            {/*     QUANTITY      */}

            <Box>
              <Typography
                color={'primary'}
                sx={{
                  fontSize: '16px',
                  mb: '8px',
                }}
                variant={'body1'}
              >
                QUANTITY
              </Typography>

              <CInput>
                <Input
                  type="number"
                  sx={{ height: '100%' }}
                  fullWidth
                  {...register('quantity', {
                    required: 'Please specify Quantity',
                  })}
                  placeholder={'Quantity*'}
                />
              </CInput>
              {errors.quantity && (
                <Typography
                  sx={{
                    color: 'red',
                    fontSize: '12px',
                    mt: '8px',
                  }}
                >
                  {errors?.quantity?.message}
                </Typography>
              )}
            </Box>

            <Box>
              <Typography
                variant={'body1'}
                color={'primary'}
                sx={{
                  fontWeight: 500,
                  mb: '1rem',
                }}
              >
                Traits
              </Typography>

              <Grid spacing={2} container>
                {state.traits.map(({ id }, index) => {
                  return (
                    <>
                      <Grid item xs={5}>
                        <Box>
                          <Typography
                            color={'primary'}
                            sx={{
                              fontSize: '16px',
                              mb: '8px',
                            }}
                            variant={'body1'}
                          >
                            Trait Name
                          </Typography>

                          <CInput
                            {...register(`traitName${id}`, {
                              required: 'Please specify trait name',
                            })}
                            placeholder={'Trait Name'}
                            component="input"
                          />
                          {errors[`traitName${id}`] && (
                            <Typography
                              sx={{
                                color: 'red',
                                fontSize: '12px',
                                mt: '8px',
                              }}
                            >
                              {errors[`traitName${id}`]?.message}
                            </Typography>
                          )}
                        </Box>
                      </Grid>

                      <Grid item xs={5}>
                        <Box>
                          <Typography
                            color={'primary'}
                            sx={{
                              fontSize: '16px',
                              mb: '8px',
                            }}
                            variant={'body1'}
                          >
                            Trait Value
                          </Typography>
                          <CInput
                            component="input"
                            {...register(`traitValue${id}`, {
                              required: 'Please specify trait value',
                            })}
                            placeholder={'Trait Value'}
                          />
                          {errors[`traitValue${id}`] && (
                            <Typography
                              sx={{
                                color: 'red',
                                fontSize: '12px',
                                mt: '8px',
                              }}
                            >
                              {errors[`traitValue${id}`]?.message}
                            </Typography>
                          )}
                        </Box>
                      </Grid>

                      <Grid item xs={2}>
                        <IconButton
                          size={'large'}
                          color={'primary'}
                          // variant="contained"
                          onClick={() => {
                            dispatch({ type: 'remove', id });
                            resetField(`traitName${id}`);
                            resetField(`traitValue${id}`);
                          }}
                        >
                          <RemoveIcon />
                        </IconButton>
                      </Grid>
                    </>
                  );
                })}

                <Grid justifyContent={'center'} item xs={12}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <IconButton
                      size={'large'}
                      color={'primary'}
                      onClick={() => {
                        dispatch({ type: 'add', id: state.traits.length + 1 });
                      }}
                    >
                      <AddCircleIcon />
                    </IconButton>

                    <Typography
                      variant={'body1'}
                      color={'primary'}
                      sx={{
                        fontSize: '12px',
                        my: '4px',
                      }}
                    >
                      Click on the + icon to add traits
                    </Typography>
                  </Box>
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
          flexDirection: 'column',
          gap: '1rem',
          mt: '3rem',
        }}
      >
        <PrimaryButton
          sx={{
            px: '4rem',
            fontSize: '20px',
          }}
          loading={isMinting}
          loadingPosition="start"
          startIcon={<></>}
          onClick={handleSubmit(onSubmit)}
        >
          Mint
        </PrimaryButton>
        {assetId && !isMinting && (
          <a
            target="_blank"
            href={`${process.env.API_ALGO_EXPLORER}/asset/${assetId}`}
            rel="noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <ButtonBase
              sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '1rem',
                padding: '1rem',
                gap: '.4rem',
              }}
            >
              CreatedAssetId:
              <span style={{ paddingLeft: '.1rem' }}>{assetId}</span>
              <LaunchIcon color="secondary" />
            </ButtonBase>
          </a>
        )}
      </Box>
      {currentStep && isMinting && (
        <StyledLinearProgressbar progressText={currentStep} progressNumber={progressedValue} />
      )}
    </Box>
  );
};

const StyledLinearProgressbar = styled(LinearProgressbar)`
  margin-top: 2rem;
`;
