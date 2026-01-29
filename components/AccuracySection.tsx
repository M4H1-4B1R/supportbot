import Image from 'next/image';

const accuracyFeatures = [
    {
        icon: '/icons/source-only-answers.svg',
        title: 'Source-only answers',
        description: 'Every response is generated exclusively from your uploaded documentation. No generic knowledge, no assumptions.'
    },
    {
        icon: '/icons/visible-citations.svg',
        title: 'Visible citations on every response',
        description: 'Customers see exactly which document and section each answer comes from, building trust and transparency.'
    },
    {
        icon: '/icons/confidence-based-escalation.svg',
        title: 'Confidence-based escalation',
        description: 'When the AI isn\'t certain, it automatically escalates to your team with full conversation context.'
    },
    {
        icon: '/icons/full-conversation.svg',
        title: 'Full conversation audit logs',
        description: 'Review every interaction, track accuracy, and continuously improve your knowledge base.'
    }
];

export default function AccuracySection() {
    return (
        <section className="py-20 lg:py-28" style={{ backgroundColor: '#F8FAFC' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-2 border-dashed border-blue-300 rounded-2xl p-12 lg:p-16 bg-white/50">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-16">
                        Accuracy Is Not Optional
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {accuracyFeatures.map((feature, index) => (
                            <article key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                                    <Image
                                        src={feature.icon}
                                        alt={feature.title}
                                        width={24}
                                        height={24}
                                        className="w-6 h-6"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
