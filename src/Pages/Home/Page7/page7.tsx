import React from "react";
import "./page7.css";
import EZest from "../../../assets/Images/ezest.png";
import Paytm from "../../../assets/Images/Paytm.png";
import Google from "../../../assets/Images/Google.png";
import Accenture from "../../../assets/Images/Accenture.png";
import Amazon from "../../../assets/Images/Amazon.png";
import { Grid, InputLabel, Stack, TextField } from "@mui/material";
import PrimaryButton from "../../../Components/Button/primaryButton";

const Page7 = () => {
  return (
    <>
      <div className="wrapper page7Wrapper">
        <div className="container page7">
          <div className="headlineP7">Do you have any idea in your mind?</div>
          <div className="page7content">
            <div className="contactUsForm">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Stack spacing={1}>
                    <InputLabel className="inputlabel">Name</InputLabel>
                    <TextField
                      className="textField"
                      placeholder="Name"
                      InputProps={{ sx: { borderRadius: 25 } }}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Stack spacing={1}>
                    <InputLabel className="inputlabel">
                      Mobile Number
                    </InputLabel>
                    <TextField
                      placeholder="Phone"
                      InputProps={{ sx: { borderRadius: 25 } }}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Stack spacing={1}>
                    <InputLabel className="inputlabel">Email</InputLabel>
                    <TextField
                      placeholder="Example : abhishek@example.com"
                      InputProps={{ sx: { borderRadius: 25 } }}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Stack spacing={1}>
                    <InputLabel className="inputlabel">Looking for</InputLabel>
                    <TextField
                      placeholder="Example - Ecommerce app"
                      InputProps={{ sx: { borderRadius: 25 } }}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Stack spacing={1}>
                    <InputLabel className="inputlabel">Your message</InputLabel>
                    <TextField
                      rows={4}
                      multiline
                      placeholder="Tell us a little a bit about your requirements"
                      InputProps={{ sx: { borderRadius: "25px" } }}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} className="primBtn">
                  <PrimaryButton label={"SUBMIT"} />
                </Grid>
              </Grid>
            </div>
            <div className="clientAd">
              <div>
                <div className="clientTitle">Clients we cater</div>
                <div className="horizontalLine7"> </div>
                <div>Join hands with us & take off your business</div>
              </div>
              <div className="clientLogos7">
                <div className="clientLogoSection">
                  <img src={EZest} />
                  <img src={Paytm} />
                </div>
                <div style={{ textAlign: "center" }}>
                  <img src={Google} />
                </div>
                <div className="clientLogoSection">
                  <img src={Accenture} />
                  <img src={Amazon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page7;
