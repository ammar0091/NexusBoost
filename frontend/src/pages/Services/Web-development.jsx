import React from 'react'
import Hero from '../../components/Hero'

const WebDevelopment = () => {
  return (
    <div>
      <Hero
        title={"Web-development"}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "services", path: "/services" },
          { label: "web-development ", path: "/services/web-development" },
        ]} /></div>
  )
}

export default WebDevelopment