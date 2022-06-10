import type { Ref } from "vue";
import { ref } from "vue";

export interface APIStatsResponse {
  createdAt: number;
  lastUpdatedAt: number;
  products: APIProduct[];
  history: APIStat[];
}

export interface APIStat {
  productName: string;
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
  return ref({
    createdAt: 1654106360,
    lastUpdatedAt: 1654711160,
    products: [
      {
        name: "Up&Up Sensitive Baby Formula",
        desired_quantity: 1,
        tcin: "70000046",
        product_url:
          "https://www.target.com/p/gentle-non-gmo-powder-infant-formula-up-up/-/A-82052064",
        result: {
          stores: [
            {
              available: 1,
              location_name: "Denver",
            },
            {
              available: 2,
              location_name: "Aurora",
            },
          ],
          total_stores: 2,
        },
      },
      {
        name: "Enfamil NeuroPro Gentlease",
        desired_quantity: 1,
        tcin: "79334027",
        product_url:
          "https://www.target.com/p/gentle-non-gmo-powder-infant-formula-up-up/-/A-82052064",
        result: {
          stores: [
            {
              available: 1,
              location_name: "Denver",
            },
          ],
          total_stores: 1,
        },
      },
    ],
    history: [
      {
        productName: "Up&Up Gentle Baby Formula",
        data: [
          { time: 1654472160, count: 1 },
          { time: 1654538360, count: 0 },
          { time: 1654624760, count: 1 },
          { time: 1654711160, count: 1 },
        ],
      },
      {
        productName: "Up&Up Sensitive Baby Formula",
        data: [
          { time: 1654472160, count: 1 },
          { time: 1654538360, count: 1 },
          { time: 1654624760, count: 1 },
          { time: 1654711160, count: 0 },
        ],
      },
      {
        productName: "Up&Up Baby Formula",
        data: [
          { time: 1654472160, count: 1 },
          { time: 1654538360, count: 2 },
          { time: 1654624760, count: 2 },
        ],
      },
    ],
  });
};

export const historyForProduct = (
  history: APIStat[],
  productName: string
): APIStatValue[] => {
  return (
    (history.filter((h) => h.productName === productName)[0] || []).data || []
  );
};
