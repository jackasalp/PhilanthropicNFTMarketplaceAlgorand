import { axiosFetch } from '$service/utils/axiosFetch';
import { User } from './type';

type GetUser = (userId: string) => Promise<User | null>;
export const getUser: GetUser = async (userId) => {
  const url = `/users/${userId}`;
  return axiosFetch<User | null>({ method: 'get', url });
};
