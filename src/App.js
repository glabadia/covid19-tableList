import React from "react";
import "./styles.css";
import GetCountriesComponent from "./components/GetCountriesComponent";
import GetWorldTotals from "./logic/GetWorldTotals";
import GetAllCountryData from "./logic/GetAllCountryData";
import ShowCountries from "./ui/showCountries";
import ShowTotalCount from "./ui/showTotalCount";

export default function App() {
  return (
    <>
      {/* <GetWorldTotals /> */}
      {/* <GetAllCountryData /> */}
      {/* <GetCountriesComponent /> */}
      <ShowTotalCount />
      <ShowCountries />
    </>
  );
}
