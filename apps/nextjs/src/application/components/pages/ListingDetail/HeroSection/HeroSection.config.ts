export const socialIcons = [
  {
    id: 1,
    imgSrc: '/icons/shareIcon.png',
    width: 22.84,
    height: 22.84,
    url: '#',
  },
  {
    id: 2,
    imgSrc: '/icons/attachFileIcon.png',
    width: 22.84,
    height: 22.84,
    url: '#',
  },
  {
    id: 3,
    imgSrc: '/icons/twitterIcon.png',
    width: 26.91,
    height: 22.84,
    url: '#',
  },
  {
    id: 4,
    imgSrc: '/icons/instagramIcon.png',
    width: 27.56,
    height: 27.56,
    url: '#',
  },
];

export const chartData = (
  charityPercentage: string,
  royaltyPercentage: string,
  platformPercentage: string,
  sellerPercentage: string,
): { name: string; value: number }[] => [
  { name: 'Charity Percentage', value: Number(charityPercentage) },
  { name: 'Royalty Percentage', value: Number(royaltyPercentage) },
  { name: 'Platform Percentage', value: Number(platformPercentage) },
  { name: 'Seller Percentage', value: Number(sellerPercentage) },
];
