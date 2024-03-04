import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Projects from "./components/projects/projects";
import News from "./components/news/news";
import NewDetails from "./components/news/newDetails/newDetails";
import WrongURLPath from "./components/wrongURLPath/wrongURLPath";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route className="h-screen">
          <Route path="/" index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="/news/:id" element={<NewDetails />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<WrongURLPath />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
