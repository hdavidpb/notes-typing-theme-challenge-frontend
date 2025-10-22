import { Link, useSearchParams } from "react-router";
import { ArchiveIcon } from "./icons/ArchiveIcon";
import { ChevronIcon } from "./icons/ChevronIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { Logo } from "./Logo";
import { TagIcon } from "./icons/TagIcon";
import { CustomLink } from "./ui/CustomLink";

const TAGS = [
  "Cooking",
  "Dev",
  "Fitness",
  "Health",
  "personal",
  "React",
  "Recipes",
  "Shopping",
  "Travel",
  "Typescript",
];

export const Sidebar = () => {
  const [searchParams] = useSearchParams();

  const type = searchParams.get("type") ?? "";

  return (
    <aside className="md:w-[272px]  min-h-screen py-3 px-4 flex flex-col justify-start border-r border-neutral-200">
      <div className="w-full mb-4 py-3">
        <Logo />
      </div>
      <ul className="w-full flex flex-col justify-start items-center gap-1 pb-2 border-b border-b-neutral-200">
        
           <CustomLink
                    to="/notes?type=all"
                    label="All Notes"
                    isActive={type === "/notes?type=all"}
                    Icon={
                   <HomeIcon width={20} height={20} isSelected={type === "all"}/>
                    }
                  />
        
        {/* <Link
          to="/notes?type=all"
          className={`px-3 w-full h-10 flex justify-between items-center rounded-lg dark:text-neutral-50 ${
            type === "all"
              ? "bg-neutral-100 dark:bg-neutral-800"
              : "bg-white dark:bg-neutral-950"
          }`}
        >
          <div className="w-full h-full flex justify-between items-center">
            <div className="flex justify-start gap-2 items-center">
              <HomeIcon width={20} height={20} isSelected={type === "all"}/>
              <span>All Notes</span>
            </div>
            {type === "all" && <ChevronIcon />}
          </div>
        </Link> */}

             <CustomLink
                    to="/notes?type=archived"
                    label="Archived Notes"
                    isActive={type === "/notes?type=archived"}
                    Icon={
                   <ArchiveIcon width={20} height={20} isSelected={type === "archived"}/>
                    }
                  />
        {/* <Link
          to="/notes?type=archived"
          className={`px-3 w-full h-10 flex justify-between items-center rounded-lg dark:text-neutral-50 ${
            type === "archived"
              ? "bg-neutral-100 dark:bg-neutral-800"
              : "bg-white dark:bg-neutral-950"
          }`}
        >
          <div className="w-full h-full flex justify-between items-center">
            <div className="flex justify-start gap-2 items-center">
              <ArchiveIcon width={20} height={20} isSelected={type === "archived"} />
              <span>Archived Notes</span>
            </div>
            {type === "archived" && <ChevronIcon />}
          </div>
        </Link> */}
      </ul>
      <figure className="w-full flex flex-col justify-start items-start py-2">
        <span className="mb-2 text-sm">Tags</span>
        <ul className=" w-full flex flex-col justify-start items-start overflow-y-auto">
          {TAGS.map((tag) => (
            <Link
              key={tag}
              to={`/notes?type=${tag}`}
              className={`px-3 w-full h-10 flex justify-between items-center rounded-lg dark:text-neutral-50 ${
                type === tag
                  ? "bg-neutral-100 dark:bg-neutral-800"
                  : "bg-white dark:bg-neutral-950"
              }`}
            >
              <div className="w-full h-full flex justify-between items-center">
                <div className="flex justify-start gap-2 items-center">
                  <TagIcon width={20} height={20} isSelected={type === tag } />
                  <span className="text-sm">{tag}</span>
                </div>
                {type === tag && <ChevronIcon />}
              </div>
            </Link>
          ))}
        </ul>
      </figure>
    </aside>
  );
};
