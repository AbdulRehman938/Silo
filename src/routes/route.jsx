import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Import the module namespace so we can support either a default export or a named export
import * as HomeModule from '../pages/Home.jsx'
import Layout from '../Layout.jsx'
import Portfolio from '../pages/Portfolio.jsx'
import Services from '../pages/Services.jsx'
import JobBoard from '../pages/JobBoard.jsx'
import Ramblings from '../pages/Ramblings.jsx'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'
import Contact2 from '../pages/Contact2.jsx'
import Terms from '../pages/Terms.jsx'
import NotFound from '../pages/NotFound.jsx'
import CareerIndex from '../pages/CareerIndex.jsx'
import JobDetail from '../pages/JobDetail.jsx'
import JobBoardDetail from '../pages/JobBoardDetail.jsx'
import JobBoardDetailClone from '../pages/JobBoardDetailClone.jsx'
import BlogDetail from '../pages/BlogDetail.jsx'
import CaseStudies from '../pages/CaseStudies.jsx'

const Home = HomeModule.default || HomeModule.Home || (() => <div>Home</div>)

function RoutesTree() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="portfolio" element={<Portfolio />} />
				<Route path="about" element={<About />} />
				<Route path="services" element={<Services />} />
				<Route path="job-board" element={<JobBoard />} />
				<Route path="ramblings" element={<Ramblings />} />
				<Route path="case-studies" element={<CaseStudies />} />
				<Route path="blog/:id" element={<BlogDetail />} />
				<Route path="contact" element={<Contact />} />
						<Route path="contact2" element={<Contact2 />} />
						<Route path="terms" element={<Terms />} />
									<Route path="careers" element={<CareerIndex />} />
									<Route path="job/:id" element={<JobDetail />} />
				<Route path="jobs/:jobId" element={<JobBoardDetail />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	)
}

export function AppRoutes() {
	return <RoutesTree />
}

export default function Router() {
	return (
		<BrowserRouter>
			<RoutesTree />
		</BrowserRouter>
	)
}
