import React from "react";
import {Link} from "react-router-dom"


function Contacts() {
  
  let contactName = localStorage.getItem('contactName')
  let contactNumber = localStorage.getItem('contactNumber')


  return (
    <>
      <div className="display-container">
        <div className="display-inside">
          <div className="contact-card">
            <div className="contents">
              <h3> {contactName}</h3> <hr></hr>
              <h3> {contactNumber}</h3> <hr></hr>
              <div className="buttons">
                {/* <button className="edit"> Edit</button> */}
                <Link to="/edit" className="edit edits">
                   Edit
                </Link>

                <button className="delete"> Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
