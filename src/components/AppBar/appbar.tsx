import logo from '../../assets/logo.png';

function AppBar() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-black border-b-2 border-[#25262B] text-white h-16 w-screen flex items-center justify-center">
      <img
        src={logo}
        alt="Company Logo"
        className="h-6"
      />
    </div>
  );
}

export default AppBar;
