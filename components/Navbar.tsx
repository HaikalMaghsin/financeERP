export default function Navbar() {
  return (
    <div className="h-14 flex items-center justify-between bg-white border-b border-gray-200 px-6">
      <div className="font-semibold">Dashboard</div>

      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gray-300" />
        <span className="text-sm font-medium">Haikal</span>
      </div>
    </div>
  );
}
