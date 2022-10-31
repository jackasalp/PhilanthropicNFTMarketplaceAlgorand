import { axiosFetch } from './utils/axiosFetch';

export interface Charity {
  title: string;
  id: string;
  slug: string;
  img: string;
  charity_name: string;
  charity_id: number;
  charity_slug: string;
  days_left: number;
  raised: number | null;
  total: number;
  rank: number;
  minted: number;
  category: string;
  campaign_name: string;
  description: string;
  charity_wallet: string;
  asalp_wallet: string;
  asalp_fee: number;
}

const url = 'https://giftchain.charity/fetch-campaigns/All/Charity';

export const getCharities = async (): Promise<Charity[] | undefined> => {
  const resp = await axiosFetch<{ campaigns: Charity[] }>({ method: 'GET', url });
  return resp?.campaigns;
};
