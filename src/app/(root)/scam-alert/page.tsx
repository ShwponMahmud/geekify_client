import AllScamNews from "@/app/components/ScamAlertComponents/AllScamNews/AllScamNews";
import LatestScam from "@/app/components/ScamAlertComponents/LatestScam/LatestScam";
import ScamAlertShowcase from "@/app/components/ScamAlertComponents/ScamAlertShowcase/ScamAlertShowcase";
import QuickContact from "@/app/components/sharedComponents/QuickContact/QuickContact";


const  title: string = "If you don’t find your service need please contact with us.";

function page() {
  return (
    <>
      <div className="scam_alert_page">
        <ScamAlertShowcase/>
        <LatestScam/>
        <AllScamNews/>
        <QuickContact title={title}/>
      </div>
    </>
  );
}

export default page;
