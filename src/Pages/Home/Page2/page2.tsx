import React from "react";
import "./page2.css";
import PrimaryButton from "../../../Components/Button/primaryButton";
import MobIcon from "../../../assets/Images/MobAppIcon.png";
import WebAppIcon from "../../../assets/Images/WebAppIcon.png";
import UiUxLogo from "../../../assets/Images/UIUXDesIcon.png";
import IOTLogo from "../../../assets/Images/IOTIcon.png";
import DigitalSolutionsLogo from "../../../assets/Images/DigiSolIcon.png";
import CloudLogo from "../../../assets/Images/CloudIcon.png";
import EllipseImg from "../../../assets/Images/Ellipse 1197.png";
import { Grid } from "@mui/material";
interface PageProps {
  id: string;
  className: string;
}
const Page2 = ({ id, className }: any) => {
  const serviceArr = [
    { img: MobIcon, title: "Mobile app development" },
    { img: WebAppIcon, title: "Web app development" },
    { img: UiUxLogo, title: "UI UX Designing" },
    { img: IOTLogo, title: "Internet of things" },
    { img: DigitalSolutionsLogo, title: "Digital Solutions" },
    { img: CloudLogo, title: "Cloud Services" },
  ];
  return (
    <>
      <div id={id} className={`container page2 ${className}`}>
        <div className="EllipseImg">
          <img src={EllipseImg} alt="Ellipse" />
        </div>
        <div className="servicesText">
          <div className="servicesTitle">
            We Build world class digital products
          </div>
          <div className="horizontalLine"> </div>
          <div className="servHeader">
            Exclusive{" "}
            <span
              className="spanCSS"
              style={{ fontWeight: "bold", color: "#0D3EFB" }}
            >
              Mobile app & web app
            </span>{" "}
            <br />
            development company
          </div>
          <div style={{ fontSize: "16px", color: "#bcbcbc" }}>
            Our complete spectrum of mobile app development and web solutions
            help startups, small-medium enterprises, and organizations <br /> to
            create outcome-focused solutions with enhanced agility that help
            them to rapidly reshape, renew and build new capabilities for their
            business.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Grid container className="serviceListBox">
            {serviceArr.map((item, index) => (
              <div key={index} className="servicesList">
                <div>
                  <img src={item.img} alt={item.title} />
                </div>
                <div>{item.title}</div>
              </div>
            ))}
          </Grid>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <PrimaryButton label={"VIEW ALL SERVICES"} />
        </div>
      </div>
    </>
  );
};

export default Page2;
