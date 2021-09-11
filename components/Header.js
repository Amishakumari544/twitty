import React, { useEffect, useState } from "react";

// axios
import axios from "axios";

// icons
import { FiGithub } from "react-icons/fi";
// material-ui
import { Button } from "@material-ui/core";

const Header = () => {
  const [starCount, setStarCount] = useState(1);

  const fetchStarCount = () => {
    axios
      .get("https://github.com/Amishakumari544/twitty", {
        headers: {},
      })
      .then((response) => {
        setStarCount(response.data.stargazers_count);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // fetch on load once
  useEffect(() => {
    fetchStarCount();
  }, []);

  return (
    <div className="flex mt-2 animate__animated animate__fadeInRight">     
      <Button
        className="button !p-0 !ml-1"
        href="https://github.com/Amishakumari544/twitty"
        target="_blank"
        rel="noreferrer"
      >
        <div className="px-4 py-2 flex items-center capitalize text-md bg-white border border-[#936BF3] hover:border-[#EF5FAD] rounded-md ">
          {starCount} Stars <FiGithub className="ml-2 text-[#EF5FAD]" />
        </div>
      </Button>
    </div>
  );
};

export default Header;
