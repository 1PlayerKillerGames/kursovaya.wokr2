import React from 'react'
import Bookmark from './bookmark'
import Qualiti from './qualitie'

const User = (props) => {
  return (
    <tr key={props._id}>
      <td>{props.name}</td>
      <td>
        {props.qualities.map((qualiti, key) => {
          return <Qualiti key={key} color={qualiti.color} name={qualiti.name} />
        })}
      </td>
      <td>{props.profession.name}</td>
      <td>{props.completedMeetings}</td>
      <td>{props.rate}/5</td>
      <td>
        <Bookmark
          bookmark={props.bookmark}
          id={props._id}
          handleToggleBookMark={props.handleToggleBookMark}
        />
      </td>
      <td>
        <button
          onClick={() => props.handleDeleteUser(props._id)}
          className="btn btn-danger btn-sm m-1"
        >
          delete
        </button>
      </td>
    </tr>
  )
}

export default User
