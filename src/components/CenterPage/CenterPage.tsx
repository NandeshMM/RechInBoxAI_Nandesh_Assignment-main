import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomMail from "../CustomMail/CustomMail";
import { MdOutlineExpand } from "react-icons/md";
import { FaReply } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import DeletePopUp from "../DeletePopup/DeletePopUp";

interface MailData {
  id: number;
  fromName: string;
  fromEmail: string;
  toName: string;
  toEmail: string;
  subject: string;
  body: string;
  sentAt: string;
}

interface Props {
  selectedThread: string;
}

const CenterPage: React.FC<Props> = ({ selectedThread }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedMail, setSelectedMail] = useState<MailData[]>([]);

  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${selectedThread}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setShowDelete(false);
    } catch (error) {
      console.error("Error deleting mail:", error);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "d" || event.key === "D") {
        setShowDelete(!showDelete);
        console.log("Pressed D");
      }

      if (event.key === "r" || event.key === "R") {
        setShowPopUp(!showPopUp);
        console.log("Pressed R");
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [showDelete, showPopUp]);

  useEffect(() => {
    const fetchMail = async () => {
      if (selectedThread) {
        try {
          const token = localStorage.getItem("token");
          const res = await axios.get<MailData[]>(
            `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${selectedThread}`,
            {
              headers: {
                Authorization: token,
              },
            }
          );
          // @ts-ignore
          setSelectedMail(res.data.data);
        } catch (error) {
          console.error("Error fetching mail:", error);
        }
      } else {
        setSelectedMail([
          {
            id: 0,
            fromName: "",
            fromEmail: "jeanne@icloud.com",
            toName: "",
            toEmail: "lennon.j@mail.com",
            subject: "New Product Launch",
            body: "I would like to introduce you to SaaSgrow, a productized design service specifically tailored for saas startups. Our aim is to help you enhance the user experience and boost the visual appeal of your software products.",
            sentAt: "2022-01-01T00:00:00.000Z",
          },
        ]);
      }
    };
    fetchMail();
  }, [selectedThread, showDelete]);

  return (
    <div className="relative overflow-y-scroll h-full">
      <div className="flex justify-between p-4 border-b-2 border-gray-200">
        <div>
          <div className="text-lg text-black">Orlando</div>
          <div className="text-sm text-gray-600">orladom@gmail.com</div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center border border-gray-600 rounded px-3 py-2 text-sm text-black">
            <GoDotFill /> Meeting Completed
            <SlArrowDown className="ml-2" />
          </div>
          <div className="flex items-center border border-gray-600 rounded px-3 py-2 text-sm text-black">
            Move
            <SlArrowDown className="ml-2" />
          </div>
          <div className="flex items-center border border-gray-600 rounded px-3 py-2 text-sm text-black">
            ...
          </div>
        </div>
      </div>

      <div className="relative flex justify-center items-center py-4">
        <div className="absolute inset-x-0 top-1/2 bg-gray-200 h-px" />
        <div className="relative bg-gray-200 px-4 text-sm text-black">Today</div>
      </div>

      <div>
        {selectedMail.map((mail) => (
          <Mail key={mail.id} {...mail} />
        ))}
      </div>

      <div className="relative flex justify-center items-center py-4">
        <div className="absolute inset-x-0 top-1/2 bg-gray-200 h-px" />
        <div className="relative flex items-center gap-2 text-sm text-blue-500">
          <MdOutlineExpand /> View all <span className="text-blue-500">4</span> replies
        </div>
      </div>

      {showPopUp && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <CustomMail
            threadId={selectedThread}
            onClose={() => setShowPopUp(false)}
          />
        </div>
      )}

      <div
        className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg px-6 py-2 flex items-center cursor-pointer z-10"
        onClick={togglePopUp}
      >
        <FaReply className="mr-2 text-xl" /> Reply
      </div>

      {showDelete && (
        <DeletePopUp
          onCancel={() => setShowDelete(false)}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

const Mail: React.FC<MailData> = ({ fromEmail, toEmail, subject, body }) => {
  return (
    <div className="bg-white border border-gray-600 rounded-lg my-2 mx-8">
      <div className="p-4">
        <div className="flex justify-between mb-4">
          <div className="flex flex-col">
            <div className="font-bold text-black">{subject}</div>
            <div className="text-sm text-gray-600">from: {fromEmail}</div>
            <div className="text-sm text-gray-600">to: {toEmail}</div>
          </div>
          <div className="text-sm text-gray-600">20 June 2022 : 9:16 AM</div>
        </div>
        <div className="text-gray-900" dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </div>
  );
};

export default CenterPage;
