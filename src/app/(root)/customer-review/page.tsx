import CustomerReview from '@/app/components/CustomerReviewComponents/CustomerReivew/CustomerReview'
import CustomerReviewShowcase from '@/app/components/CustomerReviewComponents/CustomerReviewShowcase/CustomerReviewShowcase'
import QuickContact from '@/app/components/sharedComponents/QuickContact/QuickContact'
import React from 'react'

const title = "Need Tech Service?"
function page() {
  return (
    <div>
        <CustomerReviewShowcase/>
        <CustomerReview/>
        <QuickContact title={title}/>
    </div>
  )
}

export default page