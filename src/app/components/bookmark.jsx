import React from "react"
import PropTypes from "prop-types"

const Bookmark = (props) => {
  return (
    <button
      className={
        "btn btn-sm btn-danger " +
        (props.bookmark ? "bi bi-heart-fill" : "bi bi-heart")
      }
      onClick={() => props.handleToggleBookMark(props.id)}
    ></button>
  )
}

Bookmark.propTypes = {
  bookmark: PropTypes.bool.isRequired,
  handleToggleBookMark: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
}

export default Bookmark
