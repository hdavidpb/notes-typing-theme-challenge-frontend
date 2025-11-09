import { Outlet, useParams } from "react-router";

import { NotesList } from "../components/NotesList";
import { Activity } from "react";
import { useIsMobile } from "../../hooks/useIsMobile";

const NotesLayout = () => {
  const isMobile = useIsMobile();
  const { noteId } = useParams();

  return (
    <section className="w-full flex md:flex-row flex-col justify-start h-[calc(100dvh-81px)] bg-neutral-0 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-0">

      <Activity mode={isMobile && noteId ? "hidden" : "visible"}>
        <NotesList />
      </Activity>
      <Outlet />

    </section>
  );
};

export default NotesLayout;
