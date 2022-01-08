import React, { useState } from "react";

function New(){
    const [name, setName] = useState("");  
    const [number, setNumber] = useState("");

    const handleNameChange = (e) => {
      setName(e.target.value)
    };

    const handleNumberChange = (e) => {
      setNumber(e.target.value);
    };


    const handleSubmit = (e) => {
      e.preventDefault()

      //Validate the name and number
      if(!name){
        alert("Please enter a name")
      }

      if(!number){
        alert("Please enter a number")
      }


      //If data is valid pass it to local storage
      if(name && number){
        localStorage.setItem('contactName', name)
        localStorage.setItem('contactNumber', number)
        //Route to page
        window.location.replace(`${window.location.href}contacts`)
      }   

    }
 
      return (
        <div className="card-container">
          <div className="main-card">
            <h2> Add New Contact</h2>

            <form className=" form" onSubmit={handleSubmit} >
              <div className="form form-one">
                <label> Contact Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  name="Name"
                  placeholder=" Enter Name"
                ></input>
              </div>

              <div className="form form-two">
                <label> Contact Number</label>
                <input
                  type="text"
                  value={number}
                  onChange={handleNumberChange}
                  name="Number"
                  placeholder="Enter Number"
                ></input>
              </div>
              <button type="submit"> Add Contact </button>
            </form>
            
          </div>
        </div>
      );

}
export default  New;


