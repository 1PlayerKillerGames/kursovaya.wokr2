import React, { useState } from 'react'
import api from '../api'

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())

  const usersLenght = () => {
    const classNamePrimary = 'badge bg-primary m-2'
    const num = users.length
    if (num === 0) {
      return (
        <span className="badge bg-danger m-2">Никто с тобой не тусанёт</span>
      )
    }
    if (num === 1) {
      return (
        <span className={classNamePrimary}>
          {num} человек тусанёт с тобой сегодня
        </span>
      )
    }
    if (num >= 1 && num <= 4) {
      return (
        <span className={classNamePrimary}>
          {num} человека тусанут с тобой сегодня
        </span>
      )
    }
    if (num > 4) {
      return (
        <span className={classNamePrimary}>
          {num} человек тусанут с тобой сегодня
        </span>
      )
    }
  }

  const tableHead = () => {
    return (
      <tr>
        <th scope="col">Имя</th>
        <th scope="col">Качества</th>
        <th scope="col">Профессия</th>
        <th scope="col">Встретился раз</th>
        <th scope="col">Оценка</th>
      </tr>
    )
  }

  const hendleDeleteUser = (id) => {
    setUsers((prevState) => prevState.filter((users) => users._id !== id))
  }

  const renderTableHead = () => {
    return <span>{usersLenght()}</span>
  }

  if (users.length === 0) {
    return renderTableHead()
  }

  return (
    <>
      <span>{renderTableHead()}</span>
      <table className="table">
        <thead>{tableHead()}</thead>
        <tbody>
          {users.map((item) => (
            <tr key={users._id}>
              <td>{item.name}</td>
              <td>
                {item.qualities.map((qualities) => {
                  const colors = qualities.color

                  return (
                    <span className={'badge m-1 bg-' + colors}>
                      {qualities.name}
                    </span>
                  )
                })}
              </td>
              <td>{item.profession.name}</td>
              <td>{item.completedMeetings}</td>
              <td>{item.rate}/5</td>
              <td>
                <button
                  onClick={() => hendleDeleteUser(item._id)}
                  className="btn btn-danger btn-sm m-1"
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Users
