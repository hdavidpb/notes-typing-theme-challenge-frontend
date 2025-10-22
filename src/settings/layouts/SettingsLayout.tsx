import { Outlet, useLocation } from "react-router";
import { TypeIcon } from "../../components/icons/TypeIcon";

import { SunIcon } from "../../components/icons/SunIcon";
import { CustomLink } from "../../components/ui/CustomLink";

const SettingsLayout = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <section className="w-full flex justify-start  md:h-[calc(100dvh-81px)]">
      <aside className="md:w-[290px] h-full flex flex-col justify-start items-center   px-5 py-5">
        <ul className="w-full flex flex-col justify-start items-center gap-1 pb-2 border-b border-b-neutral-200">
          <CustomLink
            to="/settings/color-theme"
            label="Color Theme"
            isActive={pathname === "/settings/color-theme"}
            Icon={
              <SunIcon
                width={20}
                height={20}
                isSelected={pathname === "/settings/color-theme"}
              />
            }
          />

          <CustomLink
            to="/settings/font-theme"
            label="Font Theme"
            isActive={pathname === "/settings/font-theme"}
            Icon={
              <TypeIcon
                width={20}
                height={20}
                isSelected={pathname === "/settings/font-theme"}
              />
            }
          />
        </ul>
      </aside>
      <aside className="flex-1 h-full bg-neutral-0 px-6 py-5 flex flex-col justify-start items-start border-x border-neutral-200">
        <Outlet />
      </aside>
    </section>
  );
};

export default SettingsLayout;
