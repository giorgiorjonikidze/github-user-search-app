import React from "react";
import locationIcon from "./../assets/icon-location.svg";
import companyIcon from "./../assets/icon-company.svg";
import twitterIcon from "./../assets/icon-twitter.svg";
import websiteIcon from "./../assets/icon-website.svg";
import octopusImg from "./../assets/Oval.png";

const ResultCard = ({ userData, darkTheme }) => {
  const createdDate = (date) => {
    const fetchedDate = new Date(date);
    const months = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let month = months[fetchedDate.getMonth()];
    let day = fetchedDate.getDate();
    let year = fetchedDate.getFullYear();
    return `joined ${day} ${month} ${year}`;
  };


  return (
    <div className={"w-full   rounded-[15px] box-border pt-8 px-6  flex flex-col md:px-10 md:pt-10 max-w-[730px] xl:pl-[200px] " + (darkTheme ? "bg-dark-black-blue" : "bg-white")}>
      {/* img and  name  */}
      <div className="flex mb-[33px] xl:relative">
        <img
          src={userData ? userData.data.avatar_url : companyIcon}
          className="w-[70px] h-[70px] rounded-full bg-white md:w-[117px] md:h-[117px] xl:absolute xl:left-[-156px] "
        />
        <div className="pl-5 xl:pl-0">
          <p className={" font-bold font-spacemono md:text-[26px] " + (darkTheme ? "text-white" : "text-black")}>
            {userData.data.name}
          </p>
          <p className="text-[13px] font-spacemono text-blue mb-[6px] md:text-base">
            {userData.data.login}
          </p>
          <p className={" font-spacemono text-[13px] md:text-[15px] " + (darkTheme ? "text-white" : "text-light-font-color")}>
            {createdDate(userData.data.created_at)}
          </p>
        </div>
      </div>
      {/* long text  */}

      <p className={"font-spacemono text-[13px]  mb-[23px] md:text-[15px] " + (darkTheme ? "text-white" : "text-light-font-color")}>
        {userData.data.bio ? userData.data.bio : "This profile has no bio"}
      </p>

      {/* statistics  */}
      <div className={"w-full h-[85px] mb-6  rounded-[10px] box-border flex justify-evenly items-center xl:w-[480px] " + (darkTheme ? "bg-dark-black-black" : "bg-light-bg-white")}>
        <div className="flex flex-col items-center">
          <p className={"font-spacemono text-[11px] text-white mb-[8px] " + (darkTheme ? "text-white" : "text-light-font-color")}>
            Repos
          </p>
          <p className={"text-white font-bold " + (darkTheme ? "text-white" : "text-dark-font-color")}>{userData.data.public_repos}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className={"font-spacemono text-[11px] text-white mb-[8px] " + (darkTheme ? "text-white" : "text-light-font-color")}>
            Followers
          </p>
          <p className={"text-white font-bold " + (darkTheme ? "text-white" : "text-dark-font-color")}>{userData.data.followers}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className={"font-spacemono text-[11px] text-white mb-[8px] " + (darkTheme ? "text-white" : "text-light-font-color")}>
            Following
          </p>
          <p className={"text-white font-bold " + (darkTheme ? "text-white" : "text-dark-font-color")}>{userData.data.following}</p>
        </div>
      </div>

      {/* perosnal datas  */}
      <div className="mb-[50px] md:flex md:mb-[15px]">
        <div className="flex flex-col max-w-[250px]">
          <div className={"flex   font-spacemono mb-4 text-[13px] md:text-[15px] " + (darkTheme ? "text-white" : "text-dark-font-color")}>
            <img src={locationIcon} className="fill-white mr-[26px] w-[13px] h-[20px]" />
            {userData.data.location ? userData.data.location : "Not Available"}
          </div>
          <div className={"flex font-spacemono mb-4  overflow-hidden text-[13px] md:text-[15px] "  + (darkTheme ? "text-white" : "text-dark-font-color")}>
            <img src={websiteIcon} className="fill-white mr-[20px] w-[20px] h-[20px]" />
            <a href={userData.data.html_url ? userData.data.html_url : "Not Available"} >{userData.data.html_url ? userData.data.html_url : "Not Available"} </a> 
          </div>
        </div>
        <div className="flex flex-col md:ml-[65px]">
          <div>
            <div className={"flex  font-spacemono mb-4 text-[13px] md:text-[15px] " + (darkTheme ? "text-white" : "text-dark-font-color")}>
              <img src={twitterIcon} className="fill-white mr-[20px] w-[20px] h-[20px]" />
              {userData.data.twitter_username
                ? userData.data.twitter_username
                : "Not Available"}
            </div>
            <div className={"flex font-spacemono text-[13px] md:text-[15px] " + (darkTheme ? "text-white" : "text-dark-font-color")}>
              <img src={companyIcon} className=" mr-[20px] w-[20px] h-[20px]" />
              {userData.data.company ? userData.data.company : "Not Available"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
