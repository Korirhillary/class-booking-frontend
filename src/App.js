import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import { Box } from '@chakra-ui/react';
import NavBar from './Components/NavBar';
import BookLectureHall from './Pages/BookLectureHall';



function App() {
  return (
    <main style={{height:'100vh'}}>
      
      <NavBar/>
      <Box bg={'navy-blue'} minH='100vh'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book-hall' element={<BookLectureHall />} />
      </Routes>
      </Box>
      </main>
  );
}
export default App