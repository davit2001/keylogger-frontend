"use client";
import { useState, useMemo } from "react";
import { useAnimationGate } from "@/hooks/useAnimationGate";
import { mockData } from "@/data/mockData";
import OpeningAnimation from "@/components/opening-animation/OpeningAnimation";
import DataTable from "@/components/data-table/DataTable";
import TablePagination from "@/components/pagination/TablePagination";

const DEFAULT_PAGE_SIZE = 10;

export default function Home() {
  const { animationDone, markDone } = useAnimationGate();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);

  const { data, total, totalPages } = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return {
      data: mockData.slice(start, start + pageSize),
      total: mockData.length,
      totalPages: Math.ceil(mockData.length / pageSize),
    };
  }, [currentPage, pageSize]);

  function handlePageChange(page: number) {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handlePageSizeChange(size: number) {
    setPageSize(size);
    setCurrentPage(1);
  }

  return (
    <>
      {!animationDone && <OpeningAnimation onComplete={markDone} />}
      <main className="min-h-screen bg-slate-100 p-4 md:p-8 lg:p-10">
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-mono font-bold text-sky-600 tracking-tight">
            Keylogger dashboard
          </h1>
          <div className="mt-4 h-px bg-gradient-to-r from-sky-400/60 via-sky-300/30 to-transparent" />
        </header>
        <div className="overflow-x-auto">
          <DataTable data={data} />
        </div>
        <TablePagination
          currentPage={currentPage}
          totalPages={totalPages}
          pageSize={pageSize}
          total={total}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
        />
      </main>
    </>
  );
}
