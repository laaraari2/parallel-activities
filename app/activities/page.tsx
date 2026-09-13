import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  Clock3,
  FileText,
  MapPin,
  Users,
} from "lucide-react";
import AppShell from "../components/AppShell";

const stages = [
  { title: "التخطيط", done: true },
  { title: "الإعداد", done: true },
  { title: "التنفيذ", done: false },
  { title: "التقييم", done: false },
  { title: "التقرير", done: false },
];

const tasks = [
  {
    title: "تحديد برنامج الاحتفال",
    owner: "الأستاذ المسؤول",
    done: true,
  },
  {
    title: "إعداد لائحة المشاركين",
    owner: "فريق التنظيم",
    done: true,
  },
  {
    title: "تجهيز القاعة والمعدات",
    owner: "الإدارة",
    done: false,
  },
  {
    title: "إعداد الفقرات والعروض",
    owner: "فريق النشاط",
    done: false,
  },
];

const documents = [
  {
    name: "برنامج الاحتفال",
    type: "PDF",
  },
  {
    name: "لائحة المشاركين",
    type: "DOCX",
  },
  {
    name: "بطاقة تقنية للنشاط",
    type: "PDF",
  },
];

export default function ActivitiesPage() {
  return (
    <AppShell>
      <div className="min-h-screen">
        <header className="border-b border-slate-200/80 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Link href="/" className="hover:text-slate-700">
                الرئيسية
              </Link>

              <ChevronLeft size={15} />

              <Link href="/program" className="hover:text-slate-700">
                برنامج الأنشطة
              </Link>

              <ChevronLeft size={15} />

              <span className="text-slate-700">تفاصيل النشاط</span>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
          <section className="overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white sm:p-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-slate-300">
                    ثقافي
                  </span>

                  <span className="rounded-full bg-amber-400/10 px-3 py-1.5 text-xs font-medium text-amber-300">
                    قيد الإعداد
                  </span>
                </div>

                <h1 className="text-2xl font-bold leading-tight sm:text-4xl">
                  الاحتفال باليوم العالمي للمدرس
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                  نشاط ثقافي للاحتفاء بالمدرس ودوره في بناء الأجيال، من خلال
                  فقرات تكريمية وعروض وأنشطة تربوية.
                </p>

                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-400">
                  <span className="flex items-center gap-2">
                    <CalendarDays size={15} />
                    05 أكتوبر
                  </span>

                  <span className="flex items-center gap-2">
                    <Clock3 size={15} />
                    10:00
                  </span>

                  <span className="flex items-center gap-2">
                    <MapPin size={15} />
                    المؤسسة
                  </span>
                </div>
              </div>

              <Link
                href="/program"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                <ArrowRight size={17} />
                العودة للبرنامج
              </Link>
            </div>
          </section>

          <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold">تقدم النشاط</p>
                <p className="mt-1 text-xs text-slate-400">
                  تم إنجاز مرحلتين من أصل خمس مراحل
                </p>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-2xl font-bold">40%</span>
              </div>
            </div>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[40%] rounded-full bg-slate-950" />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-5">
              {stages.map((stage, index) => (
                <div
                  key={stage.title}
                  className={`flex items-center gap-3 rounded-2xl p-3 ${
                    stage.done ? "bg-slate-950 text-white" : "bg-slate-50"
                  }`}
                >
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${
                      stage.done
                        ? "bg-white/10 text-white"
                        : "bg-white text-slate-400"
                    }`}
                  >
                    {stage.done ? (
                      <CheckCircle2 size={16} />
                    ) : (
                      <span className="text-xs font-bold">
                        {index + 1}
                      </span>
                    )}
                  </div>

                  <span
                    className={`text-xs font-medium ${
                      stage.done ? "text-white" : "text-slate-500"
                    }`}
                  >
                    {stage.title}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_340px]">
            <div className="space-y-6">
              <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-6">
                  <h2 className="text-lg font-bold">أهداف النشاط</h2>
                  <p className="mt-1 text-sm text-slate-400">
                    النتائج التربوية والتنظيمية المنتظرة
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "التعريف بدور المدرس وأهميته",
                    "تعزيز ثقافة الاعتراف بالمجهود التربوي",
                    "إشراك المتعلمين في النشاط",
                    "خلق أجواء احتفالية داخل المؤسسة",
                  ].map((objective) => (
                    <div
                      key={objective}
                      className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600"
                    >
                      <span className="mb-2 block h-1.5 w-1.5 rounded-full bg-slate-950" />
                      {objective}
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold">المهام</h2>
                    <p className="mt-1 text-sm text-slate-400">
                      المهام المرتبطة بتنفيذ النشاط
                    </p>
                  </div>

                  <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-500">
                    2 / 4 مكتملة
                  </span>
                </div>

                <div className="space-y-3">
                  {tasks.map((task) => (
                    <div
                      key={task.title}
                      className="flex items-center gap-4 rounded-2xl border border-slate-100 p-4"
                    >
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                          task.done
                            ? "bg-slate-950 text-white"
                            : "bg-slate-100 text-slate-300"
                        }`}
                      >
                        <CheckCircle2 size={17} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p
                          className={`text-sm font-medium ${
                            task.done
                              ? "text-slate-400 line-through"
                              : "text-slate-700"
                          }`}
                        >
                          {task.title}
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          {task.owner}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-6">
                  <h2 className="text-lg font-bold">الوثائق</h2>
                  <p className="mt-1 text-sm text-slate-400">
                    الملفات المرتبطة بالنشاط
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {documents.map((document) => (
                    <div
                      key={document.name}
                      className="rounded-2xl border border-slate-100 p-4 transition hover:border-slate-200 hover:bg-slate-50"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                        <FileText size={18} />
                      </div>

                      <p className="mt-4 text-sm font-medium leading-6 text-slate-700">
                        {document.name}
                      </p>

                      <p className="mt-1 text-[11px] text-slate-400">
                        {document.type}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-6">
              <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold">معلومات سريعة</h2>

                <div className="mt-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                      <CalendarDays size={17} />
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">التاريخ</p>
                      <p className="mt-1 text-sm font-medium">
                        05 أكتوبر
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                      <Clock3 size={17} />
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">التوقيت</p>
                      <p className="mt-1 text-sm font-medium">10:00</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                      <MapPin size={17} />
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">المكان</p>
                      <p className="mt-1 text-sm font-medium">المؤسسة</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <Users size={19} />
                  </div>

                  <div>
                    <h2 className="font-bold">فريق التنظيم</h2>
                    <p className="text-xs text-slate-400">
                      4 أعضاء
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    ["الأستاذ المسؤول", "منسق النشاط"],
                    ["الإدارة", "الدعم والتنظيم"],
                    ["فريق النشاط", "الإعداد والتنفيذ"],
                  ].map(([name, role]) => (
                    <div
                      key={name}
                      className="flex items-center justify-between rounded-2xl bg-slate-50 p-3"
                    >
                      <div>
                        <p className="text-xs font-medium text-slate-700">
                          {name}
                        </p>
                        <p className="mt-1 text-[11px] text-slate-400">
                          {role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-3xl bg-slate-950 p-6 text-white">
                <p className="text-sm font-semibold">الموارد المطلوبة</p>

                <ul className="mt-4 space-y-3 text-xs leading-5 text-slate-400">
                  <li>• جهاز عرض ومكبرات صوت</li>
                  <li>• تجهيز فضاء الاحتفال</li>
                  <li>• شهادات التكريم</li>
                  <li>• مواد خاصة بالعروض</li>
                </ul>
              </section>
            </aside>
          </div>
        </main>
      </div>
    </AppShell>
  );
}