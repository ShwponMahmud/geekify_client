import FAQs from '@/app/components/FAQs/FAQs'
import React from 'react'
import Loader from "react-loader-advanced";

function page() {
  return (
    <div>
      {/* <Loader show={true} message={"loading"}>
      </Loader> */}
        <FAQs />
    </div>
  );
}

export default page