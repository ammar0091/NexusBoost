import React from 'react'
import Hero from '../components/Hero'

const Testimonial = () => {
  return (
    <div>
      <Hero
      title={"Testimonials"}
       breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "testimonial", path: "/testimonial" },
        ]}/>
    </div>
  )
}

export default Testimonial