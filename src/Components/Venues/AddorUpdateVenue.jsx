import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import venueService from '../../Services/venueService';

const AddorUpdateVenue = () => {

    //Creating states / Properties
    const [boardroomName, setBoardroomName] = useState('');
    const [capacity, setCapacity] = useState('');
    const [tv, setTv] = useState('');
    const [whiteboard, setWhiteboard] = useState('');
    const [conferencePhone, setConferencePhone] = useState('');

      //useHistory() gives you access to the history instance that you use to navigate
      const history = useHistory();
      //useParams() will be used to retrieve ID from url - Provides objects that contains key value points from url 
      const {boardroomId} = useParams();

      // SAVE or UPATE
      // Getting data from properties onclicking save btn
      const saveOrUpdateVenue = (e) =>{

        e.preventDefault();

        const venue = {boardroomName, capacity, tv, whiteboard, conferencePhone};

       
        if(boardroomId){
             //Update
             venueService.updateVenue(boardroomId, venue).then( (response) =>{

                console.log(response.data);

                history.push('/venues');
            }).catch(error =>{
                console.log(error);
            }) 


        }else{
            //Save
            venueService.addVenue(venue).then( (response) =>{

                console.log(response.data);

                history.push('/venues');
            }).catch(error =>{
                console.log(error);
            }) 
  
        }
        
      }

     //Having user object to populate form for editing.
     //Making Rest API Call to get user details by id and setting them to state variables
     useEffect(() => {
         venueService.getAllVenueById(boardroomId).then ((response) =>{
             setBoardroomName(response.data.boardroomName);
             setCapacity(response.data.capacity);
             setTv(response.data.tv);
             setWhiteboard(response.data.whiteboard);
             setConferencePhone(response.data.conferencePhone);
         }).catch(error =>{
            console.log(error);
        })
       
       
     }, []);

     //Adding Condition to change page title dynamically
    const title = () =>{

        if(boardroomId){
            return <h3 className="text-center">Update Venue</h3>
        } 
        else {
            return <h3 className="text-center">Add Venue</h3>

        }
        
    }
     

  return (
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
                                        <label>Boardroom Name: </label>
                                        <input placeholder='Boardroom Name' name="boardroomName" className="form-control"
                                            value={boardroomName} 
                                            // storing form data values in the properties onChange. event.target.value retrieves / access value of whatever input it was called on.
                                            onChange={(e) =>setBoardroomName(e.target.value)}
                                        />
                                    </div>

                                    <div className='form-group'>
                                        <label> Capacity: </label>
                                        <input placeholder='Capacity' name="capacity" className="form-control"
                                            value={capacity} 
                                            // storing form data values in the properties onChange. event.target.value retrieves / access value of whatever input it was called on.
                                            onChange={(e) =>setCapacity(e.target.value)}
                                        />
                                    </div>

                                    <div className='form-group'>
                                        <label> TV: </label>
                                        <input placeholder='TV' name="tv" className="form-control"
                                            value={tv} 
                                            // storing form data values in the properties onChange. event.target.value retrieves / access value of whatever input it was called on.
                                            onChange={(e) =>setTv(e.target.value)}
                                        />
                                    </div>

                                    <div className='form-group'>
                                        <label> Whiteboard: </label>
                                        <input placeholder='Whiteboard' name="whiteboard" className="form-control"
                                            value={whiteboard} 
                                            // storing form data values in the properties onChange. event.target.value retrieves / access value of whatever input it was called on.
                                            onChange={(e) =>setWhiteboard(e.target.value)}
                                        />
                                    </div>

                                    <div className='form-group'>
                                        <label>ConferencePhone: </label>
                                        <input placeholder='ConferencePhone' name="conferencePhone" className="form-control"
                                            value={conferencePhone} 
                                            // storing form data values in the properties onChange. event.target.value retrieves / access value of whatever input it was called on.
                                            onChange={(e) =>setConferencePhone(e.target.value)}
                                        />
                                    </div>
                        
                                    <br/>

                                    <button className='btn btn-success' onClick={(e) => saveOrUpdateVenue(e)}>Save</button>
                                    <Link to="/venues" className="btn btn-danger" style={{marginLeft: "10px"}}>Cancel</Link>
                                </form>       
                            </div>
                        </div>
                    </div>      
                </div> 
            </div>
  );
};

export default AddorUpdateVenue;
