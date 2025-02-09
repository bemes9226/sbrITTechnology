import React from "react";
import { Header } from "../pages/Header";
import { Footer } from "../pages/Footer";
import { Outlet } from "react-router-dom";

type Props = {};

export const Layout = (props: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow p-4">
      {/* Dynamically render the route content here */}
      <Outlet />
    </main>
    <Footer />
  </div>
  );
};
