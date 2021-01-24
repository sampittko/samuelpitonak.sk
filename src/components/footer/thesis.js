import React from "react"

const Thesis = ({ text, link, duration }) => (
  <span className="font-mono font-bold">
    <a
      href={link}
      rel="noreferrer"
      className=" text-amber-800 hover:text-amber-900"
    >
      <span className="animate-pulse">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="inline-block w-4 h-4 pt-1 mr-2 align-baseline"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
        {text}
      </span>
    </a>
    <span className="mt-2 sm:mt-0 ml-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
      {duration}
    </span>
  </span>
)

export default Thesis
