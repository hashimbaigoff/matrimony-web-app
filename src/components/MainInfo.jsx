import '../assets/fonts/fonts.css'


export default function MainInfo({ mainText, mainDescription }) {
    return (
        <article className="main-text">
            <h1 className="main-font">{mainText}</h1>
            <p className="second-main-font">{mainDescription}</p>
        </article>
    );
}