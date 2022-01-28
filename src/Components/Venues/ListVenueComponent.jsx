import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import venueService from '../../Services/venueService';

const ListVenueComponent = () => {

    //Defining state variable(s)
    const [venues, setVenue] = useState([]);

     //List - retrieving all Rooms
    useEffect(() => {

      getAllVenues();
     
    }, []);

    //RETRIEVE - to update
   //Calling getAllVenues() to make Rest API Call and setting response data to venue array.
    const getAllVenues = () =>{
        venueService.getAllVenues().then( (response) =>{
            setVenue(response.data)
            console.log(response.data);

           }).catch(error =>{
               console.log(error);
  
        })
    }

    //DELETE
    const deleteVenue = (venueid) =>{
        venueService.deleteVenueById(venueid).then((response)=>{
            getAllVenues();

        }).catch(error =>{
               console.log(error);
  
        })
    }
    


  return (
    <div className='container'>
        <h2 className='text-center'>List Venues</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <th>Room ID:</th>
                <th>Room Name:</th>
                <th>Capacity:</th>
                <th>TV:</th>
                <th>Whiteboard:</th>
                <th>Conference Phone</th>
            </thead>

            <tbody>
                {
                    venues.map (
                        venue =>
                            <tr key={venue.venueid}>

                                <td>{venue.venueid}</td>
                                <td>{venue.boardroomName}</td>
                                <td>{venue.capacity}</td>
                                <td>{venue.tv}</td>
                                <td>{venue.whiteboard}</td>
                                <td>{venue.conferencePhone}</td>

                            </tr>
                        
                    )
                }
            </tbody>
        </table>

    </div>
  );
};

export default ListVenueComponent;
