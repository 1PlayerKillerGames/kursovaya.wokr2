import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import api from "../api"

const userInfo = () => {
  const history = useHistory()
  const allUsers = () => {
    history.push("/users")
  }
  const params = useParams()
  const { userId } = params

  console.log(params)

  const [user, setUser] = useState()
  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data))
  }, [])

  console.log(user)

  return (
    <>
      <h1>info</h1>
      <h1>{userId}</h1>
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

export default userInfo
