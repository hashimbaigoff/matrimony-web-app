export default function FooterColumn({footerColumnTitle, footerColumnLinks}) {
    return (
        <ul className="footer-column">
            <li><h3 className="footer-column-title">{footerColumnTitle}</h3></li>
            {
                footerColumnLinks.map((links, index)=>{
                    return <li key={index}><a className="footer-links" href="#">{links}</a></li>
                })
            }
        </ul>
    );
}