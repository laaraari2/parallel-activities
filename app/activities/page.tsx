"use client";

import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  FileText,
  MapPin,
  Pencil,
  Settings2,
  Target,
  Users,
  Wrench,
} from "lucide-react";

const executionSteps = [
  {
    id: 1,
    title: "التخطيط",
    description:
      "تحديد أهداف النشاط، الفئة المستهدفة، التاريخ، المكان، والمسؤولين عن التنظيم.",
    status: "منجز",
  },
  {
    id: 2,
    title: "الإعداد",
    description:
      "تشكيل اللجان، توزيع المهام، تجهيز الفضاء والمعدات وإعداد البرنامج التفصيلي.",
    status: "منجز",
  },
  {
    id: 3,
    title: "التنفيذ",
    description:
      "تنفيذ فقرات النشاط وفق البرنامج، تنظيم المشاركين وتتبع سير مختلف المراحل.",
    status: "قيد التنفيذ",
  },
  {
    id: 4,
    title: "التقييم",
    description:
      "جمع الملاحظات، تقييم المشاركة وقياس مدى تحقيق أهداف النشاط.",
    status: "لم يبدأ",
  },
  {
    id: 5,
    title: "التقرير",
    description:
      "إعداد التقرير النهائي وتوثيق النتائج والصور والملاحظات والتوصيات.",
    status: "لم يبدأ",
  },
];

const mechanisms = [
  "تشكيل لجنة تنظيمية للنشاط",
  "تقسيم التلاميذ إلى مجموعات حسب الفئة والمستوى",
  "تحديد مسؤول عن كل مجموعة",
  "إعداد البرنامج الزمني للنشاط",
  "تجهيز الملعب والمعدات الرياضية",
  "تسجيل المشاركين والحضور",
  "تتبع سير النشاط ميدانيًا",
  "توثيق النشاط بالصور والنتائج",
];

