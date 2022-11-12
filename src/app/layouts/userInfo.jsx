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

  const [user, setUser] = useState()
  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data))
  }, [])

  // console.log(user)

  const renderUser = () => {
    if (user !== undefined) {
      return Object.values([user]).map((users) => (
        <h3 key={users}>
          <tr>{users.name}</tr>
          <tr>Профессия: {Object.values(users).map((prof) => prof.name)}</tr>
          <tr>
            {Object.values(users).map((qual) =>
              Object.values(qual).map((qual) => (
                <tr key={users.qual} className={"badge m-1 bg-" + qual.color}>
                  {qual.name}
                </tr>
              ))
            )}
          </tr>
          <tr>completed Meetings: {users.completedMeetings}</tr>
          <tr>rate: {users.rate}</tr>
        </h3>
      ))
    }
  }

  return (
    <>
      <h1>Info about user</h1>
      <div>{renderUser()}</div>
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
