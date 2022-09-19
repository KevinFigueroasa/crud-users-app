import './App.css'
import UsersForm from './components/UsersForm'
import { useEffect, useState } from 'react'
import axios from 'axios'
import UsersList from './components/UsersList'

function App() {

  const [ users, setUsers ] = useState([])
  const [ userSelected, setUsersSelected ] = useState(null)

  useEffect(() => {
    axios
    .get(`https://users-crud1.herokuapp.com/users/`)
    .then(res => setUsers(res.data))
  }, [])

  const getUsers = () => {
    axios
    .get(`https://users-crud1.herokuapp.com/users/`)
    .then(res => setUsers(res.data))
  }

  const addUser = (newUser) => {
    axios
    .post(`https://users-crud1.herokuapp.com/users/`, newUser)
    .then(() => getUsers())
    .catch(err => console.log(err.response))
  }

  const updateUser = (newUser) => {
    axios
    .put(`https://users-crud1.herokuapp.com/users/${newUser.id}/`, newUser)
    .then(() => getUsers())
    .catch(err => console.log(err.response))
  }

  const selectedUser = (user) => {
    setUsersSelected(user)
  }

  const deselectProduct = () => {
    setUsersSelected(null)
  }

  const deleteUser = (id) => {
    axios
    .delete(`https://users-crud1.herokuapp.com/users/${id}`)
    .then(() => getUsers())
  }

  console.log(users)

  return (
    <div className="App">
      <UsersForm 
      addUser={addUser}
      userSelected={userSelected}
      deselectProduct={deselectProduct}
      updateUser={updateUser}
      />
      <UsersList 
      users={users}
      deleteUser={deleteUser}
      selectedUser={selectedUser}
      />
    </div>
  )
}

export default App
