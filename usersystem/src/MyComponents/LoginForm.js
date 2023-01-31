import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../App.css';




export default function LoginForm() {


    const initialValues = {
        emailId: "",
        password: ""
    };

    const [formValues, setFormValues] = useState(initialValues);
    const [empdata, empdatachange] = useState(null);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
   

    let isValid = false;
    let id = "";
    
    


    const navigate = useNavigate();



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formValues);
        console.log(empdata)
        setFormErrors(validate(formValues));
        setIsSubmit(true);

        if(Object.keys(formErrors).length === 0 && isSubmit){

            for (let i = 0; i < empdata.length; i++) {
                for (let j = 0; j < 5; j++) {
                    if (empdata[i].emailId === (formValues.emailId) && empdata[i].password === (formValues.password)) {
                        isValid = true;
                        id = '{empdata[i].id}'
                        console.log("I am correct")
                        break;
                    }
                }
                if (isValid) {
                    break;
                }
            }
    
            if (isValid) {
                navigate("/Dashboard")
            } else {
                alert("Email or Password is wrong")
                navigate('/LoginForm')
    
            }

        }
        

    }

    useEffect(() => {
        fetch("http://localhost:8000/user").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
        }

    }, [formErrors]);

    const validate = (values) => {
        const errors = {};

        if (!values.emailId) {
            errors.emailId = "Email is required!";
        }
        if (!values.password) {
            errors.password = "Password is required!";
        }
        return errors;

    }

    



    return (



        <div className="container my-4">


            <div className="row">
                <div className='col-4'></div>
                <div className='col-4 border bg-warning-subtle'>
                    <form className="row g-3 m-4" onSubmit={handleSubmit}>
                        <h4>Login</h4>
                        <div className="col-12">
                            <input
                                type="email"
                                name='emailId'
                                className="form-control"
                                id="emailId"
                                placeholder='Email Id'
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-text error'>{formErrors.emailId}</div>
                        <div className="col-12">
                            <input
                                type="password"
                                name='password'
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-text error'>{formErrors.password}</div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                        </form>
                        <div className='col-12'>
                            <p><b>OR LOGIN USING</b></p>
                        </div>
                        <div className="col-12">
                        
                        

                        </div>

                    
                </div>
                <div className='col-4'></div>
            </div>
        </div>

    )
}
