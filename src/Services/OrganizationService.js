import axios from "axios";

const ORG_API_BASE_URL = "http://localhost:8080/api/v1/organizations"; 

class OrganizationService{

    //List All Organzaitions
    getAllOrganizations(){
        return axios.get(ORG_API_BASE_URL);
    }

    //Get Organzaition by ID
    getOrganizationByID(organizationID){
        return axios.get(ORG_API_BASE_URL + '/' + organizationID );
    }

    //Save
    saveOrganization(organization){
        return axios.post(ORG_API_BASE_URL, organization);

    }

    //Update
    updateOrganization(organizationID, organization){
        return axios.put(ORG_API_BASE_URL + '/' + organizationID, organization)

    }

    //Delete
    deleteOrganzation(organizationID){
        return axios.delete(ORG_API_BASE_URL + '/' + organizationID);

    }

}

export default new OrganizationService();