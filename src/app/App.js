import React, { useState, useEffect } from "react"
import Users from "./components/users"

import api from "./api"

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data))
  }, [])

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
    <div>
      <Users
        users={users}
        handleDeleteUser={handleDeleteUser}
        handleToggleBookMark={handleToggleBookMark}
      />
    </div>
  )
}

export default App
