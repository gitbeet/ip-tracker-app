import "../css/App.css";
import MapComponent from "./MapComponent";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchComponent from "./SearchComponent";
import DataDisplay from "./DataDisplay";
import Header from "./Header";
import Background from "./Background";
import LoadingScreen from "./LoadingScreen";

function App() {
  const [ipAddress, setIpAddress] = useState("8.8.8.8");
  const [coordinates, setCoordinates] = useState("");
  const [data, setData] = useState();
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

  function handleChange(e) {
    setIpAddress(e.target.value);
  }

  function handleSubmit() {
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
      <div class="foreground-container">
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
