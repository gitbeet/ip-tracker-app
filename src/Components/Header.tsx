import "../css/Header.css";
import DarkModeButton from "./DarkModeButton";

const Header = (): JSX.Element => (
  <div className="header">
    <h2 className="color-white">IP Address Info</h2>
    <div className="header-dark-mode-button">
      <DarkModeButton />
    </div>
  </div>
);

export default Header;
