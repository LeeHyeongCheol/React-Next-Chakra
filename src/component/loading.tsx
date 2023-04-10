import React from "react";
import Image from "next/image";
import Spinner from "../../public/loading.gif";

export default function loading() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ font: "1rem Noto Sans", textAlign: "center" }}>
        Wait a minute
      </div>
      <Image src={Spinner} alt="loading" />
    </div>
  );
}
