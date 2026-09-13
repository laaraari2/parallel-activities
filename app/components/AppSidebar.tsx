"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarDays,
  LayoutDashboard,
  Sparkles,
  X,
} from "lucide-react";

const navItems = [
  {
    href: "/",
    label: "لوحة القيادة",
    icon: LayoutDashboard,
  },
  {
    href: "/program",
    label: "برنامج الأنشطة",
    icon: CalendarDays,
  },
];

export default function AppSidebar({
  open = false,
  onClose,
}: {
  open?: boolean;
  onClose?: () => void;
}) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {open && (
        <button
          aria-label="إغلاق القائمة"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-950/30 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 right-0 z-50 w-72 border-l border-slate-200 bg-white px-5 py-6 transition-transform duration-300 lg:static lg:translate-x-0 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-2">
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={onClose}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
              <Sparkles size={20} />
            </div>

            <div>
              <h1 className="font-bold tracking-tight">أنشطتي</h1>
              <p className="text-xs text-slate-400">
                الأنشطة الموازية
              </p>
            </div>
          </Link>

          <button
            onClick={onClose}
            className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 lg:hidden"
            aria-label="إغلاق"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="mt-10 space-y-2">
          <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            المساحة الرئيسية
          </p>

          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  active
                    ? "bg-slate-950 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-6 left-5 right-5 rounded-3xl bg-slate-950 p-5 text-white">
          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
            <Sparkles size={17} />
          </div>

          <p className="text-sm font-semibold">
            برنامج منظم، مدرسة أكثر نشاطاً
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-400">
            تتبع الأنشطة والمراحل والمهام من مكان واحد.
          </p>
        </div>
      </aside>
    </>
  );
}