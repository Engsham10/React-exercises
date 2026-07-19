import { useState } from 'react'


function App() {
  const userList = [
    { id: 1, name:'ahmed', email: 'ahmed@gmail.com'},
    { id: 2, name:'ali', email: 'ali@gmail.com'},
    { id: 3, name:'abdi', email: 'abdi@gmail.com'}
]

  return (
    <>
      <h2>user Lists</h2>
      <ul>
      {
          userList.map((user) =>{
            return <li key={user.id}>{user.name} : {user.email}</li>
          })
      }
      </ul>
    </>
  )
}

export default App
