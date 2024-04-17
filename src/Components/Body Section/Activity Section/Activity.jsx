import React from "react";
import "./activity.scss";
import { BsArrowRightShort } from "react-icons/bs";
import user1 from "../../../Assets/img_4.jpg";
import user2 from "../../../Assets/img_5.jpg";
import user3 from "../../../Assets/img_6.jpg";
import user4 from "../../../Assets/img_3.png";
import user5 from "../../../Assets/img_5.jpg";
import user6 from "../../../Assets/img_7.jpg";

const Activity = () => {
  return (
    <div className="activitySection">
      <div className="heading flex">
        <h1>Recent Activity</h1>
        <button className="btn flex">
          See All
          <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user1} alt="Customer Image" />

          <div className="customerDetails">
            <span className="name">Alex Dunphy</span>
            <small>Order a new plant</small>
          </div>

          <div className="duration">2 min ago</div>
        </div>

        <div className="singleCustomer flex">
          <img src={user2} alt="Customer Image" />

          <div className="customerDetails">
            <span className="name">Alex Dunphy</span>
            <small>Order a new plant</small>
          </div>

          <div className="duration">2 min ago</div>
        </div>

        <div className="singleCustomer flex">
          <img src={user3} alt="Customer Image" />

          <div className="customerDetails">
            <span className="name">Alex Dunphy</span>
            <small>Order a new plant</small>
          </div>

          <div className="duration">2 min ago</div>
        </div>

        <div className="singleCustomer flex">
          <img src={user4} alt="Customer Image" />

          <div className="customerDetails">
            <span className="name">Alex Dunphy</span>
            <small>Order a new plant</small>
          </div>

          <div className="duration">2 min ago</div>
        </div>

        <div className="singleCustomer flex">
          <img src={user5} alt="Customer Image" />

          <div className="customerDetails">
            <span className="name">Alex Dunphy</span>
            <small>Order a new plant</small>
          </div>

          <div className="duration">2 min ago</div>
        </div>

        <div className="singleCustomer flex">
          <img src={user6} alt="Customer Image" />

          <div className="customerDetails">
            <span className="name">Alex Dunphy</span>
            <small>Order a new plant</small>
          </div>

          <div className="duration">2 min ago</div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
