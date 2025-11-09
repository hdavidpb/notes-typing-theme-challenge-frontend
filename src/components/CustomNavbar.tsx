import { Link, useSearchParams } from "react-router";
import { SearchIcon } from "./icons/SearchIcon";
import { SettingIcon } from "./icons/SettingIcon";
import { Activity, useRef } from "react";
import { UIButton } from "./ui/UIButton";
import { useAuthStore } from "../auth/store/auth.store";
import { useIsMobile } from "../hooks/useIsMobile";

export const CustomNavbar = () => {

  const [searchParams,setSearchParams] = useSearchParams();
  const isMobile = useIsMobile();

  const inputRef = useRef<HTMLInputElement>(null);
  const authStatus = useAuthStore(store => store.authStatus);
  const logout = useAuthStore(store => store.logout);

  const query = searchParams.get("query") || "";

  const handleKeyUp = (e:React.KeyboardEvent<HTMLInputElement>)=> {
    if(e.key !=="Enter") return;
    if(!inputRef.current) return;
    const value = inputRef.current.value;

    const newParams = new URLSearchParams();
    if(value!==""){
      newParams.set("query",value)
    }
    setSearchParams(newParams)
  }

  return (
    <nav className="w-full flex justify-between items-center h-[81px] px-8 border-b border-neutral-200 bg-neutral-0 dark:bg-neutral-950 dark:text-neutral-0 dark:border-neutral-800">
      <span className="text-2xl font-semibold">ALL Notes</span>
      <Activity mode={isMobile ?"hidden" : "visible"}>

      <div className="flex justify-center items-center gap-4">
        <div className="w-[358px] h-11 border border-neutral-200 rounded-lg flex justify-start items-center px-4 gap-2">
          <SearchIcon />
          <input
            defaultValue={query}
            onKeyUp={handleKeyUp}
            ref={inputRef}
            className="w-full h-full border-none outline-none placeholder:text-neutral-500"
            placeholder="Search by title"
          />
        </div>
        <Link to="/settings/color-theme" className="cursor-pointer">
          <SettingIcon />
        </Link>
        {authStatus === "authenticated" && <UIButton onClick={logout} className="bg-red-500">Logout</UIButton>}
        
      </div>

      </Activity>
    </nav>
  );
};
