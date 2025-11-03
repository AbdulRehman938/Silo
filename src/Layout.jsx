import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Common/Header.jsx'
// import Footer defensively: support default or named export to avoid HMR/module mismatch errors
import * as FooterModule from './components/Common/Footer.jsx'

const Footer = FooterModule.default || FooterModule.Footer || (() => <div>Footer</div>)

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      {/* reserve space for fixed header so page content isn't hidden */}
      <main className="flex-1 w-screen pt-16 md:pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
