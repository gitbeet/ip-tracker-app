import "../css/Backdrop.css";

export default function Backdrop({ clickFn }) {
  return <div onClick={clickFn} className="backdrop"></div>;
}
