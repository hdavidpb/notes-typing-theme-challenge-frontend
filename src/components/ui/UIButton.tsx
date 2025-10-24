interface Props {
  children: React.ReactNode;
  btnType?: "primary" | "secondary" | "border";
  onClick?: VoidFunction;
  className?:string;
}

type UIButtonProps = Props & React.ComponentPropsWithoutRef<'button'>

export const UIButton = ({ children, btnType="primary", onClick,className="",...rest }: UIButtonProps) => {
  const generateButton = () => {

    const buttons = {
        "primary":   <button  onClick={onClick} className={`cursor-pointer px-4 py-3 rounded-lg bg-blue-500 text-neutral-0 outline-neutral-500 disabled:opacity-55 disabled:cursor-not-allowed hover:shadow focus:shadow shadow-neutral-200 transition-all ease-in-out duration-300 ${className}`} {...rest}> {children} </button>,
        "secondary":  <button onClick={onClick} className={`cursor-pointer px-4 py-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600  dark:text-neutral-200 disabled:opacity-55 disabled:cursor-not-allowed focus:shadow shadow-neutral-200 transition-all ease-in-out duration-300 ${className}`} {...rest}> {children} </button>,
        "border":  <button onClick={onClick} className={`cursor-pointer px-4 py-3 rounded-lg bg-neutral-0 dark:bg-neutral-950 text-neutral-950 dark:border-neutral-600  dark:text-neutral-0 border border-neutral-300 disabled:opacity-55 disabled:cursor-not-allowed focus:shadow shadow-neutral-200 transition-all ease-in-out duration-300 ${className}`} {...rest}> {children} </button>
    }

    return buttons[btnType] ?? buttons["primary"];
   
  };

  return generateButton();
};
