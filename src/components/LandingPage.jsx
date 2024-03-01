import '../assets/styles/landing-page.css'

export default function LandingPage() {
    return (
        <main>
            <header>
                <h2 className="logo-text">Altariz Matrimony</h2>
                <article className="nav">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Service</a></li>
                        <li><a href="/">How It Work</a></li>
                        <li><a href="/">Product</a></li>
                        <li><a href="/">Team</a></li>
                    </ul>
                </article>
                <article>
                    <ul>
                        <li><a href="">SignIn</a></li>
                    </ul>
                </article>
            </header>
            <article className="main-text">
                <h1 className="main-font">Get your perfect match</h1>
                <p className="second-main-font">Trusted Matrimony & Matchmaking Service</p>
            </article>
        </main>
    );
}
