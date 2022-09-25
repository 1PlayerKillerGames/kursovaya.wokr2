import React, { useState } from 'react'
import Users from './components/users'
import SearchStatus from './components/searchStatus'
import api from './api'

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll())

  const handleDeleteUser = (id) => {
    setUsers((prevState) => prevState.filter((users) => users._id !== id))
  }

  const handleToggleBookMark = (itemID) => {
    setUsers((prevState) =>
      prevState.map((user) => {
        if (user._id === itemID) {
          user.bookmark = !user.bookmark
        }
        return user
      })
    )
  }

  return (
    <>
      {SearchStatus(users.length)}

      {users.length ? (
        <Users
          users={users}
          handleDeleteUser={handleDeleteUser}
          handleToggleBookMark={handleToggleBookMark}
        />
      ) : (
        ''
      )}
    </>
  )
}

export default App
