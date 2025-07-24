import React from 'react'
import NavBar from '../../layouts/NavBar'
import Footer from '../../layouts/Footer'
import Hero2 from '../../layouts/Hero2'
import PricingCard from '../../features/PricingCard'
import Work from '../../features/Work'

const Project = () => {
  return (
    <div>
      <NavBar />
      <Hero2 heading="PROJECTS" text="Some of my most recent work" />
      <Work/>
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Project
