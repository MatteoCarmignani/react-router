// import della parte di componenti di navigazione per routing
import { NavLink } from "react-router-dom";

const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'Chi siamo' },
    { path: '/product', label: 'Product' },
]


const MainNavBar = () => {
    return (
        <nav>
            <ul>
                {links.map(link => (
                    <li>
                        <NavLink to={link.path}>{link.label}</NavLink>
                    </li>
                ))}

            </ul>
        </nav>
    )
}

export default MainNavBar