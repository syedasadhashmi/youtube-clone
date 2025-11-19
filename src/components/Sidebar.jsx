import React from "react";
import { FaHome, FaMusic } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-4 shadow-2xl w-40">
      <ul>
        <h1 className="font-bold mt-4">Settings</h1>
        <li className="  text-sm mt-2">
          <Link to={"/"} className="flex">
            <FaHome className="self-center mr-2" size={20} /> Home
          </Link>
        </li>
        <li className="flex  text-sm mt-2">
          <MdLiveTv className="self-center mr-2" size={20} />
          Live
        </li>
        <li className="flex  text-sm mt-2">
          <Link to={"/demo"} className="flex">
            <SiYoutubeshorts className="self-center mr-2" size={20} />
            Demo
          </Link>
        </li>
        <li className="flex  text-sm mt-2">
          <FaMusic className="self-center mr-2" size={20} /> Music
        </li>

        <h1 className="font-bold mt-4">Subscriptions</h1>
        <li className="flex  text-sm mt-2">
          <FaHome className="self-center mr-2" size={20} /> Home
        </li>
        <li className="flex  text-sm mt-2">
          <MdLiveTv className="self-center mr-2" size={20} />
          Live
        </li>
        <li className="flex  text-sm mt-2">
          <SiYoutubeshorts className="self-center mr-2" size={20} />
          Shorts
        </li>
        <li className="flex  text-sm mt-2">
          <FaMusic className="self-center mr-2" size={20} /> Music
        </li>

        <h1 className="font-bold mt-4">Subscriptions</h1>
        <li className="flex  text-sm mt-2">
          <FaHome className="self-center mr-2" size={20} /> Home
        </li>
        <li className="flex  text-sm mt-2">
          <MdLiveTv className="self-center mr-2" size={20} />
          Live
        </li>
        <li className="flex  text-sm mt-2">
          <SiYoutubeshorts className="self-center mr-2" size={20} />
          Shorts
        </li>
        <li className="flex  text-sm mt-2">
          <FaMusic className="self-center mr-2" size={20} /> Music
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
