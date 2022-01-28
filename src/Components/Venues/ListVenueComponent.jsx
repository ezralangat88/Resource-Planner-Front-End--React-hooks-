import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
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
        <Link to = '/create/venue' className='btn btn-primary mb-2'>Add Venue</Link>
        <table className='table table-striped table-bordered'>
            <thead>
                <th>Room ID:</th>
                <th>Room Name:</th>
                <th>Capacity:</th>
                <th>TV:</th>
                <th>Whiteboard:</th>
                <th>Conference Phone</th>
                <th>Actions</th>
            </thead>

            <tbody>
                {
                    venues.map (
                        venue =>
                            <tr key={venue.boardroomId}>

                                <td>{venue.boardroomId}</td>
                                <td>{venue.boardroomName}</td>
                                <td>{venue.capacity}</td>
                                <td>{venue.tv}</td>
                                <td>{venue.whiteboard}</td>
                                <td>{venue.conferencePhone}</td>
                                <td>
                                    <Link to={`/update/venue/${venue.boardroomId}`} className = "btn btn-info">Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteVenue(venue.boardroomId)}
                                               style = {{marginLeft:"10px"}}> Delete</button>
                                </td>

                            </tr>
                        
                    )
                }
            </tbody>
        </table>

    </div>
  );
};

export default ListVenueComponent;
