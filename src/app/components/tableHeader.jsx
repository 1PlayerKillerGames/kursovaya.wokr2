import React from "react"
import PropTypes from "prop-types"

const TableHeader = ({ onSort, selectedSort, columns, currentPath }) => {
  const handleSort = (item) => {
    if (selectedSort.path === item) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === "asc" ? "desc" : "asc"
      })
    } else {
      onSort({ path: item, order: "asc" })
    }
    console.log(selectedSort.path)
    console.log(currentPath)
  }

  const arrowSort = (selectedSort, currentPath) => {
    if (selectedSort.path === currentPath) {
      if (selectedSort.order === "asc") {
        return <i className="bi bi-caret-down-fill"></i>
      } else {
        return <i className="bi bi-caret-up-fill"></i>
      }
    }
    return null
  }
  console.log(arrowSort(selectedSort, currentPath))

  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            key={column}
            onClick={
              columns[column].path
                ? () => handleSort(columns[column].path)
                : undefined
            }
            {...{ role: columns[column].path && "button" }}
            scope="col"
          >
            {columns[column].name}
          </th>
        ))}
      </tr>
    </thead>
  )
}

TableHeader.propTypes = {
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired,
  currentPath: PropTypes.string.isRequired
}

export default TableHeader
