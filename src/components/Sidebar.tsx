import {  useSearchParams } from "react-router";
import { ArchiveIcon } from "./icons/ArchiveIcon";
import { ChevronIcon } from "./icons/ChevronIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { Logo } from "./Logo";
import { TagIcon } from './icons/TagIcon';
import { CustomLink } from "./ui/CustomLink";
import { useGetNotes } from "../notes/hooks/useGetNotes";


export const Sidebar = () => {
  const [searchParams,setSearchParams] = useSearchParams();
  

  const tagParam = searchParams.get("tag") ?? "";
  
  const typeSearch = (searchParams.get("type") || '') as "active" | "archived";
  
  
  const { data } = useGetNotes({status:typeSearch});

  const tags = data?  [...new Set( Object.values(data).map((note)=> {
   return note.tags.split(",")
  }).reduce((acc,item)=>  {
    acc = [...acc,...item];
  return acc;

  },[]) )] :[];




const handleChangeTag = (tag:string) => {
  
  if(tagParam === tag) return;

      setSearchParams((prev) => {
        prev.set("tag", tag);
        return prev;
      })
    }

    
   


  return (
    <aside className="md:w-[272px]  min-h-screen py-3 px-4 flex flex-col justify-start border-r border-neutral-200 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="w-full mb-4 py-3">
        <Logo />
      </div>
      <ul className="w-full flex flex-col justify-start items-center gap-1 pb-2 border-b border-b-neutral-200 dark:border-neutral-800">
        <CustomLink
          to="/notes?type=active"
          label="All Notes"
          isActive={typeSearch === "active"}
          Icon={<HomeIcon width={20} height={20} isSelected={typeSearch === "active"} />}

        />

        <CustomLink
        to="/notes?type=archived"
          label="Archived Notes"
          isActive={typeSearch === "archived"}
          Icon={
            <ArchiveIcon
              width={20}
              height={20}
              isSelected={typeSearch === "archived"}
            />
          }

        />
      </ul>
      <figure className="w-full flex flex-col justify-start items-start py-2">
        <span className="mb-2 text-sm">Tags</span>
        <ul className=" w-full flex flex-col justify-start items-start overflow-y-auto">
          {tags.map((tag) => (
            <li
              key={tag}
              onClick={()=>handleChangeTag(tag.trim())}
              className={`cursor-pointer px-3 w-full h-10 flex justify-between items-center rounded-lg dark:text-neutral-50 ${
                tagParam === tag.trim()
                  ? "bg-neutral-100 dark:bg-neutral-800"
                  : "bg-white dark:bg-neutral-950"
              }`}
            >
              <div className="w-full h-full flex justify-between items-center">
                <div className="flex justify-start gap-2 items-center">
                  <TagIcon width={20} height={20} isSelected={tagParam === tag.trim()} />
                  <span className="text-sm">{tag}</span>
                </div>
                {tagParam === tag.trim() && <ChevronIcon />}
              </div>
            </li>
          ))}
        </ul>
      </figure>
    </aside>
  );
};
