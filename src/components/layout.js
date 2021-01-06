import React from "react"
import Footer from "./footer/"

const Layout = ({ children }) => (
  <div className="flex flex-col items-center justify-between min-h-screen p-10 md:items-start max-w-screen bg-gradient-to-br from-gray-100 to-gray-50 md:p-20 lg:p-24">
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
