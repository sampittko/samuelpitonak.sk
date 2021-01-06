import React from "react"
import Footer from "./footer/"

const Layout = ({ children }) => (
  <div className="flex flex-col items-center justify-between min-h-screen p-10 max-w-screen bg-gray-50 md:p-20 lg:p-24">
    <main className="md:self-start">{children}</main>
    <Footer className="text-center md:text-right md:self-end" />
  </div>
)

export default Layout
