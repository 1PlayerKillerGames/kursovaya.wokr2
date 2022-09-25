import React from 'react'

const Bookmark = (props) => {
  return (
    <button
      className={
        'btn btn-sm btn-danger ' +
        (props.bookmark ? 'bi bi-heart-fill' : 'bi bi-heart')
      }
      onClick={() => props.handleToggleBookMark(props.id)}
    ></button>
  )
}

export default Bookmark
