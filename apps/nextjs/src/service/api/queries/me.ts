import { axiosFetch } from '../../utils/axiosFetch';

interface Me {
  bio: string;
  username: string;
  createdAt: string;
  id: string;
  avatarCid: string;
}
export const me = (): Promise<Me | null> => {
  const url = '/users/me';
  return axiosFetch<Me>({ method: 'get', url, checkToken: true });
};
