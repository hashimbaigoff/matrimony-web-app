export default function TrustComponent({ trustDes, iconUrl }) {
    return (
        <div className="trust-icon-container">
            <div className="trust-icon-wrapper">
                <img src={iconUrl} alt={trustDes} className="trust-icon" />
            </div>
            <p className="trust-description">{trustDes}</p>
        </div>
    );
}