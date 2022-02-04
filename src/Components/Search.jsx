import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import UserService from '../Services/UserService';


const Search = () => {

   
        const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);
        const [items, setItems] = useState([]);
  
        // Note: the empty deps array [] means
        // this useEffect will run once
        // similar to componentDidMount()
        useEffect(() => {
          fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(
              (result) => {
                setIsLoaded(true);
                setItems(result);
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                setIsLoaded(true);
                setError(error);
              }
            )
        }, [])
  
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            // <ul>
            //   {items.map(item => (
            //     <li key={item.id}>
            //       {item.name} {item.username} {item.email}
            //     </li>
            //   ))}
            // </ul>
            /* here we map over the element and display each item as a card  */
            <div className="wrapper">
            <ul className="card-grid">
                {items.map((item) => (
                    <li>
                        <article className="card" key={item.callingCodes}>
                            <div className="card-image">
                                <img src={item.flag} alt={item.name} />
                            </div>
                            <div className="card-content">
                                <h2 className="card-name">{item.name}</h2>
                                <ol className="card-list">
                                    <li>
                                        UserName:{" "}
                                        <span>{item.username}</span>
                                    </li>
                                    <li>
                                        Email: <span>{item.email}</span>
                                    </li>
                                    {/* <li>
                                        Capital: <span>{item.capital}</span>
                                    </li> */}
                                </ol>
                            </div>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
          );
        }
      }




//     const [searchTerm, setSearchTerm] = useState("");

//     const [users, setUsers] = useState([])


//   return (
//     <div className='container'> 
//                 <h2 className='text-center'>User List</h2>  
//                 Search

//                 <input type="text" placeholder='Search...' 
//                 onChange={(event) =>{
//                     setSearchTerm(event.target.value)
//                 }}/>     
//                  {/* End of Search */}
            
                
//             </div>
//   );


export default Search;
