import React, { useEffect } from "react";
import "./style/style.css";
import { Parallax } from "react-scroll-parallax";
import "aos/dist/aos.css";
import Aos from "aos";
import { Data } from "../../data/Data";
const LandingPage = (props) => {
  // For AOS Srolling Effect
  useEffect(() => {
    Aos.init({
      delay: 200,
    });
  }, []);

  const rand = Math.floor(Math.random() * Math.floor(Data.length));

  return (
    <div className={"landing-page-section"}>
      <div className="landing-page-container container">
        {/* =================== */}
        <div className="right-side">
          <Parallax translateY={[-40, 40]} className="bg-food-dots abs">
            <h1
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-offset="530"
            >
              {Data[rand].FIELD1} <br /> {Data[rand].FIELD1} <br />{" "}
              <span>{Data[rand].FIELD1}</span>
            </h1>

            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-offset="400"
            >
              {Data[rand].FIELD2.repeat(3)}
            </p>

            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-offset="330"
              className="checking-btn"
            >
              <a href={"/"}>{Data[rand].FIELD1}</a>
            </div>
          </Parallax>
        </div>
        {/* =================== */}
        {/* =================== */}
        <div className="left-side">
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-offset="400"
            className="img-container"
          >
            <img className="bg-main" src={props.mainImg} alt="" />
          </div>
        </div>
        {/* =================== */}
      </div>
    </div>
  );
};

export default LandingPage;
