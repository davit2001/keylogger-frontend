"use client";
import { useCallback, useEffect, useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { getRawLogs } from "@/service/logService";
import { LogRecord, PaginatedResponse } from "@/types";
import { logoutAction } from "@/app/actions/auth";
import { MAX_RETRIES, withRetries } from "@/lib/retry";
import DataTable from "@/components/data-table/DataTable";
import TablePagination from "@/components/pagination/TablePagination";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const DEFAULT_PAGE_SIZE = 10;

export default function LogsView() {
  const searchParams = useSearchParams();

  const currentPage = Math.max(1, Number(searchParams.get("page")) || 1);
  const pageSize = Math.max(
    1,
    Number(searchParams.get("size")) || DEFAULT_PAGE_SIZE
  );

  const [data, setData] = useState<PaginatedResponse<LogRecord> | null>(null);
  const [loading, setLoading] = useState(true);
  const [, startLogout] = useTransition();

  const load = useCallback(async () => {
    setLoading(true);
    console.info("[logs] fetching /logs/decrypted", {
      page: currentPage - 1,
      size: pageSize,
    });
    try {
      // API uses 0-indexed pages; UI exposes 1-indexed.
      const res = await withRetries(
        () => getRawLogs(currentPage - 1, pageSize),
        MAX_RETRIES,
        "/logs/decrypted"
      );
      console.info("[logs] received", {
        total: res.totalItems,
        pages: res.totalPages,
        rows: res.content?.length,
      });
      setData(res);
    } catch (err) {
      console.error("[logs] giving up — logging out", err);
      // logout();
    } finally {
      setLoading(false);
    }
  }, [currentPage, pageSize]);

  useEffect(() => {
    load();
  }, [load]);

  const handleLogout = () => {
    startLogout(() => {
      logoutAction();
    });
  };

  return (
    <main className="min-h-screen bg-slate-100 p-4 md:p-8 lg:p-10">
      <header className="mb-8 flex items-start justify-between gap-4">
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-mono font-bold text-sky-600 tracking-tight">
            Keylogger dashboard
          </h1>
          <div className="mt-4 h-px bg-gradient-to-r from-sky-400/60 via-sky-300/30 to-transparent" />
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={handleLogout}
          className="font-mono"
        >
          <LogOut /> Logout
        </Button>
      </header>
      <div className="overflow-x-auto">
        {loading ? (
          <div className="rounded-lg border border-slate-200 bg-white p-6 font-mono text-sm text-slate-500">
            Loading…
          </div>
        ) : (
          <DataTable data={data?.content ?? []} />
        )}
      </div>
      <TablePagination
        currentPage={currentPage}
        totalPages={data?.totalPages ?? 0}
        pageSize={pageSize}
      />
    </main>
  );
}
