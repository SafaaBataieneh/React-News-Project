import React from "react";
import "./projects.css";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <section className="container-fluid">
      <h2 className="header-title">{t("projects")}</h2>
    </section>
  );
}

export default Projects;
