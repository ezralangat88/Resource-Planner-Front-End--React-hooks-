import axios from "axios";

const ORG_API_BASE_URL = "http://localhost:8080/api/v1/organizations"; 

class OrganizationService{

    //List All Organzaitions
    getAllOrganizations(){
        return axios.get(ORG_API_BASE_URL);
    }

    //Get Organzaition by ID
    getOrganizationByID(organizationId){
        return axios.get(ORG_API_BASE_URL + '/' + organizationId );
    }

    //Save
    saveOrganization(organization){
        return axios.post(ORG_API_BASE_URL, organization);

    }

    //Update
    updateOrganization(organizationId, organization){
        return axios.put(ORG_API_BASE_URL + '/' + organizationId, organization)

    }

    //Delete
    deleteOrganzation(organizationId){
        return axios.delete(ORG_API_BASE_URL + '/' + organizationId);

    }

}

export default new OrganizationService();