import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>

      <NavLink className="btn btn-success me-4" to="/EmployeeDetails">Employees</NavLink>
    </div>
  )
}
