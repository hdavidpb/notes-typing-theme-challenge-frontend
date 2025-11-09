import { Outlet } from "react-router";
import { Sidebar } from "../components/Sidebar";
import { CustomNavbar } from "../components/CustomNavbar";
import { useIsMobile } from "../hooks/useIsMobile";
import { Activity } from "react";

const AppLayout = () => {
  const isMobile = useIsMobile();
  return (
    <main className="w-full flex justify-start items-stretch">
      <Activity mode={isMobile?"hidden":"visible"}>
        <Sidebar />
      </Activity>
      <div className="flex-1 flex flex-col justify-start items-center">
        <CustomNavbar />
        <Outlet />
      </div>
    </main>
  );
};

export default AppLayout;
