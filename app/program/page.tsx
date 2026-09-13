"use client";

import {
  CalendarDays,
  ChevronLeft,
  Clock3,
  MapPin,
  Plus,
  Search,
  SlidersHorizontal,
  Users,
} from "lucide-react";

import { useMemo, useState } from "react";

const activities = [
  {
    id: 1,
    title: "الاحتفال باليوم العالمي للمدرس",
    type: "ثقافي",
    date: "يحدد لاحقاً",
    time: "يحدد لاحقاً",
    place: "يحدد لاحقاً",
    target: "أطر المؤسسة والتلاميذ",
    status: "مبرمج",
    statusStyle: "bg-blue-50 text-blue-700 border-blue-200",
    typeStyle: "bg-purple-50 text-purple-700",
  },
  {
    id: 2,
    title: "الاحتفال بذكرى المسيرة الخضراء",
    type: "وطني",
    date: "يحدد لاحقاً",
    time: "يحدد لاحقاً",
    place: "يحدد لاحقاً",
    target: "تلاميذ المؤسسة",
    status: "مبرمج",
    statusStyle: "bg-blue-50 text-blue-700 border-blue-200",
    typeStyle: "bg-emerald-50 text-emerald-700",
  },
  {
    id: 3,
    title: "حفل نهاية الأسدس الأول",
    type: "احتفالي",
    date: "يحدد لاحقاً",
    time: "يحدد لاحقاً",
    place: "يحدد لاحقاً",
    target: "تلاميذ المؤسسة والأطر",
    status: "مبرمج",
    statusStyle: "bg-blue-50 text-blue-700 border-blue-200",
    typeStyle: "bg-orange-50 text-orange-700",
  },
  {
    id: 4,
    title: "حفل ديني بمناسبة شهر رمضان",
    type: "ديني",
    date: "يحدد لاحقاً",
    time: "يحدد لاحقاً",
    place: "يحدد لاحقاً",
    target: "تلاميذ المؤسسة",
    status: "مبرمج",
    statusStyle: "bg-blue-50 text-blue-700 border-blue-200",
    typeStyle: "bg-amber-50 text-amber-700",
  },
  {
    id: 5,
    title: "الأبواب المفتوحة",
    type: "تواصلي",
    date: "يحدد لاحقاً",
    time: "يحدد لاحقاً",
    place: "مرافق المؤسسة",
    target: "الأسر والزوار",
    status: "مبرمج",
    statusStyle: "bg-blue-50 text-blue-700 border-blue-200",
    typeStyle: "bg-cyan-50 text-cyan-700",
  },
  {
    id: 6,
    title: "اللقاء المسرحي الخامس",
    type: "فني",
    date: "يحدد لاحقاً",
    time: "يحدد لاحقاً",
    place: "يحدد لاحقاً",
    target: "تلاميذ المؤسسة",
    status: "مبرمج",
    statusStyle: "bg-blue-50 text-blue-700 border-blue-200",
    typeStyle: "bg-pink-50 text-pink-700",
  },
  {
    id: 7,
    title: "حفل نهاية السنة الدراسية",
    type: "احتفالي",
    date: "يحدد لاحقاً",
    time: "يحدد لاحقاً",
    place: "يحدد لاحقاً",
    target: "تلاميذ المؤسسة والأسر",
    status: "مبرمج",
    statusStyle: "bg-blue-50 text-blue-700 border-blue-200",
    typeStyle: "bg-orange-50 text-orange-700",
  },
];

const types = ["الكل", "رياضي", "ثقافي", "علمي", "بيئي"];

