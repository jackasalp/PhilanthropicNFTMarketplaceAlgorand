// export const firstTableData = {
//   headings: {
//     firstHeading: 'Name',
//     secondHeading: 'Date',
//     thirdHeading: 'Price',
//   },
//   rows: [
//     {
//       imgSrc: '',
//       name: 'Name',
//       date: '01/04/2022',
//       price: '0.03',
//     },
//     {
//       imgSrc: '',
//       name: 'Name',
//       date: '01/04/2022',
//       price: '0.03',
//     },
//     {
//       imgSrc: '',
//       name: 'Name',
//       date: '01/04/2022',
//       price: '0.03',
//     },
//     {
//       imgSrc: '',
//       name: 'Name',
//       date: '01/04/2022',
//       price: '0.03',
//     },
//   ],
// };

import { Bid } from '$service/auction/types';
import Launch from '@mui/icons-material/Launch';
import { Stack } from '@mui/material';
import dayjs from 'dayjs';
import Link from 'next/link';
import truncateMiddle from 'truncate-middle';

export const secondTableData = (bids: Bid[]) => {
  return {
    headings: {
      firstHeading: 'TransactionId',
      secondHeading: 'Date/Time',
      thirdHeading: 'Sender',
      fourthHeading: 'Price',
    },
    rows: bids.map((bid) => ({
      firstHeading: (
        <Stack direction="row" spacing={1}>
          <div>{truncateMiddle(bid.txid ?? '', 5, 5, '...')}</div>
          <Link href={`${process.env.API_ALGO_EXPLORER}/tx/${bid.txid}`}>
            <Launch style={{ cursor: 'pointer' }} />
          </Link>
        </Stack>
      ),
      secondHeading: dayjs(bid.time).format('MMMM D, YYYY h:mm A'),
      thirdHeading: (
        <Stack direction="row" justifyContent="center" spacing={1}>
          <div>{truncateMiddle(bid.sender ?? '', 5, 5, '...')}</div>
          <Link href={`${process.env.API_ALGO_EXPLORER}/address/${bid.sender}`}>
            <Launch style={{ cursor: 'pointer' }} />
          </Link>
        </Stack>
      ),
      fourthHeading: bid.amount,
    })),
  };
};
