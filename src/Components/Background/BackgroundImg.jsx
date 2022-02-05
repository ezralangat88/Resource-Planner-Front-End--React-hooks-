import react,{useEffect, useState} from "react";
import rooms from '../../Images/meeting.jpg'
import UserService from '../../Services/UserService'
import { Link } from 'react-router-dom';

const BackgroundImg = () =>{

      
    return (
        <div className='backimg'> 
                <h2 className='text-center'>User List</h2>  
                <img src= {rooms} alt=''/>
                
            </div>
    )
}

export default BackgroundImg