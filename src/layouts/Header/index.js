import React from 'react'
import Mainbar from '../../components/Mainbar'
import Navbar from '../../components/Navbar.js'
import Topbar from '../../components/Topbar'

function Header() {
  return (
    <div>
      <Topbar />
      <Mainbar />
      <Navbar />
    </div>
  )
}

export default Header