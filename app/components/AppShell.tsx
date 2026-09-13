"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import AppSidebar from "./AppSidebar";

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-slate-50 text-slate-950"
    >
      <div className="flex min-h-screen">
        <AppSidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="min-w-0 flex-1">
          <div className="sticky top-0 z-30 flex h-16 items-center border-b border-slate-200/80 bg-white/80 px-4 backdrop-blur-xl lg:hidden">
            <button
              onClick={() => setSidebarOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm"
              aria-label="فتح القائمة"
            >
              <Menu size={20} />
            </button>

            <div className="mr-3">
              <p className="text-sm font-bold">أنشطتي</p>
              <p className="text-[11px] text-slate-400">
                الأنشطة الموازية
              </p>
            </div>
          </div>

          {children}
        </main>
      </div>
    </div>
  );
}