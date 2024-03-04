import React from "react";
import "./news.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const newsData = [
  {
    id: "0",
    name: "Sports News",
    desc: "Read about the latest sports updates.",
  },
  {
    id: "1",
    name: "Technology News",
    desc: "Stay updated with the latest in technology.",
  },
  {
    id: "2",
    name: "Business News",
    desc: "Get insights into the world of business and finance.",
  },
  {
    id: "3",
    name: "Entertainment News",
    desc: "Discover the latest in movies, music, and more.",
  },
  {
    id: "4",
    name: "Health News",
    desc: "Learn about health trends and medical breakthroughs.",
  },
  {
    id: "5",
    name: "Science News",
    desc: "Explore the wonders of scientific discoveries.",
  },
  {
    id: "6",
    name: "Travel News",
    desc: "Find out about travel destinations and tips for your next trip.",
  },
  {
    id: "7",
    name: "Fashion News",
    desc: "Stay fashionable with the latest trends and style tips.",
  },
  {
    id: "8",
    name: "Food News",
    desc: "Discover new recipes and culinary delights.",
  },
  {
    id: "9",
    name: "Environment News",
    desc: "Stay informed about environmental issues and conservation efforts.",
  },
];

function News() {
  const { t } = useTranslation();

  return (
    <section className="container-fluid">
      <h2 className="header-title">{t("news")}</h2>
      <div className="card-container">
        {newsData.map((newItem) => (
          <Link to={`/news/${newItem.id}`} state={newItem} key={newItem.id}>
            <div className="card">
              <h3>{newItem.name}</h3>
              <p>{newItem.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default News;
