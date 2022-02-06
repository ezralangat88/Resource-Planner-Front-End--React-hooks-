import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import RoleService from '../../Services/RoleService';

const ListRolesComponent = () => {
//Defining state variable(s)
const [roles, setRoles] = useState([]);

//List - retrieving all
useEffect(() => {

    getAllRoles();

}, []);

//RETRIEVE - to update
//Calling getAllRoles() to make Rest API Call and setting response data to role array.
const getAllRoles = () =>{
    RoleService.getRoles().then((response) =>{
        setRoles(response.data)

        console.log(response.data);

    }).catch(error =>{
        console.log(error);
    })
}

//DELETE
const deleteRole = (roleId) =>{
    RoleService.deleteRole(roleId).then((response) =>{
        getAllRoles();

    }).catch(error =>{
        console.log(error);

    })
}

  return (
    <div className='container'>
        <h2 className='text-center'>Roles</h2>
        <Link to = '/role/save' className='btn btn-primary mb-2'>Add Role</Link>
        <table className='table table-striped table-bordered'>
            <thead>
                <th>Role ID:</th>
                <th>Role Name:</th>
                <th>Actions</th>
            </thead>

            <tbody>
                {
                    roles.map (
                        role =>
                            <tr key={role.roleId}>

                                <td>{role.roleId}</td>
                                <td>{role.roleName}</td>
                                
                                <td>
                                    <Link to={`/role/update/${role.roleId}`} className = "btn btn-info">Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteRole(role.roleId)}
                                               style = {{marginLeft:"10px"}}> Delete</button>
                                </td>

                            </tr>
                        
                    )
                }
            </tbody>
        </table>

    </div>
  );
};

export default ListRolesComponent;

