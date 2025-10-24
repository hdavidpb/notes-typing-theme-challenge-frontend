import { ChevronIcon } from "./icons/ChevronIcon";
import { TagIcon } from "./icons/TagIcon";

interface Props {
    tags:string[];
    handleChangeTag:(tag:string)=>void;
    tagParam:string;
}

export const FilteredTags = ({tags,handleChangeTag,tagParam}:Props) => {
  return (
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
  )
}
