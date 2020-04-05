import React from "react";
import _ from "lodash";

const TableBody = ({ rowData, cellData, rowKey, cellKey }) => {
  const renderContent = (item, column, cellKey) => {
    if (column.content)
      return column.content(_.get(item, _.get(column, cellKey)));
    return _.get(item, _.get(column, cellKey));
  };
  return (
    <tbody>
      {rowData.map(item => (
        <tr key={item[rowKey]}>
          {cellData.map(column => (
            <td key={`${_.get(item, rowKey)}-${_.get(column, cellKey)}`}>
              {renderContent(item, column, cellKey)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
