/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export default function WeedControlServiceSection(props: any) {
  const { title, sections } = props;
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
          {title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section: any) => (
            <div
              key={section._key}
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-semibold text-green-700 mb-2">
                {section.title}
              </h2>
              <p className="text-gray-600 text-sm">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
