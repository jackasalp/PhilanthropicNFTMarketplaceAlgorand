/* eslint-disable no-restricted-syntax */
/* eslint-disable no-return-await */
/* eslint-disable camelcase */
import { Config } from '@/config';
import algosdk, { Transaction } from 'algosdk';

const config = new Config();
const algorandIndexer = new algosdk.Indexer('', config.baseIndexer, '');

export const appExists = async (appId) => {
  try {
    await algorandIndexer.lookupApplications(appId).do();
    return true;
  } catch (error) {
    if (error.response.status === 404) {
      return false;
    }
  }
};
