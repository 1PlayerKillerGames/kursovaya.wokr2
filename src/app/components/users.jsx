import React, { useState } from 'react'
import api from '../api'

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())

  const renderPhrase = (number) => {
    const lastOne = Number(number.toString().slice(-1))
    if (number > 4 && number < 15) return 'человек тусанет'
    if ([2, 3, 4].indexOf(lastOne) >= 0) return 'человека тусанут'
    if (lastOne === 1) return 'человек тусанет'
    return 'человек тусанет'
  }
  const tableHead = () => {
    return (
      <tr>
        <th scope="col">Имя</th>
        <th scope="col">Качества</th>
        <th scope="col">Профессия</th>
        <th scope="col">Встретился раз</th>
        <th scope="col">Оценка</th>
        <th scope="col">Избранное</th>
        <th></th>
      </tr>
    )
  }

  const trueOrFalse = (item) => {
    setUsers((prevState) =>
      prevState.map((user) => {
        if (user._id === item._id) {
          user.bookmark = !user.bookmark
        }
        return user
      })
    )
  }

  const hendleDeleteUser = (id) => {
    setUsers((prevState) => prevState.filter((users) => users._id !== id))
  }

  return (
    <>
      <h2>
        <span
          className={'badge ' + (users.length > 0 ? 'bg-primary' : 'bg-danger')}
        >
          {users.length > 0
            ? `${
                users.length + ' ' + renderPhrase(users.length)
              } с тобой сегодня`
            : 'Никто с тобой не тусанет'}
        </span>
      </h2>

      {users.length > 0 && (
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
                    className={
                      'btn btn-sm btn-danger m-2' +
                      (item.bookmark === false
                        ? 'bi bi-heart'
                        : 'bi bi-heart-fill')
                    }
                    onClick={() => trueOrFalse(item)}
                  ></button>
                </td>
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
      )}
    </>
  )
}

export default Users
