import { Home, BookOpen, Receipt, Banknote, Settings, NotebookText } from "lucide-react";
import Link from "next/link";

const menu = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Chart of Accounts", href: "/coa", icon: BookOpen },
  { name: "Journal Entries", href: "/journal", icon: NotebookText },
  { name: "Ledger", href: "/ledger", icon: Receipt },
  { name: "Invoices", href: "/invoice", icon: Banknote },
  { name: "Bills", href: "/bill", icon: Banknote },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-gray-900 text-gray-100 flex flex-col">
      <div className="text-xl font-bold p-6 border-b border-gray-700">
        Finance ERP
      </div>

      <nav className="flex-1 p-2 space-y-1">
        {menu.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              href={item.href}
              key={item.name}
              className="flex items-center gap-3 px-4 py-2 text-sm font-medium hover:bg-gray-800 rounded-md"
            >
              <Icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
