import React, {useState, useEffect} from "react";
import styled from "styled-components";
import "./App.css";
import axios from 'axios';
import {BASE_URL, API_KEY} from './constants';
import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';

const WrapperDiv = styled.div`
display:flex;
flex-direction:column;
font-family: 'Nunito', sans-serif;
color:white;
text-align: center;
align-items:center;
background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://img.wallpapersafari.com/desktop/1280/1024/66/96/kdyGq9.png');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position: relative;
`;
function App() {
  const [nasaApod, setNasaApod] = useState({})
  
  useEffect(() =>{
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res=>{
      setNasaApod(res.data)
    })
    .catch(err=> console.error(err))
  }, [])
  return (
    <WrapperDiv>
      <Header />

      <Cards nasaApod={nasaApod}/>
      <Footer />
    </WrapperDiv>
  );
}

export default App;
