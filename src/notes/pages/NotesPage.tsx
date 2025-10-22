import { ArchiveIcon } from "../../components/icons/ArchiveIcon";
import { ClockCircleIcon } from "../../components/icons/ClockCircleIcon";
import { PlusIcon } from "../../components/icons/PlusIcon";
import { TagIcon } from "../../components/icons/TagIcon";
import { TrashIcon } from "../../components/icons/TrashIcon";
import { UIButton } from "../../components/ui/UIButton";
import { NoteCard } from "../components/NoteCard";

const NotesPage = () => {
  return (
    <section className="w-full flex justify-start  md:h-[calc(100dvh-81px)]">
      <aside className="md:w-[290px] h-full flex flex-col justify-start items-center  px-5 py-5 bg-neutral-0 dark:bg-neutral-950">
        <UIButton className="flex justify-center items-center gap-2 w-full">
          <PlusIcon />
          <span>Create New Note</span>
        </UIButton>
        <div className="w-full flex-1 flex-col justify-start items-center overflow-y-auto mt-4">
          <NoteCard />
          <NoteCard />
          <NoteCard />

        </div>
      </aside>
      <aside className="flex-1 h-full bg-neutral-0 dark:bg-neutral-950 px-6 py-5 flex flex-col justify-start items-start border-x border-neutral-200 dark:border-neutral-800 dark:text-neutral-0">
        <div className="w-full flex flex-col justify-start items-start border-b border-neutral-200 dark:border-neutral-800">
          <div className="w-full h-[29px] mb-4">
            <input className="w-full h-full text-2xl bg-transparent border-none outline-none pl-0.5" placeholder="Enter a title..."/>
          </div>
          <div className="w-full flex justify-start items-center gap-2 mb-2">
            <div className="flex justify-start items-center gap-1.5 w-[115px]">
              <TagIcon width={16} height={16} />
              <span>Tags</span>
            </div>
            <input className="border-none outline-none text-sm placeholder:text-neutral-400" placeholder="Add tags separated by commas (e.g. Work, Planing)"/>
          </div>
           <div className="w-full flex justify-start items-center gap-2 mb-4">
            <div className="flex justify-start items-center gap-1.5 w-[115px]">
              <ClockCircleIcon width={16} height={16} />
              <span>Tags</span>
            </div>
            <span className="text-sm text-neutral-400"> Not yet saved</span>
          </div>

        </div>
        <div className="w-full flex-1 mt-4 border-b border-neutral-200 dark:border-neutral-800">
          <textarea className="w-full h-full border-none outline-none pr-0.5 resize-none" placeholder="Start typing note here..."/>
        </div>

        <div className="w-full flex justify-start items-center gap-4 mt-4">
          <UIButton>Save Note</UIButton>
          <UIButton btnType="secondary">Cancel</UIButton>
        </div>
        
      </aside>
      <aside className="md:w-[258px] px-4 py-5 h-full flex flex-col justify-start gap-3 bg-neutral-0 dark:bg-neutral-950">
        <UIButton btnType="border" className="w-full flex justify-start items-center gap-2">
          <ArchiveIcon width={20} height={20} />
          <span>Archive Note</span>
        </UIButton >
            <UIButton btnType="border" className="w-full flex justify-start items-center gap-2">
          <TrashIcon width={20} height={20}/>
          <span>Delete Note</span>
        </UIButton>

      </aside>
    </section>
  );
};

export default NotesPage;
