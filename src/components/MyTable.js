/** @jsx jsx */
import {css, jsx} from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';

import {DataContext} from '../utils/DataContext';

const MyTable = props => {
  // In this case, data could've been passed via props from the <MainComponent>,
  // but in a larger example, it can be helpful to use the Context API to load
  // data in multiple components without prop drilling.

  // DataContext was populated by the <DataProvider> in index.js
  const {value: data} = React.useContext(DataContext);

  const {fields, tables, style} = data;
  const allFields = fields.dimID.concat(fields.metricID);

  // Use default value as an initial backup
  const cellBackgroundColor =
    style.cellBackgroundColor.value || style.cellBackgroundColor.defaultValue;

  const tableStyle = css`
    padding: 10px;
    background: ${cellBackgroundColor.color};
  `;

  const getRow = tableRow => {
    const allColumns = tableRow.dimID.concat(tableRow.metricID);
    return allColumns.map((x, i) => (
      <td css={tableStyle} key={i}>
        {x}
      </td>
    ));
  };

  return (
    <table>
      <thead>
        <tr>
          {allFields.map(field => (
            <th key={field.id}>{field.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tables.DEFAULT.map((row, i) => (
          <tr key={i}>{getRow(row)}</tr>
        ))}
      </tbody>
    </table>
  );
};

MyTable.propTypes = {};

export default MyTable;
