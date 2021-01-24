import React from "react"

const Name = ({ username, fullname, email, ...props }) => (
  <h3 {...props}>
    <a
      href={`mailto:${email}`}
      title="Send me an e-mail"
      className="hover:text-amber-800"
    >
      {fullname}
    </a>
    <a
      className="inline-block px-3 py-1 ml-2 text-sm transition duration-150 ease-in-out bg-gray-800 rounded-full sm:ml-2 lg:ml-4 lg:text-lg text-gray-50 hover:bg-amber-800"
      href={`https://google.com/search?q=${username}`}
      title="Find me on the Internet"
      rel="noreferrer"
    >
      @{username}
    </a>
  </h3>
)

export default Name
