import React, {useState, useEffect} from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import OrganizationService from '../../Services/OrganizationService'


const AddOrgComponent = () => {
  
    const [organizationName, setOrganizationName] = useState('');

    const history = useHistory();

    const {organizationId} = useParams();

    //Save or Update
    const saveorUpdateOrg = (e) =>{
        //Prevent Page Refresh on submit before saving form data
        e.preventDefault();

        const organization = {organizationName};

        if(organizationId){ //Update
            OrganizationService.updateOrganization(organizationId, organization).then( (response)=>{
                history.push('/list-org');
            }).catch(error =>{
                console.log(error);
            })

        }else{//Save
            OrganizationService.saveOrganization(organization).then( (response) =>{
                history.push('/list-org');
            }).catch(error =>{
                console.log(error);
            })

        }
    }

        //Having organization object to populate form for editing.
        //Making Rest API Call to get organization details by id and setting them to state variables
        useEffect(() => {
        OrganizationService.getOrganizationByID(organizationId).then( (response) =>{
            setOrganizationName(response.data.organizationName);
            
        }).catch(error =>{
            console.log(error);
        })
        
        }, []);

        //Adding Condition to change page title dynamically
        const title = () =>{

            if(organizationId){
                return <h3 className="text-center">Update Organization</h3>
            } 
            else {
                return <h3 className="text-center">Add Organization</h3>

            }
            
        }

        return(
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
                                            <label>Organization Name: </label>
                                            <input placeholder='Organization Name' name="organizationName" className="form-control"
                                                value={organizationId} 
                                                // storing form data values in the properties onChange. 
                                                //event.target.value retrieves / access value of whatever input it was called on.
                                                onChange={(e) =>setOrganizationName(e.target.value)}
                                            />
                                        </div>

                                        <br/>

                                        <button className='btn btn-success' onClick={(e) => saveorUpdateOrg(e)}>Save</button>
                                        <Link to="/" className="btn btn-danger" style={{marginLeft: "10px"}}>Cancel</Link>
                                    </form>       
                                </div>
                            </div>
                        </div>      
                    </div> 
            </div>

        );
        

    
};

export default AddOrgComponent;




