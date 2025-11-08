import { Outlet } from "react-router";
import { Logo } from "../components/Logo";

const AuthLayout = () => {
  return (
    <div className="w-full h-dvh flex justify-center items-center bg-neutral-200 dark:bg-neutral-700">
      <div className="md:w-[540px] w-[95%] flex flex-col justify-start items-center p-12 gap-4 rounded-xl shadow-lg bg-neutral-0 dark:bg-neutral-950 dark:text-neutral-0">
        <Logo />
        <Outlet/>
      </div>
    </div>
  );
};

export default AuthLayout;
