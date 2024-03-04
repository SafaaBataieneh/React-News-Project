import React from "react";
import "./home.css";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <section className="container-fluid">
      <h2 className="header-title">{t("home")}</h2>
      
    </section>
  );
}

export default Home;
