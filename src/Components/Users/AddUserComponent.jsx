import React, {useState, useEffect} from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import UserService from '../../Services/UserService' 

const AddUserComponent = () => {

    //Creating states / Properties for AddUserComponent using useState hook
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const [phoneNo, setPhoneNo] = useState('')
    const [gender, setGender] = useState('')

    //useHistory() gives you access to the history instance that you use to navigate
    const history = useHistory();
    //useParams() will be used to retrieve ID from url - Provides objects that contains key value points from url 
    const {id} = useParams();


    // SAVE or UPATE
    // Getting data from properties onclicking save btn
    const saveorUpdateUser = (e) =>{
        //Prevents refreshing of the page on submit
        e.preventDefault();

        const user = {firstName, lastName, password, username, phoneNo, gender }
      //Preventing adding empty fields
        if(user.firstName ==="" || user.lastName ==="" ||
        user.phoneNo ==="" ||user.gender ==="" ||
        user.username ==="" || user.password ===""){
            alert("All the fields are mandatory!");
         return;

        }

    
        //Condition for adding and updating user
        if(id){ //Update
            UserService.updateUser(id, user).then( (response) =>{

                history.push('/users');
                
            }).catch(error =>{
                console.log(error);
            }) 
        }else{ //Save
            //Parsing User to addUser() to send  User data to Rest API 
        UserService.addUser(user).then (response =>{

            console.log(response.data);

            history.push('/users');

        }).catch(error =>{
            console.log(error);
        })

       
    }   
}

     //Having user object to populate form for editing.
     //Making Rest API Call to get user details by id and setting them to state variables
     useEffect(() => {
        UserService.getUserById(id).then( (response) =>{
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setUsername(response.data.username)
            setPassword(response.data.password)
            setPhoneNo(response.data.phoneNo)
            setGender(response.data.gender)
        }).catch(error =>{
            console.log(error);
        })
        
     }, [])


    //Adding Condition to change page title dynamically
    const title = () =>{

        if(id){
            return <h3 className="text-center">Update User</h3>
        } 
        else {
            return <h3 className="text-center">Add User</h3>

        }
        
    }

    return (
        <div>
                <br />
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            {
                                title()
                            }
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>First Name: </label>
                                        <input placeholder='First Name' name="firstName" className="form-control"
                                            value={firstName} 
                                            // storing form data values in the properties onChange. event.target.value retrieves / access value of whatever input it was called on.
                                            onChange={(e) =>setFirstName(e.target.value)}
                                        />
                                    </div>

                                    <div className='form-group'>
                                        <label>Last Name: </label>
                                        <input placeholder='Last Name' name="lastName" className="form-control"
                                            value={lastName} 
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>

                                    <div className = "form-group">
                                        <label> Email Id: </label>
                                            <input placeholder="Email Address" name="username" className="form-control" 
                                                   value={username} 
                                                   onChange={(e) => setUsername(e.target.value)}
                                            />
                                    </div>

                                    <div className = "form-group">
                                        <label> Password: </label>
                                            <input type="password" name="password" placeholder="Password" className="form-control" 
                                                   value={password} 
                                                   onChange={(e) => setPassword(e.target.value)}
                                            />
                                    </div>

                                    <div className = "form-group">
                                        <label> Phone No: </label>
                                            <input placeholder="Phone No" name="phoneNo" className="form-control" 
                                                   value={phoneNo} 
                                                   onChange={(e) => setPhoneNo(e.target.value)}
                                            />
                                    </div>

                                    <div className = "form-group">
                                        <label>Gender: </label>
                                            <input placeholder="gender" name="gender" className="form-control" 
                                                   value={gender} 
                                                   onChange={(e) => setGender(e.target.value)}
                                            />
                                    </div>
                                    <br/>

                                    <button className='btn btn-success' onClick={(e) => saveorUpdateUser(e)}>Save</button>
                                    <Link to="/" className="btn btn-danger" style={{marginLeft: "10px"}}>Cancel</Link>
                                </form>       
                            </div>
                        </div>
                    </div>      
                </div> 
            </div>
    )
}


export default AddUserComponent
