import axios from "axios";
import { useState } from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import {
  FaCaretDown,
  FaEye,
  FaImage,
  FaRegSmile,
  FaUserMinus,
} from "react-icons/fa";
import { IoMdCode } from "react-icons/io";
import { IoLinkSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { TbSquareLetterA } from "react-icons/tb";

function CustomMail({ threadId, onClose }: any) {
  const [replyData, setReplyData] = useState({
    to: "",
    from: "",
    subject: "",
    body: "",
  });

  const handleSendReply = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        `https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`,
        {
          to: replyData.to,
          from: replyData.from,
          subject: replyData.subject,
          body: replyData.body,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      onClose(); // Close the CustomMail component
    } catch {
      console.log("Reply sent successfully");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReplyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReplyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-400 bg-opacity-25 z-20 dark:bg-gray-900 dark:bg-opacity-25">
      <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg w-1/2 h-4/5">
        <div className="flex justify-between items-center p-2 bg-gray-200 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600 rounded-t-lg">
          <div className="pl-4 text-sm dark:text-gray-300">Reply</div>
          <div onClick={onClose} className="cursor-pointer text-xl dark:text-gray-300">
            <RxCross2 />
          </div>
        </div>
        <div className="flex flex-col p-2 border-b border-gray-300 dark:border-gray-600">
          <label className="text-gray-800 dark:text-gray-300">To:</label>
          <input
            className="bg-transparent ml-2 border-b border-gray-300 dark:border-gray-600 outline-none"
            placeholder="Recipient's Email"
            name="to"
            value={replyData.to}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col p-2 border-b border-gray-300 dark:border-gray-600">
          <label className="text-gray-800 dark:text-gray-300">From:</label>
          <input
            className="bg-transparent ml-2 border-b border-gray-300 dark:border-gray-600 outline-none"
            placeholder="Your Email"
            name="from"
            value={replyData.from}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col p-2 border-b border-gray-300 dark:border-gray-600">
          <label className="text-gray-800 dark:text-gray-300">Subject:</label>
          <input
            className="bg-transparent ml-2 border-b border-gray-300 dark:border-gray-600 outline-none"
            placeholder="Subject"
            name="subject"
            value={replyData.subject}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col p-2 border-b border-gray-300 dark:border-gray-600">
          <textarea
            className="bg-transparent ml-2 border border-gray-300 dark:border-gray-600 outline-none h-64 resize-none"
            placeholder="Message Body"
            name="body"
            value={replyData.body}
            onChange={handleTextAreaChange}
          />
        </div>

        <div className="flex items-center gap-2 h-16 pl-8">
          <div
            onClick={handleSendReply}
            className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-2 px-5 rounded-md flex items-center cursor-pointer"
          >
            Send <FaCaretDown className="ml-2" />
          </div>
          <div className="text-gray-800 dark:text-gray-400">
            <BsLightningChargeFill />
          </div>
          <div className="text-gray-800 dark:text-gray-400">
            <FaEye />
          </div>
          <div className="flex gap-3 text-xl text-gray-800 dark:text-gray-400">
            <TbSquareLetterA />
            <IoLinkSharp />
            <FaImage />
            <FaRegSmile />
            <FaUserMinus />
            <IoMdCode />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomMail;
