import '../assets/styles/caraousel.css'
import nextBtn from '../assets/icons/next-button.png'

import indianCouple from "../assets/images/indian.jpg"
import EmmaandJames from "../assets/images/EmmaandJames.jpg"
import SophiaandMichael from "../assets/images/SophiaandMichael.jpg"
import OliviaandEthan from "../assets/images/OliviaandEthan.jpg"
import IsabellaandAlexander from "../assets/images/IsabellaandAlexander.jpg"
import AvaandWilliam from "../assets/images/AvaandWilliam.jpg"


import CaraouselCard from "./CaraouselCard";
import { useEffect, useState } from 'react';

const cardData = [
    {
        title: "Emma and James",
        description: "We found true love on this website! Thank you for bringing us together. Our journey started here, and now we're happily married. This platform truly works wonders!",
        imgUrl: EmmaandJames
    },
    {
        title: "Sophia and Michael",
        description: "We're forever grateful to this matrimony website for helping us find each other. From our first chat to saying 'I do,' this platform has been instrumental in our love story. Highly recommended!",
        imgUrl: SophiaandMichael
    },
    {
        title: "Olivia and Ethan",
        description: "We never imagined we would meet our soulmate online, but thanks to this matrimony website, we did! It's a modern-day love story made possible by technology. Thank you for helping us find each other.",
        imgUrl: OliviaandEthan
    },
    {
        title: "Isabella and Alexander",
        description: "Our heartfelt thanks to this platform for connecting us! We started as strangers online and now we're happily married. We couldn't be more grateful for the opportunity to find love here.",
        imgUrl: IsabellaandAlexander
    },
    {
        title: "Ava and William",
        description: "We took a chance on this matrimony website, and it turned out to be the best decision of our lives. Meeting each other here was fate, and now we're building a beautiful future together. Thank you!",
        imgUrl: AvaandWilliam
    },
    {
        title: "Mia and Benjamin",
        description: "We're overjoyed to share our success story! This matrimony website brought us together, and we're forever thankful. To anyone still searching for love, keep faith - your perfect match might be just a click away!",
        imgUrl: EmmaandJames
    },
    {
        title: "Charlotte and Daniel",
        description: "We owe our happiness to this matrimony website. It provided us with the opportunity to connect and discover love in the most unexpected way. Thank you for making our journey to marriage possible!",
        imgUrl: SophiaandMichael
    },
    {
        title: "Harper and Jack",
        description: "From our first conversation on this platform to walking down the aisle, our love story has been nothing short of amazing. Thank you to [Website Name] for being the bridge that brought us together. We're forever grateful!",
        imgUrl: OliviaandEthan
    },
    {
        title: "Evelyn and Samuel",
        description: "Meeting on this matrimony website was the best thing that ever happened to us. We found not just love, but a deep connection and understanding that we cherish every day. Thank you for making our dreams a reality!",
        imgUrl: indianCouple
    }
];


export default function Caraousel() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 3 >= cardData.length ? 0 : prevIndex + 3));
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const nextSet = () => {
        setIndex(prevIndex => (prevIndex + 3 >= cardData.length ? 0 : prevIndex + 3));
    };

    const prevSet = () => {
        setIndex(prevIndex => (prevIndex - 3 < 0 ? cardData.length - 3 : prevIndex - 3));
    };

    return (
        <section className='testimonial-container'>
            <h2 className="testimonial-heading">Matrimonial Services with Millions of Success Stories</h2>
            <div className='caraousel-container'>
                <button className='prev-btn' onClick={() => prevSet(index)}><img src={nextBtn} alt='next'/></button>
                <div className='slider'>
                    {
                        cardData.slice(index, index + 3).map((card, index) => {
                            return <CaraouselCard key={index} {...card} />
                        })
                    }
                </div>
                <button className='next-btn' onClick={() => nextSet(index)}><img src={nextBtn} alt='next'/></button>
            </div>
        </section>
    );
}

