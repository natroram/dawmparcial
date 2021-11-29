import React from "react";
import { About } from "../../components/about";
import { Gallery } from "../../components/gallery";
import JsonData from "../../data/data.json";
import { useState, useEffect } from "react";
import Intro from "../../components/Intro";

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div id="home">
      <Intro data={landingPageData.Header}></Intro>
      <About data={landingPageData.About} />
      <Gallery data={landingPageData.Gallery} />
    </div>
  );
};

export default Home;
