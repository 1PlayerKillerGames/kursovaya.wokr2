import React from "react"
import PropTypes from "prop-types"
import TableBody from "./tableBody"
import TableHeader from "./tableHeader"

const Table = ({
  onSort,
  selectedSort,
  columns,
  data,
  children,
  currentPath
}) => {
  return (
    <table className="table">
      {children || (
        <>
          <TableHeader {...{ onSort, selectedSort, columns, currentPath }} />
          <TableBody {...{ columns, data }} />
        </>
      )}
    </table>
  )
}

Table.propTypes = {
  onSort: PropTypes.func,
  selectedSort: PropTypes.object,
  columns: PropTypes.object,
  data: PropTypes.array,
  children: PropTypes.array,
  currentPath: PropTypes.string
}

export default Table
