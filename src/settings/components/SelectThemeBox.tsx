interface Props {
  title: string;
  description: string;
  Icon: React.ReactNode;
  name:string;
  isChecked:boolean;
  handleChangeTheme:VoidFunction
}

export const SelectThemeBox = ({ title, description, Icon,name,isChecked,handleChangeTheme }: Props) => {
  return (
    <button onClick={handleChangeTheme} className={`cursor-pointer w-full h-[72px] p-4 flex justify-between items-center rounded-xl border border-neutral-200 dark:border-neutral-800 transition-all ease-in-out duration-300 ${isChecked ? "bg-neutral-200 dark:bg-neutral-800":""}`}>
      <div className="flex-1 flex h-full justify-start items-center gap-4">
        <div className="flex justify-center items-center w-10 h-10 rounded-xl border border-neutral-200 dark:border-neutral-800 dark:bg-neutral-950 bg-neutral-0">
          {Icon}
        </div>
        <div className="h-full flex flex-col justify-around items-start">
          <h6 className="text-sm font-semibold">{title}</h6>
          <span className="text-xs">{description}</span>
        </div>
      </div>
      <input readOnly checked={isChecked} id={title} name={name} type="radio" className="w-4 h-4 accent-blue-500" />
    </button>
  );
};
