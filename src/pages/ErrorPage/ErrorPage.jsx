import React from "react";
import errorImg from "../../assets/error-404.png";
import { Link } from "react-router";
import Navbar from "../../components/Header/Navbar";

const ErrorPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center gap-3 mt-8">
        <img src={errorImg} alt="Error 404" className="w-96" />
        <div className="flex justify-center">
          <Link
            to={"/"}
            className="btn px-5 py-5 text-white hover:shadow-2xl bg-linear-to-r/srgb to-[#632EE3] from-[#9F62F2] mt-8"
          >
            Go Back!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
