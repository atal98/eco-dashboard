import React from "react";
import "./sidebar.scss";
import logo from "../../Assets/logo3.png";
import { IoMdSpeedometer } from "react-icons/io";
import {
  MdDeliveryDining,
  MdOutlineExplore,
  MdOutlinePermContactCalendar,
} from "react-icons/md";
import { BsTrophy, BsCreditCard2Front, BsQuestionCircle } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="logoDiv flex">
        <img src={logo} alt="logo" />
        <h2>Planti.</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">QUICK MENU</h3>

        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <IoMdSpeedometer className="icon" />
              <span className="smallText">Dashboard</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdDeliveryDining className="icon" />
              <span className="smallText">My orders</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlineExplore className="icon" />
              <span className="smallText">Explore</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BsTrophy className="icon" />
              <span className="smallText">Products</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">SETTIHNGS</h3>

        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className="settingsLink flex">
              <AiOutlinePieChart className="icon" />
              <span className="smallText">Charts</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="settingsLink flex">
              <BiTrendingUp className="icon" />
              <span className="smallText">Trends</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="settingsLink flex">
              <MdOutlinePermContactCalendar className="icon" />
              <span className="smallText">Calender</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="settingsLink flex">
              <BsCreditCard2Front className="icon" />
              <span className="smallText">Billings</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="sidebarCard">
        <BsQuestionCircle className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Help Center</h3>
          <p>
            Having Trouble in Planti. , please contact us from for more
            questions.
          </p>

          <button className="btn">Go to Help Center</button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
