import React from "react";
import { Notification } from "../components/notification";
import { Toast } from "../Toast/Toast";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { About, Services } from "../pages";
import { ImageStore } from "../pages/mageStore";

type Props = {};

export const AppRoute = (props: Props) => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/store" element={<ImageStore />} />
        <Route path="/" element={<Notification />} />
      </Routes>
    </React.Fragment>
  );
};
