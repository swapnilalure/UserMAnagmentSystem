import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import { AiTwotoneDelete } from 'react-icons/ai'
import { FcViewDetails } from 'react-icons/fc'

export default function EmployeeDetails() {

    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/EmployeeDetails/details/" + id);

    }

    const LoadEdit = (id) => {
        navigate("/EmployeeDetails/edit/" + id);
    }

    const Removefunction = (id) => {
        if (window.confirm('Do you want to Delete?')) {
            fetch("http://localhost:8000/employee/" + id, {
                method: "DELETE",
            }).then((res) => {
                alert('Deleted successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

    useEffect(() => {
        fetch("http://localhost:8000/employee").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    return (
        <div className='container my-4'>
            <div className='card'>
                <div className='card-title'>
                    <h2 className='text-center'>Employee List</h2>
                </div>
                <div className='card-body'>
                    <div className='my-2'>
                        <Link to='/EmployeeDetails/create' className='btn btn-success'>ADD Employee</Link>
                    </div>
                    <table className='table table-bordered'>
                        <thead className='bg-dark text-white'>
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td className='text-center'>
                                            <a onClick={() => { LoadEdit(item.id) }} className='text-success m-1'><FiEdit/></a>
                                            <a onClick={() => { Removefunction(item.id) }} className='text-danger m-1'><AiTwotoneDelete/></a>
                                            <a onClick={() => { LoadDetail(item.id) }} className='text-success m-1'><FcViewDetails/></a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
