import React from 'react'
import { Link, Outlet } from 'react-router-dom';
function NavBar() {
    return (
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact</Link>
            <Outlet />
        </div>
    )
}
export default NavBar