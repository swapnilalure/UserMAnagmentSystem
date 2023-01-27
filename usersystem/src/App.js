import GoogleLogin from 'react-google-login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './MyComponents/Dashboard';
import EmpCreate from './MyComponents/EmpCreate';
import EmpDetails from './MyComponents/EmpDetails';
import EmpEdit from './MyComponents/EmpEdit';
import EmployeeDetails from './MyComponents/EmployeeDetails';
import Footer from './MyComponents/Footer';
import Header from "./MyComponents/Header";
import LoginForm from './MyComponents/LoginForm';
import Register from './MyComponents/Register';

function App() {
  return (
    <div className='bg'>
    <Router>
    <Header/>
    <Routes>
    <Route path='/EmployeeDetails' element={<EmployeeDetails/>}></Route>
    <Route path='/LoginForm' element={<LoginForm/>}></Route>
    <Route path='/Register' element={<Register/>}></Route>

    <Route path='/EmployeeDetails/create' element={<EmpCreate/>}></Route>
    <Route path='/EmployeeDetails/details/:empid' element={<EmpDetails/>}></Route>
    <Route path='/EmployeeDetails/edit/:empid' element={<EmpEdit/>}></Route>
                            
    <Route path='/Dashboard' element={<Dashboard/>}></Route>


    </Routes>
    <Footer/>
    </Router>
    </div>
  );
}

export default App;