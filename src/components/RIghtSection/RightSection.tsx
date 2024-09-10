import { IoIosSend } from 'react-icons/io';
import mail from '../../assets/mail_icon2.png';
import { IoMailOpen } from 'react-icons/io5';

function RightSection() {
  return (
    <div className={`border-l-2 ${document.body.classList.contains('dark') ? 'bg-black border-gray-700 text-white' : 'bg-white border-gray-200 text-black'} h-full overflow-y-scroll p-2`}>
      <div className={`mt-5 bg-gray-200 ${document.body.classList.contains('dark') ? 'bg-gray-800 text-white' : 'text-black'} rounded-lg p-2`}>
        Lead Details
      </div>
      <div className={`p-6 ${document.body.classList.contains('dark') ? 'text-white' : 'text-gray-600'}`}>
        <div className="flex justify-between text-sm">
          <div>Name</div>
          <div>Orlando</div>
        </div>
        <div className="flex justify-between text-sm mt-2">
          <div>Contact No</div>
          <div>+54-9062827869</div>
        </div>
        <div className="flex justify-between text-sm mt-2">
          <div>Email ID</div>
          <div>orlando@gmail.com</div>
        </div>
        <div className="flex justify-between text-sm mt-2">
          <div>Linkedin</div>
          <div>linkedin.com/<br />in/timvadde/</div>
        </div>
        <div className="flex justify-between text-sm mt-2">
          <div>Company Name</div>
          <div>Reachinbox</div>
        </div>
      </div>

      <div className={`mt-8 bg-gray-200 ${document.body.classList.contains('dark') ? 'bg-gray-800 text-white' : 'text-black'} rounded-lg p-2`}>
        Activities
      </div>

      <div className="mt-8 mx-4">
        <div>Campaign Name</div>
        <div className="mt-2 text-sm">3 Steps | 5 Days in Sequence</div>
        <div className="mt-4">
          {[
            { step: 'Step 1: Email', date: '3rd, Feb', icon: <IoIosSend className="mr-2 text-yellow-500" /> },
            { step: 'Step 2: Email', date: '5th, Feb', icon: <IoMailOpen className="mr-2" /> },
            { step: 'Step 3: Email', date: '5th, Feb', icon: <IoMailOpen className="mr-2" /> }
          ].map(({ step, date, icon }) => (
            <div key={step} className="flex items-center mt-4">
              <img src={mail} alt="Mail" className="w-12 p-2 rounded-full" />
              <div className={`ml-10 ${document.body.classList.contains('dark') ? 'text-white' : 'text-black'}`}>
                <div>{step}</div>
                <div className="text-gray-400 text-sm flex items-center">
                  {icon} Sent {date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RightSection;
