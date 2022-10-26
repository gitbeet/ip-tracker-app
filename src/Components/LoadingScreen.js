import React from "react";
import { SyncLoader } from "react-spinners";
import "../css/LoadingScreen.css";

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <SyncLoader color="#37316b" />
    </div>
  );
}
