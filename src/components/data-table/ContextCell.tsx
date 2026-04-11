"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const TRUNCATE_LENGTH = 120;

export function ContextCell({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > TRUNCATE_LENGTH;

  return (
    <div className="max-w-xs">
      <span className="text-sm text-slate-600 leading-relaxed">
        {expanded || !isLong ? text : `${text.slice(0, TRUNCATE_LENGTH)}...`}
      </span>
      {isLong && (
        <Button
          variant="link"
          size="sm"
          className="ml-1 h-auto p-0 text-sky-600 text-xs hover:text-sky-500 font-mono"
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? "[ COLLAPSE ]" : "[ SHOW MORE ]"}
        </Button>
      )}
    </div>
  );
}
