import React from "react";
import Header from "../Components/Header.jsx";
import { Outlet } from "react-router-dom";

function root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default root;
