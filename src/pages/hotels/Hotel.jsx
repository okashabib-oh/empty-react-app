import React, { useState } from 'react'
import './hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Footer from '../../components/footer/Footer'
import MailList from '../../components/mailList/MailList'

const Hotel = () => {

    const [slideNumber, setSlideNumber] = useState(0)
    const [open, setOpen] = useState(false)

    const images = [
        {
            src: 'https://www.spectruminteriors.co.in/wp-content/uploads/2021/01/DSC04329-scaled.jpg'
        },
        {
            src: 'https://colleenmcnally.com/wp-content/uploads/2019/06/living-room-and-kitchen-design.jpg'
        },
        {
            src: 'https://www.redfin.com/blog/wp-content/uploads/2021/06/NYC3.jpg'
        },
        {
            src: 'https://media.istockphoto.com/id/1357529184/photo/3d-render-of-a-contemporary-living-room-interior.jpg?s=612x612&w=0&k=20&c=YuMefC7wfoc6Qitx7iyjmnjFBdtb94CyuITVCDrHTB8='
        },
        {
            src: 'https://media.istockphoto.com/id/1469440047/photo/modern-living-interior.jpg?s=612x612&w=0&k=20&c=ccpjQCnWvzLa4ynGgfOVaGMt_EY6bVA5-oJtRIjeTPY='
        },
        {
            src: 'https://i.ytimg.com/vi/zumJJUL_ruM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDmuE3PvabgnyNZGEppImDEol7qlw'
        }
    ]

    const handleOpen = (i) => {
        setSlideNumber(i)
        setOpen(true)
    }

    return (
        <div>
            <Navbar />
            <Header type='list' />
            <div className="hotelContainer">
                {open &&
                    <div className="slider">
                        <FontAwesomeIcon
                            icon={faCircleXmark}
                            className='close'
                            onClick={() => setOpen(false)} />
                        <FontAwesomeIcon
                            icon={faCircleArrowLeft}
                            className='arrow'
                            onClick={() => setSlideNumber(slideNumber == 0 ? 5 : slideNumber - 1)} />
                        <div className="sliderWrapper">
                            <img src={images[slideNumber].src} alt="slider img" className='sliderImg' />
                        </div>
                        <FontAwesomeIcon
                            icon={faCircleArrowRight}
                            className='arrow'
                            onClick={() => setSlideNumber(slideNumber == 5 ? 0 : slideNumber + 1)}
                        />
                    </div>
                }
                <div className="hotelWrapper">
                    <button className='bookNow'>Reserve or Book now!</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Elton St 125 New York</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location - 500m form center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over $114 at this property and get a free airport taxi
                    </span>
                    <div className="hotelImgs">
                        {images.map((img, i) => (
                            <div className="hotelImgsWrapper" key={i}>
                                <img src={img.src} alt="img"
                                    className='hotelPhoto'
                                    onClick={() => handleOpen(i)}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailTexts">
                            <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
                            <p className="hotelDesc">Welcome to The Grand Elegance Hotel,
                                a luxurious 5-star destination nestled in the heart of the city.
                                Our hotel combines modern sophistication with timeless charm,
                                offering a tranquil retreat for both leisure and business travelers.
                                Enjoy spacious,
                                elegantly designed rooms with stunning city views, plush bedding,
                                and state-of-the-art amenities,
                                including high-speed Wi-Fi,
                                flat-screen TVs, and mini-bars.
                            </p>
                        </div>
                        <div className="hotelDetailPrice">
                            <h1>Perfect for 9 night stay!</h1>
                            <span>
                                Located in the real heart of Krakow, this property has an
                                excellent location score of 9.8!
                            </span>
                            <h2>
                                <b>$945</b> (9 nights)
                            </h2>
                            <button>Reserve or Book now!</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Hotel