export type VotePayload = {
  name: string;
  email: string;
  country_code: string;
};

export type TopCountry = {
  country_code: string;
  votes: number;
  name: string;
  official_name: string;
  capital?: string;
  region?: string;
  subregion?: string;
  flag_png?: string;
  flag_svg?: string;
};

export type CountryOption = {
  code: string;
  name: string;
};
