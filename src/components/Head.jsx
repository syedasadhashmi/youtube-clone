import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-4  shadow-lg">
      <div className="col-span-1 flex ">
        <button onClick={() => toggleHandler()} className="cursor-pointer">
          <GiHamburgerMenu size={22} />
        </button>

        <img
          className="w-24 ml-2"
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/2/20/YouTube_2024.svg"
        />
      </div>
      <div className="col-span-10 px-10 flex justify-center">
        <input
          type="text"
          placeholder="Search"
          className="w-1/2 rounded-l-full  border border-gray-400 p-1 px-2 "
        />
        <button className="rounded-r-full border border-gray-400 p-1 px-2 bg-gray-100 cursor-pointer">
          <IoSearch size={20} />
        </button>
      </div>
      <div className="col-span-1 flex">
        <button className="cursor-pointer">
          <FaUserCircle size={26} />
        </button>
      </div>
    </div>
  );
};

export default Head;
