import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import {BASE_URL, API_KEY} from './constants';
import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';


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
    <div className="App">
      <Header />
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <Cards nasaApod={nasaApod}/>
      <Footer />
    </div>
  );
}

export default App;
