// src/Pages/Home/Home.jsx
import React from "react";
// REMOVE: import TopBar from "../../Components/Topbar/TopBar";
// REMOVE: import MainNavbar from "../../Components/Components/MianNavbar/MainNavbar";
// REMOVE: import MainBanner from "../../Components/MainBanner/MainBanner";
// REMOVE: import FidesFooter from "../../Components/FidesFooter/FidesFooter";

import "./Home.css"; // Keep page-specific CSS
import ExpertTeam from "../../Components/ExpertTeam/ExpertTeam";
import Connectwoithus from "../../Components/Connectwithus/Connectwoithus";
import IndustryCardSwipper from "../../Components/IndustryCardSWipper/IndustryCardSwipper";
import OffshoreConsulting from "../../Components/OffshoreConsulting/OffshoreConsulting";
import ConsultingSolutions from "../../Components/ConsutingSolutions/ConsultingSolutions";
import MainBanner from "../../Components/MainBanner/MainBanner";

const Home = () => {
  return (
    <div className="fidespath-home">
      <MainBanner/>
      <div className="fidespath-common-container">
        <OffshoreConsulting />
      </div>
      <div className="fidespath-common-container">
        <ConsultingSolutions />
      </div>
      <IndustryCardSwipper />
      <Connectwoithus />
      <div className="fidespath-common-container">
        <ExpertTeam />
      </div>
    </div>
  );
};

export default Home;