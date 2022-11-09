import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const UserId = ({ users, userId, users1 }) => {
  // console.log(users1)
  // console.log(userId)

  const getUserById = (id) => {
    return users1.find((user) => user._id === id)
  }

  const userIds = getUserById(userId)

  console.log(getUserById(userId))

  return (
    <>
      <Link to={"/userInfo"} userId={userIds}>
        <>{users}</>
      </Link>
    </>
  )
}

UserId.propTypes = {
  users: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  users1: PropTypes.array.isRequired
}

export default UserId
