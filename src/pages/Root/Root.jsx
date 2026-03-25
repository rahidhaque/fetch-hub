import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../components/Header/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "../../components/Footer/Footer";

const Root = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar></Navbar>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Root;