export default function ProgramPage() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("الكل");

  const filteredActivities = useMemo(() => {
    return activities.filter((activity) => {
      const matchesType =
        selectedType === "الكل" || activity.type === selectedType;

      const matchesSearch =
        activity.title.includes(search) ||
        activity.place.includes(search) ||
        activity.target.includes(search);

      return matchesType && matchesSearch;
    });
  }, [search, selectedType]);

  return (
    <main dir="rtl" className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
                <span>الرئيسية</span>
                <ChevronLeft className="h-4 w-4" />
                <span className="text-slate-900">برنامج الأنشطة</span>
              </div>

              <h1 className="text-2xl font-bold text-slate-900">
                برنامج الأنشطة الموازية
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                تخطيط وتتبع الأنشطة الموازية خلال الموسم الدراسي
              </p>
            </div>

            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800">
              <Plus className="h-4 w-4" />
              إضافة نشاط
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Filters */}
        <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                placeholder="البحث عن نشاط..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pr-10 pl-4 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="ml-2 flex items-center gap-2 text-sm text-slate-500">
                <SlidersHorizontal className="h-4 w-4" />
                تصفية:
              </div>

              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                    selectedType === type
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Summary */}
        <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <SummaryCard
            label="إجمالي الأنشطة"
            value={activities.length}
            icon={<CalendarDays className="h-5 w-5" />}
          />

          <SummaryCard
            label="أنشطة رياضية"
            value={activities.filter((a) => a.type === "رياضي").length}
            icon={<Users className="h-5 w-5" />}
          />

          <SummaryCard
            label="أنشطة مبرمجة"
            value={activities.filter((a) => a.status === "مبرمج").length}
            icon={<Clock3 className="h-5 w-5" />}
          />

          <SummaryCard
            label="أنشطة قيد التنفيذ"
            value={activities.filter((a) => a.status === "قيد التنفيذ").length}
            icon={<CalendarDays className="h-5 w-5" />}
          />
        </div>

        {/* Activities */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="border-b border-slate-200 px-5 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-slate-900">
                  الأنشطة المبرمجة
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  {filteredActivities.length} نشاط
                </p>
              </div>
            </div>
          </div>

          {/* Desktop table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full text-right">
              <thead className="bg-slate-50 text-xs text-slate-500">
                <tr>
                  <th className="px-5 py-4 font-medium">النشاط</th>
                  <th className="px-5 py-4 font-medium">التاريخ</th>
                  <th className="px-5 py-4 font-medium">المكان</th>
                  <th className="px-5 py-4 font-medium">الفئة المستهدفة</th>
                  <th className="px-5 py-4 font-medium">الحالة</th>
                  <th className="px-5 py-4 font-medium"></th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredActivities.map((activity) => (
                  <tr
                    key={activity.id}
                    className="transition hover:bg-slate-50"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${activity.typeStyle}`}
                        >
                          <CalendarDays className="h-5 w-5" />
                        </div>

                        <div>
                          <p className="font-medium text-slate-900">
                            {activity.title}
                          </p>
                          <span className="text-xs text-slate-500">
                            {activity.type}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <div>
                        <p className="text-sm font-medium text-slate-800">
                          {activity.date}
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          {activity.time}
                        </p>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <MapPin className="h-4 w-4 text-slate-400" />
                        {activity.place}
                      </div>
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-600">
                      {activity.target}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${activity.statusStyle}`}
                      >
                        {activity.status}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <button className="text-sm font-medium text-slate-700 hover:text-slate-950">
                        التفاصيل
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="divide-y divide-slate-100 md:hidden">
            {filteredActivities.map((activity) => (
              <div key={activity.id} className="p-4">
                <div className="flex items-start gap-3">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${activity.typeStyle}`}
                  >
                    <CalendarDays className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {activity.title}
                        </h3>

                        <p className="mt-1 text-xs text-slate-500">
                          {activity.type}
                        </p>
                      </div>

                      <span
                        className={`shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-medium ${activity.statusStyle}`}
                      >
                        {activity.status}
                      </span>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <p className="text-slate-400">التاريخ</p>
                        <p className="mt-1 font-medium text-slate-700">
                          {activity.date}
                        </p>
                      </div>

                      <div>
                        <p className="text-slate-400">التوقيت</p>
                        <p className="mt-1 font-medium text-slate-700">
                          {activity.time}
                        </p>
                      </div>

                      <div>
                        <p className="text-slate-400">المكان</p>
                        <p className="mt-1 font-medium text-slate-700">
                          {activity.place}
                        </p>
                      </div>

                      <div>
                        <p className="text-slate-400">الفئة</p>
                        <p className="mt-1 font-medium text-slate-700">
                          {activity.target}
                        </p>
                      </div>
                    </div>

                    <button className="mt-4 w-full rounded-lg bg-slate-100 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200">
                      عرض تفاصيل النشاط
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredActivities.length === 0 && (
            <div className="p-12 text-center">
              <CalendarDays className="mx-auto h-10 w-10 text-slate-300" />

              <h3 className="mt-4 font-medium text-slate-900">
                لم يتم العثور على أنشطة
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                جرب تغيير كلمات البحث أو الفلتر.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

function SummaryCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{label}</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">{value}</p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
          {icon}
        </div>
      </div>
    </div>
  );
}