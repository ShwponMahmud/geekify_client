import ContactUsSupport from "@/app/components/ContactUsComponents/ContactUsSupport/ContactUsSupport";
import GetFreeConsultation from "@/app/components/ContactUsComponents/GetFreeConsultation/GetFreeConsultation";
import QuickContact from "@/app/components/sharedComponents/QuickContact/QuickContact";
import ContactUsShowcase from "@/app/components/ContactUsComponents/ContactUsShowcase/ContactUsShowcase";
import PaymentSuccessfulMessage from "@/app/components/PaymentSuccessfulComponents/PaymentSuccessfulMessage/PaymentSuccessfulMessage";

const Page: React.FC = () => {
  return (
    <div className="contact_us_page">
      <ContactUsShowcase />
      <div className="container mx-auto py-8 md:py-14 lg:py-20 xl:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
          <GetFreeConsultation />
          <ContactUsSupport />
        </div>
      </div>
      {/* <PaymentSuccessfulMessage /> */}
      <QuickContact
        title="If you need remote Service?"
        paragraph="Our remote service solutions are designed to help you troubleshoot and fix tech issues from the comfort of your home or office. Experience quick and reliable support wherever you are."
      />
    </div>
  );
};

export default Page;
