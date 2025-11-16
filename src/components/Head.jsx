import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getSearchSuggestions = async () => {
      try {
        console.log("API CALL->" + searchInput);
        const res = await fetch(YOUTUBE_SEARCH_API + searchInput);
        const json = await res.json();
        setSuggestions(json[1]);
      } catch (err) {
        console.log(err);
      }
    };
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchInput]);

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
      <div className="col-span-10 px-14 ">
        <div className="flex justify-center">
          <input
            type="text"
            value={searchInput}
            placeholder="Search"
            className="w-1/2 rounded-l-full  border border-gray-400 p-1 px-2 "
            onChange={(e) => setSearchInput(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="rounded-r-full border border-gray-400 p-1 px-2 bg-gray-100 cursor-pointer">
            <IoSearch size={20} />
          </button>
        </div>
        {showSuggestions && suggestions?.length > 1 && (
          <div className="fixed right-107 bg-white py-2 px-2 w-120 shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions?.map((s) => (
                <li
                  key={s}
                  className="py-2  hover:bg-gray-100 flex items-center"
                >
                  <IoSearch className="mr-2" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
