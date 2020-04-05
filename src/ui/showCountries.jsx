import React, { useState, useEffect } from "react";
import _ from "lodash";

import GetAllCountryData from "../logic/GetAllCountryData";
import TableHeader from "../reusable/tableHeader";
import TableBody from "../reusable/tableBody";

const ShowCountries = () => {
  const { status, countries, count } = GetAllCountryData();
  const [alteredCountries, setAlteredCountries] = useState(countries);
  const [sortColumn, setSortColumn] = useState({
    path: "name",
    order: "asc"
  });

  const tableInfo = [
    { id: 1, title: "Country", path: "name" },
    { id: 2, title: "Confirmed", path: "confirmed" },
    { id: 3, title: "Deaths", path: "deaths" },
    { id: 4, title: "Recovered", path: "recovered" },
    {
      id: 5,
      title: "Last Updated",
      path: "lastUpdate",
      content: time => new Date(time).toLocaleString() //toLocaleTimeString()
    }
  ];

  useEffect(() => {
    const sorted = _.orderBy(
      countries,
      [_.get(sortColumn, "path")],
      [_.get(sortColumn, "order")]
    );

    setAlteredCountries(sorted);
  }, [sortColumn, countries]);

  if (status === "idle") return <p>Initializing...</p>;
  if (status === "pending") return <p>Loading...</p>;

  if (status === "resolved") {
    return (
      <>
        <table className="table table-striped table-sm">
          <TableHeader
            columnNames={tableInfo}
            id="id"
            title="title"
            path="path"
            sortColumn={sortColumn}
            handleSort={setSortColumn}
          />
          <TableBody
            rowData={alteredCountries}
            cellData={tableInfo}
            rowKey="iso3"
            cellKey="path"
          />
        </table>
      </>
    );
  }
};

export default ShowCountries;

/* <tbody>
            {countries.map(country => (
              <tr key={country.iso3}>
                {tablebody.map(data => (
                  <td key={`${country.iso}-${data.label}`}>
                    {country[data.label]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody> */
