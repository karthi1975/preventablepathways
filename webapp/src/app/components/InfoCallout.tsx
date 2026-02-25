import { Info } from "lucide-react";

interface InfoCalloutProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function InfoCallout({ title, children, className = "" }: InfoCalloutProps) {
  return (
    <div
      className={`rounded-lg border-l-4 border-[#00ACC1] bg-[#B2EBF2] p-4 ${className}`}
      style={{ backgroundColor: '#E0F7FA' }}
    >
      <div className="flex gap-3">
        <div className="flex-shrink-0">
          <Info className="h-5 w-5 text-[#00ACC1]" />
        </div>
        <div className="flex-1">
          {title && <h4 className="mb-2 text-[#0097A7]">{title}</h4>}
          <div className="text-sm text-[#1A1C1E]">{children}</div>
        </div>
      </div>
    </div>
  );
}
