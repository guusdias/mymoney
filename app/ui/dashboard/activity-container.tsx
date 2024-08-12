"use client";
import { useState } from "react";

export default function ActivityCard() {
  const [selectedPeriod, setSelectedPeriod] = useState<string>("Month");

  return (
    <div className="bg-darkPurple text-white p-6 rounded-3xl w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Activity</h2>
        <select
          className="bg-darkPurple border border-gray-500 text-gray-300 py-1 px-2 rounded-lg"
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
        >
          <option value="Month">Month</option>
          <option value="Week">Week</option>
          <option value="Year">Year</option>
        </select>
      </div>

      {/* Semi-circular Progress Bar */}
      <div className="flex justify-center items-center mb-6">
        <div className="relative">
          <div className="w-40 h-20 overflow-hidden">
            <div className="w-40 h-40 border-8 border-lighterPurple rounded-full border-t-transparent border-r-transparent"></div>
          </div>
          <div className="absolute top-0 left-0 w-40 h-20 overflow-hidden">
            <div className="w-40 h-40 border-8 border-bluePool rounded-full border-t-transparent border-r-transparent"></div>
          </div>
          <div className="absolute inset-0 flex justify-center items-center text-2xl font-bold">
            75%
          </div>
        </div>
      </div>

      {/* Legends */}
      <div className="flex justify-around text-sm mb-6">
        <div className="flex items-center space-x-2">
          <div className="block w-3 h-3 rounded-full bg-lighterPurple"></div>
          <div>
            <p>Daily payment</p>
            <p className="font-bold">55%</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="block w-3 h-3 rounded-full bg-bluePool"></span>
          <div>
            <p>Hobby</p>
            <p className="font-bold">20%</p>
          </div>
        </div>
      </div>

      {/* Button */}
      <button className="w-full bg-darkPurple border border-gray-500 text-white py-2 rounded-lg flex justify-between items-center px-4">
        View all activity
        <span className="text-lg">→</span>
      </button>
    </div>
  );
}
