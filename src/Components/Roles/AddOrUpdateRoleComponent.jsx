import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';

import RoleService from '../../Services/RoleService';

const AddOrUpdateRoleComponent = () => {

    //Creating states / Properties
    const [roleName, setRoleName] = useState([]);

    //useHistory() gives you access to the history instance that you use to navigate
    const history = useHistory();
    //useParams() will be used to retrieve ID from url - Provides objects that contains key value points from url 
    const {roleId} = useParams();

     // SAVE or UPATE
      // Getting data from properties onclicking save btn
      const saveOrUpdateRole = (e) =>{

        e.preventDefault();

        const role = {roleName};

       
        if(roleId){
             //Update
             RoleService.updateRole(roleId, role).then( (response) =>{

                console.log(response.data);

                history.push('/role');
            }).catch(error =>{
                console.log(error);
            }) 


        }else{
            //Save
            RoleService.addRole(role).then( (response) =>{

                console.log(response.data);

                history.push('/role');
            }).catch(error =>{
                console.log(error);
            }) 
  
        }
        
      }

     //Having user object to populate form for editing.
     //Making Rest API Call to get user details by id and setting them to state variables
     useEffect(() => {
         RoleService.getRoles(roleId).then ((response) =>{
             setRoleName(response.data.roleName);
           
         }).catch(error =>{
            console.log(error);
        })
       
       
     }, []);

     //Adding Condition to change page title dynamically
    const title = () =>{

        if(roleId){
            return <h3 className="text-center">Update Role</h3>
        } 
        else {
            return <h3 className="text-center">Add Role</h3>

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
                            <label>Role Name: </label>
                            <input placeholder='Role Name' name="roleName" className="form-control"
                                value={roleName} 
                                // storing form data values in the properties onChange. event.target.value retrieves / access value of whatever input it was called on.
                                onChange={(e) =>setRoleName(e.target.value)}
                            />
                        </div>

                    
            
                        <br/>

                        <button className='btn btn-success' onClick={(e) => saveOrUpdateRole(e)}>Save</button>
                        <Link to="/role" className="btn btn-danger" style={{marginLeft: "10px"}}>Cancel</Link>
                    </form>       
                </div>
            </div>
        </div>      
    </div> 
</div>

  );
};

export default AddOrUpdateRoleComponent;
