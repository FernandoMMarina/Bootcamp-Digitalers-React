import { NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <ul>
                <li>
                    <NavLink exact activeClassName to="/about">About</NavLink>
                </li>
                <li>
                     <NavLink exact to="/Profile">Profile</NavLink>
                </li>
                <li>
                    <NavLink exact to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink exact to="/CounterRedux">CounterRedux</NavLink>
                </li>
        </ul>
    );
}