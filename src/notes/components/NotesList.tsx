import { Link, useParams, useSearchParams } from "react-router";
import { PlusIcon } from "../../components/icons/PlusIcon";
import { useGetNotes } from "../hooks/useGetNotes";

import { NoteCard } from "./NoteCard";
import { UIButton } from "../../components/ui/UIButton";
import { Activity, memo } from "react";
import { Spinner } from "../../components/icons/Spinner";
import { useIsMobile } from "../../hooks/useIsMobile";
import { CustomArchivedButton } from "../../components/mobile/CustomFooterMenu";

export const NotesList = memo(() => {
  const isMobile = useIsMobile();

  const { noteId } = useParams();

  const [searchParams] = useSearchParams();

  const tag = searchParams.get("tag") || undefined;
  const status = (searchParams.get("type") || undefined) as
    | "active"
    | "archived";
  const query = searchParams.get("query") || undefined;

  const { isLoading, isFetching, data } = useGetNotes({ status, tag, query });

  return (
    <aside
      className={`md:w-[290px] w-full flex-1 md:flex-initial  flex flex-col justify-start items-center  px-5 py-5 bg-neutral-0 dark:bg-neutral-950 ${
        !noteId ? "border-r border-neutral-200 dark:border-neutral-800" : ""
      }`}
    >
      <Activity mode={isMobile ? "hidden" : "visible"}>
        <Link to={"/notes/create"}>
          <UIButton className="flex justify-center items-center gap-2 w-full ">
            <PlusIcon />
            <span>Create New Note</span>
          </UIButton>
        </Link>
      </Activity>
      <Activity mode={(isMobile && noteId) ? "hidden" : "visible"}>

      <div className="relative w-full  flex-1 flex-col justify-start items-center overflow-y-auto mt-4">
        {(isLoading || isFetching) && <Spinner />}
        {data && data.map((note) => <NoteCard key={note._id} note={note} />)}
        {!isLoading && data!.length === 0 && (
          <span className="text-sm">No notes founded.</span>
        )}

        <Link
          className="absolute md:hidden right-4 bottom-4 w-12 h-12 flex justify-center items-center rounded-full bg-blue-500"
          to={"/notes/create"}
        >
          <PlusIcon />
        </Link>
        <CustomArchivedButton/>
      </div>

      </Activity>
    </aside>
  );
});
