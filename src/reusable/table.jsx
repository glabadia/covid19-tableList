import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = ({
  columnNames,
  sortColumn,
  handleSort,
  rowData,
  cellData,
  id,
  title,
  path,
  rowKey,
  cellKey
}) => {
  return (
    <table>
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
  );
};

export default Table;
