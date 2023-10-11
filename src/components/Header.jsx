import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <NavLink to='/users'>Users</NavLink>
        </div>
    );
};

export default Header;