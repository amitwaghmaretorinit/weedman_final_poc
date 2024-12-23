/* eslint-disable @typescript-eslint/no-explicit-any */
 import React from "react";
 import { PortableText } from '@portabletext/react';

export default function ServicesWhyDoINeedThisSection(props: any) {
    const { title, sections, description, video } = props;
    return (
        <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-green-700 mb-6 sm:mb-8">
                {title}
            </h1>

            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
                <div className="flex-1">
                    <PortableText value={description} />
                    <ul className="space-y-4">
                        {sections.map((benefit: any) => (
                            <li key={benefit._key} className="flex items-start">
                                <span className="text-green-700 font-bold text-lg mr-2">•</span>
                                <div>
                                    <h3 className="font-semibold text-gray-800">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-600">{benefit.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex-1">
                    <div className="aspect-w-16 aspect-h-9 h-full">
                        <iframe
                            className="w-full h-full shadow-lg"
                            src={video}
                            title="Why Do I Need This Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
