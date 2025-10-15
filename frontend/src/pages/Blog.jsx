import React from 'react'
import Hero from '../components/Hero'

const Blog = () => {
  return (
    <div>
      <Hero
      title={"Our Blogs"}
       breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Blog", path: "/blog" },
        ]}/>
      
    </div>
  )
}

export default Blog