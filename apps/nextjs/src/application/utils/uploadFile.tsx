import { getWeb3StorageClient } from '$service/utils/getWeb3StorageClient';

export const uploadFile = async (file) => {
  const storage = getWeb3StorageClient();
  return storage.put([file], { wrapWithDirectory: false });
};
