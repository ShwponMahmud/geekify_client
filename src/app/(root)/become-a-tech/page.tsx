
import AboutPositionAndBenefit from '@/app/components/BecomeaTechComponents/AboutPositionAndBenefit/AboutPositionAndBenefit'
import BecomeTechShowcase from '@/app/components/BecomeaTechComponents/BecomeaTechShowcase/BecomeTechShowcase'
import WhatExpectedFromYou from '@/app/components/BecomeaTechComponents/WhatExpectedFromYou/WhatExpectedFromYou'
import QuickContact from '@/app/components/sharedComponents/QuickContact/QuickContact'

function page() {
  return (
    <>
    <div className="become_a_tech_page">
      <BecomeTechShowcase/>
      <AboutPositionAndBenefit/>
      <WhatExpectedFromYou/>
    </div>
    </>
  )
}

export default page