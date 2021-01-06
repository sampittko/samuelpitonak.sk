import React from "react"
import Footer from "./footer"

const Layout = ({ children }) => (
  <div className="max-w-screen min-h-screen bg-gray-50 relative">
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
