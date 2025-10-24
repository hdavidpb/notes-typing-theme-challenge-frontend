import { memo, useRef } from "react";
import { ArchiveIcon } from "../../components/icons/ArchiveIcon";
import { TrashIcon } from "../../components/icons/TrashIcon";
import { UIButton } from "../../components/ui/UIButton";

export const NoteActions = memo(() => {
  const renders = useRef(0);
  renders.current++;

  return (
    <aside className="md:w-[258px] px-4 py-5 h-full flex flex-col justify-start gap-3 bg-neutral-0 dark:bg-neutral-950">
      <UIButton
        btnType="border"
        className="w-full flex justify-start items-center gap-2"
      >
        <ArchiveIcon width={20} height={20} />
        <span>Archive Note</span>
      </UIButton>
      <UIButton
        btnType="border"
        className="w-full flex justify-start items-center gap-2"
      >
        <TrashIcon width={20} height={20} />
        <span>Delete Note</span>
      </UIButton>
    </aside>
  );
});
