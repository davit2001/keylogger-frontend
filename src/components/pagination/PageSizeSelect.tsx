"use client";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PAGE_SIZE_OPTIONS = [5, 10, 20, 50];

export default function PageSizeSelect({ pageSize }: { pageSize: number }) {
  const router = useRouter();
  return (
    <Select
      value={String(pageSize)}
      onValueChange={(v) => {
        router.push(`/?page=1&size=${v}`);
      }}
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
  );
}
