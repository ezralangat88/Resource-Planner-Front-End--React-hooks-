import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import UserService from '../Services/UserService'

const AddUserComponent = () => {

    //Creating states for AddUserComponent using useState hook
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [emailId, setemailId] = useState('')
    const history = useHistory();


    // Save
    // Getting data from properties onclicking save btn
    const saveEmployee = (e) =>{
        //Prevents refreshing of the page on submit
        e.preventDefault();
        const user = {firstName, lastName, emailId }
       //Parsing User to addUser() to send  User data to Rest API 
        UserService.addUser(user).then (response =>{

            console.log(response.data);

            history.push('/employees');

        }).catch(error =>{
            console.log(error);
        })

    }   


    return (
        <div>
                <br />
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            {/* {this.getTitle()} */}
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>First Name: </label>
                                        <input placeholder='First Name' name="firstName" className="form-control"
                                            value={firstName} 
                                            // storing form data values in the properties onChange. event.target.value retrieves / access value of whatever input it was called on.
                                            onChange={(e) =>setfirstName(e.target.value)}/>
                                    </div>

                                    <div className='form-group'>
                                        <label>Last Name: </label>
                                        <input placeholder='Last Name' name="lastName" className="form-control"
                                            value={lastName} 
                                            onChange={(e) => setlastName(e.target.value)}/>
                                    </div>

                                    <div className = "form-group">
                                        <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                   value={emailId} 
                                                   onChange={(e) => setemailId(e.target.value)}/>
                                    </div>
                                    <br/>

                                    <button className='btn btn-success' onClick={(e) => saveEmployee(e)}>Save</button>
                                    <Link to="/employees" className="btn btn-danger" style={{marginLeft: "10px"}}>Cancel</Link>
                                </form>       
                            </div>
                        </div>
                    </div>      
                </div> 
            </div>
    )
}

export default AddUserComponent
