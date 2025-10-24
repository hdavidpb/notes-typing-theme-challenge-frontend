
import { Link } from "react-router"
import { ChevronIcon } from "../icons/ChevronIcon";



interface Props {
    to?:string,
    Icon:React.ReactNode,
    isActive:boolean;
    label:string
}

type CustomLinkProps = Props & React.AnchorHTMLAttributes<HTMLAnchorElement>

export const CustomLink = ({Icon,to,label,isActive,...rest}:CustomLinkProps) => {
  return (
      <Link
          to={to ? to : "#"}
          className={`px-3 w-full h-10 flex justify-between items-center rounded-lg dark:text-neutral-50 ${
            isActive
              ? "bg-neutral-100 dark:bg-neutral-800"
              : "bg-white dark:bg-neutral-950"
          }`}
          {...rest}
        >
          <div className="w-full h-full flex justify-between items-center">
            <div className="flex justify-start gap-2 items-center">
              {Icon}
              <span>{label}</span>
            </div>
            {isActive && <ChevronIcon />}
          </div>
        </Link>
  )
}
