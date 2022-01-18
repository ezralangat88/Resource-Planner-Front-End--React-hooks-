//rafc /rfc
import React, {useState, useEffect} from 'react'
import UserService from '../Services/UserService'
import { Link } from 'react-router-dom';

const ListUsersComponent = () => {

    const [employees, setEmployees] = useState([])


    useEffect(() => {
       UserService.getAllUsers().then ( (response) => {
        setEmployees(response.data)
        console.log(response.data);
       }).catch(error =>{
           console.log(error);

       })
    }, [])

    return (
        <div className='container'> 
                <h2 className='text-center'>Employee List</h2>  
                <Link to = 'add-employee' className='btn btn-primary mb-2'>Add user</Link>
                <table className='table table-striped table-bordered'>
  
                <thead>
                        <th>Employee ID </th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                        <th>Actions</th>
                </thead>

                <tbody>

                    {
                        employees.map (
                            employee => 
                                <tr key = {employee.id}>

                                    <td> {employee.id} </td>
                                    <td> {employee.firstName} </td>
                                    <td> {employee.lastName} </td>
                                    <td> {employee.emailId} </td>
                      

                                </tr>
                            
                        )
                    }
                
                </tbody>
                </table>
                
            </div>
    )
}

export default ListUsersComponent


//React useState Hook allows us to track state(data or properites) in a function component

//The useEffect Hook allows you to perform side effects
//(e.g  fetching data, directly updating the DOM, and timers.) in your components.

//useHistory Hook gives you access to the history instance that you use to navigate.