import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApps, removeFromStoredDB } from "../../utilities/addToDB";
import { PiDownloadSimple } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

const InstalledAps = () => {
  const apps = useLoaderData();
  const [myApps, setMyApps] = useState();
  const downloadFormatter = Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  });

  useEffect(() => {
    const storedApps = getStoredApps();
    const installedApps = apps.filter((app) => storedApps.includes(app.id));
    setMyApps(installedApps);
  }, []);

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
        <h1 className="text-4xl font-extrabold text-center">
          Your Installed Apps
        </h1>
        <p className="text-center text-gray-500 mt-4">
          Explore All Your Installed Apps on the Market developed by us.
        </p>
      </div>
      <div className="mt-8">
        <div>
          <div className="flex justify-between items-center">
            <div>
              <p className="underline font-extrabold">
                {myApps?.length || 0} Apps Installed
              </p>
            </div>
            <div>
              <details className="dropdown flex justify-center mb-6">
                <summary className="btn m-1">Sort by Size</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                  <li>
                    <a onClick={() => handleSort("asc")}>Low-High</a>
                  </li>
                  <li>
                    <a onClick={() => handleSort("desc")}>High-Low</a>
                  </li>
                </ul>
              </details>
            </div>
          </div>
          {myApps && myApps.length > 0 ? (
            <div>
              <ul className="grid grid-cols-1 gap-6">
                {myApps.map((app) => (
                  <li key={app.id} className="rounded-lg p-4 shadow">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-6 items-center">
                        <div>
                          <img
                            className="h-[85px] w-[85px] rounded-2xl"
                            src={app.image}
                            alt={app.title}
                          />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold">{app.title}</h2>
                        </div>
                        <div className="flex gap-6">
                          <div className="text-[#00D390]">
                            <PiDownloadSimple className="inline ml-2" />
                            <span>
                              {downloadFormatter.format(app.downloads)}
                            </span>
                          </div>
                          <div>
                            <div className="flex items-center text-[#FF8811] font-bold space-x-1">
                              <FaStar />
                              <span>{app.ratingAvg}</span>
                            </div>
                          </div>
                          <div>
                            <span className="text-[#627382]">
                              {app.size} MB
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <button
                          onClick={() => handleUninstall(app.id)}
                          className="btn btn-success text-white"
                        >
                          Uninstall
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-4">
              You have not installed any apps yet. Please install some apps to
              see them here.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstalledAps;
