import Admin from '$application/components/pages/Admin';
import { GetServerSideProps } from 'next';

export default Admin;
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = req.cookies[process.env.TOKEN_COOKIE_NAME!];
  if (token) {
    return {
      props: {},
    };
  }
  return { redirect: { permanent: false, destination: '/' }, props: {} };
};
