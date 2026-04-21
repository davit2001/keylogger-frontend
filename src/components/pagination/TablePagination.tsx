import Link from "next/link";
import PageSizeSelect from "./PageSizeSelect";

interface Props {
  currentPage: number;
  totalPages: number;
  pageSize: number;
}

function pageHref(page: number, size: number) {
  const params = new URLSearchParams({
    page: String(page),
    size: String(size),
  });
  return `/?${params.toString()}`;
}

export default function TablePagination({
  currentPage,
  totalPages,
  pageSize,
}: Props) {
  const prevDisabled = currentPage <= 1;
  const nextDisabled = currentPage >= totalPages;
  const linkClass =
    "inline-flex items-center justify-center h-8 px-3 rounded-md border border-slate-300 bg-white text-xs font-mono text-sky-600 hover:bg-slate-50 hover:text-sky-700";
  const disabledClass = "opacity-30 pointer-events-none";

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 px-1 gap-3">
      <div className="flex items-center gap-3">
        <span className="text-xs text-slate-400 font-mono hidden sm:inline">
          ROWS/PAGE
        </span>

        <PageSizeSelect pageSize={pageSize} />

        <Link
          href={pageHref(currentPage - 1, pageSize)}
          aria-disabled={prevDisabled}
          tabIndex={prevDisabled ? -1 : 0}
          className={`${linkClass} ${prevDisabled ? disabledClass : ""}`}
        >
          ← PREV
        </Link>

        <span className="text-xs font-mono text-slate-500 tabular-nums">
          {currentPage} / {totalPages || 1}
        </span>

        <Link
          href={pageHref(currentPage + 1, pageSize)}
          aria-disabled={nextDisabled}
          tabIndex={nextDisabled ? -1 : 0}
          className={`${linkClass} ${nextDisabled ? disabledClass : ""}`}
        >
          NEXT →
        </Link>
      </div>
    </div>
  );
}
