import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import { useEffect, useState } from "react";

const Layout = () => {
  const [localLang, setLocalLang] = useState("en");
  useEffect(() => {
    const storedLang = localStorage.getItem("language");
    const localeLang = storedLang ? JSON.parse(storedLang) : "en";
    setLocalLang(localeLang);
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
