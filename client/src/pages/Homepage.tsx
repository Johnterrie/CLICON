import React from "react";
import NavBar from "../component/NavBar";
import MainPage from "./MainPage/MainPage";

const Homepage = () => {
  return (
    <div className="max-w-screen max-h-screen font-sans">
      <NavBar />
      <MainPage />
    </div>
  );
};

export default Homepage;
