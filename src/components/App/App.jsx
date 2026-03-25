import React from "react";
import { FaStar } from "react-icons/fa";
import { PiDownloadSimple } from "react-icons/pi";

const App = ({ app }) => {
  const downloadFormatter = Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  });

  return (
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
  );
};

export default App;
