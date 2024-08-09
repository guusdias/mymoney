import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="bg-darkerPurple p-4 bo">
      <div className=" mx-auto flex flex-col md:flex-row justify-evenly items-center">
        <div className="flex items-center">hearder</div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for anything..."
              className="px-9 py-3 rounded-2xl bg-darkPurple text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lightPurple w-96"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <MagnifyingGlassIcon className="w-5 h-5 text-white" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
