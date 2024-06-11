import React from "react";
import PrimaryButton from "../../../Components/Button/primaryButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowLeft from "../../../assets/Images/ArrowGrey.png";
import ArrowRight from "../../../assets/Images/ArrowBlue.png";
import "./page4.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../../../assets/Images/Img1.png";
import Img2 from "../../../assets/Images/Img2.png";
import Img3 from "../../../assets/Images/Img3.png";
import Arrow from "../../../assets/Images/arrow.png";
import { Button } from "@mui/material";

const Page4 = () => {
  const recnetWork = [
    { img: Img1, name: "Surselva Landtechnik", industry: "E-commerce" },
    { img: Img2, name: "Surselva Landtechnik", industry: "E-commerce" },
    { img: Img3, name: "Surselva Landtechnik", industry: "E-commerce" },
  ];
  var settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="container">
        <div className="headline">
          <div>When Creative idea meets</div>
          <div className="horizontalLine4"> </div>
        </div>
        <div>
          <div className="carouselTitle">
            Explore our<span className="spanCSS"> Recent Work</span>
          </div>

          <div className="industryListWrapper">
            <div className="carouselNavigators">
              <div style={{ marginRight: "10px" }}>
                <img src={ArrowRight} />
              </div>
              <div>
                <img src={ArrowLeft} />
              </div>
            </div>
            <div className="industryList">
              {/* <Slider {...settings}> */}
              {recnetWork.map((item) => {
                return (
                  <>
                    <div className="industryCards">
                      <div className="imgGradient">
                        <img src={item.img} />
                      </div>
                      <div className="industryNameText">
                        <div className="industryDetails">
                          <div className="indName">{item.name}</div>
                          <div className="indType">{item.industry}</div>
                        </div>
                        <div>
                          <img src={Arrow} />
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
              {/* </Slider> */}
            </div>
          </div>
        </div>
        <div className="btnClass">
          <Button className="page4Btn">
            <div>
              <div>VIEW ALL PROJECTS</div>
              <ChevronRightIcon />
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Page4;
