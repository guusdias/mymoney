import React from "react";
import {
  ArrowDownLeftIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";

interface CardProps {
  type: "income" | "outcome";
  amount: number;
  percentageChange: number;
}

export default function Card({ type, amount, percentageChange }: CardProps) {
  const isIncome = type === "income";
  const color = isIncome ? "#38BDF8" : "#8B5CF6";
  const changeColor = isIncome ? "#02B15A " : "#E41414";
  const bg = isIncome ? "#05994f39" : "#eb001b3d";
  return (
    <div className="bg-darkPurple p-7 flex items-center justify-between rounded-3xl">
      <div className="flex items-center">
        <div
          className="rounded-2xl p-5"
          style={{
            backgroundColor: color,
          }}
        >
          <span>
            {isIncome ? (
              <ArrowDownLeftIcon className="h-5 w-5 text-gray-50" />
            ) : (
              <ArrowUpRightIcon className="h-5 w-5 text-gray-50" />
            )}
          </span>
        </div>
        <div className="ml-5">
          <p className="m-0">{isIncome ? "Total Income" : "Total Outcome"}</p>
          <h2 className="m-0">
            $
            {amount.toLocaleString("en-US", {
              minimumFractionDigits: 3,
              maximumFractionDigits: 3,
            })}
          </h2>
        </div>
      </div>
      <div
        className="text-sm rounded-full p-1 ml-5"
        style={{
          color: changeColor,
          backgroundColor: bg,
        }}
      >
        {percentageChange > 0
          ? `+${percentageChange.toFixed(2)}%`
          : `${percentageChange.toFixed(2)}%`}
      </div>
    </div>
  );
}
