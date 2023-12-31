import React from 'react'

export default function index({children}) {
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
      ></div>
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
          <h1>This is the content page</h1>
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
