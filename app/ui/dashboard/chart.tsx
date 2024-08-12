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
  { month: "Sep", income: 27000, outcome: 28000 },
  { month: "Oct", income: 27000, outcome: 28000 },
  { month: "Nov", income: 27000, outcome: 28000 },
  { month: "Dec", income: 27000, outcome: 28000 },
];

export default function AnalyticsChart() {
  const revenue = data;

  const chartHeight = 350;

  const { yAxisLabels, topLabel } = generateYAxis(revenue);

  if (!revenue || revenue.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="w-full md:col-span-4">
      <div className="flex items-center justify-between">
        <h2 className={`font-bold mb-4 text-xl md:text-2xl`}>Analytics</h2>
        <div className="flex flex-row gap-10   mb-4">
          <span className="font-bold flex items-center gap-2 text-sm">
            <div className="bg-lighterPurple w-2 h-2 rounded-full"></div>Outcome
          </span>
          <span className="font-bold flex items-center gap-2 text-sm">
            <div className="bg-bluePool w-2 h-2 rounded-full"></div> Income
          </span>
          <div className="relative inline-block w-28">
            <select className="block appearance-none w-full bg-darkPurple border border-gray-500 text-gray-300 py-2 px-3 pr-8 rounded-xl leading-tight focus:outline-none focus:border-gray-400">
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.5 7l4.5 4.5L14.5 7H5.5z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-darkPurple p-4">
        <div className="flex overflow-x-auto">
          <div
            className="mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex"
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisLabels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>

          <div className="flex items-end justify-evenly w-full">
            {revenue.map((month) => (
              <div
                key={month.month}
                className="flex flex-col items-center gap-0"
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
    </div>
  );
}
