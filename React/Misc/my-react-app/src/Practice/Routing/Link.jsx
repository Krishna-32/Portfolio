import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <Link to="/Home">
                <li>Home</li>
            </Link>

            <Link to="/About">
                <li>About</li>
            </Link>

            <Link to="/Profile">
                <li>Profile</li>
            </Link>
        </>
    )
}

export default Navbar;

