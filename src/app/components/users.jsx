import React, { useState, useEffect } from "react"
import Pagination from "./pagination"
import User from "./user"
import PropTypes from "prop-types"
import GroupList from "./groupList"
import api from "../api"
import SearchStatus from "./searchStatus"
import _ from "lodash"

const Users = (props) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [professoins, setProfessions] = useState()
  const [selectedProf, setSelectedProf] = useState()
  const pageSize = 4

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data))
  }, [])
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProf])

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize
    return [...items].splice(startIndex, pageSize)
  }

  const filtredUsers = selectedProf
    ? props.users.filter((user) => _.isEqual(user.profession, selectedProf))
    : props.users

  const count = filtredUsers.length
  const userCrop = paginate(filtredUsers, currentPage, pageSize)

  const handleProfessionSelect = (item) => {
    setSelectedProf(item)
  }

  const clearFilter = () => {
    setSelectedProf()
  }

  return (
    <div className="d-flex">
      {professoins && (
        <div className="d-flex flex-column flex-shrink-0 p-3">
          <GroupList
            selectedItem={selectedProf}
            items={professoins}
            onItemSelect={handleProfessionSelect}
          />
          <button className="btn btn-secondary mt-2" onClick={clearFilter}>
            Очистить
          </button>
        </div>
      )}

      <div className="d-flex flex-column">
        <SearchStatus />
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
        <div className="d-flex justify-content-center">
          <Pagination
            itemCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  )
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  handleDeleteUser: PropTypes.func.isRequired,
  handleToggleBookMark: PropTypes.func.isRequired
}

export default Users
