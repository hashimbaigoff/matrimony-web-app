import '../assets/styles/landing-page.css'

import Form
 from './Form';
export default function LandingPage() {
    return (
        <main>
            <header>
                <h2 className="logo-text">Altariz Matrimony</h2>
                <article className="nav">
                    <ul className='header-menu'>
                        <li><a className="header-menu-links" href="/">Home</a></li>
                        <li><a className="header-menu-links" href="/">About Us</a></li>
                        <li><a className="header-menu-links" href="/">Service</a></li>
                        <li><a className="header-menu-links" href="/">How It Work</a></li>
                        <li><a className="header-menu-links" href="/">Product</a></li>
                        <li><a className="header-menu-links" href="/">Team</a></li>
                    </ul>
                </article>
                <article>
                    <ul>
                        <li><a className="header-menu-links" href="">SignIn</a></li>
                    </ul>
                </article>
            </header>
            <article className="main-text">
                <h1 className="main-font">Get your perfect match</h1>
                <p className="second-main-font">Trusted Matrimony & Matchmaking Service</p>
            </article>

            <Form/>
        </main>
    );
}
