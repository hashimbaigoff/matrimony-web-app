import TrustComponent from "./TrustComponent";
import FooterColumn from "./FooterColumn";

import "../assets/styles/footer.css"
import coupleIcon from "../assets/icons/couple.png"
import lockIcon from "../assets/icons/lock.png"
import verifiedIcon from "../assets/icons/verified.png"

const footerLinks = [
    ["Member Login", "Sign Up", "Partner Search", "How to use Matrimony", "Premium Memberships", "Customer Support"],
    ["About Us", "Blog", "Careers", "Contact Us"],
    ["Terms of Use", "Privacy Policy", "Report Misuse"]
]

export default function Footer() {
    return (
        <footer>
            <div className="trust-title-container">
                <h2 className="trust-title">Trusted by Millions</h2>
            </div>
            <div className="trust-container">
                <TrustComponent trustDes="Best Matches" iconUrl={coupleIcon} />
                <TrustComponent trustDes="Verified Profiles" iconUrl={verifiedIcon} />
                <TrustComponent trustDes="100% Privacy" iconUrl={lockIcon} />
            </div>

            <section className="footer-column-container">
                <FooterColumn footerColumnTitle="Need Help?" footerColumnLinks={footerLinks[0]}/>
                <FooterColumn footerColumnTitle="Company" footerColumnLinks={footerLinks[1]}/>
                <FooterColumn footerColumnTitle="Privacy & You" footerColumnLinks={footerLinks[2]}/>
            </section>
        </footer>
    );
}