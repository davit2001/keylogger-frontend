"use client";
import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { columnConfig, cellRenderer } from "./DataTableColumns";
import { LogRecord } from "@/types";

const MotionTableRow = motion(TableRow);

interface Props {
  data: LogRecord[];
}

export default function DataTable({ data }: Props) {
  return (
    <div className="rounded-lg border border-slate-200 overflow-hidden bg-white shadow-sm">
      <Table className="table-fixed w-full">
        <TableHeader>
          <TableRow className="border-slate-200 bg-slate-50 hover:bg-slate-50">
            {columnConfig.map((col) => (
              <TableHead
                key={col.key}
                className={`${col.width} text-sky-600 font-mono text-xs uppercase tracking-widest py-4 px-4 border-b border-slate-200`}
              >
                {col.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, i) => (
            <MotionTableRow
              key={row.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              className="border-slate-100 hover:bg-slate-50 transition-colors"
            >
              {columnConfig.map((col) => (
                <TableCell
                  key={col.key}
                  className="align-top py-4 px-4 whitespace-normal"
                >
                  {cellRenderer[col.key](row[col.key])}
                </TableCell>
              ))}
            </MotionTableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
