import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'

const MenuItem = ({ items }) => {
    return (
        <li className="nav-item dropdown">
            {items.submenu ? (
                <>
                    <Link className="nav-link dropdown-toggle" to={items.url} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">{items.title}</Link>
                    <Dropdown submenus={items.submenu} />
                </>
            ) : (
                <Link className="nav-link dropdown-toggle" to={items.url} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">{items.title}</Link>
            )}
        </li>
    );
};

export default MenuItem;

