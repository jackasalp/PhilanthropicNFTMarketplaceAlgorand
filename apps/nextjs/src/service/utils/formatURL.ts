import axios from 'axios';

const ARC3_URL_SUFFIX = '#arc3';
export const ARC69_URL_SUFFIX = '#arc69';

export const formatURL = async (url: string): Promise<string> => {
  if (url && url.includes('ipfs://')) {
    const urlArr = url.split('://');

    const returnURL = `${process.env.IPFS_GATEWAY}${urlArr[1]}`;

    if (url.endsWith(ARC3_URL_SUFFIX) || url.endsWith(ARC69_URL_SUFFIX)) {
      const response = await axios.get(returnURL);
      if (response.data.image) {
        const respURL = await formatURL(response.data.image);
        return respURL;
      }
    } else {
      return returnURL;
    }
  } else if (url && url.includes('tinyurl.com')) {
    const res = await axios.get(url);
    if (res.request.responseURL) {
      const replaceURL = res.request.responseURL.replace('tinyurl.com', process.env.IPFS_GATEWAY!);
      return replaceURL;
    } else if (res.request.res.responseUrl) {
      const replaceURL = res.request.res.responseUrl.replace(
        'gateway.pinata.cloud',
        process.env.IPFS_GATEWAY!,
      );
      return replaceURL;
    }
    return url;
  } else if (url && url.includes('rebrand.ly')) {
    const res = await axios.get(`https://${url}`);
    if (res.request.responseURL) {
      const respURL = await formatURL(res.request.responseURL);
      return respURL;
    } else if (res.request.res.responseUrl) {
      const respURL = await formatURL(res.request.res.responseUrl);
      return respURL;
    }
    return url;
  } else if (url && url.includes('gateway.pinata.cloud')) {
    const replaceURL = url.replace('gateway.pinata.cloud', process.env.IPFS_GATEWAY!);
    return replaceURL;
  } else if (url && url.includes('bit.ly')) {
    const res = await axios.get(`${process.env.API_ROOT_URL}/format-url?url=${url}`);
    return res.data;
  } else if (url && (url.endsWith(ARC3_URL_SUFFIX) || url.endsWith(ARC69_URL_SUFFIX))) {
    const response = await axios.get(url);
    if (response.data.image) {
      const respURL = await formatURL(response.data.image);
      return respURL;
    }
  }
  return url;
};
