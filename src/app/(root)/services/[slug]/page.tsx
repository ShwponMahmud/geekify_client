import ServiceDetails from "@/app/components/ServiceComponents/ServiceDetails/ServiceDetails";
import AntiVirusInstallation from "@/app/components/ServiceComponents/Services/AntiVirusInstallation/AntiVirusInstallation";
import CctvInstallationDetails from "@/app/components/ServiceComponents/Services/CctvInstallationDetails/CctvInstallationDetails";
import ComputerInstallationConfigurationFixing from "@/app/components/ServiceComponents/Services/ComputerInstallationConfigurationFixing/ComputerInstallationConfigurationFixing";
import ComputerTroubleshooting from "@/app/components/ServiceComponents/Services/ComputerTroubleshooting/ComputerTroubleshooting";
import DataBackupRestore from "@/app/components/ServiceComponents/Services/DataBackupRestore/DataBackupRestore";
import DataRecoveryDetails from "@/app/components/ServiceComponents/Services/DataRecoveryDetails/DataRecoveryDetails";
import EmailAccountSetup from "@/app/components/ServiceComponents/Services/EmailAccountSetup/EmailAccountSetup";
import HomeNetworkWifiSetup from "@/app/components/ServiceComponents/Services/HomeNetworkWifiSetup/HomeNetworkWifiSetup";
import ManagingBusinessItSystems from "@/app/components/ServiceComponents/Services/ManagingBusinessItSystems/ManagingBusinessItSystems";
import NewComputerSetup from "@/app/components/ServiceComponents/Services/NewComputerSetup/NewComputerSetup";
import SmartPhoneDeviceSetup from "@/app/components/ServiceComponents/Services/SmartPhoneDeviceSetup/SmartPhoneDeviceSetup";
import VirusSpywareRemoval from "@/app/components/ServiceComponents/Services/VirusSpywareRemoval/VirusSpywareRemoval";
import WebApplicationDevelopment from "@/app/components/ServiceComponents/Services/WebApplicationDevelopment/WebApplicationDevelopment";
import { baseUrl } from "@/assets/baseUrl";
import React from "react";

interface ServiceDetailsParams {
  params: { slug: string };
}

interface Service {
  name: string;
  slug: string;
  meta_author: string,
  meta_keywords: string,
  meta_description: string;
  description: string,
  image: any;
}

async function page({ params }: ServiceDetailsParams) {
  const { slug } = params;

  let service: Service | null = null

  try {
    const response = await fetch(`${baseUrl}/services/slug/${slug}?with_relation[]=media`, {
      headers: {
        "Content-Type": "application/json",
        "Client-Secret": `secret`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch service");
    }

    const responseData = await response.json();

    service = responseData.data || null;

  } catch (error) {
    console.error("Error fetching service:", error);
  }



  return (
    <>
      {/* <ServiceDetails service={service} />a */}
      {
        slug === "computer-installation-configuration-fixing" ? (<ComputerInstallationConfigurationFixing service={service} />)
          : slug === "computer-troubleshooting" ? (<ComputerTroubleshooting service={service} />)
            : slug === "data-backup-restore" ? (<DataBackupRestore service={service} />)
              : slug === "data-recovery" ? (<DataRecoveryDetails service={service} />)
                : slug === "new-computer-setup" ? (<NewComputerSetup service={service} />)
                  : slug === "virus-and-spyware-removal" ? (<VirusSpywareRemoval service={service} />)
                    : slug === "anti-virus-installation" ? (<AntiVirusInstallation service={service} />)
                      : slug === "smartphone-device-setup" ? (<SmartPhoneDeviceSetup service={service} />)
                        : slug === "home-network-wifi-set-up" ? (<HomeNetworkWifiSetup service={service} />)
                          : slug === "email-account-set-up" ? (<EmailAccountSetup service={service} />)
                            : slug === "web-application-development" ? (<WebApplicationDevelopment service={service} />)
                              : slug === "managing-business-it-systems" ? (<ManagingBusinessItSystems service={service} />)
                                : slug === "cctv-installation" ? (<CctvInstallationDetails service={service} />)
                : ""
      }
    </>
  );
}

export default page;
