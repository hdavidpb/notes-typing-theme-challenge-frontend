import { memo, useRef } from "react";
import { ArchiveIcon } from "../../components/icons/ArchiveIcon";
import { TrashIcon } from "../../components/icons/TrashIcon";
import { UIButton } from "../../components/ui/UIButton";
import type { Note } from "../types/notes.type";


interface Props {
  note:Note;
  handleDeleteNote: VoidFunction;
  isPendingToDelete:boolean;
  handleToggleNote:VoidFunction;
  isPendingToggleNote:boolean;
}

export const NoteActions = memo(({note,handleDeleteNote,isPendingToDelete,handleToggleNote,isPendingToggleNote}:Props) => {
  const renders = useRef(0);
  renders.current++;

  return (
    <aside className="md:w-[258px] px-4 py-5 h-full flex flex-col justify-start gap-3 bg-neutral-0 dark:bg-neutral-950">
      <UIButton
        disabled={isPendingToggleNote}
        btnType="border"
        className="w-full flex justify-start items-center gap-2"
        onClick={handleToggleNote}
        
      >
        <ArchiveIcon width={20} height={20} />
        <span>{note.status !=="archived" ? "Archive Note" : "Unarchive Note"}</span>
      </UIButton>
      <UIButton
      disabled={isPendingToDelete}
        btnType="border"
        className="w-full flex justify-start items-center gap-2"
        onClick={handleDeleteNote}
      >
        <TrashIcon width={20} height={20} />
        <span>Delete Note</span>
      </UIButton>
    </aside>
  );
});
