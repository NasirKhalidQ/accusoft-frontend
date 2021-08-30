import NavBar from "./NavBar";
import Modal from "./Modal";
import { useState } from "react";

function Contact() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <NavBar />
      <section className="relative">
        <div className="text-lg mt-30 justify-center max-w-full mx-auto px-6 py-12 divide-y md:max-w-4xl">
          <div className="grid sm:grid-cols-2">
            <div className="grid gap-6">
              <label className="block">
                <span className="text-accusoft-white text-xl">
                  Thank you for showing you interest in us!
                </span>
              </label>
              <label className="block w-full">
                <p className=" text-gray-400 text-sm">
                  Please fill out the form below and someone will get in touch
                  with you ASAP!
                </p>
              </label>
              <label className="block">
                <span className="text-accusoft-white">Full Name</span>
                <input
                  type="text"
                  className="mt-1 block w-full bg-transparent text-white rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-1 focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </label>
              <label className="block">
                <span className="text-accusoft-white">Email Address</span>
                <input
                  type="email"
                  className="mt-1 block w-full bg-transparent text-white rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-1 focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </label>
              <label className="block">
                <span className="text-accusoft-white">Your Message</span>
                <textarea
                  className="mt-1 block w-full text-white bg-transparent rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-1 focus:ring-indigo-200 focus:ring-opacity-50"
                  rows="6"
                ></textarea>
              </label>
              <button
                onClick={openModal}
                type="button"
                className="py-2 w-full px-4 rounded-lg shadow-md border-green-600 border-2 hover:bg-accusoft-bg-green text-green-600"
              >
                Submit
              </button>
              <Modal isOpen={isOpen} closeModal={closeModal} />
            </div>
            <div className="hidden sm:flex row-span-2 pl-10 ">
              <img
                className="w-full h-full"
                src="./imgs/contact.svg"
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
