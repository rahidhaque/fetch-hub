import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../../components/Header/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "../../components/Footer/Footer";

const Root = () => {
  const navigation = useNavigation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar></Navbar>
      <main className="flex-grow">
        {navigation.state === "loading" ? (
          <div className="flex justify-center items-center h-[60vh]">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Root;
