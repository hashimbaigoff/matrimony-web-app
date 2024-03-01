import "../"

export default function SomeoneCard({ icon, heading, description }) {
    return (
        <div className="someone-icon">
            <div className="icon-container">
                <img src={icon} alt="someone icon" className="someone-special-icon" />
            </div>
            <p className="someone-heading">{heading}</p>
            <p className="someone-description">{description}</p>
        </div>
    );
}