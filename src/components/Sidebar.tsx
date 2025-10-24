import {  useSearchParams } from "react-router";
import { ArchiveIcon } from "./icons/ArchiveIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { Logo } from "./Logo";
import { CustomLink } from "./ui/CustomLink";
import { useGetNotes } from "../notes/hooks/useGetNotes";
import { FilteredTags } from "./FilteredTags";
import {  useMemo } from "react";


export const Sidebar =  () => {
  const [searchParams,setSearchParams] = useSearchParams();
  
  const tagParam = searchParams.get("tag") ?? "";
  const typeSearch = (searchParams.get("type") || '') as "active" | "archived";
  
  const { data } = useGetNotes({status:'active'});

  const tags =  useMemo(()=> {
  if(data) {
  return (
    [...new Set( Object.values(data).map((note)=> {
   return note.tags.split(",")
  }).reduce((acc,item)=>  {
    acc = [...acc,...item];
  return acc;

  },[]) )]
  )
};
return []
  },[data])


const handleChangeTag = (tag:string) => {
  
  if(tagParam === tag) return;
      setSearchParams((prev) => {
        prev.set("tag", tag);
        return prev;
      })
    }

    
   


  return (
    <aside className="md:w-[272px]  min-h-screen py-3 px-4 flex flex-col justify-start border-r border-neutral-200 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-0">
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
      <FilteredTags tagParam={tagParam} tags={tags} handleChangeTag={handleChangeTag}/>

    </aside>
  );
};
