import { axiosFetch } from '$service/utils/axiosFetch';
import { formatURL } from '$service/utils/formatURL';
import { Listing } from './types';

type GetUserListings = (userId) => Promise<Listing[] | null>;

export const getUserListings: GetUserListings = async (userId) => {
  const url = `/listings/user-listings/${userId}`;
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
