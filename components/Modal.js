import React from "react";

// material-ui modal
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

// material-ui
import { Button } from "@material-ui/core";

// icons
import { FiThumbsUp } from "react-icons/fi";

const ModalPopup = ({ open, setOpen, twitterIntent }) => {
  const code = `<a href="https://twitter.com/intent/tweet?text=${twitterIntent}">\nShare On Twitter\n</a>`;
  return (
    <Modal
      className="flex items-center justify-center"
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className="bg-white p-5 rounded-xl shadow-md w-[45%]">
          <h1 className="text-2xl font-bold">Code Copied</h1>
          <p className="text-[#555] mb-3">
            You have copied your twitter intent code to your clipboard. You can
            now start using it in your site. Here is quick example ✌️
          </p>
          <div className="bg-[#1F0E27] text-white p-3 rounded-md break-words Fira font-medium">
            {code}
          </div>
          <Button className="button !p-0 !mt-2" onClick={() => setOpen(false)}>
            <div className="px-4 py-2 flex items-center capitalize text-md border border-[#936BF3] hover:border-[#EF5FAD] rounded-md">
              Got it, thanks! <FiThumbsUp className="ml-2 text-[#EF5FAD]" />
            </div>
          </Button>
        </div>
      </Fade>
    </Modal>
  );
};

export default ModalPopup;
