import React from "react";
import Banner from "../Components/Home/Banner/Banner";
import CollectionBox from "../Components/Home/Collection/CollectionBox";
import Services from "../Components/Home/Services/Services";
import Instagram from "../Components/Home/Insragram/Instagram";
import Trendy from "../Components/Home/Trendy/Trendy";
import LimitedEdition from "../Components/Home/Limited/LimitedEdition";

const Home = () => {
  return (
    <div>
      <CollectionBox />
      <Trendy />
      <Banner />
      <LimitedEdition />
      <Instagram />
      <Services />
    </div>
  );
};

export default Home;
