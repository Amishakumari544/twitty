import React, { useRef } from "react";

// icons
import { FiCopy, FiX, FiSmile, FiTwitter } from "react-icons/fi";

// emoji picker
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

// material-ui
import { Button } from "@material-ui/core";

const Editor = ({
  text,
  setText,
  showEmoji,
  copyToClipboard,
  setShowEmoji,
  twitterIntent,
}) => {
  // use ref for emoji
  const ref = useRef(null);

  // add emoji near cursor
  const addEmoji = (e) => {
    const cursor = ref.current.selectionStart;
    const message = text.slice(0, cursor) + e.native + text.slice(cursor);
    setText(message);
  };

  return (
    <div className="bg-[#ECF2F5] p-10 rounded-md w-full lg:w-10/12 xl:w-10/12 animate__animated animate__fadeInLeft">
      <h1 className="text-5xl font-bold"></h1>
      <p className="text-sm m-1 text-[#555]">
        Add your text to share in the text area below 👀
      </p>
      <div className="relative h-72 w-auto mt-3 mb-2">
        <textarea
          className="h-full w-full resize-none rounded-md border border-[#ddd] p-2 focus:border-[#936BF3]"
          value={text}
          ref={ref}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div
          className="bg-white absolute bottom-4 right-4 border border-[#ddd] p-2 cursor-pointer rounded-md"
          onClick={() => setShowEmoji(!showEmoji)}
        >
          {showEmoji ? (
            <FiX className="text-xl" />
          ) : (
            <FiSmile className="text-xl" />
          )}
        </div>
      </div>
      {showEmoji && (
        <div className="absolute z-10 top-[-3.25rem] right-[10%] lg:right-5 xl:right-5">
          <Picker
            set="twitter"
            onSelect={(e) => addEmoji(e)}
            title="Choose Emoji"
            emoji="partying_face"
          />
        </div>
      )}
      <div className="flex w-full flex-wrap">
        <Button className="button !p-0" onClick={copyToClipboard}>
          <div className="px-4 py-2 flex items-center capitalize text-md bg-white border border-[#936BF3] hover:border-[#EF5FAD] rounded-md">
            Copy Code <FiCopy className="ml-2 text-[#EF5FAD]" />
          </div>
        </Button>
        <Button
          className="button !p-0 !ml-1"
          href={twitterIntent}
          target="_blank"
          rel="noreferrer"
        >
          <div className="px-4 py-2 flex items-center capitalize text-md bg-white border border-[#936BF3] hover:border-[#EF5FAD] rounded-md ">
            Try Demo <FiTwitter className="ml-2 text-[#EF5FAD]" />
          </div>
        </Button>
        </div>
    </div>
  );
};

export default Editor;
