import React from "react";
import { useLoaderData, useParams } from "react-router";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const apps = useLoaderData();
  const downloadFormatter = Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  });

  //     {
  //     "image": "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg",
  //     "title": "Netflix",
  //     "companyName": "Netflix Inc.",
  //     "id": 6,
  //     "description": "Streaming service for movies and TV shows.",
  //     "size": 90,
  //     "reviews": 1800000,
  //     "ratingAvg": 4.3,
  //     "downloads": 1000000000,
  //     "ratings": [
  //       { "name": "1 star", "count": 120000 },
  //       { "name": "2 star", "count": 100000 },
  //       { "name": "3 star", "count": 250000 },
  //       { "name": "4 star", "count": 700000 },
  //       { "name": "5 star", "count": 630000 }
  //     ]
  //   },

  const app = apps.find((app) => app.id === parseInt(id));
  const ratingData = [...app.ratings].reverse();

  return (
    <div className="mt-8 max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row justify-around gap-3 my-3">
        <div>
          <img
            src={app.image}
            className="h-[250px] w-[250px]"
            alt={app.title}
          />
        </div>
        <div className="space-y-3">
          <h2 className="text-3xl font-bold">{app.title}</h2>
          <div className="space-y-3 border-b-2 pb-4 border-primary">
            <small>
              <span className="text-[#627382]">Developed by: </span>
              <span className="text-primary font-medium">
                {app.companyName}
              </span>
            </small>
          </div>
          <div className="stats stats-vertical lg:stats-horizontal shadow">
            <div className="stat">
              <div className="stat-figure">
                <img src={downloadIcon} alt="Downloads" />
              </div>
              <div className="stat-title">Downloads</div>
              <div className="stat-value">
                {downloadFormatter.format(app.downloads)}
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure">
                <img src={ratingIcon} alt="Rating" />
              </div>
              <div className="stat-title">Rating</div>
              <div className="stat-value">{app.ratingAvg.toFixed(1)}</div>
            </div>

            <div className="stat">
              <div className="stat-figure">
                <img src={reviewIcon} alt="Reviews" />
              </div>
              <div className="stat-title">Total Reviews</div>
              <div className="stat-value">{app.reviews.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <h2 className="text-2xl font-extrabold">Ratings</h2>
      <div className="w-full h-[300px] mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={ratingData}
            layout="vertical"
            margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
          >
            <XAxis
              type="number"
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              type="category"
              dataKey="name"
              axisLine={false}
              tickLine={false}
            />
            <Tooltip formatter={(value) => value.toLocaleString()} />
            <Bar dataKey="count" fill="#FF8811" radius={[0, 10, 10, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="divider"></div>
      <div>
         <h2 className="text-2xl font-extrabold my-6">Decription</h2>
         <p className="text-[#627382] font-medium">
            {app.description}
         </p>
      </div>
    </div>
  );
};

export default AppDetails;
