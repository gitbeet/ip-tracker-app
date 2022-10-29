import iconLocation from "../images/icon-location-dark-mode.svg";
import L from "leaflet";

const markerIconDarkMode = L.icon({
  iconUrl: iconLocation,
  iconRetinaUrl: iconLocation,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [30, 37],
  className: "marker-icon",
});

export default markerIconDarkMode;
