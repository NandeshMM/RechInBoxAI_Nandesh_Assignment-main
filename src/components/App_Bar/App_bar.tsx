import logo from '../../assets/logo.png';
import './App_bar.css'; // Import the CSS file

function AppBar() {
  return (
    <div className="appbar-container">
      <img
        src={logo}
        alt="Company Logo"
        className="appbar-logo"
      />
    </div>
  );
}

export default AppBar;
