import Image from "next/image";
import chatboxIcon from "../../../public/chat.png";

const Header = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="flex items-center space-x-2 bg-white rounded-full shadow-md">
        <div className="p-2 bg-blue-500 rounded-full">
          <Image src={chatboxIcon} alt="chatbox icon" width={40} height={40} />
        </div>
        <h1 className="text-black p-4 pl-0 font-black">LBD AI Chatbox</h1>
      </div>
    </div>
  );
};

export default Header;
