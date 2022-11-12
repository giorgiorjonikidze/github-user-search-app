import React, { useState, useEffect } from "react";
import axios from "axios";
import sunIcon from "./assets/icon-sun.svg";
import searchIcon from "./assets/icon-search.svg";
import ResultCard from "./components/resultCard";
import octopusImg from "./assets/Oval.png";
import moonIcon from "./assets/icon-moon.svg";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState({
    data: {
      avatar_url: octopusImg,
      created_at: "2011-01-25",
      company: "@github",
      name: "The Octocat",
      login: "@octocat",
      public_repos: "8",
      followers: "3938",
      following: "9",
      twitter_username: "Not Available",
      location: "San Francisco",
      html_url: "https://github.blog",
      bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
    },
  });
  const [notFound, setNotFound] = useState(false);
  const [darkTheme, setDarkTheme] = useState(true);

  const fetchData = async () => {
    const url = `https://api.github.com/users/${username}`;

    try {
      const result = await axios.get(url);
      console.log(result);
      setUserData(result);
    } catch (err) {
      console.log(err.response);
      setNotFound(true);
    }
  };

  const searchInputHandler = (e) => {
    setUsername(e.target.value);
  };

  const searchHandler = () => {
    fetchData();
    console.log(username);
  };

  const themeChanger = () => {
    setDarkTheme(!darkTheme);

    if (darkTheme) {
      document.body.style.backgroundColor = "#F2F2F2";
      console.log(darkTheme);
    }
    if (!darkTheme) {
      document.body.style.backgroundColor = "#141D2F";
    }
  };

  return (
    <div className="main-container w-screen h-screen box-border px-6 pt-8  md:px-[96px] md:pt-[140px] md:flex md:justify-center  xl:flex xl:justify-center">
      <div className="">
        {/* header  */}
        <div className="flex justify-between items-center mb-[35px] max-w-[730px]">
          <h1
            className={
              "text-[26px] font-bold font-spacemono " +
              (darkTheme ? "text-white" : "text-black")
            }
          >
            devfinder
          </h1>
          {darkTheme ? (
            <div
              onClick={themeChanger}
              className="text-sm font-bold font-spacemono text-white flex cursor-pointer select-none"
            >
              light
              <img src={sunIcon} className="pl-4" />
            </div>
          ) : (
            <div
              onClick={themeChanger}
              className="text-sm font-bold font-spacemono text-light-dark-blue flex cursor-pointer select-none"
            >
              dark
              <img src={moonIcon} className="pl-4" />
            </div>
          )}
        </div>
        {/* search bar  */}
        <div className="mb-4 relative max-w-[730px]">
          <input
            onChange={searchInputHandler}
            className={"pb-1   w-full h-[60px] rounded-[15px] box-border pl-[45px]    placeholder:font-spacemono placeholder:text-[13px] max-w-[730px] focus:outline-none " + (darkTheme ? "bg-dark-black-blue placeholder:text-white text-white" : "bg-white placeholder:text-light-font-color text-dark-font-color")}
            placeholder="Search GitHub username…"
          />
          <img
            src={searchIcon}
            className="absolute top-[20px] left-[16px] h-[18px] w-[18px]"
          />
          <button
            onClick={searchHandler}
            className="text-white w-[84px] h-[46px] bg-blue rounded-[10px] font-bold font-spacemono absolute right-[7px] top-[6.5px] text-[14px]"
          >
            Search
          </button>
          {notFound && (
            <span className="font-spacemono text-alert-color absolute right-[105px] top-[18px]">
              No results
            </span>
          )}
        </div>
        {/* result block  */}

        <ResultCard userData={userData} darkTheme={darkTheme} />
      </div>
    </div>
  );
}

export default App;
