import React from "react";
import "./page3.css";
import { Grid } from "@mui/material";
import CommercialImg from "../../../assets/Images/CommercialImg.png";
interface PageProps {
  id: string;
  className: string;
}

const Page3 = ({ id, className }: any) => {
  return (
    <>
      <div id={id} className={`wrapper wrapper3 ${className}`}>
        <div className={`container page3 ${className}`}>
          <div className="industriesImg">
            <img
              src={CommercialImg}
              style={{ height: "435px" }}
              alt="Commercial"
            />
          </div>
          <div className="content">
            <div className="header">
              <div className="DrivDigiTransf">
                Driving Digital Transformation
              </div>
              <div className="horizontalLine3"> </div>
              <div className="industriesTitle">Industries we serve</div>
              <div className="industriesSubTitle">
                Empowering businesses across verticals by leveraging the power
                of mobility <br />
                that help accelerate innovation, reduce costs and improve
                performance.
              </div>
            </div>
            <div className="industriesList">
              <ol className="two-column-list">
                <li className="action-item">Real estate</li>
                <li className="action-item">Transport & automation</li>
                <li className="action-item">Healthcare & fitness</li>
                <li className="action-item">Social networking</li>
                <li className="action-item">Food & Restaurant</li>
                <li className="action-item">Beauty & wellness</li>
                <li className="action-item">Ecommerce & Retail</li>
                <li className="action-item">On demand solutions</li>
                <li className="action-item">Many more</li>
              </ol>
            </div>
            <div className="expertise">
              <div className="expertiseTitle">Our Expertise</div>
              <div className="expertiseList">
                <ul>
                  <li>Politician management app</li>
                  <li>Task management system apps</li>
                  <li>CRM software solutions</li>
                  <li>Clinical management system</li>
                  <li>Fitness apps</li>
                  <li>EHR and EMR software solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page3;
