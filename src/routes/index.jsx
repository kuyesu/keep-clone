import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from "../Pages/Home";
import Note from "../Pages/note"
export default function Index() {
  return (
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/note/:id' element={<Note/>} />
    </Routes>
  )
}
