import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const UserId = ({ users }) => {
  return (
    <>
      <Link to={"/userInfo"}>
        <>{users}</>
      </Link>
    </>
  )
}

UserId.propTypes = {
  users: PropTypes.string.isRequired
}

export default UserId
