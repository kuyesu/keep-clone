import React from 'react'
import { FaBeer } from "react-icons/fa";
export default function Index() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{}}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FaBeer />
        </div>
      </div>
      <div style={{}}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 100,
          }}
        >
          {/* <p>Flex directions</p> */}
          <Bars3Icon color="black" />
          <h2>Keep</h2>
        </div>
      </div>
      <div style={{}}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 100,
          }}
        >
          {/* <p>Flex directions</p> */}
          <Bars3Icon color="black" size={10} />
        </div>
      </div>
    </div>
  );
}
