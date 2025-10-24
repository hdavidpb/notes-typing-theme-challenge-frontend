import { Outlet } from "react-router"

import { NotesList } from "../components/NotesList"


const NotesLayout = () => {
  return (
     <section className="w-full flex justify-start  md:h-[calc(100dvh-81px)] bg-neutral-0 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-0">
            <NotesList />
            <Outlet/>
       </section>
  )
}

export default NotesLayout