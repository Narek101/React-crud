import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditUser({editUser}) {
  const {id} = useParams()
  const naviget = useNavigate()
  const [user,setUser]=  useState({
    name:"",
    username:"",
    email:"",
    phone:""
  })
  useEffect(() => {
    fetch(`http://localhost:3000/users/${id}`)
      .then(response => response.json())
      .then(res => setUser(res))
      .catch((error) => {
        return console.log(error.massage);
      })
  }, [id])
  return (
    <div>
      <form onSubmit={(e) => {e.preventDefault()}}>
        <label>Name</label>
        <input type='text' value={user.name} onChange={(e)=>{
          setUser({...user,name:e.target.value})}} />
        <br />
        <label>Username</label>
        <input type='text' value={user.username} onChange={(e)=>{
          setUser({...user,username:e.target.value})}}/>
        <br />

        <label>Eamil</label>
        <input type='text' value={user.email} onChange={(e)=>{
          setUser({...user,email:e.target.value})}}/>
        <br />
        <label>Phone</label>
        <input type='text' value={user.phone} onChange={(e)=>{
          setUser({...user,phone:e.target.value})}}/>
        <br />
        <button onClick={()=>{editUser(id,user)
           naviget("/")}}>Updata User</button>
      </form>
    </div>
  )
}

export default EditUser