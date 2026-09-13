import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  MapPin,
  Search,
} from "lucide-react";
import AppShell from "../components/AppShell";

const activities = [
  {
    month: "أكتوبر",
    date: "05",
    day: "الأحد",
    title: "الاحتفال باليوم العالمي للمدرس",
    type: "ثقافي",
    time: "10:00",
    location: "المؤسسة",
    status: "قيد الإعداد",
  },
  {
    month: "نونبر",
    date: "06",
    day: "الخميس",
    title: "الاحتفال بذكرى المسيرة الخضراء",
    type: "وطني",
    time: "10:00",
    location: "قاعة الأنشطة",
    status: "مخطط",
  },
  {
    month: "يناير",
    date: "23",
    day: "الجمعة",
    title: "حفل نهاية الأسدس الأول",
    type: "احتفالي",
    time: "15:00",
    location: "قاعة المؤسسة",
    status: "مخطط",
  },
  {
    month: "مارس",
    date: "10",
    day: "الثلاثاء",
    title: "حفل ديني بمناسبة شهر رمضان",
    type: "ديني",
    time: "15:00",
    location: "قاعة الأنشطة",
    status: "مخطط",
  },
  {
    month: "أبريل",
    date: "18",
    day: "السبت",
    title: "الأبواب المفتوحة",
    type: "تربوي",
    time: "09:00",
    location: "المؤسسة",
    status: "مخطط",
  },
  {
    month: "ماي",
    date: "08",
    day: "الجمعة",
    title: "اللقاء المسرحي الخامس",
    type: "فني",
    time: "14:30",
    location: "قاعة العروض",
    status: "مخطط",
  },
  {
    month: "يونيو",
    date: "30",
    day: "الثلاثاء",
    title: "حفل نهاية السنة الدراسية",
    type: "احتفالي",
    time: "16:00",
    location: "قاعة المؤسسة",
    status: "مخطط",
  },
];

const typeClasses: Record<string, string> = {
  ثقافي: "bg-blue-50 text-blue-700",
  وطني: "bg-emerald-50 text-emerald-700",
  احتفالي: "bg-violet-50 text-violet-700",
  ديني: "bg-amber-50 text-amber-700",
  تربوي: "bg-cyan-50 text-cyan-700",
  فني: "bg-pink-50 text-pink-700",
};

export default function ProgramPage() {
  return (
    <AppShell>
      <div className="min-h-screen">
        <header className="border-b border-slate-200/80 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-3 flex items-center gap-2 text-sm text-slate-400">
                  <Link href="/" className="hover:text-slate-700">
                    الرئيسية
                  </Link>
                  <span>/</span>
                  <span className="text-slate-700">برنامج الأنشطة</span>
                </div>

                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  برنامج الأنشطة
                </h1>

                <p className="mt-2 text-sm text-slate-500">
                  جميع الأنشطة الموازية مرتبة حسب تاريخ التنفيذ.
                </p>
              </div>

              <div className="relative w-full md:w-72">
                <Search
                  size={17}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  placeholder="البحث عن نشاط..."
                  className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 pr-11 pl-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
                />
              </div>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-5 py-8 sm:px-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-900">
                الموسم الدراسي الحالي
              </p>
              <p className="mt-1 text-xs text-slate-400">
                {activities.length} أنشطة مبرمجة
              </p>
            </div>

            <div className="hidden items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-xs text-slate-500 sm:flex">
              <CalendarDays size={15} />
              البرنامج السنوي
            </div>
          </div>

          <div className="relative">
            <div className="absolute bottom-0 right-[23px] top-0 w-px bg-slate-200 sm:right-[31px]" />

            <div className="space-y-6">
              {activities.map((activity) => (
                <div key={activity.title} className="relative">
                  <div className="flex gap-4 sm:gap-6">
                    <div className="relative z-10 flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-950 shadow-sm sm:h-16 sm:w-16">
                      <span className="text-lg font-bold sm:text-xl">
                        {activity.date}
                      </span>
                      <span className="text-[9px] text-slate-400 sm:text-[10px]">
                        {activity.month}
                      </span>
                    </div>

                    <Link
                      href="/activities"
                      className="group min-w-0 flex-1 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-6"
                    >
                      <div className="flex flex-col gap-4">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="mb-3 flex flex-wrap items-center gap-2">
                              <span
                                className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                                  typeClasses[activity.type] ??
                                  "bg-slate-100 text-slate-600"
                                }`}
                              >
                                {activity.type}
                              </span>

                              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] text-slate-500">
                                {activity.status}
                              </span>
                            </div>

                            <h2 className="text-base font-bold leading-7 text-slate-900 transition group-hover:text-slate-600 sm:text-lg">
                              {activity.title}
                            </h2>
                          </div>

                          <ArrowLeft
                            size={18}
                            className="mt-1 shrink-0 text-slate-300 transition group-hover:-translate-x-1 group-hover:text-slate-700"
                          />
                        </div>

                        <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-100 pt-4 text-xs text-slate-400">
                          <span className="flex items-center gap-1.5">
                            <span className="font-medium text-slate-500">
                              {activity.day}
                            </span>
                          </span>

                          <span className="flex items-center gap-1.5">
                            <Clock3 size={14} />
                            {activity.time}
                          </span>

                          <span className="flex items-center gap-1.5">
                            <MapPin size={14} />
                            {activity.location}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-white p-6 text-center">
            <CalendarDays
              size={22}
              className="mx-auto text-slate-300"
            />

            <p className="mt-3 text-sm font-semibold text-slate-700">
              نهاية البرنامج
            </p>

            <p className="mt-1 text-xs text-slate-400">
              يمكن إضافة أنشطة جديدة لاحقاً من لوحة الإدارة.
            </p>
          </div>
        </main>
      </div>
    </AppShell>
  );
}