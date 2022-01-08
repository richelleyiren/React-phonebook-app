import {Link} from 'react-router-dom'

function NavBar() {
    return (
        // <div className="main-page">

                <header className="head">
                    <h2> KASA </h2>
                    <nav className="head-nav">
                        <ul>
                        <li>
                            <Link to='/'>Create Contact</Link>  
                        </li>

                        <li> 
                            <Link to='/contacts'>All Contacts</Link>  
                        </li>
                        
                        <li> 
                            <Link to='/favorites'>Favorites</Link>  
                        </li>
                        </ul>
                    </nav> 
                </header>
        // </div>

    )
    
}
export default NavBar