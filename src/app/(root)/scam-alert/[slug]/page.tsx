import ScamAlertDetails from "@/app/components/ScamAlertComponents/ScamAleartDetails/ScamAlertDetails";
import QuickContact from "@/app/components/sharedComponents/QuickContact/QuickContact";

const title: string =
  "If you don’t find your service need please contact with us.";

function page() {
  return (
    <>
      <div className="scam_alert_details_page">
        <ScamAlertDetails />
        <QuickContact title={title} />
      </div>
    </>
  );
}

export default page;
