import React from 'react'
import './searchItem.css'
import { Link } from 'react-router-dom'

const SearchItem = ({ item }) => {
    return (
        <div className='searchItem'>
            <img src={item.photo}
                alt=""
                className='siImg'
            />
            <div className="siDesc">
                <h1 className="siTitle">
                    {item.name}
                </h1>
                <span className="siDistance">{item.distance}</span>
                <span className="siTaxtOp">Free airport taxi</span>
                <span className="siSubTitle">Studio Apartment with Air conditioning</span>
                <span className="siFeatures">
                    Entire studio &#x2022; 1 bathroom &#x2022; 21㎡ 1 full bed
                </span>
                <span className="si CancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today
                </span>
            </div>
            <div className="siDetails">
                {item.rating && <div className="siRating">
                    <span>Excellent</span>
                    <button>{item.rating}</button>
                </div>}
                <div className="siDetailTexts">
                    <span className="siPrice">${item.cheapestPrice}</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <Link to={`/hotels/${item._id}`}>
                        <button className="siCheckButton">See availability</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SearchItem