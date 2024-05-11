import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import "../public/index.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <div className="container mx-auto w-4/5 lg:w-3/5 text-3xl font-cyberpunk">
      <Header />
    </div>
  </React.StrictMode>
);
