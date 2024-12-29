"use client";
import React, { useState } from "react";
import MessageSent from "./MessageSent";
import Loading from "./Loading";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch("/api/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    setIsLoading(false);
    if (response.ok) {
      setIsSubmitted(true);
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } else {
      alert("Failed to send email.");
    }
  };

  return (
    <div className="relative">
      {isLoading && <Loading />}
      {isSubmitted && <MessageSent />}
      <form
        onSubmit={handleSubmit}
        id="contact"
        className={`rounded-md w-full bg-red-300 shadow-md flex-col mt-5 ${
          isLoading ? "opacity-50" : ""
        }`}
      >
        <div className="md:mt-6 md:ml-9 text-base md:text-lg font-bold ml-5 mt-3 mb-2 py-2 px-4 bg-red-100 border-4 border-black shadow-[5px_5px_0_0_black] rounded-md inline-block">
          CONTACT ME
        </div>
        <div className="flex flex-col px-4 sm:px-10 mt-4">
          <div className="flex flex-col sm:flex-row justify-evenly sm:space-x-4 space-y-4 sm:space-y-0">
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              className="w-full md:h-12 h-9 md:text-lg text-sm bg-light px-3 border-black border-2 rounded-md shadow-[3px_3px_0px_#000]"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Enter your last name"
              className="w-full md:h-12 h-9 md:text-lg text-sm  bg-light px-3 border-black border-2 rounded-md shadow-[3px_3px_0px_#000]"
              name="lastName"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              required
            />
          </div>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:h-12 h-9 md:text-lg text-sm  bg-light px-3 border-black border-2 rounded-md shadow-[3px_3px_0px_#000]"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <textarea
            className="md:text-lg text-sm  bg-light px-3 border-black border-2 rounded-md shadow-[3px_3px_0px_#000] mt-4 py-2 w-full"
            rows={4}
            placeholder="Enter your message"
            name="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="text-sm md:text-lg font-bold w-20 h-8 md:w-32 md:h-12 mt-5 mb-5 bg-red-400 border-black border-2 shadow-[4px_4px_0_0_rgba(0,0,0,0.5)]"
            disabled={isLoading}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
