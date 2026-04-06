import React, { useState } from "react";
import MobileWelcome from "./screens/MobileWelcome";
import MobileRegister from "./screens/MobileRegister";
import MobileOTP from "./screens/MobileOTP";
import MobileLogin from "./screens/MobileLogin";
import MobileForgotPassword from "./screens/MobileForgotPassword";
import MobileDashboard from "./screens/MobileDashboard";
import MobileProfile from "./screens/MobileProfile";
import MobileEditProfile from "./screens/MobileEditProfile";
import MobileWhatsApp from "./screens/MobileWhatsApp";
import MobileCreateReport from "./screens/MobileCreateReport";
import MobileLocation from "./screens/MobileLocation";
import MobileEvidence from "./screens/MobileEvidence";
import MobileReviewReport from "./screens/MobileReviewReport";
import MobileReportConfirm from "./screens/MobileReportConfirm";
import MobileReportList from "./screens/MobileReportList";
import MobileReportDetail from "./screens/MobileReportDetail";
import MobileTracking from "./screens/MobileTracking";
import MobileTrustCredits from "./screens/MobileTrustCredits";
import MobileIncentives from "./screens/MobileIncentives";
import MobileIncentivesHistory from "./screens/MobileIncentivesHistory";
import MobileWhatsAppChat from "./screens/MobileWhatsAppChat";

type Screen =
  | "welcome"
  | "register"
  | "otp"
  | "login"
  | "forgot"
  | "dashboard"
  | "profile"
  | "editProfile"
  | "whatsapp"
  | "createReport"
  | "location"
  | "evidence"
  | "reviewReport"
  | "reportConfirm"
  | "reportList"
  | "reportDetail"
  | "tracking"
  | "trust"
  | "incentives"
  | "incentivesHistory"
  | "whatsappChat";

interface ReportData {
  type?: string;
  risk?: string;
  desc?: string;
  location?: string;
  evidence?: string[];
}

interface MobileAppProps {
  onExitToWeb: () => void;
}

const MobileApp: React.FC<MobileAppProps> = ({ onExitToWeb }) => {
  const [screen, setScreen] = useState<Screen>("welcome");
  const [reportData, setReportData] = useState<ReportData>({});

  const navigate = (s: Screen, data?: ReportData) => {
    setScreen(s);
    if (data) {
      setReportData((prev) => ({ ...prev, ...data }));
    }
    globalThis.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderScreen = () => {
    switch (screen) {
      case "welcome":
        return <MobileWelcome navigate={navigate} />;
      case "register":
        return <MobileRegister navigate={navigate} />;
      case "otp":
        return <MobileOTP navigate={navigate} />;
      case "login":
        return <MobileLogin navigate={navigate} />;
      case "forgot":
        return <MobileForgotPassword navigate={navigate} />;
      case "dashboard":
        return <MobileDashboard navigate={navigate} />;
      case "profile":
        return <MobileProfile navigate={navigate} />;
      case "editProfile":
        return <MobileEditProfile navigate={navigate} />;
      case "whatsapp":
        return <MobileWhatsApp navigate={navigate} />;
      case "createReport":
        return <MobileCreateReport navigate={navigate} />;
      case "location":
        return <MobileLocation navigate={navigate} />;
      case "evidence":
        return <MobileEvidence navigate={navigate} />;
      case "reviewReport":
        return <MobileReviewReport navigate={navigate} />;
      case "reportConfirm":
        return <MobileReportConfirm navigate={navigate} />;
      case "reportList":
        return <MobileReportList navigate={navigate} />;
      case "reportDetail":
        return <MobileReportDetail navigate={navigate} />;
      case "tracking":
        return <MobileTracking navigate={navigate} />;
      case "trust":
        return <MobileTrustCredits navigate={navigate} />;
      case "incentives":
        return <MobileIncentives navigate={navigate} />;
      case "incentivesHistory":
        return <MobileIncentivesHistory navigate={navigate} />;
      case "whatsappChat":
        return <MobileWhatsAppChat navigate={navigate} />;
      default:
        return <MobileWelcome navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex items-start justify-center py-6 px-4">
      <div className="w-full max-w-sm">
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">S</span>
            </div>
            <span className="text-xs font-medium text-neutral-600 font-sans">
              SafeAlert Citizen App
            </span>
          </div>
          <button
            onClick={onExitToWeb}
            className="text-xs text-info font-sans underline cursor-pointer hover:text-blue-700"
          >
            → Vista Operativa Web
          </button>
        </div>
        <div
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-200"
          style={{ minHeight: 700 }}
        >
          {renderScreen()}
        </div>
        <div className="mt-3 flex items-center gap-2 justify-center px-1">
          <span className="text-xs text-neutral-400 font-sans">
            Pantalla actual:
          </span>
          <span className="text-xs font-medium text-neutral-600 font-mono bg-neutral-100 px-2 py-0.5 rounded">
            {screen}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;