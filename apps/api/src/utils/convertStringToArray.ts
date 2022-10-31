import { uniq } from 'lodash';

export const convertStringToArray = (value: string) =>
  uniq(value.split(',').map((cat: string) => cat.trim()));
