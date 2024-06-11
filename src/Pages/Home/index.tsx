import React, { useEffect, useState } from "react";
import ReactFullPageScroll from "react-full-page-scroll";
import Page1 from "./Page1/page1";
import Page2 from "./Page2/page2";
import Page3 from "./Page3/page3";
import Page4 from "./Page4/page4";
import Page5 from "./Page5/page5";
import Page6 from "./Page6/page6";
import Page7 from "./Page7/page7";
import Header from "../../Components/Header/Header";
import InfeonHomeImg from "../../assets/Images/infeonhomeimg.png";
import ScrollIndicator from "../../Components/Indicator/scrollIndicator";
import "./index.css";
import Footer from "../../Components/Footer/Footer";

interface PageProps {
  id: string;
  className: string;
}

const HomePageComponent = () => {
  const [activePage, setActivePage] = useState(1);
  // Function to handle scroll to the appropriate section
  const scrollToSection = (pageNumber: number) => {
    const section = document.getElementById(`page${pageNumber}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActivePage(pageNumber);
    }
  };

  // Function to handle scroll event and update activePage state
  // const handleScroll = () => {
  //   const pageSections = document.querySelectorAll(".page-section");
  //   pageSections.forEach((section, index) => {
  //     const rect = section.getBoundingClientRect();
  //     if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
  //       setActivePage(index + 1);
  //     }
  //   });
  // };

  const handleScroll = () => {
    const pageSections = document.querySelectorAll(".page-section");
    pageSections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const threshold = window.innerHeight * 0.5; // Adjust this value as needed
      console.log("helo");
      if (
        rect.top >= -threshold &&
        rect.bottom <= window.innerHeight + threshold
      ) {
        setActivePage(index + 1);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="wrapper">
        {/* <div>
          <Header />
        </div> */}
        {/* <div
        style={{
          textAlign: "center",
          width: "100vw",
        }}
      > */}
        {/* <ReactFullPageScroll> */}
        <div>
          <Page1 id="page1" className="page-section" />
          <Page2 id="page2" className="page-section" />
          <Page3 id="page3" className="page-section" />
          <Page4 id="page4" className="page-section" />
          <Page5 id="page5" className="page-section" />
          <Page6 id="page6" className="page-section" />
          <Page7 id="page7" className="page-section" />
        </div>
        {/* </ReactFullPageScroll> */}
        {/* <ScrollIndicator /> */}
        <Footer />
        {/* </div> */}
        <div className="scroller">
          {[1, 2, 3, 4, 5, 6, 7].map((pageNumber) => (
            <div
              key={pageNumber}
              className={`dot ${activePage === pageNumber ? "active" : ""}`}
              onClick={() => scrollToSection(pageNumber)}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};
export default HomePageComponent;
