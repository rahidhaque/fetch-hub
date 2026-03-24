import React from "react";
import { FaAppStoreIos, FaGooglePlay, FaStar } from "react-icons/fa";
import { Link } from "react-router";
import hero from "../../assets/hero.png";
import { IoDownloadSharp } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="mt-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-extrabold max-w-[597px] mx-auto text-center">
          We Build <br /> <span className="text-[#632EE3]"> Productive </span>
          Apps
        </h2>
        <p className="text-[#627382] max-w-9/12 mx-auto text-center mt-4">
          At FetchHub we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link
            to={"https://play.google.com/store"}
            target="_blank"
            className="btn btn-xl  hover:shadow-xl rounded-xl"
          >
            <FaGooglePlay className="w-10 text-primary" />
            Google Play
          </Link>
          <Link
            to={"https://www.apple.com/app-store/"}
            target="_blank"
            className="btn btn-xl hover:shadow-xl rounded-xl"
          >
            <FaAppStoreIos className="w-10 text-primary" />
            App Store
          </Link>
        </div>
        <div className="flex justify-center mt-5">
          <img src={hero} alt="Hero" />
        </div>
      </div>

      <div className="bg-linear-to-r/srgb to-[#632EE3] from-[#9F62F2] w-full">
        <div class="pt-10 flex flex-col justify-center items-center">
          <h2 class="text-white font-bold text-2xl lg:text-4xl text-center">
            Trusted by Millions, Built for You
          </h2>
          <div class="stats stats-vertical lg:stats-horizontal  text-white py-10">
            <div class="stat space-y-3">
              <div class="stat-figure">
                <IoDownloadSharp className="text-5xl" />
              </div>
              <div class="">Total Downloads</div>
              <div class="stat-value  text-5xl">29.6M</div>
              <div class="stat-desc text-white">21% more than last month</div>
            </div>
            <div class="stat space-y-3">
              <div class="stat-figure ">
                <FaStar className="text-5xl" />
              </div>
              <div class=" text-white">Total Reviews</div>
              <div class="stat-value text-5xl">906K</div>
              <div class="stat-desc text-white">46% more than last month</div>
            </div>
            <div class="stat space-y-3">
              <div class="stat-figure ">
                <FaGooglePlay className="text-5xl" />
              </div>
              <div class="stat-title text-white">Active Apps</div>
              <div class="stat-value text-5xl">132+</div>
              <div class="stat-desc text-white">31 more will Launch</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
