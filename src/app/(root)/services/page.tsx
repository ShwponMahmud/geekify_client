
import SearchService from '@/app/components/ServiceComponents/SearchService/SearchService';
import Services from '@/app/components/ServiceComponents/Services/Services';
import QuickContact from '@/app/components/sharedComponents/QuickContact/QuickContact';
import React from 'react'

function page() {
  return (
    <div className='pt-28'>
      
     <SearchService/>
     <Services/>
     <QuickContact/>
    </div>
  );
}

export default page