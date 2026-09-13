import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  Plus,
  Sparkles,
} from "lucide-react";
import AppShell from "./components/AppShell";

const upcomingActivities = [
  {
    title: "الاحتفال باليوم العالمي للمدرس",
    date: "05 أكتوبر",
    day: "الأحد",
    time: "10:00",
    location: "المؤسسة",
    type: "ثقافي",
    status: "قيد الإعداد",
  },
  {
    title: "الاحتفال بذكرى المسيرة الخضراء",
    date: "06 نونبر",
    day: "الخميس",
    time: "10:00",
    location: "قاعة الأنشطة",
    type: "وطني",
    status: "مخطط",
  },
  {
    title: "حفل نهاية الأسدس الأول",
    date: "23 يناير",
    day: "الجمعة",
    time: "15:00",
    location: "قاعة المؤسسة",
    type: "احتفالي",
    status: "مخطط",
  },
  {
    title: "حفل ديني بمناسبة شهر رمضان",
    date: "10 مارس",
    day: "الثلاثاء",
    time: "15:00",
    location: "قاعة الأنشطة",
    type: "ديني",
    status: "مخطط",
  },
];

const stats = [
  {
    label: "إجمالي الأنشطة",
    value: "7",
    detail: "خلال الموسم الدراسي",
    icon: CalendarDays,
  },
  {
    label: "الأنشطة القادمة",
    value: "4",
    detail: "في الفترة المقبلة",
    icon: Clock3,
  },
  {
    label: "مكتملة",
    value: "0",
    detail: "بانتظار التنفيذ",
    icon: CheckCircle2,
  },
];

export default function Home() {
  return (
    <AppShell>
      <div className="min-h-screen">
        <header className="border-b border-slate-200/80 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="mb-3 flex items-center gap-2 text-sm text-slate-400">
                  <span>الرئيسية</span>
                  <span>/</span>
                  <span className="text-slate-700">لوحة القيادة</span>
                </div>

                <h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  لوحة القيادة
                </h1>

                <p className="mt-2 text-sm text-slate-500">
                  نظرة سريعة على برنامج الأنشطة الموازية وسير تنفيذها.
                </p>
              </div>

              <Link
                href="/program"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                <CalendarDays size={17} />
                عرض البرنامج
              </Link>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
          <section className="overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-sm sm:p-8">
            <div className="relative">
              <div className="absolute -left-16 -top-20 h-48 w-48 rounded-full bg-white/5 blur-3xl" />

              <div className="relative max-w-2xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                  <Sparkles size={14} />
                  الموسم الدراسي الحالي
                </div>

                <h2 className="text-2xl font-bold leading-tight sm:text-4xl">
                  برنامج منظم،
                  <br />
                  مدرسة أكثر نشاطاً.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                  تتبع الأنشطة الموازية، مواعيدها، مراحل تنفيذها والمهام
                  المرتبطة بها من مساحة واحدة.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/activities"
                    className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                  >
                    استكشاف الأنشطة
                    <ArrowLeft size={17} />
                  </Link>

                  <Link
                    href="/program"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    البرنامج الكامل
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-6 grid gap-4 md:grid-cols-3">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-slate-500">{stat.label}</p>
                      <p className="mt-2 text-3xl font-bold tracking-tight">
                        {stat.value}
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                      <Icon size={19} />
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-slate-400">
                    {stat.detail}
                  </p>
                </div>
              );
            })}
          </section>

          <section className="mt-10">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  الأنشطة القادمة
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  أقرب المواعيد ضمن البرنامج
                </p>
              </div>

              <Link
                href="/program"
                className="hidden items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-950 sm:flex"
              >
                عرض الكل
                <ArrowLeft size={16} />
              </Link>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {upcomingActivities.map((activity, index) => (
                <Link
                  href="/activities"
                  key={activity.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex gap-4">
                    <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-slate-950 text-white">
                      <span className="text-xl font-bold">
                        {activity.date.split(" ")[0]}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {activity.date.split(" ")[1]}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="mb-2 flex items-start justify-between gap-3">
                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600">
                          {activity.type}
                        </span>

                        <span className="text-xs text-slate-400">
                          {activity.day}
                        </span>
                      </div>

                      <h3 className="font-semibold leading-6 text-slate-900 group-hover:text-slate-600">
                        {activity.title}
                      </h3>

                      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-400">
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
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-xs font-medium text-slate-500">
                      {activity.status}
                    </span>

                    <span className="text-xs text-slate-400 transition group-hover:text-slate-900">
                      التفاصيل ←
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-white p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-bold">جاهز لإضافة نشاط جديد؟</h2>
                <p className="mt-1 text-sm text-slate-500">
                  يمكننا لاحقاً ربط هذه الواجهة بقاعدة بيانات وإضافة الأنشطة
                  مباشرة.
                </p>
              </div>

              <button
                disabled
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-400"
              >
                <Plus size={17} />
                إضافة نشاط
              </button>
            </div>
          </section>
        </main>
      </div>
    </AppShell>
  );
}