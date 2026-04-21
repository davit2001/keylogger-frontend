import { LogRecord } from "@/types";
import { EncryptedPayloadCell } from "./EncryptedPayloadCell";
import { TimelineCell } from "./TimelineCell";
import React from "react";

export const columnConfig: {
  key: keyof LogRecord;
  label: string;
  width: string;
}[] = [
  { key: "id", label: "ID", width: "w-20" },
  { key: "agentLogId", label: "Agent", width: "w-20" },
  { key: "encryptedContext", label: "Encrypted Context", width: "w-80" },
  { key: "encryptedPayload", label: "Encrypted Payload", width: "w-72" },
  { key: "timestamp", label: "Timestamp", width: "w-36" },
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
  agentLogId: (v) => (
    <span className="font-mono text-slate-500 text-sm tabular-nums">
      {String(v)}
    </span>
  ),
  encryptedContext: (v) => <EncryptedPayloadCell payload={String(v)} />,
  encryptedPayload: (v) => <EncryptedPayloadCell payload={String(v)} />,
  timestamp: (v) => <TimelineCell isoString={String(v)} />,
};
