import React from 'react'
import './featured.css'

const Featured = () => {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <img src="https://www.ecoprops.co.za/images/slide-1.jpg" className='featuredImg' />
                <div className="featuredTitles">
                    <h1>Austin</h1>
                    <h2>767 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://www.ecoprops.co.za/images/slide-1.jpg" className='featuredImg' />
                <div className="featuredTitles">
                    <h1>Austin</h1>
                    <h2>767 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://www.ecoprops.co.za/images/slide-1.jpg" className='featuredImg' />
                <div className="featuredTitles">
                    <h1>Austin</h1>
                    <h2>767 properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured