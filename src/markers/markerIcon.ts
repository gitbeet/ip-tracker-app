import iconLocation from "../images/icon-location.svg";
import L from "leaflet";

const MarkerIcon = L.icon({
  iconUrl: iconLocation,
  iconRetinaUrl: iconLocation,
  iconAnchor: undefined,
  shadowUrl: undefined,
  shadowSize: undefined,
  shadowAnchor: undefined,
  iconSize: [30, 37],
  className: "marker-icon",
});

export default MarkerIcon;
