import React, {useState, useEffect} from 'react'
import rooms from '../Images/meeting.jpg'
import BackgroundImg from './Background/BackgroundImg';

const HomePageComponent = () =>{



    return(
        <div >
            {/* style={{ backgroundImage:{rooms}}} */}
          {/* style={{ backgroundColor:'violet'}} */}
          <h2 style={{textAlign:'center', marginTop:'1%'}}>Welcome to Meeting Resource Planner</h2>
             {/* <img className='backimg' src= {rooms} alt=''/> */}
            {/* <BackgroundImg/> */}
            
        

        </div>
    );


}

export default HomePageComponent