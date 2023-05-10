import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles  from './User.module.css'


function User({ user, onDelete }) {
    const naviget = useNavigate()
    return (
        <div>
                {
                    user?.map(({ id, name, email,username }) => {
                        return (
                            <div key={id} className={styles.container} >
                                <div >{id}</div>
                                <div >{name}</div>
                                <div>{username}</div>
                                <div >{email}</div>
                                <div>
                                    <button onClick={() => {
                                        naviget(`/user/view/${id}`)
                                    }}>View</button>
                                    <button onClick={() => {
                                        naviget(`/user/edit/${id}`)
                                    }}>Edit</button>
                                    <button onClick={() => {
                                        onDelete(id)
                                    }}>Delete</button>
                                </div>

                            </div>
                        )
                    })
                }
           
        </div>
    )
}

export default User