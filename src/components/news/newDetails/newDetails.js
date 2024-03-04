import React from "react";
import "./newDetails.css";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

function NewDetails() {
  const { t } = useTranslation();
  const { id } = useParams();

  const location = useLocation();
  const newItem = location.state;

  if (newItem) {
    return (
      <section className="container-fluid">
        <h2 className="header-title">
          {t("new-details")} "{id} : {newItem.name}"
        </h2>
        <p>{newItem.desc}</p>
      </section>
    );
  } else {
    return (
      <section className="not-found">
        <h2>{t("no-data-found")} . . .</h2>
      </section>
    );
  }
}

export default NewDetails;
