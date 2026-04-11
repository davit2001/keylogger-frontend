export function EncryptedPayloadCell({ payload }: { payload: string }) {
  return (
    <div className="max-w-sm break-all font-mono text-xs text-amber-600 leading-relaxed">
      {payload}
    </div>
  );
}
