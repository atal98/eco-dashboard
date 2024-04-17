import React from "react";
import "./listing.scss";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import img from "../../../Assets/img2.png";
import img2 from "../../../Assets/img3.png";
import img3 from "../../../Assets/img4.png";
import img4 from "../../../Assets/img5.png";
import user1 from "../../../Assets/img_4.jpg";
import user2 from "../../../Assets/img_5.jpg";
import user3 from "../../../Assets/img_6.jpg";
import user4 from "../../../Assets/img_7.jpg";

const Listing = () => {
  return (
    <div className="listingSection">
      <div className="heading flex demo">
        <h1>My Listings</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="Annual Vince" />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img2} alt="Succulent plants" />
          <h3>Lush Plants</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img3} alt="Cape Jashmine" />
          <h3>Cape Jasmine</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img4} alt="Indoor Plants" />
          <h3>Indoor Plants</h3>
        </div>
      </div>

      <div className="seller flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user1} alt="User1 Image" />
              <img src={user2} alt="User2 Image" />
              <img src={user3} alt="User3 Image" />
              <img src={user4} alt="User4 Image" />
            </div>

            <div className="cardText">
              <span>
                13.345 Plant Sold <br />
                <small>
                  25 Sellers <span className="date"> 7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user3} alt="User3 Image" />
              <img src={user1} alt="User1 Image" />
              <img src={user4} alt="User4 Image" />
              <img src={user2} alt="User2 Image" />
            </div>

            <div className="cardText">
              <span>
                29,547 Plant Sold <br />
                <small>
                  45 Sellers <span className="date"> 28 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
