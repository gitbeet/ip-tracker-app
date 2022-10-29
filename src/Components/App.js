import "../css/App.css";
import MapComponent from "./MapComponent";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchComponent from "./SearchComponent";
import DataDisplay from "./DataDisplay";
import Header from "./Header";
import Background from "./Background";
import LoadingScreen from "./LoadingScreen";
import Modal from "./Modal";
import ZoomControlOverlay from "./ZoomButtons";

const validateIpRegex = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/;

function App() {
  const [ipAddress, setIpAddress] = useState("8.8.8.8");
  const [coordinates, setCoordinates] = useState("");
  const [data, setData] = useState();
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
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

  function handleChange(e) {
    setIpAddress(e.target.value);
  }

  function validateIpAdress(ip) {
    return validateIpRegex.test(ip);
  }

  function handleSubmit() {
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

  if (!data) return <LoadingScreen />;
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
}

export default App;
