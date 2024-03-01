import '../assets/styles/caraousel-card.css'

export default function CaraouselCard({title, description, imgUrl}) {
    return (
        <>
            <div className="card-container">
                <img className="card-img" src={imgUrl} alt="couple testimonial" />
                {/* <div className="card-background-img"></div> */}
                <div className="card-testimonial">
                    <h3 className='testimonial-title'>{title}</h3>
                    <p className='testimonial-description'>{description}</p>
                </div>

            </div>
        </>
    );
}

