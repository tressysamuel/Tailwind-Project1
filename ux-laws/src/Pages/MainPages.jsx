import React from "react";
import NavBar from "../Components/NavBar";
import HomePage from "../Components/HomePage";

function MainPage() {
  return (
    <div>
      <NavBar showNav={false} />
      <HomePage />
    </div>
  );
}

export default MainPage;
