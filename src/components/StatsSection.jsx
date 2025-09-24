import React from "react";

const stats = [
  { id: 1, value: "138", label: "Menu Items" },
  { id: 2, value: "300+", label: "Visitors Everyday" },
  { id: 3, value: "12", label: "Years of Experience" },
  { id: 4, value: "100%", label: "Taste & Fun" },
];

export default function StatsSection() {
  return (
    <section className="bg-[#e74c3c] py-18">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center">
            <h2 className="text-6xl fredericka-the-great-regular text-white">{stat.value}</h2>
            <p className="mt-2 text-3xl font-semibold text-white uppercase bebas-neue-regular">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
