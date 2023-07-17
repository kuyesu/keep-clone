import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Note from "../Pages/note";
// import RootLayout from "../Pages/layout"
export default function Index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/note/:id" element={<Note />} />
    </Routes>
  );
}
