import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from "../Pages/Home";
import Note from "../Pages/note"
export default function Index() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "10vh 80vh 10vh",
      }}
    >
      {/* NavBar 1 */}
      <div
        style={{
          border: "solid 1px black",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/note/:id" element={<Note />} />
        </Routes>
      </div>
      {/* Main section   */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "30vw 70vw",
          border: "solid 1px black",
        }}
      >
          {/* sidebar */}
        <div
          style={{
            border: "solid 1px black",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/note/:id" element={<Note />} />
          </Routes>
        </div>
        {/* content */}
        <div
          style={{
            border: "solid 1px black",
          }}
        >

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/note/:id" element={<Note />} />
          </Routes>
        </div>
      </div>
      {/* footer */}
      <div
        style={{
          border: "solid 1px black",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/note/:id" element={<Note />} />
        </Routes>
      </div>
    </div>
  );
}
