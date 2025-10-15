import React from 'react'
import Hero from '../../components/Hero'

const WebDesign = () => {
  return (
    <div>
         <Hero
                title="Web Design"
                breadcrumbs={[
                    { label: "Home", path: "/" },
                    { label: "Services", path: "/services" },
                    { label: "Web Design", path: "/services/web-design" },
                ]}
            />
    </div>
  )
}

export default WebDesign