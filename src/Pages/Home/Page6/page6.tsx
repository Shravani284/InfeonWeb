import React, { useState } from "react";
import "./page6.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientImg from "../../../assets/Images/ClientImg.png";
import doubleQuotesStart from "../../../assets/Images/doubleQuotes1.png";
import doubleQuotesEnd from "../../../assets/Images/doubleQuotes2.png";
import leftArrow from "../../../assets/Images/reviewArrowLeft.png";
import rightArrow from "../../../assets/Images/reviewArrowRight.png";

const feedbacks = [
  {
    img: { ClientImg },
    name: "Abhishek Purane",
    role: "Founder of AP Designs",
    feedback:
      "You'll get the best of what you put in. The team is working at their best to provide us variety of solutions & ideas. Had a great experience working with them. Thanks a lot.",
    avatar: "avatar.jpg",
  },
  {
    img: { ClientImg },
    name: "Abhishek Purane2",
    role: "Founder of AP Designs",
    feedback:
      "You'll get the best of what you put in. The team is working at their best to provide us variety of solutions & ideas. Had a great experience working with them. Thanks a lot.",
    avatar: "avatar.jpg",
  },
];

const Page6 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentFeedback = feedbacks[currentIndex];

  return (
    <>
      <div className="container containerP6">
        <div className="pageHeader">
          <div>What our client says</div>
          <div className="horizontalLine6"> </div>
          <div className="p6Title">
            Client <span className="spanCSS">Feedbacks</span>
          </div>
          <div className="p6Tagline">
            Our client send us bunch of smiles with our services and we love
            them
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <div style={{ display: "flex" }}> */}
          <div style={{ display: "flex" }}>
            <button className="prevArrow" onClick={handlePrevClick}>
              <img src={leftArrow} />
            </button>
            <div>
              <img src={ClientImg} className="clientImg" />
              <div className="clientName">{currentFeedback.name}</div>
              <div className="clientRole">{currentFeedback.role}</div>
              <div className="clientReview">
                <div className="doubleQuotesStart">
                  <img src={doubleQuotesStart} />
                </div>
                {currentFeedback.feedback}
                <div className="doubleQuotesEnd">
                  <img src={doubleQuotesEnd} />
                </div>
              </div>
            </div>
            <button className="nextArrow" onClick={handleNextClick}>
              <img src={rightArrow} />
            </button>
          </div>
          {/* </div> */}
          {/* <Slider {...settings}>
                {arr.map((item: any) => {
                  return (
                    <div>
                      <h1>{item}</h1>
                    </div>
                  );
                })}
              </Slider>*/}
        </div>
      </div>
    </>
  );
};

export default Page6;
