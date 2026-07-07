type StaffCardProps = {
  name: string;
  role: string;
};

export default function StaffCard({ name, role }: StaffCardProps) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-wider text-yellow-600">{role}</p>
      <p className="mt-2 text-lg font-bold text-blue-950">{name}</p>
    </div>
  );
}
