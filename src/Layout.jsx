import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/Common/Header.jsx'
// import Footer defensively: support default or named export to avoid HMR/module mismatch errors
import * as FooterModule from './components/Common/Footer.jsx'
import "./styles/scaling-overrides.css"

const Footer = FooterModule.default || FooterModule.Footer || (() => <div>Footer</div>)

export default function Layout() {
  const location = useLocation()
  const isCaseStudyPost = location.pathname.startsWith('/case-study/')

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      {/* reserve space for fixed header so page content isn't hidden */}
      <main className={`flex-1 w-full service-top'}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
