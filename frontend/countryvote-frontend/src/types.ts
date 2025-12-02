export type VotePayload = {
  name: string;
  email: string;
  countryCode: string;
};

export type TopCountry = {
  country_code: string;
  votes: number;
  name: string;
  official_name: string;
  capital?: string;
  region?: string;
  subregion?: string;
};

export type CountryOption = {
  code: string;
  name: string;
};
