import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import axios from 'axios';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Saved from './components/Saved';

const App = () => {
  const [images, setImages] = useState([])
  const [search, setSearch] = useState(["nature"])
  const API_KEY = "NRqzXKvQWU4shxgpdCQHjyTaC90BCjbACxAkill0EqA12hIOpvzdIjdW";
  useEffect(() => {
    const fetchImage = async () => {
      const res = await axios.get(`https://api.pexels.com/v1/search?query=${search}&per_page=80`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      setImages(res.data.photos)
      console.log(images)
      // setSearch(res.data.photos)
      // console.log(search)
      // console.log("response from API = ",res.data.photos)
      
    }

    fetchImage()

  }, [search])

  return (
    <>
    <Router>
    <Navbar setSearch={setSearch}/>
    <Routes >
      <Route path='/' element={<Home images={images}/>} />
      <Route path='/saved' element={<Saved/>}/>
    </Routes>
    </Router>

    </>
  )
}

export default App
