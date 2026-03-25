import React, { useState } from "react";
import { useLoaderData } from "react-router";
import App from "../../components/App/App";

const Apps = () => {
  const apps = useLoaderData();

  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredApps = apps.filter((app) =>
    app.title?.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="mt-8 max-w-7xl mx-auto px-4 py-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-extrabold text-center">
          Our All Applications
        </h1>
        <p className="text-center text-gray-500 mt-4">
          Explore All Apps on the Market developed by us. We code for Millions.
        </p>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div>
          <p className="underline font-extrabold">({apps.length}) Apps Found</p>
        </div>
        <div>
          <label className="input input-primary">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              onChange={handleSearchChange}
              type="search"
              placeholder="Search Apps"
            />
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {filteredApps.map((app) => (
          <App key={app.id} app={app}></App>
        ))}
      </div>
    </div>
  );
};

export default Apps;
