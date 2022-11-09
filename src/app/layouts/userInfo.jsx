import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import api from "../api"
import PropTypes from "prop-types"

const userInfo = ({ id }) => {
  const history = useHistory()
  const allUsers = () => {
    history.push("/users")
  }

  const [user, setUser] = useState()
  useEffect(() => {
    api.users.getById().then((data) => setUser(data))
  }, [])

  // const handleInfoUser = (userId) => {
  //   setUser(id === userId)
  // }
  // console.log(handleInfoUser(id))
  console.log(id)
  console.log(user)

  return (
    <>
      <h1>info</h1>
      <h1>{id}</h1>
      <button
        onClick={() => {
          allUsers()
        }}
      >
        Все пользователи
      </button>
    </>
  )
}

userInfo.propTypes = {
  users: PropTypes.string.isRequired
}

export default userInfo
