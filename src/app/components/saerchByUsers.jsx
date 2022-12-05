import React from "react"
import PropTypes from "prop-types"

const SearchByUsers = ({ onChange }) => {
  return (
    <nav className="navbar bg-light">
      <div className="d-flex" role="search">
        <form className="search__form">
          <input
            type="search"
            className="form-control me-2"
            placeholder="Search..."
            aria-label="Search"
            onChange={(e) => onChange(e.target.value)}
          />
        </form>
      </div>
    </nav>
  )
}

SearchByUsers.propTypes = {
  onChange: PropTypes.func
}

export default SearchByUsers
