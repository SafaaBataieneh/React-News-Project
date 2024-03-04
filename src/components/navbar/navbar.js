import React from "react";
import "./navbar.css";
import Select from "react-select";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();

  const options = [
    { value: "en", label: t("english") },
    { value: "ar", label: t("arabic") },
  ];

  const changeLanguage = (selectedOption) => {
    i18n.changeLanguage(selectedOption.value);
    document.body.dir = i18n.dir();
  };

  return (
    <nav className="navbar container-fluid">
      <div className="nav-item">
        <a href="/" className="text-2xl font-bold">NEWS</a>
        <a href="/">{t("home")}</a>
        <a href="/news">{t("news")}</a>
        <a href="/projects">{t("projects")}</a>
      </div>
      <div className="nav-item">
        <a href="#">{t("contact")}</a>
        <a href="#">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="#">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fa fa-google"></i>
        </a>

        <Select
          className="select-container"
          value={options.find((option) => option.value === i18n.language)}
          onChange={changeLanguage}
          options={options}
          defaultValue={options.find(
            (option) => option.value === i18n.language
          )}
        />
      </div>
    </nav>
  );
}

export default Navbar;
