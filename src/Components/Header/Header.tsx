import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import InfeonLogo from "../../assets/Images/InfeonLogo.png";
import Infeon from "../../assets/Images/infeon.png";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import "./Header.css";

const Header = () => {
  const headerContents = [
    "Company",
    "Services",
    "Products",
    "Portfolio",
    "Career",
    "Contact Us",
  ];
  return (
    <>
      <AppBar position="static" className="appBar">
        <Container className="headerContainer">
          <Toolbar
            className="toolbar"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <div style={{ display: "flex" }}>
              <img
                loading="lazy"
                src={InfeonLogo}
                alt="InfeonLogo"
                className="logoImg"
              />
            </div>
            <div className="headerNavigators">
              {/* <Box sx={{ flexGrow: 1 }} className="headerNavigators"> */}
              {headerContents.map((item) => {
                return (
                  <>
                    <Button
                      sx={{
                        my: 2,
                        color: "white",
                        fontFamily: "Sofia Pro Regular",
                        fontSize: "14px",
                      }}
                    >
                      {item}
                    </Button>
                  </>
                );
              })}
              {/* </Box> */}
            </div>
            <div className="contactUs">
              {/* <Button className="contactUsEmail"> */}
              <EmailOutlinedIcon className="emailLogo" />
              {/* </Button> */}
              <Button className="contactUsPhNo">
                <CallOutlinedIcon className="phnoLogo" />
                <div>+91 88888 55555</div>
              </Button>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
