import React from "react";
import "./footer.css";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer container-fluid">
      <div>
        <a href="/" className="header-title">
          NEWS
        </a>
        <p className="mt-3 mb-2">{t("links")}:</p>
        <ul>
          <li>
            <a href="/">{t("home")}</a>
          </li>
          <li>
            <a href="/news">{t("news")}</a>
          </li>
          <li>
            <a href="/projects">{t("projects")}</a>
          </li>
        </ul>
      </div>
      <div>
        <p className="mt-3 mb-2">{t("follow-us")}:</p>
        <ul>
          <li>
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-google"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="col-span-2">
        <p>{t("news-desc")}</p>
      </div>
    </footer>
  );
}

export default Footer;
