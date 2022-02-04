import React from 'react'
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
    return (
        <div>
            <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                            <div>
                                <a href="/" className="navbar-brand">Resource Management System</a>
                                {/* <Link to = 'add-user' className='btn btn-primary mb-2'>Add user</Link>                                */}
                                <Link to = 'users' className='btn btn-primary mb-2' style = {{marginLeft:"10px"}}>users</Link>
                                {/* <Link to = 'users-search' className='btn btn-primary mb-2' style = {{marginLeft:"10px"}}>users-Search</Link> */}
                                <Link to = '/list-org' className='btn btn-primary mb-2' style = {{marginLeft:"200px"}}>Organizations</Link>
                                <Link to = '/venues' className='btn btn-primary mb-2' style = {{marginLeft:"10px"}}>Venues</Link>
                                <Link to = '' className='btn btn-primary mb-2' style = {{marginLeft:"10px"}}>Meetings</Link>
                                </div>
                    </nav>
            </header>
        </div>
    )
}

export default HeaderComponent
