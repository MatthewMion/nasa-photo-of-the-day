import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Cards = (props) => {
    const {nasaApod} = props
    const [dailyCard, setDailyCard] = useState(null)
    console.log(props)


    return (
        <div>
            <h2>Title: {nasaApod.title}</h2>
            <h3>Date: {nasaApod.date}</h3>
            <div className='dailyImg'>
                <img src={nasaApod.url} alt='space' />
            </div>
            <p>{nasaApod.explanation}</p>
        </div>
    )
}

export default Cards
