export interface Network {
  id: number;
  name: string;
  slug: string;
  balanceTokenTotal: number;
  balanceUsdTotal: number;
  usersTotal: number;
  feeTotal: number;
  price: number;
  priceVariation: number;
  apr: number;
  logo: string;
  tokenName: string;
  twitter: string;
  github: string;
  website: string;
  about: string;
  live: boolean;
}
