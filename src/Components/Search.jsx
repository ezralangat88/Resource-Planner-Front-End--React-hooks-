import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import UserService from '../Services/UserService';


const Search = () => {
    
    //useState hook(function) allows having of state variables in functional components
    const [users, setUsers] = useState([])

    const [searchTerm, setSearchTerm] = useState("");

 //LIST - Using useEffect hook to retrieve all users
    useEffect(() => {

       getAllUsers();

    }, [])

   //RETRIEVE - to update
   //Calling getAllUsers() to make Rest API Call and setting response data to users array.
    const getAllUsers = () =>{
        UserService.getAllUsers().then ( (response) => {
            setUsers(response.data)
            console.log(response.data);
           }).catch(error =>{
               console.log(error);
    
           })
    }
    
    //DELETE
    const deleteUser = (userid) => {
        UserService.deleteUser(userid).then( (response) =>{
            getAllUsers();  

        }).catch(error =>{
            console.log(error);
        })
    }


    return (
        <div className='container'> 
                <h2 className='text-center'>User List</h2>  
                {/* Search */}

                <input type="text" placeholder='Search...' 
                onChange={(event) =>{
                    setSearchTerm(event.target.value)
                }}/>     
                 {/* End of Search */}
                <Link to = 'add-user' className='btn btn-primary mb-2' style = {{marginLeft:"10px"}} >Add user</Link>
                <table className='table table-striped table-bordered'>
                <thead>
                        <th>User ID </th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Id</th>
                        <th>Phone No</th>
                        <th>Gender</th>
                        <th>Actions</th>
                      
                </thead>

                <tbody>

                    {
                        users.filter((user)=>{
                            if(setSearchTerm == ""){
                                return user
                            }else if(user.firstName.toLowerCase().includes(searchTerm.firstName.toLowerCase())){
                                return user
                            }
                        }).map (
                            user => 
                                <tr key = {user.id}>

                                    <td> {user.id} </td>
                                    <td> {user.firstName} </td>
                                    <td> {user.lastName} </td>
                                    <td> {user.emailId} </td>
                                    <td> {user.phoneNo} </td>
                                    <td> {user.gender} </td>
                                    
                                    <td>
                                       <Link to = {`/edit-user/${user.id}`} className='btn btn-info'> Update</Link>
                                       <button className = "btn btn-danger" onClick = {() => deleteUser(user.id)}
                                               style = {{marginLeft:"10px"}}> Delete</button>
                                    </td>
                      

                                </tr>
                            
                        )
                    }
                
                </tbody>
                </table>
                
            </div>
    )
}

export default Search;
