import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddUser({addUsers}) {
  
  const naviget = useNavigate()
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState(0)
  const [username,setUsername] = useState('')
  return (
    <div>
        <form onClick={(e)=>{
          e.preventDefault()
        }}>
            <label>Name</label>
            <input type='text' placeholder='Name' onChange={(e)=>{
              setName(e.target.value)
            }}/>
            <label>Username</label>
            <input type='text' placeholder='Username' onChange={(e)=>{
              setUsername(e.target.value)
            }}/>
            <label>Email</label>
            <input type='text' placeholder='Email' onChange={(e)=>{
              setEmail(e.target.value)
            }}/>
            <label>Phone</label>
            <input type='text' placeholder='Phone' onChange={(e)=>{
              setPhone(e.target.value)
            }}/>
            
            <button type='submit' onClick={()=>{
              naviget("/")
              addUsers(name,email,phone,username)
            }}>Add User</button>
        </form>
    </div>
  )
}

export default AddUser