import {NavLink} from "react-router-dom";

const NavBar = () =>{
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>

                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/posts">Posts</NavLink>
                </li>
                <li>
                    <NavLink  to = "/login">Login</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar