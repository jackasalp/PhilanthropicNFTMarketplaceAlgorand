import { axiosFetch } from '../../utils/axiosFetch';

export const login = async (username, password) => {
  const url = '/auth/login';

  const data = {
    username,
    password,
  };

  return axiosFetch({ method: 'post', data, url });
};
