import React from "react";
import InfeonLogo2 from "../../assets/Images/infeonLogo2.png";
import { TextField } from "@mui/material";
import PrimaryButton from "../Button/primaryButton";
import "./Footer.css";
import twitter from "../../assets/Images/twitter.png";
import facebook from "../../assets/Images/facebook.png";
import linkedin from "../../assets/Images/in.png";
import instagram from "../../assets/Images/insta.png";
import Ellipse from "../../assets/Images/Ellipse 1197.png";

const Footer = () => {
  return (
    <>
      <div className="footerWrapper">
        <div
          style={{
            position: "absolute",
            right: 0,
            marginTop: "16%",
            marginRight: "35px",
          }}
        >
          <img src={Ellipse} />
        </div>
        <div
          className={"footerContainer"}
          style={{
            margin: "auto",
          }}
        >
          <div
            style={{
              marginTop: "100px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                textAlign: "left",
                width: "276px",
                fontSize: "12px",
                lineHeight: "18px",
                // marginRight: "114px",
              }}
            >
              <img src={InfeonLogo2} style={{ marginBottom: "27px" }} />
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostr ud exercitation ullamco laboris
                nisi ut ali quip ex ea commodo consequat.
              </div>
            </div>

            <div
              style={{
                // marginRight: "90px",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  color: "#031D8E",
                  fontFamily: "Sofia Pro Bold",
                  fontSize: "16px",
                  marginBottom: "32px",
                }}
              >
                Important Links
              </div>
              <ul
                style={{
                  listStyle: "none",
                  fontSize: "13px",
                  lineHeight: "29px",
                }}
              >
                <li>Company</li>
                <li>Services</li>
                <li>Products</li>
                <li>Portfolio</li>
              </ul>
            </div>

            <div
              style={{
                // marginRight: "90px",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  color: "#031D8E",
                  fontFamily: "Sofia Pro Bold",
                  fontSize: "16px",
                  marginBottom: "32px",
                }}
              >
                Resources
              </div>
              <ul
                style={{
                  listStyle: "none",
                  fontSize: "13px",
                  lineHeight: "29px",
                }}
              >
                <li>About us</li>
                <li>Contact us</li>
                <li>Careers</li>
              </ul>
            </div>

            <div
              style={{
                textAlign: "left",
                //  width: "340px"
              }}
            >
              <div
                style={{
                  color: "#031D8E",
                  fontFamily: "Sofia Pro Bold",
                  fontSize: "16px",
                  marginBottom: "32px",
                }}
              >
                Get in Touch
              </div>
              <div style={{ marginBottom: "19px", fontSize: "13px" }}>
                Enter your email and we'll send you more information.
              </div>
              <div
                style={{
                  height: "35px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <TextField
                    placeholder="Your Email"
                    InputProps={{ sx: { borderRadius: 25 }, size: "small" }}
                  />
                </div>
                <PrimaryButton label={"SUBMIT"} style={{ width: "104px" }} />
              </div>
            </div>
          </div>
          <div
            style={{
              width: "15%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "40px",
            }}
          >
            <img src={twitter} />
            <img src={facebook} />
            <img src={linkedin} />
            <img src={instagram} />
          </div>
          <div
            style={{
              marginBottom: "70px",
              display: "flex",
              flexDirection: "row",
              width: "65%",
              justifyContent: "space-between",
              fontWeight: "bold",
            }}
          >
            <div>@ 2021Infeon Tech Private Limited.</div>
            <div>Terms & conditions</div>
            <div>Service policy</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
