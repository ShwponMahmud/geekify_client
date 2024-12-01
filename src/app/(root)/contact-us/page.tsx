import ContactUsSupport from "@/app/components/ContactUsComponents/ContactUsSupport/ContactUsSupport";
import GetFreeConsultation from "@/app/components/ContactUsComponents/GetFreeConsultation/GetFreeConsultation";
import QuickContact from "@/app/components/sharedComponents/QuickContact/QuickContact";
import ContactUsShowcase from "@/app/components/ContactUsComponents/ContactUsShowcase/ContactUsShowcase";

const Page: React.FC = () => {
  return (
    <div className="contact_us_page">
      <ContactUsShowcase/>
      <div className="container mx-auto py-28">
        <div className="grid grid-cols-2 gap-20">
          <GetFreeConsultation />
          <ContactUsSupport />
        </div>
      </div>
      <QuickContact title='Need Help? Please Contact Us' />
    </div>
  );
};

export default Page;
