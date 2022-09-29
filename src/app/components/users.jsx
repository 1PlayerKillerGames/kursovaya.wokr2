import React, { useState } from "react"
import Pagination from "./pagination"
import User from "./user"
import PropTypes from "prop-types"

const Users = (props) => {
  const count = props.users.length
  const pageSize = 4
  const [currentPage, setCurrentPage] = useState(1)
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize
    return [...items].splice(startIndex, pageSize)
  }

  const userCrop = paginate(props.users, currentPage, pageSize)

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился раз</th>
            <th scope="col">Оценка</th>
            <th scope="col">Избранное</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {userCrop.map((item) => {
            return (
              <User
                key={item._id}
                {...item}
                handleDeleteUser={props.handleDeleteUser}
                handleToggleBookMark={props.handleToggleBookMark}
              />
            )
          })}
        </tbody>
      </table>

      <Pagination
        itemCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  )
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  handleDeleteUser: PropTypes.func.isRequired,
  handleToggleBookMark: PropTypes.func.isRequired
}

export default Users
