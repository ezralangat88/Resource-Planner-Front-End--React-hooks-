import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/v1/user"; 

class UserService{
    getAllUsers(){
        return axios.get(USER_API_BASE_URL)
    }

    // Making Rest API Call and senting user data to Rest API and Rest API will internally save user data
    addUser(user){
        return axios.post(USER_API_BASE_URL, user);
    }

}

export default new UserService();