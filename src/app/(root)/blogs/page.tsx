import BlogsCategories from '@/app/components/BlogPageComponents/BlogsCategories/BlogsCategories'
import Showcase from '@/app/components/BlogPageComponents/BlogsShowcase/BlogShowcase'
import BlogsView from '@/app/components/BlogPageComponents/BlogsView/BlogsView'
import React from 'react'

function page() {
  return (
    <div className="mx-auto">
      <Showcase/>
      <BlogsCategories/>
      <BlogsView/>
    </div>
  )
}

export default page