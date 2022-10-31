import { Listing } from '$service/listings/types';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import dayjs from 'dayjs';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia } from '@mui/material';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { ListItems } from './ListingCard/List';

export interface ListingCardProps {
  listing: Listing;
}
export const ListingCard = ({ listing }: ListingCardProps) => {
  // const [expanded, setExpanded] = useState(false);
  const router = useRouter();

  return (
    <Card
      sx={{
        maxWidth: '280px',
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      <CardHeader
        title={listing.name ?? 'No Name'}
        subheader={dayjs(listing.createdAt).format('dddd, MMMM D, YYYY h:mm A')}
        sx={{
          py: '.5rem',
          pb: '.2rem',
          '&>*': { textTransform: 'capitalize' },
          '& .MuiCardHeader-subheader': { fontSize: '.8rem' },
        }}
      />
      <div style={{ height: '17.1rem' }}>
        {listing.image ? (
          <CardMedia component="img" image={listing.image} sx={{ objectFit: 'contain' }} />
        ) : (
          <Div>No Image</Div>
        )}
      </div>
      <CardContent sx={{ pb: '.5rem', height: '8rem' }}>
        <ListItems listing={listing} />
      </CardContent>
      <CardActions disableSpacing>
        <Button
          variant="contained"
          sx={{ textTransform: 'capitalize' }}
          onClick={() => router.push(`/listing/${listing.type}/${listing.id}`)}
        >
          Show Details
        </Button>
      </CardActions>
      {/* <ExpandMore
          expand={expanded}
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon fontSize="small" />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body1">Description:</Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {truncate(
              'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
              { length: 90, omission: '[...]' },
            )}
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
  );
};

const Div = styled.div`
  background: ${({ theme }) => theme.palette.grey[300]};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16rem;
  color: #fff;
  font-size: 2.5rem;
`;

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }
// const ExpandMore = styled((props: ExpandMoreProps) => <IconButton {...omit(props, 'expand')} />)(
//   ({ theme, expand }) => ({
//     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   }),
// );

export default ListingCard;
