import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import { TbReload } from "react-icons/tb";

function AllInbox({
  data,
  loadMail,
}: {
  data: any;
  loadMail: (threadId: number) => void;
}) {
  async function reloadHandler() {
    const token = localStorage.getItem("token");
    await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/reset", {
      headers: {
        Authorization: token,
      },
    });
  }

  if (!Array.isArray(data)) {
    console.error("Data is not an array:", data); 
  }
  return (
    <div className="border-r-2 border-gray-200 bg-gray-100 h-full overflow-y-scroll dark:border-gray-700 dark:bg-black">
      <div className="flex justify-between p-2">
        <div className="ml-5 text-xl font-semibold text-blue-600 flex flex-col items-start">
          <div>
            All Inbox(s){" "}
            <FaAngleDown className="ml-2 mt-1 cursor-pointer" />
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            <pre className="font-semibold text-black dark:text-white">{data.length}/25</pre> Inboxes selected
          </div>
        </div>
        <div
          className="p-3 mt-3 mr-4 bg-white border border-gray-200 rounded-full cursor-pointer flex items-center dark:bg-gray-800 dark:border-gray-600"
          onClick={reloadHandler}
        >
          <TbReload className="text-black dark:text-gray-300" />
        </div>
      </div>
      <div className="relative mx-8 my-4">
        <input
          placeholder="Search"
          className="w-full bg-gray-200 border border-gray-300 rounded-lg pl-10 py-1 text-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
        />
        <CiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
      </div>

      <div className="flex justify-between p-4 mx-8">
        <div className="bg-gray-200 text-blue-600 px-2 py-1 rounded-full text-xs dark:bg-gray-800 dark:text-green-300">
          {data.length} New Replies
        </div>
        <div className="flex items-center text-black dark:text-gray-300 text-sm">
          Newest <FaAngleDown className="ml-3 text-xl dark:text-gray-300" />
        </div>
      </div>

      <div>
        {data.map((email: any) => (
          <Mail
            key={email.id}
            fromEmail={email.fromEmail}
            subject={email.subject}
            threadId={email.threadId}
            loadMail={loadMail}
          />
        ))}
      </div>
    </div>
  );
}

function Mail({
  fromEmail,
  subject,
  threadId,
  loadMail,
}: {
  fromEmail: string;
  subject: string;
  threadId: number;
  loadMail: (threadId: number) => void;
}) {
  const trimSubject = (subject: string, wordCount: number) => {
    const words = subject.split(" ");
    if (words.length > wordCount) {
      return words.slice(0, wordCount).join(" ") + " ...";
    }
    return subject;
  };

  const handleMailClick = () => {
    loadMail(threadId);
  };

  return (
    <div
      className="border-t-2 border-gray-400 my-4 mx-8 py-4 cursor-pointer dark:border-gray-600"
      onClick={handleMailClick}
    >
      <div className="flex justify-between">
        <div className="text-lg text-black dark:text-gray-300">
          {fromEmail}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Mar 7
        </div>
      </div>
      <div className="text-sm font-medium text-gray-700 dark:text-gray-300 py-2">
        {trimSubject(subject, 7)}
      </div>
      <div className="flex">
        <div className="bg-cyan-300 text-orange-600 px-2 py-1 rounded-full text-xs flex items-center dark:bg-gray-800 dark:text-green-300">
          <GoDotFill className="mr-1" />
          Interested
        </div>
        <div className="bg-gray-200 text-black px-3 py-1 rounded-full text-xs flex items-center ml-2 dark:bg-gray-800 dark:text-gray-300">
          <IoIosSend className="mr-1" />
          Campaign Name
        </div>
      </div>
    </div>
  );
}

export default AllInbox;
