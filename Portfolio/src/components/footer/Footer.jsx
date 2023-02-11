import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { PopUpbox } from "../Ui/OuterBox";
import { motion } from "framer-motion";

const variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};
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
    <motion.section
      variants={variants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="py-20 bg-[#BDC581] text-[#164438]"
    >
      <div className="w-[50%] max-lg:w-[70%]  gap-5 m-auto flex flex-col items-center">
        <motion.h3
          variants={variants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="text-center  mb-14"
        >
          Would love to hear from you
        </motion.h3>
        <motion.form
          variants={variants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="flex max-sm:gap-y-2 justify-between gap-y-5 flex-wrap text-center"
          ref={formRef}
        >
          <input
            type="text"
            name="name"
            className="border-b p max-sm:basis-[100%] basis-[48%] border-[#164438]/60 py-2 px-1 bg-[#D5DAB0] rounded-sm focus:outline-none"
            placeholder="Name"
          />
          <input
            type="Email"
            name="email"
            className="border-b max-sm:basis-[100%] rounded-sm basis-[48%] border-[#164438]/60 py-2 px-1 bg-[#D5DAB0] focus:outline-none"
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
        </motion.form>
        <button
          onClick={submitHandler}
          className="flex flex-col items-center self-center justify-center px-6 py-1.5 text-gray-50 bg-[#909947]"
        >
          <div className="self-center">Send</div>
        </button>
      </div>

      {onSuccess && (
        <PopUpbox onClose={setOnSuccess}>message sent successfullly</PopUpbox>
      )}
    </motion.section>
  );
}

export default Footer;
