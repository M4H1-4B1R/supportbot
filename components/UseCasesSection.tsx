import Image from 'next/image';
import { Check } from 'lucide-react';

const useCases = [
    {
        icon: '/icons/online-businesses.svg',
        title: 'Online Businesses',
        description: 'Handle questions about orders, billing, and policies automatically while maintaining your voice.',
        features: [
            'Order status and tracking',
            'Return and refund policies',
            'Product specifications'
        ]
    },
    {
        icon: '/icons/saas-products.svg',
        title: 'SaaS Products',
        description: 'Reduce support tickets by answering technical questions from your documentation instantly.',
        features: [
            'Onboarding guidance',
            'Feature explanations',
            'Pricing and billing'
        ]
    },
    {
        icon: '/icons/service-businesses.svg',
        title: 'Service Businesses',
        description: 'Automate scheduling inquiries and policy questions so your team can focus on delivery.',
        features: [
            'Appointment scheduling',
            'Service policies',
            'Common FAQs'
        ]
    }
];

export default function UseCasesSection() {
    return (
        <section id="use-cases" className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-16">
                    Built for Teams With Documented Knowledge
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {useCases.map((useCase, index) => (
                        <article key={index} className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                            {/* Icon */}
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 border border-slate-200">
                                <Image
                                    src={useCase.icon}
                                    alt={useCase.title}
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                {useCase.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                                {useCase.description}
                            </p>

                            {/* Features list */}
                            <ul className="space-y-2">
                                {useCase.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-slate-700">
                                        <Check size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
