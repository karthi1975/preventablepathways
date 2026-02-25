import { LucideIcon } from "lucide-react";

interface ActionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick?: () => void;
}

export function ActionCard({ icon: Icon, title, description, onClick }: ActionCardProps) {
  return (
    <button
      onClick={onClick}
      className="group rounded-xl bg-white p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#B2EBF2]">
        <Icon className="h-6 w-6 text-[#00ACC1]" />
      </div>
      <h3 className="mb-2 text-[#1A1C1E]">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </button>
  );
}
