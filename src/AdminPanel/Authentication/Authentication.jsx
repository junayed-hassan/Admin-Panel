import { useState } from "react";
import { GoKey, GoDotFill } from "react-icons/go";
import { TbUsersPlus, TbLockQuestion } from "react-icons/tb";
import { Si1Password } from "react-icons/si";
import { MdOutlinePassword } from "react-icons/md";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

// Reusable Collapsible Item Component
const CollapsibleItem = ({ icon, title, isOpen, setIsOpen }) => {
  return (
    <ul>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 py-3 font-medium cursor-pointer hover:text-gray-700"
        >
        <span className="text-xl pt-2">{icon}</span>
        <p className="w-36">{title}</p>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {/* Collapsible Content */}
      {isOpen && (
        <ul className="ml-2 animate-fadeIn">
          <li className="flex items-center gap-3 py-1.5">
            <GoDotFill /> Simple
          </li>
          <li className="flex items-center gap-3 py-1.5">
            <GoDotFill /> Side
          </li>
          <li className="flex items-center gap-3 py-1.5">
            <GoDotFill /> Split
          </li>
        </ul>
      )}
    </ul>
  );
};

function Authentication() {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);
  const [otpVerification, setOtpVerification] = useState(false);

  return (
    <div className="text-gray-500">
      <h3 className="uppercase font-medium pt-4">Authentication</h3>
      <ul>
        <li>
          <CollapsibleItem icon={<GoKey />} title="Sign In" isOpen={signIn} setIsOpen={setSignIn} />
        </li>
        <li>
          <CollapsibleItem icon={<TbUsersPlus />} title="Sign Up" isOpen={signUp} setIsOpen={setSignUp} />
        </li>
        <li>
          <CollapsibleItem icon={<TbLockQuestion />} title="Forgot Password" isOpen={forgotPassword} setIsOpen={setForgotPassword} />
        </li>
        <li>
          <CollapsibleItem icon={<Si1Password />}title="Reset Password" isOpen={resetPassword} setIsOpen={setResetPassword} />
        </li>
        <li>
          <CollapsibleItem icon={<MdOutlinePassword />} title="Otp Verification"isOpen={otpVerification} setIsOpen={setOtpVerification} />
        </li>
      </ul>
    </div>
  );
}

export default Authentication;
