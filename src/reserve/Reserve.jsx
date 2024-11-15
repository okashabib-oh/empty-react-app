import React, { useContext, useState } from 'react'
import "./reserve.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import useFetch from '../hooks/useFetch'
import { SearchContext } from '../context/SearchContext'
import axios from 'axios'

const Reserve = ({ setOpenModal, hotelId }) => {
    const [selectedRoom, setSelectedRoom] = useState([])
    const { data, loading, error } = useFetch(`http://localhost:8008/api/hotels/room/${hotelId}`)
    const { dates } = useContext(SearchContext)

    const getDatesInRange = (start, end) => {

        const startDate = new Date(start)
        const endDate = new Date(end)
        const date = new Date(startDate.getTime());

        let list = [];

        while (date <= endDate) {
            list.push(new Date(date).getTime())
            date.setDate(date.getDate() + 1)
        }
        return list;
    }
    console.log(dates, "Hello ==>>");

    const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);

    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some((date) =>
            allDates.includes(new Date(date).getTime())
        )
        return !isFound;
    }

    const handleSelect = (e) => {
        const selected = e.target.checked
        const value = e.target.value
        setSelectedRoom(
            selected ? [...selectedRoom, value] : selectedRoom.filter((room) => room !== value)
        )
    }

    const handleClick = async () => {
        try {
            await Promise.all(selectedRoom.map((roomId) => {
                const res = axios.put(`http://localhost:8008/api/rooms/availability/${roomId}`, { dates: allDates })
                return res.data;
            }))
            setOpenModal(false)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="reserve">
            <div className="rContainer">
                <FontAwesomeIcon
                    icon={faCircleXmark}
                    className='rClose'
                    onClick={() => setOpenModal(false)}
                />
                <span>Select your rooms: </span>
                {data?.map(room => (
                    <div className="rItem" key={room._id}>
                        <div className="iItemInfo">
                            <div className="rTitle">{room.title}</div>
                            <div className="rDesc">{room.desc}</div>
                            <div className="rMax">Max People: <b>{room.maxPeople}</b> </div>
                            <div className="rPrice">Price: <b>${room.price}</b> </div>
                        </div>
                        <div className="rSelectRooms">
                            {room?.roomNumbers?.map(roomno => (
                                <div className="room" key={roomno._id}>
                                    <label>{roomno.number}</label>
                                    <input
                                        type="checkbox"
                                        value={roomno._id}
                                        onChange={handleSelect}
                                        disabled={!isAvailable(roomno)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <button className="rButton" onClick={handleClick}>Reserve Now!</button>
            </div>
        </div>
    )
}

export default Reserve