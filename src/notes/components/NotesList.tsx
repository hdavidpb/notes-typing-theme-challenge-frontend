import { Link, useParams, useSearchParams } from "react-router";
import { PlusIcon } from "../../components/icons/PlusIcon";
import { useGetNotes } from "../hooks/useGetNotes";

import { NoteCard } from "./NoteCard";
import { UIButton } from "../../components/ui/UIButton";
import { memo } from "react";
import { Spinner } from "../../components/icons/Spinner";

export const NotesList = memo(() => {
  const { noteId } = useParams();

  const [searchParams] = useSearchParams();

  const tag = searchParams.get("tag") || undefined;
  const status = (searchParams.get("type") || "active") as
    | "active"
    | "archived";
  const query = searchParams.get("query") || undefined;

  const { isLoading,isFetching, data } = useGetNotes({ status, tag ,query});


  return (
    <aside
      className={`md:w-[290px] h-full flex flex-col justify-start items-center  px-5 py-5 bg-neutral-0 dark:bg-neutral-950 ${
        !noteId ? "border-r border-neutral-200 dark:border-neutral-800" : ""
      }`}
    >
      <Link to={"/notes/create"}>
        <UIButton className="flex justify-center items-center gap-2 w-full">
          <PlusIcon />
          <span>Create New Note</span>
        </UIButton>
      </Link>
      <div className="w-full flex-1 flex-col justify-start items-center overflow-y-auto mt-4">
        {(isLoading || isFetching) && <Spinner/>}
        {data &&
          Object.values(data).map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
          {(!isLoading && Object.values(data!).length ===0) && (<span className="text-sm">No notes founded.</span>)}
      </div>
    </aside>
  );
});
