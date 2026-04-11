"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
}

const PAGE_SIZE_OPTIONS = [5, 10, 20, 50];

export default function TablePagination({
  currentPage,
  totalPages,
  pageSize,
  onPageChange,
  onPageSizeChange,
}: Props) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 px-1 gap-3">
      <div className="flex items-center gap-3">
        <span className="text-xs text-slate-400 font-mono hidden sm:inline">
          ROWS/PAGE
        </span>
        <Select
          value={String(pageSize)}
          onValueChange={(v) => onPageSizeChange(Number(v))}
        >
          <SelectTrigger className="w-20 h-8 text-xs bg-white border-slate-300 text-sky-600 font-mono">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-white border-slate-200">
            {PAGE_SIZE_OPTIONS.map((s) => (
              <SelectItem
                key={s}
                value={String(s)}
                className="text-xs font-mono text-sky-600 focus:bg-slate-100 focus:text-sky-700"
              >
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          variant="outline"
          size="sm"
          disabled={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="h-8 px-3 text-xs font-mono border-slate-300 bg-white hover:bg-slate-50 text-sky-600 hover:text-sky-700 disabled:opacity-30"
        >
          ← PREV
        </Button>

        <span className="text-xs font-mono text-slate-500 tabular-nums">
          {currentPage} / {totalPages}
        </span>

        <Button
          variant="outline"
          size="sm"
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="h-8 px-3 text-xs font-mono border-slate-300 bg-white hover:bg-slate-50 text-sky-600 hover:text-sky-700 disabled:opacity-30"
        >
          NEXT →
        </Button>
      </div>
    </div>
  );
}
