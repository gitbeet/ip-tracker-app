import "../css/Backdrop.css";

const Backdrop = ({ clickFn }: { clickFn: () => void }): JSX.Element => {
  return <div onClick={clickFn} className="backdrop"></div>;
};

export default Backdrop;
