import { axiosFetch } from '$service/utils/axiosFetch';
import { formatURL } from '$service/utils/formatURL';
import { Listing } from './types';

type GetLatestListings = (type?: Listing['type']) => Promise<Listing[] | null>;

const url = '/listings/newest';

export const getLatestListings: GetLatestListings = async () => {
  const data = await axiosFetch<Listing[]>({ method: 'get', url });

  if (!data) {
    return [];
  }

  const result: Listing[] = [];

  for (const d of data) {
    const resolveImage = d.image ? await formatURL(d.image) : null;
    result.push({ ...d, image: resolveImage });
  }

  return result;
};
