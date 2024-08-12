"use client";
import { generateYAxis } from "@/app/lib/utils";
import { ResponsiveBar } from "@nivo/bar";

const data = [
  { month: "Jan", income: 40000, outcome: 24000 },
  { month: "Feb", income: 30000, outcome: 13980 },
  { month: "Mar", income: 20000, outcome: 9800 },
  { month: "Apr", income: 27800, outcome: 39080 },
  { month: "May", income: 39080, outcome: 29080 },
  { month: "Jun", income: 23000, outcome: 24000 },
  { month: "Jul", income: 34000, outcome: 30000 },
  { month: "Aug", income: 27000, outcome: 28000 },
];

export default function AnalyticsChart() {
  const revenue = data;

  const chartHeight = 350;
  // NOTE: Uncomment this code in Chapter 7

  const { yAxisLabels, topLabel } = generateYAxis(revenue);

  if (!revenue || revenue.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`font-bold mb-4 text-xl md:text-2xl`}>Analytics</h2>
      {/* NOTE: Uncomment this code in Chapter 7 */}

      <div className="rounded-xl bg-darkPurple p-4">
        <div className="sm:grid-cols-9 mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-darkPurple p-0 md:gap-4">
          <div
            className="mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex"
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisLabels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>

          {revenue.map((month) => (
            <div
              key={month.month}
              className="flex flex-col items-center  gap-2"
            >
              <div className="flex flex-row items-end gap-1">
                <div
                  className="w-2 rounded-md bg-lighterPurple"
                  style={{
                    height: `${(chartHeight / topLabel) * month.income}px`,
                  }}
                ></div>
                <div
                  className="w-2 rounded-md bg-bluePool"
                  style={{
                    height: `${(chartHeight / topLabel) * month.outcome}px`,
                  }}
                ></div>
              </div>
              <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
                {month.month}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
