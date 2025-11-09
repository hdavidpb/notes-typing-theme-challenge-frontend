import { use } from "react";
import { DarkAndLightSystemIcon } from "../../components/icons/DarkAndLightSystemIcon";
import { DarkmodeIcon } from "../../components/icons/DarkmodeIcon";
import { LightIcon } from "../../components/icons/LightIcon";
import { SelectThemeBox } from "../components/SelectThemeBox";
import { ThemeContext } from "../../providers/ThemeProvider";

const ColorThemePage = () => {

    const {theme,handleChangeTheme} = use(ThemeContext)

  return (
    <div className="w-full flex flex-col justify-start items-start">
      <div className="md:w-[528px] w-full flex flex-col justify-start items-start">
        <h2 className="mb-1 font-semibold">Color Theme</h2>
        <h3 className="text-sm">Choose your color theme:</h3>

        <div className="w-full flex flex-col justify-start items-start gap-4 mt-6">
          <SelectThemeBox
            isChecked={theme ==="light"}
            name="color-theme"
            title="Light Mode"
            description="Pick a clean and classic light theme"
            Icon={<LightIcon />}
            handleChangeTheme={()=>handleChangeTheme("light")}
          />
          <SelectThemeBox
          isChecked={theme ==="dark"}
            name="color-theme"
            title="Dark Mode"
            description="Select a sleek and modern dark theme"
            Icon={<DarkmodeIcon />}
            handleChangeTheme={()=>handleChangeTheme("dark")}
          />
          <SelectThemeBox
          isChecked={theme ==="system"}
            name="color-theme"
            title="System"
            description="Adapts to your device’s theme"
            Icon={<DarkAndLightSystemIcon />}
            handleChangeTheme={()=>handleChangeTheme("system")}
          />
        </div>
      </div>
    </div>
  );
};

export default ColorThemePage;
