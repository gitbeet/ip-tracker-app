import iconLocation from "../images/icon-location-dark-mode.svg";
import L from "leaflet";

const markerIconDarkMode = L.icon({
  iconUrl: iconLocation,
  iconRetinaUrl: iconLocation,
  iconAnchor: undefined,
  shadowUrl: undefined,
  shadowSize: undefined,
  shadowAnchor: undefined,
  iconSize: [30, 37],
  className: "marker-icon",
});

export default markerIconDarkMode;
