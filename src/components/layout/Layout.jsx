import React from 'react'
import Header from '../header/Header'
import Routers from '../routers/Routers'
import { BrowserRouter as Router, useLocation } from 'react-router-dom'

function LayoutContent() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  
  return (
    <>
      {!isHomePage && <Header/>}
      <Routers/>
    </>
  )
}

function Layout() {
  return (
    <Router>
      <LayoutContent/>
    </Router>
  )
}

export default Layout