"use client";

import {
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  Clock3,
  LayoutDashboard,
  Menu,
  Settings,
  Target,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

const activities = [
  {
    title: "اليوم الرياضي للمؤسسة",
    type: "رياضي",
    date: "15 أكتوبر 2026",
    time: "09:00 - 16:00",
    place: "الملعب الرياضي",
    status: "مبرمج",
  },
  {
    title: "المسابقة الثقافية",
    type: "ثقافي",
    date: "22 أكتوبر 2026",
    time: "10:00 - 12:00",
    place: "قاعة الأنشطة",
    status: "مبرمج",
  },
  {
    title: "معرض العلوم",
    type: "علمي",
    date: "05 نوفمبر 2026",
    time: "09:00 - 15:00",
    place: "قاعة العلوم",
    status: "قيد التنفيذ",
  },
  {
    title: "حملة التشجير",
    type: "بيئي",
    date: "12 نوفمبر 2026",
    time: "09:30 - 12:30",
    place: "فضاء المؤسسة",
    status: "مخطط",
  },
];

const stats = [
  {
    label: "إجمالي الأنشطة",
    value: "24",
    description: "خلال الموسم الدراسي",
    icon: Target,
  },
  {
    label: "أنشطة منجزة",
    value: "08",
    description: "منذ بداية الموسم",
    icon: CheckCircle2,
  },
  {
    label: "أنشطة قادمة",
    value: "12",
    description: "خلال الفترة القادمة",
    icon: CalendarDays,
  },
  {
    label: "المشاركون",
    value: "386",
    description: "تلميذ مشارك",
    icon: Users,
  },
];

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    مبرمج: "bg-blue-50 text-blue-700 border-blue-100",
    "قيد التنفيذ": "bg-amber-50 text-amber-700 border-amber-100",
    مخطط: "bg-slate-50 text-slate-700 border-slate-200",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${
        styles[status] ?? styles["مخطط"]
      }`}
    >
      {status}
    </span>
  );
}

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main dir="rtl" className="min-h-screen bg-[#f7f8fa] text-slate-900">
      <div className="flex min-h-screen">
        {/* Mobile overlay */}
        {sidebarOpen && (
          <button
            aria-label="إغلاق القائمة"
            className="fixed inset-0 z-40 bg-black/20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 right-0 z-50 w-72 border-l border-slate-200 bg-white transition-transform duration-300 lg:static lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col">
            <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6">
              <div>
                <h1 className="text-xl font-bold tracking-tight">
                  الأنشطة الموازية
                </h1>
                <p className="mt-1 text-xs text-slate-500">
                  تدبير وتنظيم الأنشطة
                </p>
              </div>

              <button
                onClick={() => setSidebarOpen(false)}
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 space-y-1 p-4">
              <a
                href="#"
                className="flex items-center gap-3 rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white"
              >
                <LayoutDashboard className="h-5 w-5" />
                الرئيسية
              </a>

              <a
                href="#"
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
              >
                <CalendarDays className="h-5 w-5" />
                برنامج الأنشطة
              </a>

              <a
                href="#"
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
              >
                <Target className="h-5 w-5" />
                الأنشطة
              </a>

              <a
                href="#"
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
              >
                <Users className="h-5 w-5" />
                المشاركون
              </a>

              <a
                href="#"
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
              >
                <CheckCircle2 className="h-5 w-5" />
                الحضور
              </a>

              <a
                href="#"
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
              >
                <Target className="h-5 w-5" />
                التقارير
              </a>
            </nav>

            <div className="border-t border-slate-100 p-4">
              <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50">
                <Settings className="h-5 w-5" />
                الإعدادات
              </button>
            </div>
          </div>
        </aside>

        {/* Main */}
        <section className="min-w-0 flex-1">
          {/* Header */}
          <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
            <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="rounded-xl border border-slate-200 p-2 lg:hidden"
                >
                  <Menu className="h-5 w-5" />
                </button>

                <div>
                  <p className="text-xs text-slate-500">المؤسسة التعليمية</p>
                  <h2 className="text-sm font-semibold sm:text-base">
                    مؤسسة النجاح الخاصة
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="hidden rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 sm:block">
                  العربية
                </button>

                <button className="hidden rounded-lg px-3 py-2 text-xs font-medium text-slate-500 hover:bg-slate-50 sm:block">
                  Français
                </button>

                <div className="hidden h-8 w-px bg-slate-200 sm:block" />

                <div className="flex items-center gap-3">
                  <div className="hidden text-left sm:block">
                    <p className="text-sm font-semibold">مدير المؤسسة</p>
                    <p className="text-xs text-slate-500">
                      الموسم الدراسي 2026 / 2027
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                    م
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="mb-2 text-sm font-medium text-slate-500">
                لوحة القيادة
              </p>

              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                برنامج الأنشطة الموازية
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                نظرة شاملة على الأنشطة المبرمجة، تواريخها ومراحل تنفيذها.
              </p>
            </div>

            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-slate-500">{stat.label}</p>
                        <p className="mt-3 text-3xl font-bold tracking-tight">
                          {stat.value}
                        </p>
                      </div>

                      <div className="rounded-xl bg-slate-100 p-3">
                        <Icon className="h-5 w-5 text-slate-700" />
                      </div>
                    </div>

                    <p className="mt-4 text-xs text-slate-400">
                      {stat.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Program */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex flex-col gap-4 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="font-semibold">الأنشطة القادمة</h2>
                  <p className="mt-1 text-xs text-slate-500">
                    البرنامج المقرر خلال الفترة القادمة
                  </p>
                </div>

                <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800">
                  عرض البرنامج الكامل
                  <ChevronLeft className="h-4 w-4" />
                </button>
              </div>

              {/* Desktop table */}
              <div className="hidden overflow-x-auto md:block">
                <table className="w-full text-right text-sm">
                  <thead className="bg-slate-50 text-xs text-slate-500">
                    <tr>
                      <th className="px-5 py-4 font-medium">النشاط</th>
                      <th className="px-5 py-4 font-medium">التاريخ</th>
                      <th className="px-5 py-4 font-medium">التوقيت</th>
                      <th className="px-5 py-4 font-medium">المكان</th>
                      <th className="px-5 py-4 font-medium">الحالة</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {activities.map((activity) => (
                      <tr
                        key={activity.title}
                        className="transition-colors hover:bg-slate-50"
                      >
                        <td className="px-5 py-5">
                          <div>
                            <p className="font-semibold">{activity.title}</p>
                            <p className="mt-1 text-xs text-slate-400">
                              {activity.type}
                            </p>
                          </div>
                        </td>

                        <td className="px-5 py-5 text-slate-600">
                          {activity.date}
                        </td>

                        <td className="px-5 py-5 text-slate-600">
                          <span className="inline-flex items-center gap-2">
                            <Clock3 className="h-4 w-4 text-slate-400" />
                            {activity.time}
                          </span>
                        </td>

                        <td className="px-5 py-5 text-slate-600">
                          {activity.place}
                        </td>

                        <td className="px-5 py-5">
                          <StatusBadge status={activity.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="divide-y divide-slate-100 md:hidden">
                {activities.map((activity) => (
                  <div key={activity.title} className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold">{activity.title}</p>
                        <p className="mt-1 text-xs text-slate-400">
                          {activity.type}
                        </p>
                      </div>

                      <StatusBadge status={activity.status} />
                    </div>

                    <div className="mt-4 space-y-2 text-xs text-slate-500">
                      <p>📅 {activity.date}</p>
                      <p>🕐 {activity.time}</p>
                      <p>📍 {activity.place}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Execution */}
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-slate-100 p-3">
                    <Target className="h-5 w-5" />
                  </div>

                  <div>
                    <h2 className="font-semibold">مراحل تنفيذ الأنشطة</h2>
                    <p className="text-xs text-slate-500">
                      تتبع تقدم البرنامج
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-5">
                  {[
                    ["التخطيط", "18 نشاط", true],
                    ["الإعداد", "14 نشاط", true],
                    ["التنفيذ", "08 أنشطة", false],
                    ["التقييم", "05 أنشطة", false],
                  ].map(([label, value, done]) => (
                    <div
                      key={label as string}
                      className="flex items-center gap-4"
                    >
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-full ${
                          done ? "bg-slate-900 text-white" : "bg-slate-100"
                        }`}
                      >
                        {done ? (
                          <CheckCircle2 className="h-4 w-4" />
                        ) : (
                          <Clock3 className="h-4 w-4 text-slate-400" />
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between gap-3 text-sm">
                          <span className="font-medium">{label}</span>
                          <span className="text-xs text-slate-400">
                            {value}
                          </span>
                        </div>

                        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className={`h-full rounded-full ${
                              done ? "w-3/4 bg-slate-900" : "w-1/3 bg-slate-300"
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div>
                  <h2 className="font-semibold">النشاط التالي</h2>
                  <p className="mt-1 text-xs text-slate-500">
                    أقرب نشاط في البرنامج
                  </p>
                </div>

                <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600">
                        رياضي
                      </span>

                      <h3 className="mt-4 text-lg font-bold">
                        اليوم الرياضي للمؤسسة
                      </h3>

                      <p className="mt-2 text-sm text-slate-500">
                        نشاط رياضي جماعي يهدف إلى تنمية روح التعاون والمنافسة
                        الإيجابية بين التلاميذ.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 text-xs text-slate-600 sm:grid-cols-3">
                    <div className="rounded-xl bg-white p-3">
                      <p className="text-slate-400">التاريخ</p>
                      <p className="mt-1 font-medium">15 أكتوبر 2026</p>
                    </div>

                    <div className="rounded-xl bg-white p-3">
                      <p className="text-slate-400">الوقت</p>
                      <p className="mt-1 font-medium">09:00 - 16:00</p>
                    </div>

                    <div className="rounded-xl bg-white p-3">
                      <p className="text-slate-400">المكان</p>
                      <p className="mt-1 font-medium">الملعب الرياضي</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}