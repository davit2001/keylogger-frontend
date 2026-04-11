import { DataRecord } from "@/types";
import { ContextCell } from "./ContextCell";
import { EncryptedPayloadCell } from "./EncryptedPayloadCell";
import { TimelineCell } from "./TimelineCell";
import React from "react";

export const columnConfig: {
  key: keyof DataRecord;
  label: string;
  width: string;
}[] = [
  { key: "id", label: "ID", width: "w-28" },
  { key: "context", label: "Context", width: "w-72" },
  { key: "encryptedPayload", label: "Encrypted Payload", width: "w-80" },
  { key: "timeline", label: "Timeline", width: "w-36" },
];

export const cellRenderer: Record<
  keyof DataRecord,
  (value: string) => React.ReactNode
> = {
  id: (v) => (
    <span className="font-mono text-sky-600 font-bold text-sm tracking-wider">
      {v}
    </span>
  ),
  context: (v) => <ContextCell text={v} />,
  encryptedPayload: (v) => <EncryptedPayloadCell payload={v} />,
  timeline: (v) => <TimelineCell isoString={v} />,
};
