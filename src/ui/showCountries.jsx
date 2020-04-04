import React, { useEffect, useState } from "react";
// import GetWorldTotals from "../logic/GetWorldTotals";
import GetAllCountryData from "../logic/GetAllCountryData";

const ShowCountries = () => {
  const { status, countries, count } = GetAllCountryData();
  // const [countries, setCountries] = useState([]);
  const tablehead = [
    { id: 1, label: "Country" },
    { id: 2, label: "Confirmed" },
    { id: 3, label: "Deaths" },
    { id: 4, label: "Recovered" }
  ];

  const tablebody = [
    { label: "name" },
    { label: "confirmed" },
    { label: "deaths" },
    { label: "recovered" }
  ];

  // useEffect(() => {},[]);
  console.log(status);

  if (status === "idle") return <p>Initializing...</p>;
  if (status === "pending") return <p>Loading...</p>;

  if (status === "resolved")
    return (
      <>
        <table>
          <thead>
            <tr>
              {tablehead.map(head => (
                <th key={head.id}>{head.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {countries.map(country => (
              <tr key={country.iso3}>
                {tablebody.map(data => (
                  <td key={`${country.iso}-${data.label}`}>
                    {country[data.label]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {/* <pre>{JSON.stringify(countries, null, 2)}</pre> */}
      </>
    );
};

export default ShowCountries;
