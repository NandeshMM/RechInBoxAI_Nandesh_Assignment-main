import axios from "axios";
import img from "../../assets/i.svg";
import { useEffect } from "react";

function SubView() {
  useEffect(() => {
    async function call() {
      const token = localStorage.getItem("token");
      await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/reset", {
        headers: {
          Authorization: token,
        },
      });
    }
    call();
  }, []);

  const isDarkMode = document.body.classList.contains('dark');

  return (
    <div className={`flex flex-col items-center justify-center h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-gray-100 text-gray-600'}`}>
      <div>
        <img src={img} alt="Illustration" className="mt-12 mb-4" />
      </div>
      <div className={`text-2xl my-8 ${isDarkMode ? 'text-white' : ''}`}>
        It’s the beginning of a legendary sales pipeline
      </div>
      <div className={`text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        When you have inbound E-mails you’ll see them here
      </div>
    </div>
  );
}

export default SubView;
