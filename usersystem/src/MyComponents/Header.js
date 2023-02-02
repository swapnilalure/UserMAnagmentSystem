import React from 'react'
import {  NavLink, useNavigate } from 'react-router-dom'

export default function header() {

    const navigate= useNavigate();

    let user = JSON.parse(localStorage.getItem('data'));

    function logout(){
        localStorage.clear();
        navigate('/');

    }


    return (

        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to='/'> <label className="navbar-brand">User Managment System</label></NavLink>
                <div className="d-flex">

                <span> 

                    { localStorage.getItem('data') ? 
                    <>
                    <label className='nav-item m-2'>{user && user.email}</label>

                    <button className='nav-item btn btn-danger' onClick={logout}>Logout</button>
                    </>
                    :null}
                    {/* <NavLink className="nav-link me-4" to="/EmployeeDetails">Employees</NavLink> */}
                    {/* <NavLink className="nav-link me-4" to="/LoginForm">LOGIN</NavLink> */}
                    {/* <NavLink className="nav-link me-4" to="/Register">SIGNUP</NavLink> */}
                    </span>
                </div>
            </div>
        </nav>

    )
}
