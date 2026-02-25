interface StatCardProps {
  emoji: string;
  stat: string;
  label: string;
}

export function StatCard({ emoji, stat, label }: StatCardProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 text-4xl">{emoji}</div>
      <div className="mb-2 text-3xl font-bold text-[#00ACC1]">{stat}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}
