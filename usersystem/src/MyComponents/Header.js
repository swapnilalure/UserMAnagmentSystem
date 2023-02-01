import React from 'react'
import {  NavLink } from 'react-router-dom'

export default function header() {


    return (

        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to='/'> <label className="navbar-brand">User Managment System</label></NavLink>
                <div className="d-flex">

                <span> 
                    
                    {/* <NavLink className="nav-link me-4" to="/EmployeeDetails">Employees</NavLink> */}
                    {/* <NavLink className="nav-link me-4" to="/LoginForm">LOGIN</NavLink> */}
                    {/* <NavLink className="nav-link me-4" to="/Register">SIGNUP</NavLink> */}
                    </span>
                </div>
            </div>
        </nav>

    )
}
