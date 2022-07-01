import type { ChartDataset } from "chart.js";
import type { APIStat } from "./api";

const baseDataset: ChartDataset<"line", any> = {
  data: [],
  fill: false,
  tension: 0.4,
};

export const getChartData = (history: APIStat[]): any => {
  const datasets = history.map((h) => {
    const data = h.data.map((v) => {
      // Requires time data to be in Epoch millis
      return {
        x: v.time * 1000,
        y: v.count,
      };
    });
    return {
      ...baseDataset,
      label: h.product_name,
      data,
    };
  });
  return {
    datasets,
  };
};
