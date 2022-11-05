import React from "react";
import { SyncLoader } from "react-spinners";
import "../css/LoadingScreen.css";

const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-screen">
      <SyncLoader color="#37316b" />
    </div>
  );
};

export default LoadingScreen;
