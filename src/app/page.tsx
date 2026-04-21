import { getRawLogs } from "@/service/logService";
import OpeningAnimationGate from "@/components/opening-animation/OpeningAnimationGate";
import DataTable from "@/components/data-table/DataTable";
import TablePagination from "@/components/pagination/TablePagination";
import { LogRecord, PaginatedResponse } from "@/types";

const DEFAULT_PAGE_SIZE = 10;

type SearchParams = Promise<{ page?: string; size?: string }>;

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;
  const currentPage = Math.max(1, Number(sp.page) || 1);
  const pageSize = Math.max(1, Number(sp.size) || DEFAULT_PAGE_SIZE);

  let res: PaginatedResponse<LogRecord> | null = null;
  let errorMessage: string | null = null;
  try {
    // API uses 0-indexed pages; UI exposes 1-indexed.
    res = await getRawLogs(currentPage - 1, pageSize);
  } catch (e) {
    errorMessage = (e as Error).message;
  }

  return (
    <>
      <OpeningAnimationGate />
      <main className="min-h-screen bg-slate-100 p-4 md:p-8 lg:p-10">
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-mono font-bold text-sky-600 tracking-tight">
            Keylogger dashboard
          </h1>
          <div className="mt-4 h-px bg-gradient-to-r from-sky-400/60 via-sky-300/30 to-transparent" />
        </header>
        <div className="overflow-x-auto">
          {errorMessage ? (
            <div className="rounded-lg border border-red-200 bg-red-50 p-6 font-mono text-sm text-red-600">
              {errorMessage}
            </div>
          ) : (
            <DataTable data={res?.content ?? []} />
          )}
        </div>
        <TablePagination
          currentPage={currentPage}
          totalPages={res?.totalPages ?? 0}
          pageSize={pageSize}
        />
      </main>
    </>
  );
}
