import React from "react"
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom'
import New from "./All-files/new"
import Favorites from "./All-files/favorites"
import Contacts from "./All-files/Contacts"
import NavBar from './All-files/nav'
import Edit from "./edit";



function App() {

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<New />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
