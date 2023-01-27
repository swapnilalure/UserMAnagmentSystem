import React from 'react'
import { NavLink } from 'react-router-dom'

export default function header() {
    return (

        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <label className="navbar-brand">User Managment System</label>
                <div className="d-flex">
                    {/* <NavLink className="nav-link me-4" to="/EmployeeDetails">Employees</NavLink> */}
                    <NavLink className="nav-link me-4" to="/LoginForm">LOGIN</NavLink>
                    <NavLink className="nav-link me-4" to="/Register">SIGNUP</NavLink>
                </div>     
            </div>
        </nav>

    )
}
