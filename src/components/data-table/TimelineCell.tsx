import { format, parseISO } from "date-fns";

function normalizeIso(s: string) {
  return s.replace(/(\.\d{3})\d+$/, "$1");
}

export function TimelineCell({ isoString }: { isoString: string }) {
  const date = parseISO(normalizeIso(isoString));
  return (
    <span className="whitespace-nowrap font-mono text-xs text-violet-600">
      {format(date, "d MMMM yyyy HH:mm")}
    </span>
  );
}
