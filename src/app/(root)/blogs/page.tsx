import BlogsCategories from '@/app/components/BlogPageComponents/BlogsCategories/BlogsCategories'
import BlogShowcase from '@/app/components/BlogPageComponents/BlogsShowcase/BlogShowcase';
import BlogsView from '@/app/components/BlogPageComponents/BlogsView/BlogsView'
import QuickContact from '@/app/components/sharedComponents/QuickContact/QuickContact'



const  title: string = "If you need remote Service?";

function page() {
  return (
    <div className="mx-auto">
      <BlogShowcase/>
      <BlogsCategories/>
      <BlogsView/>
      <QuickContact title={title}/>
    </div>
  )
}

export default page