import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./style/style.css";
import { Data } from "../../data/Data";

const NavBar = () => {
  const [switcher, setSwitcher] = useState(true);

  // 2- state will go to side one and display the list if it's true

  // This state is to change color of nav bar on scrolling.
  const [navBar, setNavBar] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 80) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  // Getting a random elements
  const rand = Math.floor(Math.random() * Math.floor(Data.length));

  return (
    <section className={navBar ? "header active" : "header"} id="header">
      <div className="container">
        <div className="img-container">
          <img src={require("../../Images/eth.png")} alt="" />
        </div>
        <ul id="quickAccess">
          <li>
            <a href="/#"> {Data[rand - 12].FIELD1}</a>
          </li>
          <li>
            <a href="/#"> {Data[rand - 4].FIELD1}</a>
          </li>
          <li>
            <a href="/#"> {Data[rand - 1].FIELD1}</a>
          </li>
          <li>
            <a href="/#"> {Data[rand - 2].FIELD1}</a>
          </li>
        </ul>

        <div className="leftSide">
          <div className="img_profile">
            <div className="imgContainer">
              <img src={require("../../Images/profile.jpg")} alt="" />
            </div>
            <a
              href="/#"
              className="profile"
              onClick={() => {
                setSwitcher(!switcher);
              }}
            >
              {Data[rand].FIELD1} <FontAwesomeIcon icon={faArrowDown} />
            </a>
            <ul className={switcher ? "profileList" : "profileList activeShow"}>
              <li>
                {" "}
                <a href="/#">Sign out</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
