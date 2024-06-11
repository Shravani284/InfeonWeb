import { Button, Container, Drawer } from "@mui/material";
import "./page1.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomePageBg from "../../../assets/Images/HomePageBg.png";
import Header from "../../../Components/Header/Header";
import EZest from "../../../assets/Images/ezest.png";
import Paytm from "../../../assets/Images/Paytm.png";
import Google from "../../../assets/Images/Google.png";
import Accenture from "../../../assets/Images/Accenture.png";
import Amazon from "../../../assets/Images/Amazon.png";
import PrimaryButton from "../../../Components/Button/primaryButton";
import useWindowSize from "../../../Hooks/useWindowsize";
import { useState } from "react";
interface PageProps {
  id: string;
  className: string;
}
const Page1 = ({ id, className }: any) => {
  const { size } = useWindowSize();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
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
      {size > 768 ? (
        <>
          <div id={id} className={`bgImgContainer ${className}`}>
            <img
              loading="lazy"
              src={HomePageBg}
              alt="BgImg"
              className="bgImg"
            />
          </div>
          <div className={`container ${className}`}>
            <div className={`headercss ${className}`}>
              <Header />
            </div>
            <div className={`pageContainer ${className}`}>
              <div className={`pageContent ${className}`}>
                <h1 className={`pageTitle ${className}`}>
                  The Ultimate Mobile App <br />& Web Solutions For Many Trade
                </h1>
                <div className={`pageTagline ${className}`}>
                  Accelerate your business growth with our customer-led,
                  insights driven and innovative solutions
                </div>
                <PrimaryButton label={"START A PROJECT"} />
                {/* <Button className={`startBtn ${className}`}>
              <div>
                <div>START A PROJECT</div>
                <ChevronRightIcon />
              </div>
            </Button> */}
              </div>
              <div className={`clientLogos ${className}`}>
                <img loading="lazy" src={EZest} alt="BgImg" />
                <img loading="lazy" src={Paytm} alt="BgImg" />
                <img loading="lazy" src={Google} alt="BgImg" />
                <img loading="lazy" src={Accenture} alt="BgImg" />
                <img loading="lazy" src={Amazon} alt="BgImg" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div id={id} className={`bgImgContainer ${className}`}>
            <img
              loading="lazy"
              src={HomePageBg}
              alt="BgImg"
              className="bgImg"
            />
          </div>

          <Button onClick={toggleDrawer(true)}>Open drawer</Button>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {headerContents}
          </Drawer>
          <div className={`container ${className}`}>
            <div className={`headercss ${className}`}>
              <Header />
            </div>
            <div className={`pageContainer ${className}`}>
              <div className={`pageContent ${className}`}>
                <h1 className={`pageTitle ${className}`}>
                  The Ultimate Mobile App <br />& Web Solutions For Many Trade
                </h1>
                <div className={`pageTagline ${className}`}>
                  Accelerate your business growth with our customer-led,
                  insights driven and innovative solutions
                </div>
                <PrimaryButton label={"START A PROJECT"} />
                {/* <Button className={`startBtn ${className}`}>
              <div>
                <div>START A PROJECT</div>
                <ChevronRightIcon />
              </div>
            </Button> */}
              </div>
              <div className={`clientLogos ${className}`}>
                <img loading="lazy" src={EZest} alt="BgImg" />
                <img loading="lazy" src={Paytm} alt="BgImg" />
                <img loading="lazy" src={Google} alt="BgImg" />
                <img loading="lazy" src={Accenture} alt="BgImg" />
                <img loading="lazy" src={Amazon} alt="BgImg" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Page1;
