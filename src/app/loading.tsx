import DataTableSkeleton from "@/components/data-table/DataTableSkeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-100 p-4 md:p-8 lg:p-10">
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-mono font-bold text-sky-600 tracking-tight">
          Keylogger dashboard
        </h1>
        <div className="mt-4 h-px bg-gradient-to-r from-sky-400/60 via-sky-300/30 to-transparent" />
      </header>
      <div className="overflow-x-auto">
        <DataTableSkeleton />
      </div>
    </main>
  );
}
