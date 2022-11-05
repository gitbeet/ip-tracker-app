import "../css/App.css";
import MapComponent from "./MapComponent";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchComponent from "./SearchComponent";
import DataDisplay from "./DataDisplay";
import Header from "./Header";
import Background from "./Background";
import LoadingScreen from "./LoadingScreen";
import Modal from "./Modal";
import { Data } from "../models";

const validateIpRegex: RegExp = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/;

const App: React.FC = () => {
  const [ipAddress, setIpAddress] = useState<string>("8.8.8.8");
  const [coordinates, setCoordinates] = useState<[number, number] | null>(null);
  const [data, setData] = useState<Data | null>(null);
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  // const apiKey: string = process.env.REACT_APP_API_KEY as string;
  useEffect(() => {
    axios
      .get(
        // HIDE API KEY  PLS
        `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${ipAddress}`,
        {
          method: "GET",
        }
      )
      .then((res) => {
        setData(res.data);
        setCoordinates([res.data.location.lat, res.data.location.lng]);
        console.log([res.data.location.lat, res.data.location.lng]);
      });
  }, []);

  function toggleErrorModal() {
    setShowErrorModal((prev) => !prev);
  }
  // ???????????
  function handleChange(e: React.FormEvent) {
    const target = e.target as HTMLInputElement;
    setIpAddress(target.value);
  }

  function validateIpAdress(ip: string) {
    return validateIpRegex.test(ip);
  }

  function handleSubmit() {
    console.log(ipAddress);
    if (!validateIpAdress(ipAddress)) {
      setErrorMessage(
        "The IP address you have entered is invalid.Please try again."
      );
      setShowErrorModal(true);
      return;
    }
    axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${ipAddress}`,
        {
          method: "GET",
        }
      )
      .then((res) => {
        setData(res.data);
        setCoordinates([res.data.location.lat, res.data.location.lng]);
        console.log([res.data.location.lat, res.data.location.lng]);
      });
  }
  // if (!data) {
  //   return <p>loading</p>;
  // } else {
  //   return <p>page</p>;
  // }
  console.log(data);
  if (!data || !coordinates) return <LoadingScreen />;
  return (
    <div className="container">
      <div className="foreground-container">
        <Modal
          show={showErrorModal}
          onClose={toggleErrorModal}
          message={errorMessage}
        />
        <Header />
        <SearchComponent
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <DataDisplay data={data} />
      </div>
      <Background />
      <div className="map-container">
        <MapComponent coordinates={coordinates} />
      </div>
    </div>
  );
};

export default App;
