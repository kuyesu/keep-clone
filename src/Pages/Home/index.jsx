import React from 'react'
import Navbar from "../../navigations/navbar"

export default function Home() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "8vh 84vh 8vh",
      }}
    >
      {/* NavBar 1 */}
      <div
        style={{
          border: "solid 1px black",
        }}
      >
        <Navbar />
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
        ></div>
        {/* content */}
        <div
          style={{
            border: "solid 1px black",
          }}
        >
          {/* {children} */}
        </div>
      </div>
      {/* footer */}
      <div
        style={{
          border: "solid 1px black",
        }}
      ></div>
    </div>
  );
}
