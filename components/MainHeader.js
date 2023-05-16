import Link from "next/link";
import React from "react";

const MainHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "rgb(39, 39, 39)",
        justifyContent: "space-between",
      }}
    >
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <Link style={{ textDecoration: "none" }} href={"/"}>
          <h2 style={{ color: "rgb(18, 210, 210)" }}>NextEvents</h2>
        </Link>
      </div>
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <Link style={{ textDecoration: "none" }} href={"/events"}>
          <h2 style={{ color: "rgb(18, 210, 210)" }}>All Events</h2>
        </Link>
      </div>
    </div>
  );
};

export default MainHeader;
