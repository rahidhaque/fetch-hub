import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApps, removeFromStoredDB } from "../../utilities/addToDB";
import { PiDownloadSimple } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

const InstalledAps = () => {
  const apps = useLoaderData();
  const [myApps, setMyApps] = useState([]);
  const downloadFormatter = Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  });

  useEffect(() => {
    const storedApps = getStoredApps();
    const installedApps = apps.filter((app) => storedApps.includes(app.id));
    setMyApps(installedApps);
  }, [apps]);

  const handleUninstall = (id) => {
    removeFromStoredDB(id);
    const remainingApps = myApps.filter((app) => app.id !== id);
    setMyApps(remainingApps);
    toast.success("App uninstalled successfully!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleSort = (type) => {
    const sortedApps = [...myApps].sort((a, b) => {
      if (type === "asc") {
        return a.size - b.size;
      } else {
        return b.size - a.size;
      }
    });
    setMyApps(sortedApps);
  };

  return (
    <div className="mt-8 max-w-7xl mx-auto px-4 py-8">
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center">
          Your Installed Apps
        </h1>
        <p className="text-center text-gray-500 mt-4">
          Explore All Your Installed Apps on the Market developed by us.
        </p>
      </div>

      <div className="mt-8">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <p className="underline font-extrabold">
            {myApps.length} Apps Installed
          </p>

          <details className="dropdown">
            <summary className="btn">Sort by Size</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-52 p-2 shadow">
              <li>
                <a onClick={() => handleSort("asc")}>Low-High</a>
              </li>
              <li>
                <a onClick={() => handleSort("desc")}>High-Low</a>
              </li>
            </ul>
          </details>
        </div>

        {myApps.length > 0 ? (
          <ul className="grid grid-cols-1 gap-6 mt-6">
            {myApps.map((app) => (
              <li key={app.id} className="rounded-lg p-4 shadow">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <div className="flex flex-col items-center sm:flex-row gap-4 sm:gap-6 sm:items-center">
                    <img
                      className="h-[60px] w-[60px] sm:h-[85px] sm:w-[85px] rounded-2xl"
                      src={app.image}
                      alt={app.title}
                    />

                    <div className="text-center sm:text-left">
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                        {app.title}
                      </h2>

                      <div className="flex flex-wrap gap-3 sm:gap-6 text-sm sm:text-base mt-2 justify-center sm:justify-start">
                        <div className="text-[#00D390] flex items-center gap-1">
                          <PiDownloadSimple />
                          <span>
                            {downloadFormatter.format(app.downloads)}
                          </span>
                        </div>

                        <div className="flex items-center text-[#FF8811] font-bold space-x-1">
                          <FaStar />
                          <span>{app.ratingAvg}</span>
                        </div>

                        <span className="text-[#627382]">
                          {app.size} MB
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleUninstall(app.id)}
                    className="btn btn-success text-white w-full md:w-auto"
                  >
                    Uninstall
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500 mt-6">
            You have not installed any apps yet. Please install some apps to see them here.
          </p>
        )}
      </div>
    </div>
  );
};

export default InstalledAps;