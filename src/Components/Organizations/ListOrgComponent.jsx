import React, {useState, useEffect} from 'react';
import OrganizationService from '../../Services/OrganizationService';
import { Link } from 'react-router-dom';

const ListOrgComponent = () => {

    const [organizations, setOrganzaitions] = useState([]);

    useEffect(() => {
      
        getAllOrganizations();


    }, []);

    const getAllOrganizations = () =>{
        OrganizationService.getAllOrganizations().then( (response) =>{

            setOrganzaitions(response.data)
            console.log(response.data);
        }).catch((error) =>{
            console.log(error);
        })
            
    }
    //Delete
    const deleteOrg = (organizationId) =>{
        OrganizationService.deleteOrganzation(organizationId).then( (response) =>{
            getAllOrganizations();
        }).catch(error =>{
            console.log(error);
        })

        }

        return (
            <div className='container'>
                <h2 className='text-center'>Organizations List</h2>
                <Link to = 'add-org' className='btn btn-primary mb-2'>Add Organization</Link>  
                <table className='table table-striped table-bordered'>
                    <thead>
                        <th>ID</th>
                        <th>Organization Name</th>
                    </thead>
                    <tbody>
                        {
                            organizations.map (
                                organization =>
                                <tr key={organization.organizationId}>
    
                                    <td>{organization.organizationId}</td>
                                    <td>{organization.organizationName}</td>
    
                                    <td>
                                           <Link to = {`/edit-org/${organization.organizationId}`} className='btn btn-info'> Update</Link>
                                           <button className = "btn btn-danger" onClick = {() => deleteOrg(organization.organizationId)}
                                        style = {{marginLeft:"10px"}}> Delete</button>
                                        </td>
    
                                </tr>
                            )
                        }
                    </tbody>
                </table>
    
            </div>
      );
    }
    

    

                

export default ListOrgComponent;
