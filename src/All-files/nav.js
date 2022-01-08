import React from 'react'
import {Link, } from "react-router-dom"


function NavBar(){
    return (
     
          <header className="heads">
        <h2> KASA</h2>
        <nav>
          <ul>
            <li>
              <Link to="/"> Create Contact</Link>
            </li>
            <li>
              <Link to="/contacts"> All Contacts</Link>
            </li>
            <li>
              <Link to="/favorites"> Favorites</Link>
            </li>
          </ul>
        </nav>
      </header>
     
    );
}
export default NavBar