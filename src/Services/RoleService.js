import axios from "axios";

const ROLE_API_BASE_URL = "http://localhost:8080/api/v1/role"; 

class RoleService{

    //GetAll
    getRoles(){
        return axios.get(ROLE_API_BASE_URL);
    }

    //Create
    addRole(role){
        return axios.post(ROLE_API_BASE_URL + '/save', role);
    }

    //GetById
    getRoleById(roleId){
        return axios.get(ROLE_API_BASE_URL +'/'+ roleId);
    }

    //Update
    updateRole(role, roleId){
        return axios.put(ROLE_API_BASE_URL +'/update/'+ roleId, role);
    }

    //Delete
    deleteRole(roleId){
        axios.delete(ROLE_API_BASE_URL +'/delete/'+ roleId)
    }


}   

export default new RoleService();