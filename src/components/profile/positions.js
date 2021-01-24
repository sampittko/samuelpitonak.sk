import React from "react"

const Positions = ({ data, ...rest }) => (
  <p {...rest}>
    {data.map((position, i) => {
      const LinkComponent = () => (
        <a
          href={position.link}
          className="block py-1 text-center md:pb-0 md:inline hover:text-amber-900"
          title={position.hover}
          rel="noreferrer"
        >
          {position.title}
        </a>
      )

      if (i === data.length - 1) {
        return <LinkComponent key={`link-${i}`} />
      }

      return (
        <span key={`link-${i}`}>
          <LinkComponent />
          <span className="hidden md:inline">{", "}</span>
        </span>
      )
    })}
  </p>
)

export default Positions
