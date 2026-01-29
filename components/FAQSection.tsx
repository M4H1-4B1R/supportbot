'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqData } from '@/lib/faq-data';

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-20 lg:py-28 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-4">
                    Frequently Asked Questions
                </h2>
                <p className="text-lg text-slate-600 text-center mb-12">
                    Everything you need to know about SupportBot Factory
                </p>

                <div className="space-y-4">
                    {faqData.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <article key={index} className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full px-6 py-5 flex items-start gap-4 text-left hover:bg-slate-50"
                                    aria-expanded={isOpen}
                                >
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-slate-900">
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <ChevronDown size={24} className={`flex-shrink-0 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {isOpen && (
                                    <div className="px-6 pb-5">
                                        <p className="text-slate-700">{faq.answer}</p>
                                    </div>
                                )}
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
