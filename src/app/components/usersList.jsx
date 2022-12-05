import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { paginate } from "../utils/paginate"
import Pagination from "./pagination"
import api from "../api"
import GroupList from "./groupList"
import SearchStatus from "./searchStatus"
import _ from "lodash"
import UsersTable from "./usersTable"
import SearchByUsers from "./saerchByUsers"

const UsersList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [professions, setProfession] = useState()
  const [selectedProf, setSelectedProf] = useState()
  const [selectedUserName, setSelectedUserName] = useState("")
  const [sortBy, setSortBy] = useState({ path: "name", order: "desc" })
  const pageSize = 12

  const [users, setUsers] = useState()
  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data))
  }, [])
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId))
  }
  const handleToggleBookMark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark }
        }
        return user
      })
    )
  }

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfession(data))
  }, [])
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProf])

  // const handleProfessionSelect = (item) => {
  //   setSelectedProf(item)
  // }

  const setProfFilter = (profession) => {
    setSelectedProf(profession)
    setSelectedUserName("")
  }

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const handleSort = (item) => {
    setSortBy(item)
  }

  // const filtredUsers = users.filter((user) => {
  //   return user.name.toLowerCase().includes(value.toLowerCase())
  // })

  // console.log(filtredUsers)

  if (users) {
    const filteredUsers = users.filter((user) => {
      if (selectedProf) {
        if (!_.isEqual(user.profession, selectedProf)) {
          return false
        }
      }
      if (selectedUserName) {
        if (!user.name.toLowerCase().includes(selectedUserName.toLowerCase())) {
          return false
        }
      }
      return true
    })

    const count = filteredUsers.length
    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]) // asc, desc
    const usersCrop = paginate(sortedUsers, currentPage, pageSize)

    const clearFilter = () => {
      setSelectedProf()
      setSelectedUserName()
    }
    console.log(selectedProf)

    return (
      <div className="d-flex">
        {professions && (
          <div className="d-flex flex-column flex-shrink-0 p-3">
            <GroupList
              selectedItem={selectedProf}
              items={professions}
              onItemSelect={setProfFilter}
            />
            <button className="btn btn-secondary mt-2" onClick={clearFilter}>
              {" "}
              Очистить
            </button>
          </div>
        )}
        <div className="d-flex flex-column">
          <SearchStatus length={count} />
          <SearchByUsers
            onChange={setSelectedUserName}
            key={selectedProf?.name || ""}
          />
          {count > 0 && (
            <UsersTable
              users={usersCrop}
              onSort={handleSort}
              selectedSort={sortBy}
              onDelete={handleDelete}
              onToggleBookMark={handleToggleBookMark}
            />
          )}
          <div className="d-flex justify-content-center">
            <Pagination
              itemsCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    )
  }
  return "loading..."
}
UsersList.propTypes = {
  users: PropTypes.array
}

export default UsersList
