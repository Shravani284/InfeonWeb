import React from "react";
import "./page5.css";
import PrimaryButton from "../../../Components/Button/primaryButton";
import { Card } from "@mui/material";
import ClientInteraction from "../../../assets/Images/ClientInteraction.png";
import Consolidation from "../../../assets/Images/Consolidation.png";
import Deliverables from "../../../assets/Images/Deliverables.png";
import Development from "../../../assets/Images/Development.png";

const Page5 = () => {
  return (
    <>
      <div className="wrapper wrapper5">
        <div className="container page5">
          <div style={{ display: "flex", width: "100%" }}>
            <div className="custOnBoarding">
              <div>Our Customer on-boarding Process</div>
              <div className="horizontalLine3"> </div>
              <div className="pg5Title">
                Let’s Step Towards <br />
                <span className="spanBold">Purposeful Relationships</span>
              </div>
              <div className="p5tagline">
                Infeon is your empathetic partner in defining your achievements
                & success. Our streamlined process of customer on-boarding is
                frictionless, diligent, & breeds loyalty. We follow a
                four-pronged process to collaborate with our clients across
                geographical locations. Here’s how we map clients’ on boarding
                journey and key milestones.
              </div>
              <PrimaryButton label={"LET'S WORK TOGETHER"} />
            </div>
            <div className="custOnBoardingCards">
              <Card className="cardCSS lt">
                <div className="iconCss">
                  <img src={ClientInteraction} />
                </div>
                <div className="cardTitle">Client Interaction</div>
                <ul className="subPointsList">
                  <li>Call or Meeting</li>
                  <li>Requirement gathering & Analysis</li>
                  <li> Problem Definition</li>
                </ul>
              </Card>
              <Card className="cardCSS rt">
                <div className="iconCss">
                  <img src={Development} />
                </div>
                <div className="cardTitle">Development</div>
                <ul className="subPointsList">
                  <li>Sprint Planning</li>
                  <li>Agile Development</li>
                  <li>UAT</li>
                </ul>
              </Card>
              <Card className="cardCSS rb">
                <div className="iconCss">
                  <img src={Consolidation} />
                </div>
                <div className="cardTitle">Consolidation</div>
                <ul className="subPointsList">
                  <li>Business Requirement Document</li>
                  <li>Wireframes</li>
                  <li>Fidelity Prototypes</li>
                </ul>
              </Card>
              <Card className="cardCSS lb">
                <div className="iconCss">
                  <img src={Deliverables} />
                </div>
                <div className="cardTitle">Deliverables</div>
                <ul className="subPointsList">
                  <li> A Working System</li>
                  <li>Release documentation</li>
                  <li>Training Sessions</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Page5;
