// src/App.js
import React, { useEffect, useState } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/CartPage'
import Navbar from './components/Navbar'
import Loader from './components/Loader' // Ab yeh Loader ko import kar diya hai
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4500);
  }, []);

  return (
    <ChakraProvider>
      {isLoading ? (
        <Loader /> // Ab yeh Loader component use ho raha hai
      ) : (
        <>
          <Navbar />
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </Router>
        </>
      )}
    </ChakraProvider>
  )
}

export default App
