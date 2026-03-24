import React from "react";
import { FaStar } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { PiDownloadSimple } from "react-icons/pi";
import { Link } from "react-router";

const Trending = ({ apps }) => {
  const downloadFormatter = Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  });

  return (
    <div className="mt-8 max-w-7xl mx-auto px-4 py-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-extrabold text-center">
          Trending Apps
          <IoMdTrendingUp className="inline-block ml-2 text-primary" />
        </h1>
        <p className="text-center text-gray-500 mt-4">
          Discover the latest and most popular apps in the market.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {apps.slice(0, 8).map((app) => (
          <div
            key={app.id}
            className="card bg-base-100 w-full shadow-sm hover:shadow-md transition"
          >
            <figure className="pt-6">
              <img
                src={app.image}
                alt={app.title}
                className="rounded-xl w-32 h-32 object-contain"
              />
            </figure>

            <div className="card-body text-center px-4">
              <h2 className="card-title justify-center">{app.title}</h2>

              <div className="w-full flex justify-between items-center mt-2">
                <div className="flex items-center text-gray-500 font-bold space-x-1">
                  <PiDownloadSimple className="text-xl" />
                  <span className="text-lg">
                    {downloadFormatter.format(app.downloads)}
                  </span>
                </div>

                <div className="flex items-center text-[#FF8811] font-bold space-x-1">
                  <span className="text-lg">{app.ratingAvg}</span>
                  <FaStar />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link className="btn px-5 py-5 text-white hover:shadow-2xl bg-linear-to-r/srgb to-[#632EE3] from-[#9F62F2] mt-8">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Trending;
