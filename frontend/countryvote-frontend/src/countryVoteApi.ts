import { apiClient } from "./client";
import type { VotePayload, TopCountry, CountryOption } from "./types";

export function createVote(payload: VotePayload) {
  return apiClient.post("/votes", { vote: payload });
}

export function getTopCountries(): Promise<TopCountry[]> {
  return apiClient.get("/countries/top");
}

export function getAllCountries(): Promise<CountryOption[]> {
  return apiClient.get("/countries");
}
