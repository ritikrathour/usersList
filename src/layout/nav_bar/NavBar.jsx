import { Link} from "react-router-dom"
import "./index.css"  
const NavBar = () => {   
    return (
        <>
            <nav className="nav_bar">
                <div className="logo"><Link to={"/"}>Users<span>List</span></Link></div>
                <ul className="">
                    <li className="list">
                        <Link to="/">Home</Link>
                    </li>                     
                </ul> 
            </nav >

        </>
    )
}

export default NavBar;