import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const UserId = ({ users, userId }) => {
  return (
    <>
      <Link to={`/userInfo/${userId}`}>
        <>{users}</>
      </Link>
    </>
  )
}

UserId.propTypes = {
  users: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired
}

export default UserId
