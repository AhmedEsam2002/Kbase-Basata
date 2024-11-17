"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";

const KnowledgeBase = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    {
      id: 1,
      title: "قائمة خدمات بساطه",
      icon: "🏢",
    },
    {
      id: 2,
      title: "إجراءات الحساب",
      icon: "🔐",
      items: [
        {
          text: "إجراءات تغيير الرقم السري لحساب التاجر Reset Password",
          href: "/password-change-procedure",
        },
        {
          text: "إجراءات تغيير الرقم الموثوق لحساب التاجر Trusted Number",
          href: "/trusted-number",
        },
      ],
    },
    {
      id: 3,
      title: "الفروع والخدمات",
      icon: "🏪",
      items: [
        {
          text: "فروع بساطه_و_أكشاك بساطه_و_الإيداعات_و مكالمه عدم وجود مندوب و عرض طرق الشحن",
          href: "/branches-services",
        },
        {
          text: "خدمة زود رصيد بساطه Add Basata Balance",
          href: "/add-balance",
        },
      ],
    },
    {
      id: 4,
      title: "الحسابات والشكاوى",
      icon: "📝",
      items: [
        {
          text: "الحسابات الفرعيه اللي بيظهر ليها رساله ( الحساب محدود ) تحت ال Parent",
          href: "/limited-account",
        },
        {
          text: "الشكاوي و الطلبات اللي فيها SLA مع السيلز",
          href: "/sla-complaints",
        },
        {
          text: "شكاوي صرف حافز VDF 365",
          href: "/vdf-365-complaints",
        },
      ],
    },
    {
      id: 5,
      title: "خدمات الدفع",
      icon: "💳",
      items: [
        {
          text: "طريقة دفع خدمة فودافون DSL في مصاري",
          href: "/vodafone-dsl-payment",
        },
        {
          text: "خدمة International TopUp",
          href: "/international-topup",
        },
        {
          text: "خدمة الدفع بالفيزا من خلال التجار Card Acceptance",
          href: "/card-acceptance",
        },
      ],
    },
    {
      id: 6,
      title: "إجراءات وطلبات",
      icon: "📋",
      items: [
        {
          text: "اجراءات تقديم طلب بوتنشال دايركت او بوتنشال موزع او بوتنشال فيزا و الديسكربشن المطلوب",
          href: "/potential-request",
        },
        {
          text: "طلب الإشتراك في خدمة تحصيل أموال من اعلان لينكد ان Linked In Basata",
          href: "/linkedin-service",
        },
      ],
    },
  ];

  const filteredCategories = categories
    .map((category) => ({
      ...category,
      items: category.items?.filter((item) =>
        item.text.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter(
      (category) =>
        category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (category.items && category.items.length > 0)
    );

  return (
    <div className="min-h-screen bg-gray-50 text-right" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <img src="/logo.png" alt="Basata Logo" className="h-8" />
          <div className="relative w-96">
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="ابحث في قاعدة المعرفة..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="p-6">
                <div className="flex items-center">
                  <span className="text-2xl ml-2">{category.icon}</span>
                  <h3 className="text-lg font-medium text-gray-900">
                    {category.title}
                  </h3>
                </div>
                {category.items && (
                  <ul className="mt-4 space-y-2">
                    {category.items.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.href}
                          className="text-gray-600 hover:text-gray-900 cursor-pointer text-sm"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default KnowledgeBase;
