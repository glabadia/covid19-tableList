import React from "react";

const TableHeader = ({
  columnNames,
  id,
  title,
  path,
  sortColumn,
  handleSort
}) => {
  const raiseSort = path => {
    const currentColumn = { ...sortColumn };
    if (sortColumn["path"] === path) {
      currentColumn["order"] = sortColumn["order"] === "asc" ? "desc" : "asc";
    } else {
      currentColumn["order"] = "asc";
      currentColumn["path"] = path;
    }

    handleSort(currentColumn);
    // console.log(path);
  };

  const renderSortIcon = column => {
    if (column[path] !== sortColumn[path]) return null;
    if (sortColumn["order"] === "asc") return "▲";
    return "▼";
  };
  return (
    <thead>
      <tr>
        {columnNames.map(column => (
          <th key={column[id]} onClick={() => raiseSort(column[path])}>
            {column[title]} {renderSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
