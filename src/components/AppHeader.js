import React from "react";
import logo from "../logo.png";

function AppHeader() {
  return (
    <header className="d-flex justify-content-start align-items-center p-3 mb-2 bg-warning">
      <img src={logo} alt="majalspace" />
      <span className="mx-3 text-primary">Trending Repos</span>
    </header>
  );
}

export default AppHeader;
