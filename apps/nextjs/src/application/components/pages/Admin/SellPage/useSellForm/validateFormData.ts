import { SellForm } from '../store';

export type Errors = Partial<Record<keyof Omit<SellForm, 'type'>, string[]>>;

export const validateFormData = (formData: SellForm): Errors => {
  const errors: Errors = {
    asset: [],
    auctionDuration: [],
    reservedPrice: [],
    royaltyPercentage: [],
    salePrice: [],
    charityCampaign: [],
    charityPercentage: [],
    startingBid: [],
  };

  if (!formData.asset) {
    errors.asset?.push('Please select a NFT');
  }

  if (!formData.salePrice || formData.salePrice === 0) {
    errors.salePrice?.push('Sale price is required and higher than 0');
  }

  if (
    formData.reservedPrice &&
    formData.startingBid &&
    formData.startingBid >= formData.reservedPrice
  ) {
    errors.reservedPrice?.push('Reserve price cannot lower than or equal to starting bid');
  }

  if (!formData.startingBid) {
    errors.startingBid?.push('Starting bid should be greater than 0');
  }

  if (!formData.auctionDuration) {
    errors.auctionDuration?.push('Auction duration field is required.');
  }

  if (formData.charityPercentage && formData.charityPercentage > 50) {
    errors.charityPercentage?.push('Charity percentage should not greater than 90');
  }

  if (!formData.charityCampaign) {
    errors.charityCampaign?.push('Charity campaign field is required');
  }

  return errors;
};
