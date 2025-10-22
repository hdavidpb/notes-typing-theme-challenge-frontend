import { Link } from "react-router";
import { SearchIcon } from "./icons/SearchIcon";
import { SettingIcon } from "./icons/SettingIcon";

export const CustomNavbar = () => {
  return (
    <nav className="w-full flex justify-between items-center h-[81px] px-8 border-b border-neutral-200 bg-neutral-0 dark:bg-neutral-950 dark:text-neutral-0 dark:border-neutral-800">
      <span className="text-2xl font-semibold">ALL Notes</span>
      <div className="flex justify-center items-center gap-4">
        <div className="w-[358px] h-[44px] border border-neutral-200 rounded-lg flex justify-start items-center px-4 gap-2">
          <SearchIcon />
          <input
            className="w-full h-full border-none outline-none placeholder:text-neutral-500"
            placeholder="Search by title, content, or tags..."
          />
        </div>
        <Link to="/settings/color-theme" className="cursor-pointer">
          <SettingIcon />
        </Link>
      </div>
    </nav>
  );
};
