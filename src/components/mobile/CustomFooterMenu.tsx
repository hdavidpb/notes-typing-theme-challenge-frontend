import { Link, useSearchParams } from "react-router";
import { ArchiveIcon } from "../icons/ArchiveIcon";

export const CustomArchivedButton = () => {
  const [searchParams] = useSearchParams();

  const typeSearch = (searchParams.get("type") || "") as "active" | "archived";
  return (
    <div className="absolute w-12 h-12 rounded-full flex justify-center items-center bottom-4 left-4 bg-white dark:bg-neutral-900  shadow-xl md:hidden">
      <Link
        to="/notes?type=archived"

      >
        <ArchiveIcon
          width={20}
          height={20}
          currentColor={typeSearch === "archived" ? "text-blue-500" : ""}
        />
      </Link>
    </div>
  );
};
