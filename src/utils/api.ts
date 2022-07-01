import type { Ref } from "vue";
import { ref } from "vue";
import {useFetch} from "@vueuse/core"

import staticData from "./test-api.json"

export interface APIStatsResponse {
  created_at: number;
  last_updated_at: number;
  products: APIProduct[];
  history: APIStat[];
}

export interface APIStat {
  product_name: string;
  data: APIStatValue[];
}

export interface APIStatValue {
  time: number;
  count: number;
}

export interface APIProduct {
  name: string;
  tcin: string;
  desired_quantity: number;
  product_url: string;
  result?: APIResult;
}

export interface APIResult {
  stores: APIStore[];
  total_stores: number;
}

export interface APIStore {
  available: number;
  location_name: string;
}

export const getStats = (): Ref<APIStatsResponse> => {
    return ref(staticData);
};

export const historyForProduct = (
  history: APIStat[],
  productName: string
): APIStatValue[] => {
  return (
    (history.filter((h) => h.product_name === productName)[0] || []).data || []
  );
};
