import { LogRecord } from "@/types";
import { TimelineCell } from "./TimelineCell";
import React from "react";

export const columnConfig: {
  key: keyof LogRecord;
  label: string;
  width: string;
}[] = [
  { key: "id", label: "ID", width: "w-20" },
  { key: "context", label: "Context", width: "w-80" },
  { key: "payload", label: "Payload", width: "w-72" },
  { key: "timestamp", label: "Timestamp", width: "w-40" },
];

export const cellRenderer: Record<
  keyof LogRecord,
  (value: LogRecord[keyof LogRecord]) => React.ReactNode
> = {
  id: (v) => (
    <span className="font-mono text-sky-600 font-bold text-sm tracking-wider">
      {String(v)}
    </span>
  ),
  context: (v) => (
    <span className="text-sm text-slate-700 leading-relaxed">{String(v)}</span>
  ),
  payload: (v) => (
    <span className="font-mono text-sm text-amber-600 break-all">
      {String(v)}
    </span>
  ),
  timestamp: (v) => <TimelineCell isoString={String(v)} />,
};
