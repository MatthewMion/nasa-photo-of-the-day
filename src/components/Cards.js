import React, {useState, useEffect} from 'react'
import axios from 'axios';
import styled from 'styled-components';
import theme from '../theme';

const WrapperCards=styled.div`
    width:60%;
    h2{
        font-size:3rem;
    }
    img{
        border-radius:50%;
    }

    a{
        color:${theme.primaryColor};
        font-size: 2rem;
    }
    p{
        background-color:${theme.primaryColor};
        padding:3% 8%;
        border-radius:30%;
        &:hover{
            transition: 2s;
            transform: scale(1.5);
        }
    }
`

const Cards = (props) => {
    const {nasaApod} = props
    const [dailyCard, setDailyCard] = useState(null)
    console.log(props)
    
    return (
        <WrapperCards>
            <h2>Title: {nasaApod.title}</h2>
            <h3>Date: {nasaApod.date}</h3>
            <div className='dailyImg'>
                <img src={nasaApod.url} alt='space' />
            </div>
            <a href={nasaApod.url}>Link here</a>
            <p>{nasaApod.explanation}</p>
        </WrapperCards> 
    )
}

export default Cards
