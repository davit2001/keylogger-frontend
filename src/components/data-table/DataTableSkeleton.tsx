import { Skeleton } from "@/components/ui/skeleton";

export default function DataTableSkeleton() {
  return (
    <div className="rounded-lg border border-slate-200 overflow-hidden bg-white">
      <div className="bg-slate-50 px-4 py-4 flex gap-4 border-b border-slate-200">
        {["w-20", "w-20", "w-80", "w-72", "w-36"].map((w, i) => (
          <Skeleton key={i} className={`h-4 ${w} bg-slate-200`} />
        ))}
      </div>
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="flex gap-4 px-4 py-4 border-b border-slate-100"
        >
          <Skeleton className="h-4 w-20 bg-slate-100" />
          <Skeleton className="h-4 w-20 bg-slate-100" />
          <Skeleton className="h-12 w-80 bg-slate-100" />
          <Skeleton className="h-12 w-72 bg-slate-100" />
          <Skeleton className="h-4 w-36 bg-slate-100" />
        </div>
      ))}
    </div>
  );
}
