import {NavLink} from 'react-router-dom'
import styles from "./Navbar.module.css"

const Navbar = () => {

    return (
        <>
        <ul>
            <NavLink className={(e) => {return e.isActive? styles.activeLink : styles.inactiveLink}} to="/Home">
                <li>Home</li>
            </NavLink>

            <NavLink className={(e) => {return e.isActive? styles.activeLink : styles.inactiveLink}} to="/About">
                <li>About</li>
            </NavLink>

            <NavLink className={(e) => {return e.isActive? styles.activeLink : styles.inactiveLink}} to="/Profile">
                <li>Profile</li>
            </NavLink>
        </ul>
            
        </>
    )
}

export default Navbar;

