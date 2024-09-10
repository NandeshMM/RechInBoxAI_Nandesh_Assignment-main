import { useEffect, useState } from "react";
import axios from "axios";
import AllInbox from "../Inbox/AllInbox";
import CenterPage from "../CenterPage/CenterPage";
import RightSection from "../RIghtSection/RightSection";
import loader from '../../assets/loader.gif';

function MainPage() {
  const [datas, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedThread, setSelectedThread] = useState(null);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "https://hiring.reachinbox.xyz/api/v1/onebox/list",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setData(res.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }, 2500);
  
    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
  
  if (loading) {
    return (
      <div className="bg-gray-200 dark:bg-black flex items-center justify-center h-screen w-full text-gray-700 dark:text-white">
        <img src={loader} alt="Loading" className="w-12 h-12" />
      </div>
    );
  }

  const loadMail = async (threadId: any) => {
    setSelectedThread(threadId);
  };

  return (
    <div className="bg-gray-200 dark:bg-black flex h-screen w-full pt-16 text-white">
      <div className="w-1/4">
        <AllInbox data={datas} loadMail={loadMail} />
      </div>
      <div className="w-1/2">
        {/* @ts-ignore */}
        <CenterPage selectedThread={selectedThread} />
      </div>
      <div className="w-1/4">
        <RightSection />
      </div>
    </div>
  );
}

export default MainPage;
