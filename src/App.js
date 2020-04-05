import React from "react";
import "./styles.css";

import ShowCountries from "./ui/showCountries";
import ShowTotalCount from "./ui/showTotalCount";

export default function App() {
  return (
    <main className="container">
      <ShowTotalCount />
      <ShowCountries />
    </main>
  );
}
