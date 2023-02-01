import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function EmpDetails() {

    const{empid}= useParams();

    const[empdata, empdatachange] = useState({});

    useEffect(()=>{
        fetch("http://localhost:8000/employee/"+empid).then((res)=>{
            return res.json();
        }).then((resp)=>{
            empdatachange(resp);
        }).catch((err)=>{
            console.log(err.message);
        });

    }, [])

  return (
    <div className='container my-4'>
    { empdata &&
    
        <div className='card'>
            <div className='card-title'>
                <h2 className='text-center'>Employee Details</h2>
            </div>

            <h4>Employee Id: {empdata.id}</h4>
            <h4>Employee Name: {empdata.name} </h4>
            <h4>Employee Email: {empdata.email}</h4>
            <h4>Employee Email: {empdata.phone}</h4>
            <Link to='/EmployeeDetails' className='btn btn-success my-4 w-25'>Back</Link>
        
        </div>
    }
    </div>
    )
}
