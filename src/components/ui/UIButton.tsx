interface Props {
  children: React.ReactNode;
  btnType?: "primary" | "secondary" | "border";
  onClick?: VoidFunction;
  isDisabled?:boolean;
  className?:string;
}

export const UIButton = ({ children, btnType="primary", onClick,isDisabled,className="" }: Props) => {
  const generateButton = () => {

    const buttons = {
        "primary":   <button disabled={isDisabled} onClick={onClick} className={`cursor-pointer px-4 py-3 rounded-lg bg-blue-500 text-neutral-0 outline-neutral-500 disabled:opacity-55 disabled:cursor-not-allowed hover:shadow focus:shadow shadow-neutral-200 transition-all ease-in-out duration-300 ${className}`} > {children} </button>,
        "secondary":  <button disabled={isDisabled} onClick={onClick} className={`cursor-pointer px-4 py-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600  dark:text-neutral-200 disabled:opacity-55 disabled:cursor-not-allowed focus:shadow shadow-neutral-200 transition-all ease-in-out duration-300 ${className}`} > {children} </button>,
        "border":  <button disabled={isDisabled} onClick={onClick} className={`cursor-pointer px-4 py-3 rounded-lg bg-neutral-0 dark:bg-neutral-950 text-neutral-950 dark:border-neutral-600  dark:text-neutral-0 border border-neutral-300 disabled:opacity-55 disabled:cursor-not-allowed focus:shadow shadow-neutral-200 transition-all ease-in-out duration-300 ${className}`} > {children} </button>
    }

    return buttons[btnType] ?? buttons["primary"];
   
  };

  return generateButton();
};
