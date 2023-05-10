import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './Components/Page/NotFound'
import Home from './Components/Page/Home';
import About from './Components/Page/About';
import Contact from './Components/Page/Contact';
import NavBar from './Components/NavBar';
import AddUser from './Components/Page/Users/AddUser';
import EditUser from './Components/Page/Users/EditUser';
import ViewUser from './Components/Page/Users/ViewUser';
function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(res => setUsers(res))
      .catch((error) => {
        return console.log(error.massage);
      })
  }, [])


  const addUser = async (name, email, phone, username) => {
    await fetch('http://localhost:3000/users', {
      method: "POST",
      body: JSON.stringify(
        {
          name: name,
          username:username,
          email: email,
          phone: phone,
         
        }
      ),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(res => res.json())
      .then(data => setUsers((users) => [...users, data]))
      .catch(err => {
        console.log(err);
      })
  }



  const onDelete = async (id) => {
    await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    })
      .then(res => {
        if (res.status !== 200) {
          return
        } else {
          return setUsers(users.filter((user) => {
            return user.id !== id
          }))
        }
      })
      .catch(err => {
        console.log(err);
      })
  }
  const editUser =  (id, user) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => {
        console.log(err);
      })
  }
  return (
    <div className="App">
      <Routes>
        <Route element={<NavBar />} path={'/'}>
          <Route element={<Home user={users} onDelete={onDelete} />} index={true} />
          <Route element={<AddUser addUsers={addUser} />} path='/user/add' />
          <Route element={<ViewUser />} path={`/user/view/:id`} />
          <Route element={<EditUser editUser={editUser} />} path={`/user/edit/:id`} />
          <Route element={<About />} path='/about' />
          <Route element={<Contact />} path='/contact' />
          <Route element={<NotFound />} path='*' />
        </Route>

      </Routes>

    </div>

  );
}

export default App;
