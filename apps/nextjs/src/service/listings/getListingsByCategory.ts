import { axiosFetch } from '$service/utils/axiosFetch';
import { Listing } from './types';
import { formatURL } from '$service/utils/formatURL';

type GetListingsByCategory = (category: string) => Promise<Listing[] | null>;
export const getListingsByCategory: GetListingsByCategory = async (category) => {
  const url = `/listings/listings?category=${category}`;
  // const url = `/collections?category=${category}`;
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
