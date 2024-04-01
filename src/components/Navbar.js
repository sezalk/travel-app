import React,{ Component } from "react"
import "./NavbarStyles.css"
import {Link} from "react-router-dom"
import {MenuItems} from "./MenuItems"

class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">TRAVEL APP</h1>               

                <ul className="nav-menu">
                {MenuItems.map((item, index)=>{
                    return(
                        <li key={index}>
                            <Link className={item.cName} to={item.url}> {item.title}  </Link>
                        </li>
                    );
                })}

                  <Link to="/login" ><button>Login</button></Link>
                  <Link to="/signup" ><button>Sign Up</button></Link>

                </ul>

            </nav>
        )
    }
}

export default Navbar;