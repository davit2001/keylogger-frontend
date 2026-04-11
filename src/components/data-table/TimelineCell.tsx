import { format, parseISO } from "date-fns";

export function TimelineCell({ isoString }: { isoString: string }) {
  const date = parseISO(isoString);
  return (
    <span className="whitespace-nowrap font-mono text-xs text-violet-600">
      {format(date, "d MMMM yyyy")}
    </span>
  );
}
