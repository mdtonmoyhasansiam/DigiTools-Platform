import React from 'react'

export default function UserRating() {

  const stats = [
    { value: "100K+", label: "Active Users" },
    { value: "150+", label: "Premium Tools" },
    { value: "4.9", label: "Rating" }
  ];

  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-500 py-10">

      <div className="max-w-[1200px] mx-auto grid gap-6 grid-cols-1 md:grid-cols-3 text-center">

        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center space-y-2">

            <h2 className="text-4xl md:text-5xl font-bold text-white">
              {item.value}
            </h2>

            <p className="text-white">
              {item.label}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}
