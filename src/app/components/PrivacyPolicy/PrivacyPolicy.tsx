import React from 'react'

function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-8 md:py-14 lg:py-20 xl:py-28 mt-28">
      <div className="container mx-auto text-black font-medium">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

        <section className="mb-6">
          <h2 className="text-primaryColor underline mb-2">
            Is it necessary to collect your information?
          </h2>
          <p className="">
            When we provide you with a service we need to collect only the information required
            to provide you your required service. If you are an applicant seeking employment or
            appointment as a contractor, this is so we can assess your suitability.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-primaryColor underline mb-2">
            Personal Information which can be collected
          </h2>
          <ul className=" pl-5 ">
            <li>Customer name, contact details, and physical address.</li>
            <li>Bank account and credit card details.</li>
            <li>Employment history.</li>
            <li>Information provided through surveys.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-primaryColor underline mb-2">
            How does the collection occur?
          </h2>
          <p className="">Direct collection methods:</p>
          <ul className=" pl-5 ">
            <li>Social media</li>
            <li>Email lists</li>
            <li>Electronic forms</li>
            <li>Website and cookies</li>
          </ul>
          <p className=" mt-2">Indirect collection methods:</p>
          <ul className=" pl-5 ">
            <li>Sources available to the public</li>
            <li>Any representative of yours</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-primaryColor underline mb-2">
            Our method of storing your information
          </h2>
          <p className="">
            Your information is held in databases in ICT systems.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-primaryColor underline mb-2">
            What happens if you don’t share your information?
          </h2>
          <p className="">
            - We will not be able to provide you our services as such information is required.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-primaryColor underline mb-2">Disclosure</h2>
          <p className="">
            We only provide your personal information to the service providers we have contact
            with. Your privacy is valuable to us.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-primaryColor underline mb-2">Perks of your information</h2>
          <ul className=" pl-5 ">
            <li>Updated information is quickly added to existing records.</li>
            <li>Information is verified for accuracy.</li>
            <li>
              Customers are asked to update us with changes in their personal information as soon
              as possible.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-primaryColor underline mb-2">Security</h2>
          <p>Measures taken by us to keep data secure:</p>
          <ul className=" pl-5 ">
            <li>Access control</li>
            <li>Electronic safety, e.g., firewalls</li>
            <li>Maintaining an audit trail when any information is updated</li>
            <li>Keeping information as confidential as required</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-primaryColor underline mb-2">Marketing</h2>
          <p className="">
            You may be sent direct marketing information such as promotions. This may be by email,
            SMS, or telephone. An easy opt-out option is provided to stop receiving such
            information.
          </p>
        </section>
      </div>
      </div>
  )
}

export default PrivacyPolicy