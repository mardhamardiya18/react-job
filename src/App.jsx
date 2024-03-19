import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import HomeCard from './components/HomeCard'
import JobList from './components/JobList'

const App = () => {
  return (
    <>
      {/* Navbar Component */}
      <Navbar />

      {/* <!-- Hero --> */}
      <HeroSection />

      {/* <!-- Developers and Employers --> */}
      <HomeCard />

      {/* <!-- Browse Jobs --> */}
      <JobList />

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
        >
      </section>
    </>
  )
}

export default App