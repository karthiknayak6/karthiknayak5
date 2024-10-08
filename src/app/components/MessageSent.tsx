import React from "react";

export default function MessageSent() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
      <div className="bg-red-200 p-6 sm:p-10 rounded-lg shadow-lg text-center max-w-sm w-full">
        <div className="flex items-center justify-center mb-6">
          <svg
            className="w-12 h-12 sm:w-16 sm:h-16 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4M7 12l2 2 4-4M5 12l2 2 4-4"
            ></path>
          </svg>
        </div>
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Thank you!
        </h1>
        <p className="mt-4 text-sm sm:text-base text-gray-600">
          Your message has been successfully sent. I will get back to you as
          soon as possible.
        </p>
        <button
          className="w-full sm:w-32 h-12 mt-5 bg-red-400 border-black border-2 shadow-[4px_4px_0_0_rgba(0,0,0,0.5)] text-sm sm:text-base"
          onClick={() => (window.location.href = "/")}
        >
          Done
        </button>
      </div>
    </div>
  );
}
