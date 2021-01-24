import React from "react"
import Img from "gatsby-image"
import Name from "./profile/name"
import Positions from "./profile/positions"

const Profile = ({ fluidPhoto, author, positions, ...rest }) => (
  <div {...rest}>
    <Img
      fluid={fluidPhoto}
      className="w-24 h-24 mx-auto mb-5 border-8 rounded-full border-gray-50 md:border-4 lg:border-8 md:m-0 md:w-20 md:inline-block md:h-20 lg:w-32 lg:h-32"
      alt={author.fullname}
    />
    <div className="space-y-1 leading-6 md:inline-block md:text-lg lg:space-y-3 lg:text-2xl">
      <Name
        fullname={author.fullname}
        username={author.username}
        email={author.email}
        className="font-black text-center text-gray-800 md:text-left"
      />
      <Positions data={positions} className="text-amber-800" />
    </div>
  </div>
)

export default Profile
