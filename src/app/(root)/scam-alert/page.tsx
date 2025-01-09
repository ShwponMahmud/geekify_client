import AllScamNews from "@/app/components/ScamAlertComponents/AllScamNews/AllScamNews";
import LatestScam from "@/app/components/ScamAlertComponents/LatestScam/LatestScam";
import ScamAlertShowcase from "@/app/components/ScamAlertComponents/ScamAlertShowcase/ScamAlertShowcase";
import QuickContact from "@/app/components/sharedComponents/QuickContact/QuickContact";


const  title: string = "";

function page() {
  return (
    <>
      <div className="scam_alert_page">
        <ScamAlertShowcase />
        <LatestScam />
        <AllScamNews />
        <QuickContact title="If you don’t find your needed service, please contact with us." />
      </div>
    </>
  );
}

export default page;
