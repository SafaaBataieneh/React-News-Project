import React from "react";
import "./wrongURLPath.css";
import { useTranslation } from "react-i18next";

function WrongURLPath() {
  const { t } = useTranslation();

  return (
    <section className="not-found">
      <h2>{t("wrong-path")} . . .</h2>
    </section>
  );
}

export default WrongURLPath;
