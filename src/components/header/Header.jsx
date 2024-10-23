import React, { useState } from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'

const Header = ({ type }) => {

    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection"
        }
    ]);
    const [options, setOptions] = useState({
        adults: 1,
        children: 0,
        rooms: 1
    })
    const [openOptions, setOpenOptions] = useState(false)

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            }
        })
    }

    return (
        <div className='header'>
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                {type !== 'list' &&
                    <>
                        <h1 className='headerTitle'>A lifetime of discounts ? It's Genius</h1>
                        <p className="headerDesc">
                            Get reward for your travels - unlock intsant savings of 10% or more
                            with a free Bookings account
                        </p>
                        <button className="headerBtn">Sign in / Register</button>
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon className='headerIcons' icon={faBed} />
                                <input
                                    type="text"
                                    placeholder='Where are you going?'
                                    className='headerSearchInput'
                                />
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon className='headerIcons' icon={faCalendarDays} />
                                <span className='headerSearchText' onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "DD/MM/YYYY")} to ${format(date[0].endDate, "DD/MM/YYYY")}`}</span>
                                {openDate &&
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={(item) => setDate([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        className='date'
                                    />
                                }
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon className='headerIcons' icon={faPerson} />
                                <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adults} adults ${options.children} childrens ${options.rooms} rooms`}</span>
                                {openOptions &&
                                    <div className="options">
                                        <div className="optionItem">
                                            <span className="optionText">Adult</span>
                                            <div className="optionCounter">
                                                <button
                                                    className="optionCounterButton"
                                                    onClick={() => handleOption('adults', 'd')}
                                                    disabled={options.adults <= 1}>-</button>

                                                <span className="optionCounterNumber">{options.adults}</span>
                                                <button className="optionCounterButton" onClick={() => handleOption('adults', 'i')}>+</button>
                                            </div>
                                        </div>
                                        <div className="optionItem">
                                            <span className="optionText">Children</span>
                                            <div className="optionCounter">
                                                <button
                                                    className="optionCounterButton"
                                                    onClick={() => handleOption('children', 'd')}
                                                    disabled={options.children < 1}>-</button>

                                                <span className="optionCounterNumber">{options.children}</span>

                                                <button className="optionCounterButton" onClick={() => handleOption('children', 'i')}>+</button>
                                            </div>
                                        </div>
                                        <div className="optionItem">
                                            <span className="optionText">Room</span>
                                            <div className="optionCounter">
                                                <button
                                                    className="optionCounterButton"
                                                    onClick={() => handleOption('rooms', 'd')}
                                                    disabled={options.rooms <= 1}>-</button>

                                                <span className="optionCounterNumber">{options.rooms}</span>

                                                <button className="optionCounterButton" onClick={() => handleOption('rooms', 'i')}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="headerSearchItem">
                                <button className="headerBtn">Search</button>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Header