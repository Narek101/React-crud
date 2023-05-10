import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function ViewUser(){
    const {id} = useParams()
    const [user,setUser]=  useState({
      name:"",
      username:"",
      email:"",
    })
    useEffect(() => {
      fetch(`http://localhost:3000/users/${id}`)
        .then(response => response.json())
        .then(res => setUser(res))
        .catch((error) => {
          return console.log(error.massage);
        })
    }, [id])
    return(
        <div>
            <span>Name: </span>
            <span>{user.name}</span>
            <br />
            <span>Username: </span>
            <span>{user.username}</span>
            <br />
            <span>Email: </span>
            <span>{user.email}</span>
            <br />
            <span>Phone: </span>
            <span>{user.phone}</span>
        </div>
    )
}


export default ViewUser