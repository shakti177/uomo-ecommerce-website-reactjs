import React from "react";
import Banner from "../Components/Home/Banner/Banner";
import CollectionBox from "../Components/Home/Collection/CollectionBox";
import Services from "../Components/Home/Services/Services";
import Instagram from "../Components/Home/Instagram/Instagram";
import Trendy from "../Components/Home/Trendy/Trendy";
import LimitedEdition from "../Components/Home/Limited/LimitedEdition";
import DealTimer from "../Components/Home/Deal/DealTimer";
import HeroSection from "../Components/Home/Hero/HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <CollectionBox />
      <Trendy />
      <DealTimer />
      <Banner />
      <LimitedEdition />
      <Instagram />
      <Services />
    </>
  );
};

export default Home;
