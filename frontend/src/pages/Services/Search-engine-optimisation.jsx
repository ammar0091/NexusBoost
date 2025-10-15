import React from 'react'
import Hero from '../../components/Hero'

const seo = () => {
  return (
    <div>
         <Hero
      title={"SEO - Search Engine Optimisation"}
       breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "services", path: "/services" },
          { label: "Search-engine-optimisation ", path: "/services/seo" },
        ]}/>
    </div>
  )
}

export default seo