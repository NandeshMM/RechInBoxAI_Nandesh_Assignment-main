import axios from "axios";
import img from "../../assets/i.svg";
import { useEffect } from "react";
import './Background_Window.css';

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
  const containerClass = isDarkMode ? 'subview dark' : 'subview';
  
  return (
    <div className={containerClass}>
      <div>
        <img src={img} alt="Illustration" />
      </div>
      <div className="title thick">
        It’s the beginning of a legendary sales pipeline
      </div>
      <div className="subtitle align-middle">
        When you have inbound E-mails
      </div>
      <div className="subtitle">you’ll see them here</div>
    </div>
  );
}

export default SubView;