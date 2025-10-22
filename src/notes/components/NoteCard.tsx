export const NoteCard = () => {
  return (
    <div className="rounded-md w-full flex flex-col justify-start items-start gap-3 p-2 dark:text-neutral-0 text-neutral-900 bg-neutral-0 dark:bg-neutral-800 border-b border-neutral-200">
      <h5 className="font-semibold">React Performance Optimization</h5>
      <div className="flex justify-start items-center gap-1 flex-wrap">
        <span className="px-1.5 py-0.5 bg-neutral-200 dark:bg-neutral-600 text-xs rounded-sm">
          Dev
        </span>
        <span className="px-1.5 py-0.5 bg-neutral-200 dark:bg-neutral-600 text-xs rounded-sm">
          Travel
        </span>
      </div>
      <span className="text-xs">28 Oct 2024</span>
    </div>
  );
};
