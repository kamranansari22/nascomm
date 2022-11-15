import { Link } from 'react-router-dom'

const Dropdown = ({ submenus }) => {
    return (
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            {submenus.map((submenu, index) => (
                <li key={index} >
                    <Link className="dropdown-item" to={submenu.url}>{submenu.title}</Link>
                </li>
            ))}
        </ul>
    );
};

export default Dropdown;


