import React from 'react'
import HeroSection from '../../components/HomeHero'

const Socialmediamarketing = () => {
  return (
    <div>
        <HeroSection
        title={"Social Media Marketing"}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "services", path: "/services" },
          { label: "Search-media-marketing ", path: "/services/social-media" },
        ]}
        
        />
    </div>
  )
}

export default Socialmediamarketing