export default function ActivityDetailsPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <button className="mb-3 flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900">
                <ArrowRight className="h-4 w-4" />
                العودة إلى برنامج الأنشطة
              </button>

              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <CalendarDays className="h-6 w-6" />
                </div>

                <div>
                  <h1 className="text-2xl font-bold text-slate-900">
                    اليوم الرياضي للمؤسسة
                  </h1>

                  <p className="mt-1 text-sm text-slate-500">
                    نشاط رياضي • الموسم الدراسي 2026 / 2027
                  </p>
                </div>
              </div>
            </div>

            <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50">
              <Pencil className="h-4 w-4" />
              تعديل النشاط
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Main information */}
        <section className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <InfoCard
            icon={<CalendarDays className="h-5 w-5" />}
            label="التاريخ"
            value="15 أكتوبر 2026"
          />

          <InfoCard
            icon={<Clock3 className="h-5 w-5" />}
            label="التوقيت"
            value="09:00 - 16:00"
          />

          <InfoCard
            icon={<MapPin className="h-5 w-5" />}
            label="المكان"
            value="الملعب الرياضي"
          />

          <InfoCard
            icon={<Users className="h-5 w-5" />}
            label="الفئة المستهدفة"
            value="جميع التلاميذ"
          />
        </section>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left content */}
          <div className="space-y-6 lg:col-span-2">
            {/* Objectives */}
            <section className="rounded-2xl border border-slate-200 bg-white">
              <SectionHeader
                icon={<Target className="h-5 w-5" />}
                title="أهداف النشاط"
              />

              <div className="p-5">
                <div className="grid gap-3 sm:grid-cols-2">
                  <Objective text="تنمية روح التعاون والعمل الجماعي." />
                  <Objective text="تشجيع التلاميذ على ممارسة النشاط الرياضي." />
                  <Objective text="اكتشاف المواهب الرياضية بالمؤسسة." />
                  <Objective text="تعزيز الروح الرياضية والمنافسة الشريفة." />
                </div>
              </div>
            </section>

            {/* Execution mechanisms */}
            <section className="rounded-2xl border border-slate-200 bg-white">
              <SectionHeader
                icon={<Settings2 className="h-5 w-5" />}
                title="آليات تنفيذ النشاط"
                description="الإجراءات العملية المعتمدة لتنفيذ النشاط"
              />

              <div className="p-5">
                <div className="space-y-3">
                  {mechanisms.map((mechanism, index) => (
                    <div
                      key={mechanism}
                      className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-xs font-semibold text-slate-600 shadow-sm">
                        {index + 1}
                      </div>

                      <p className="pt-1 text-sm text-slate-700">
                        {mechanism}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Execution stages */}
            <section className="rounded-2xl border border-slate-200 bg-white">
              <SectionHeader
                icon={<ClipboardCheck className="h-5 w-5" />}
                title="مراحل تنفيذ النشاط"
                description="تتبع تقدم النشاط من التخطيط إلى التقرير النهائي"
              />

              <div className="p-5">
                <div className="space-y-4">
                  {executionSteps.map((step, index) => {
                    const isDone = step.status === "منجز";
                    const isCurrent = step.status === "قيد التنفيذ";

                    return (
                      <div key={step.id} className="relative">
                        {index !== executionSteps.length - 1 && (
                          <div className="absolute right-[19px] top-10 h-[calc(100%+16px)] w-px bg-slate-200" />
                        )}

                        <div className="relative flex gap-4">
                          <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${
                              isDone
                                ? "border-emerald-200 bg-emerald-50 text-emerald-600"
                                : isCurrent
                                  ? "border-blue-200 bg-blue-50 text-blue-600"
                                  : "border-slate-200 bg-slate-50 text-slate-400"
                            }`}
                          >
                            {isDone ? (
                              <CheckCircle2 className="h-5 w-5" />
                            ) : (
                              <span className="text-sm font-semibold">
                                {step.id}
                              </span>
                            )}
                          </div>

                          <div className="min-w-0 flex-1 pb-5">
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                              <h3 className="font-semibold text-slate-900">
                                {step.title}
                              </h3>

                              <StatusBadge status={step.status} />
                            </div>

                            <p className="mt-2 text-sm leading-6 text-slate-500">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>

          {/* Right sidebar */}
          <aside className="space-y-6">
            {/* Responsible team */}
            <section className="rounded-2xl border border-slate-200 bg-white">
              <SectionHeader
                icon={<Users className="h-5 w-5" />}
                title="فريق التنظيم"
              />

              <div className="space-y-4 p-5">
                <Person
                  name="محمد العلوي"
                  role="المسؤول عن النشاط"
                  initials="م"
                />

                <Person
                  name="سعاد أمين"
                  role="عضو اللجنة التنظيمية"
                  initials="س"
                />

                <Person
                  name="أحمد بنعلي"
                  role="التنسيق الرياضي"
                  initials="أ"
                />
              </div>
            </section>

            {/* Resources */}
            <section className="rounded-2xl border border-slate-200 bg-white">
              <SectionHeader
                icon={<Wrench className="h-5 w-5" />}
                title="الموارد والتجهيزات"
              />

              <div className="space-y-2 p-5">
                <Resource text="كرات رياضية" />
                <Resource text="أقماع التدريب" />
                <Resource text="صدريات الفرق" />
                <Resource text="صافرات التحكيم" />
                <Resource text="مكبر صوت" />
                <Resource text="شهادات وجوائز" />
              </div>
            </section>

            {/* Documents */}
            <section className="rounded-2xl border border-slate-200 bg-white">
              <SectionHeader
                icon={<FileText className="h-5 w-5" />}
                title="الوثائق"
              />

              <div className="space-y-2 p-5">
                <DocumentItem
                  title="البرنامج التفصيلي"
                  type="PDF"
                />

                <DocumentItem
                  title="لائحة المشاركين"
                  type="XLSX"
                />

                <DocumentItem
                  title="بطاقة النشاط"
                  type="PDF"
                />
              </div>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
          {icon}
        </div>

        <div>
          <p className="text-xs text-slate-400">{label}</p>
          <p className="mt-1 text-sm font-semibold text-slate-800">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description?: string;
}) {
  return (
    <div className="flex items-start gap-3 border-b border-slate-100 p-5">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
        {icon}
      </div>

      <div>
        <h2 className="font-semibold text-slate-900">{title}</h2>

        {description && (
          <p className="mt-1 text-xs text-slate-500">{description}</p>
        )}
      </div>
    </div>
  );
}

function Objective({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3">
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />

      <p className="text-sm leading-6 text-slate-700">{text}</p>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles =
    status === "منجز"
      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
      : status === "قيد التنفيذ"
        ? "bg-blue-50 text-blue-700 border-blue-200"
        : "bg-slate-50 text-slate-500 border-slate-200";

  return (
    <span
      className={`inline-flex w-fit rounded-full border px-3 py-1 text-xs font-medium ${styles}`}
    >
      {status}
    </span>
  );
}

function Person({
  name,
  role,
  initials,
}: {
  name: string;
  role: string;
  initials: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600">
        {initials}
      </div>

      <div>
        <p className="text-sm font-medium text-slate-900">{name}</p>
        <p className="mt-1 text-xs text-slate-500">{role}</p>
      </div>
    </div>
  );
}

function Resource({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg bg-slate-50 px-3 py-2.5">
      <Wrench className="h-4 w-4 text-slate-400" />
      <span className="text-sm text-slate-700">{text}</span>
    </div>
  );
}

function DocumentItem({
  title,
  type,
}: {
  title: string;
  type: string;
}) {
  return (
    <button className="flex w-full items-center justify-between rounded-lg border border-slate-100 p-3 text-right hover:bg-slate-50">
      <div className="flex items-center gap-3">
        <FileText className="h-4 w-4 text-slate-400" />

        <span className="text-sm text-slate-700">{title}</span>
      </div>

      <span className="text-[10px] font-semibold text-slate-400">
        {type}
      </span>
    </button>
  );
}