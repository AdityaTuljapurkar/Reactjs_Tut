import { Link } from "react-router-dom"
import "../css/Navbar.css"
function NavBar (){
    return <nav className="navBar" >
        <div className="navBar-brand">
            <Link to= "/" > Movie App</Link>
        </div>
        <div className="navBar-Links">
            <Link to="/"  className="nav-link"  >Home</Link>
            <Link to="/favorites"  className="nav-link" >Favorites</Link>
        </div>
    </nav>
}   
export default NavBar