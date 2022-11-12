import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbaar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-white">
     
      <div className="container-fluid">
        
        <h1 className="title">USER MANAGEMENT SYSTEM</h1>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            </li>
          </ul>
    
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
          
        </div>
      </div>
    </nav>  
        </header>
      )
}

export default Navbaar
