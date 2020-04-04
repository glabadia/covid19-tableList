import React, { useEffect, useState } from "react";
import { url, getCountries, filteredCountries } from "../utils/getCountries";

export default function GetCountriesComponent() {
  const [countries, setCountries] = useState([]);
  const [status, setStatus] = useState("idle");

  // useEffect(() => {
  //   setStatus("pending");
  //   (async function getData() {
  //     const response = await getCountries();
  //     const result = filteredCountries(response);
  //     setCountries(result);

  //     setStatus("resolved");
  //     console.log(countries);
  //   })();
  // }, []); // DONT REMOVE!

  useEffect(() => {
    setStatus("pending");
    (async function getData() {
      const response = await getCountries();
      const result = filteredCountries(response);

      const newCountries = await result.map(async (item, idx) => {
        var fetchURL = url(item["iso3"]);
        var fetchCountryData = await fetch(fetchURL);
        var result = await fetchCountryData.json();
        if (!result.error) {
          const { confirmed, deaths, recovered, lastUpdate } = result;
          return {
            name: item["name"],
            confirmed: confirmed["value"],
            deaths: deaths["value"],
            recovered: recovered["value"],
            lastUpdate
          };
        }
      });

      let data = await Promise.all(newCountries);
      console.log(data);
      data = data.filter(data => data !== undefined);

      const dataCountries = data.reduce((total, item) => {
        return {
          confirmed: total.confirmed + item.confirmed,
          deaths: total.deaths + item.deaths,
          recovered: total.recovered + item.recovered
        };
      });

      setCountries(dataCountries);
      setStatus("resolved");
    })();
  }, []);

  if (status === "idle") return <p>Welcome</p>;
  if (status === "pending") return <p>Loading...</p>;
  if (status === "resolved")
    return (
      <div className="App">
        <pre>{JSON.stringify(countries, null, 2)}</pre>
      </div>
    );
}
