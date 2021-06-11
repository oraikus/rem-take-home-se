import React, { useEffect, useState, useFilters, useSortBy } from "react";
import { useTable, column } from "react-table";

export default function Table({ columns, data }) {
  // Create a state
  const [filterInput, setFilterInput] = useState("");

  // Update the state when input changes
  const handleFilterChange = e => {
    const value = e.target.value || undefined;
    setFilter("show.name", value); // Update the show.name filter. Now our table will filter and show only the rows which have a matching value
    setFilterInput(value);
  };

  // Input element
  <input
    value={filterInput}
    onChange={handleFilterChange}
    placeholder={"Search name"}
  />

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter
  } = useTable(
    {
      columns,
      data
    },
    useFilters,
    useSortBy // This plugin Hook will help to sort our table columns
  );

  // Table header styling and props to allow sorting

  <th
    {...column.getHeaderProps(column.getSortByToggleProps())}
    className={
      column.isSorted
        ? column.isSortedDesc
          ? "sort-desc"
          : "sort-asc"
        : ""
    }
  >
    {column.render("Header")}
  </th>

  /* 
    Render the UI for your table
    - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically
  */
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}