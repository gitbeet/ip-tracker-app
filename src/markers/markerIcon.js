import iconLocation from "../images/icon-location.svg";
import L from "leaflet";

const MarkerIcon = L.icon({
  iconUrl: iconLocation,
  iconRetinaUrl: iconLocation,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [30, 37],
  className: "marker-icon",
});

export default MarkerIcon;
