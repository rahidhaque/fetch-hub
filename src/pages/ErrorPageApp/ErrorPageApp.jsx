import React from "react";
import appError from "../../assets/App-Error.png";
import { Link } from "react-router";

const ErrorPageApp = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-3 mt-8">
        <img src={appError} alt="App Error" className="w-96" />
        <div className="flex flex-col justify-center mt-4">
            <div className="space-y-2">
                <h1 className="text-xl font-semibold text-center">OPPS!! APPS NOT FOUND</h1>
                <p className="text-gray-500">The app you are looking for does not exist. Please look for another app.</p>
            </div>
          <Link
            to={"/apps"}
            className="btn px-5 py-5 text-white hover:shadow-2xl bg-linear-to-r/srgb to-[#632EE3] from-[#9F62F2] mt-8"
          >
            Go Back!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPageApp;
