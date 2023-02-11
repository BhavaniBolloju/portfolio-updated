import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { PopUpbox } from "../Ui/OuterBox";

function Footer() {
  const formRef = useRef();

  const [onSuccess, setOnSuccess] = useState(null);

  const submitHandler = function (e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gfcpshs",
        "template_0i008bk",
        formRef.current,
        "W5i00PEbFcMWjWm37"
      )
      .then(
        (res) => {
          setOnSuccess("Thank you for reach out!!");
        },
        (error) => {
          console.log();
          setOnSuccess("Failed to send");
        }
      );

    e.target.reset();
  };

  return (
    <div className="py-20 bg-[#BDC581] text-[#164438]">
      <div className="w-[50%] m-auto">
        <h3 className="text-center  mb-14">Would love to hear from you</h3>
        <form
          className="flex justify-center gap-x-6 gap-y-5 flex-wrap"
          onSubmit={submitHandler}
          ref={formRef}
        >
          <input
            type="text"
            name="name"
            className="border-b p basis-[48%] border-[#164438]/60 py-2 px-1 bg-[#D5DAB0] rounded-sm focus:outline-none"
            placeholder="Name"
          />
          <input
            type="Email"
            name="email"
            className="border-b rounded-sm basis-[48%] border-[#164438]/60 py-2 px-1 bg-[#D5DAB0] focus:outline-none"
            placeholder="Email"
          />
          <input
            type="text"
            name="subject"
            className="border-b rounded-sm basis-[100%] border-[#164438]/60 py-2 px-1 bg-[#D5DAB0] focus:outline-none"
            placeholder="Subject"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="border-b rounded-sm basis-[100%] border-[#164438]/60 py-2 px-1 bg-[#D5DAB0] focus:outline-none resize-none"
            rows="5"
          />
          <button className="self-center px-6 py-1.5 text-gray-50 bg-[#909947]">
            Send
          </button>
        </form>
      </div>

      {onSuccess && (
        <PopUpbox onClose={setOnSuccess}>message sent successfullly</PopUpbox>
      )}
    </div>
  );
}

export default Footer;
