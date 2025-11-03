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

const Home = HomeModule.default || HomeModule.Home || (() => <div>Home</div>)

function NotFound() {
	return (
		<div style={{ padding: 24 }}>
			<h1>404 — Not Found</h1>
			<p>The page you requested does not exist.</p>
		</div>
	)
}

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
