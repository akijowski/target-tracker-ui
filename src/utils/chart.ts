import type { ChartDataset } from "chart.js";
import { formatLabelText } from "./time";
import type { APIStat } from "./api";

const baseDataset: ChartDataset<"line", any> = {
  data: [],
  fill: false,
  tension: 0.4,
};

export const getChartData = (history: APIStat[]): any => {
  const datasets = history.map((h) => {
    const data = h.data.map((v) => {
      return {
        x: formatLabelText(v.time),
        y: v.count,
      };
    });
    return {
      ...baseDataset,
      label: h.productName,
      data,
    };
  });
  const labels = history[0].data.map((v) => formatLabelText(v.time));
  return {
    labels,
    datasets,
  };
};
