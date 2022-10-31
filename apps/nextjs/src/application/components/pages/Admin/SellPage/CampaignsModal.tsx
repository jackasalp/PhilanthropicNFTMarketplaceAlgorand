import { LoadingData } from '$application/components/atoms/LoadingData';
import { Charity, getCharities } from '$service/getCharities';
import styled from '@emotion/styled';
import { Box, Modal, Stack, Typography } from '@mui/material';
import { useQuery } from 'react-query';
import { MdClose } from 'react-icons/md';

export interface CampaignsModalProps {
  onClose: () => void;
  onCampaignSelect: (charity: Charity) => void;
}

export const CampaignsModal = (props: CampaignsModalProps) => {
  const { data: campaignsData, isLoading, error } = useQuery('getCharities', getCharities);

  return (
    <Modal sx={{ backdropFilter: 'blur(5px)' }} open onClose={props.onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800,
          // bgcolor: 'background.paper',
          border: '1px solid #656565',
          background: '#e5e5e5',
          // borderRadius: 4,
          height: '70vh',
          py: '2rem',
          px: '2rem',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '25px',
            right: '25px',
            cursor: 'pointer',
          }}
          onClick={props.onClose}
        >
          <MdClose style={{ cursor: 'pointer' }} size={25} color={'#000'} />
        </Box>

        <Typography sx={{ pb: '1.5rem', pt: '1rem' }} component={'p'}>
          Select a charity the buyer should support.
        </Typography>

        <LoadingData loading={isLoading} error={error}>
          {() => (
            <>
              <ModalHeadWrapper>
                <HeadModalCell>
                  <Typography
                    variant={'body1'}
                    color={'primary'}
                    sx={{
                      fontWeight: 500,
                      fontSize: '15px',
                      color: '#656565',
                    }}
                  >
                    Campaign
                  </Typography>
                </HeadModalCell>
                <HeadModalCell>
                  <Typography
                    variant={'body1'}
                    color={'primary'}
                    sx={{
                      fontWeight: 500,
                      fontSize: '15px',
                      color: '#656565',
                    }}
                  >
                    Charity
                  </Typography>
                </HeadModalCell>
              </ModalHeadWrapper>
              <ModalDataWrapper>
                {(campaignsData ?? []).map((el, idx) => (
                  <ModalRowWrapper key={idx} onClick={() => props.onCampaignSelect(el)}>
                    <DataModalCell>
                      <Stack spacing={2} direction={'row'} alignItems={'center'}>
                        <Box
                          sx={{
                            width: '25px',
                            height: '27px',
                            '& img': { width: '25px !important', objectFit: 'cover' },
                          }}
                        >
                          <img src={el?.img} width={25} height={27} />
                        </Box>

                        <Typography
                          variant={'body1'}
                          color={'primary'}
                          sx={{
                            fontWeight: 500,
                            color: '#92A737',
                            fontSize: '15px',
                          }}
                        >
                          {el?.campaign_name ?? '---'}
                        </Typography>
                      </Stack>
                    </DataModalCell>
                    <DataModalCell>
                      <Stack spacing={2} direction={'row'} alignItems={'center'}>
                        {/* <Box*/}
                        {/*  sx={{*/}
                        {/*    width: '25px',*/}
                        {/*    height: '27px',*/}
                        {/*    '& img': { width: '25px !important', objectFit: 'cover' },*/}
                        {/*  }}*/}
                        {/* >*/}
                        {/*  <img src={el?.img} width={25} height={27} />*/}
                        {/* </Box>*/}
                        <Typography
                          variant={'body1'}
                          color={'primary'}
                          sx={{
                            fontWeight: 500,
                            color: '#656565',
                          }}
                        >
                          {el?.charity_name ?? '---'}
                        </Typography>
                      </Stack>
                    </DataModalCell>
                  </ModalRowWrapper>
                ))}
              </ModalDataWrapper>
            </>
          )}
        </LoadingData>
      </Box>
    </Modal>
  );
};

const ModalDataWrapper = styled('div')({
  overflowY: 'scroll',
  height: '63%',
});

const ModalHeadWrapper = styled('div')({
  display: 'flex',
  // borderBottom: '2px solid #004A99',
  padding: '5px 8px',
  marginBottom: '.5rem',
});

const ModalRowWrapper = styled('div')({
  display: 'flex',
  padding: '5px 8px',
  border: '1px solid #656565',
  marginBottom: '1.5rem',
  alignItems: 'center',
  boxShadow: '5px 5px 12px 0px #00000017',
});

const HeadModalCell = styled('div')({
  flexBasis: 0,
  flexGrow: 1,
  marginLeft: '10%',
});

const DataModalCell = styled('div')({
  flexBasis: 0,
  flexGrow: 1,
  marginLeft: '8%',
});

export default CampaignsModal;
