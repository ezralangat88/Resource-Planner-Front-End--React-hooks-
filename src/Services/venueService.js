import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/v1/venue"; 

class VenueService{

    //GetAll
    getAllVenues(){
        return axios.get(USER_API_BASE_URL);
    }

    //GetById
    getAllVenueById(venueid){
        return axios.get(USER_API_BASE_URL + '/' + venueid);

    }

    //Create
    addVenue(venue){
        return axios.post(USER_API_BASE_URL + '/create', venue);

    }

    //Update
    updateVenue(venueid, venue){
        return axios.put(USER_API_BASE_URL + '/update' + venueid, venue);
    }

    //Delete
     deleteVenueById(venueid){
        return axios.delete(USER_API_BASE_URL + '/delete' + venueid);

    }


}

export default new VenueService();