import { axiosFetch } from '../../utils/axiosFetch';

interface User {
  username: string;
  bio: string;
  avatar: string;
}
interface UpgradeUser {
  success: boolean;
}
const url = '/users';
export const editProfile = (user: Partial<User>): Promise<UpgradeUser | null> => {
  return axiosFetch<UpgradeUser>({ method: 'patch', url, data: user });
};
