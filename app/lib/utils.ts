import { Revenue } from "./definitions";

export const generateYAxis = (revenue: Revenue[]) => {
  // Calculate what labels we need to display on the y-axis
  // based on highest record and in 1000s
  const yAxisLabels = [];
  const highestRecord = Math.max(...revenue.map((month) => month.income));
  const topLabel = Math.ceil(highestRecord / 10000) * 10000;

  for (let i = topLabel; i >= 0; i -= 10000) {
    yAxisLabels.push(`$${i / 10000}K`);
  }

  return { yAxisLabels, topLabel };
};
