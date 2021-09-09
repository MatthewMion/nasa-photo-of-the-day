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
text-align: center;
`;
const WrapperHeader=styled.header`
`
const WrapperCards=styled.div`
`
const WrapperFooter=styled.footer`
`
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
