import React, { useEffect, useState } from "react";

// functions
import { convertSpaces, convertLineBreaks, convertHash } from "../functions";

// toaster
import toast, { Toaster } from "react-hot-toast";

// components
import Editor from "../components/Editor";
import ModalPopup from "../components/Modal";


// animate.css
import "animate.css";
import Header from "../components/Header";

const Home = () => {
  // modal
  const [open, setOpen] = useState(false);

  // show emoji
  const [showEmoji, setShowEmoji] = useState(false);

  // default intent
  const [twitterIntent, setTwitterIntent] = useState(
    ""
  );

  // default text
  const [text, setText] = useState(
    "Hello there 👋\n\nCheck out by @amishakumari544, sharing to twitter made easy 👀"
  );

  // fetch on every text change
  useEffect(() => {
    generateIntendUrl();
  }, [text]);

  const generateIntendUrl = () => {
    let optimisedText = convertLineBreaks(text);

    if (/\s/g.test(optimisedText)) {
      optimisedText = convertSpaces(optimisedText);
    }
    if (/[#_]/g.test(optimisedText)) {
      optimisedText = convertHash(optimisedText);
    }

    const shareLink = `https://twitter.com/intent/tweet?text=${optimisedText}`;
    setTwitterIntent(shareLink);
  };

  const copyToClipboard = () => {
    // copy to clipboard
    navigator.clipboard.writeText(twitterIntent);

    // toast
    toast.success("Copied to clipboard!", {
      style: {
        background: "#1F0E27",
        border: "1px solid #b9a6ff",
        color: "#b9a6ff",
      },
    });

    // toggling modal
    setOpen(true);
  };

  return (
    <div className="min-h-screen w-full items-center justify-center block lg:flex md:flex xl:flex">
      <ModalPopup open={open} setOpen={setOpen} twitterIntent={twitterIntent} />
      <Toaster position="bottom-center" reverseOrder={true} />
      <div className="w-full lg:w-7/12 md:w-7/12 xl:w-7/12 p-7 py-10 h-6/12 lg:h-full xl:h-full flex items-center justify-center relative">
        <Editor
          text={text}
          setText={setText}
          showEmoji={showEmoji}
          copyToClipboard={copyToClipboard}
          setShowEmoji={setShowEmoji}
          twitterIntent={twitterIntent}
        />
      </div>
      <div className="w-full lg:w-5/12 md:w-5/12 xl:w-5/12 p-7 py-10 h-6/12 lg:h-full xl:h-full flex items-center lg:items-end xl:items-end justify-center flex-col">
      <Header />
       <img src="/assets/saly-7.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
