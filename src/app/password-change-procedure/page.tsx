"use client";

import React, { useState } from "react";
import {
  AlertCircle,
  CheckCircle,
  Phone,
  User,
  MapPin,
  Key,
  Building,
} from "lucide-react";

const PasswordChangeProcedure = () => {
  const [activeSection, setActiveSection] = useState("main");

  const renderVerificationSteps = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-right text-gray-800">
          خطوات التحقق من هوية التاجر
        </h2>
        <div className="grid gap-4">
          {[
            {
              icon: Phone,
              title: "التحقق من الرقم الموثوق",
              desc: "يجب أن يتصل التاجر من الرقم الموثوق المسجل على السيستم",
            },
            {
              icon: User,
              title: "التحقق من اسم التاجر",
              desc: "لازم اسم التاجر في الترحيب يكون نفس الاسم المسجل به",
            },
            {
              icon: Key,
              title: "التحقق من الرقم القومي",
              desc: "التأكد من صحة الرقم القومي المسجل",
            },
            {
              icon: Building,
              title: "التحقق من اسم المحل ونوع النشاط",
              desc: "التأكد من تطابق بيانات المحل والنشاط",
            },
            {
              icon: MapPin,
              title: "التحقق من العنوان",
              desc: "التحقق من العنوان المسجل على السيستم",
            },
          ].map((step, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 border p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all"
            >
              <step.icon className="w-6 h-6 text-blue-600" />
              <div className="text-right">
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 rounded-lg bg-yellow-50 border border-yellow-200 flex items-start gap-3">
        <AlertCircle className="h-6 w-6 text-yellow-600" />
        <div className="text-right">
          <h4 className="font-semibold text-yellow-600">تنبيه هام</h4>
          <p className="text-gray-600">
            يجب توضيح أن كلمة السر صلاحيتها 4 ساعات و يجب تغييرها قبل مرور هذه
            المدة
          </p>
        </div>
      </div>
    </div>
  );

  const renderUndefinedAccounts = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-right text-gray-800">
          تغيير الباسورد للحسابات Undefined
        </h2>

        <div className="grid gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-bold text-right mb-2 text-gray-800">
              في حالة اتصال التاجر على 16233
            </h3>
            <p className="text-right text-gray-600">
              يتم توجيه التاجر إلى مشرف البيع لإرسال طلب لنا و توضيح السبب أنه
              لا يوجد بيانات مسجله على الحساب
            </p>
            <p className="text-right text-gray-600 mt-2">
              يجب ارسال طلب آخر لإدارة التفعيل بتسجيل البيانات و معرفة التاجر
              بذلك
            </p>
          </div>

          <div className="border p-4 rounded-lg">
            <h3 className="font-bold text-right mb-2 text-gray-800">
              في حالة إرسال المشرف إيميل
            </h3>
            <p className="text-right text-gray-600">
              البنك أوفيس أو البلندد هيبعت الرقم السري عادي على التراستيد مهما
              كان الرصيد
            </p>
            <p className="text-right text-gray-600 mt-2">
              لو مفيش تراستيد متسجل بعت عليه الباسورد .. هنبلغ المشرف ان مفيش
              رقم تراستيد بعت عليه الطلب
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <div className="bg-blue-600 text-white p-4 rounded-lg mb-6 shadow-lg">
          <h1 className="text-2xl font-bold text-center">
            شرح الإجراءات في حالة إتصال التاجر على 16233
          </h1>
        </div>

        <div className="mb-6 flex gap-4">
          <button
            onClick={() => setActiveSection("main")}
            className={`flex-1 p-3 rounded-lg text-gray-800 font-semibold ${
              activeSection === "main" ? "bg-blue-600 text-white" : "bg-white"
            } hover:bg-blue-200 transition-all`}
          >
            إجراءات التحقق
          </button>
          <button
            onClick={() => setActiveSection("undefined")}
            className={`flex-1 p-3 rounded-lg text-gray-800 font-semibold ${
              activeSection === "undefined"
                ? "bg-blue-600 text-white"
                : "bg-white"
            } hover:bg-blue-200 transition-all`}
          >
            حسابات Undefined
          </button>
        </div>

        {activeSection === "main"
          ? renderVerificationSteps()
          : renderUndefinedAccounts()}

        <div className="p-4 rounded-lg bg-blue-50 border border-blue-200 flex items-start gap-3 mt-6">
          <CheckCircle className="h-6 w-6 text-blue-600" />
          <p className="text-right text-gray-600">
            سيقوم موظف الكول سنتر باتباع الخطوات أعلاه في المكالمه
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordChangeProcedure;
