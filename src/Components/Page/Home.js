import React from 'react'
import User from './Users/User'
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css'
function Home({user,onDelete}) {
  const naviget = useNavigate()
  return (
    <div className={styles.container}>
      <button onClick={()=>{naviget("/user/add")}}>Add User</button>
      <br />
      <div className={styles.span}>
      <span>Id</span>
      <span>Name</span>
      <span>Username</span>
      <span>Email</span>
      <span>Action</span>
      </div>
      <User user = {user} onDelete = {onDelete} />
    </div>
  )
}

export default Home