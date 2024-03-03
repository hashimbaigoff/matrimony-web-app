import { Link, useLocation } from "react-router-dom";

import '../assets/styles/navigation.css'

export default function Navigation() {

    const location = useLocation();

    return (
        <nav>
            <h2 className="logo-text">Altariz Matrimony</h2>
            <article className="nav">
                <ul className='header-menu'>
                    {
                        Object.entries(navLinks).map(([path, label]) => {
                            return <li key={path}><Link className={location.pathname === path ? 'nav-active header-menu-links' : 'header-menu-links'} to={path}>{label}</Link></li>
                        })
                    }
                </ul>
            </article>
            <article>
                <ul>
                    <li><Link className="header-menu-links" to="/login">Log In</Link></li>
                </ul>
            </article>
        </nav>
    );
}

const navLinks = {
    "/" : "Home",
    "/aboutus": "About us",
    "/services": "Services",
    "/howitworks": "How it works",
    "/team": "Team"

}