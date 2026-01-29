import Image from 'next/image';

const features = [
    {
        icon: 'instant-training',
        title: 'Instant Training',
        description: 'Upload docs and go live in minutes',
        color: 'bg-blue-50',
        svgPath: '/icons/instant-training.svg'
    },
    {
        icon: 'zero-hallucination',
        title: 'Zero-Hallucination',
        description: 'Answer only from verified sources',
        color: 'bg-blue-50',
        svgPath: '/icons/zero-hallucination.svg'
    },
    {
        icon: 'human-escalation',
        title: 'Human Escalation',
        description: 'Escalate to human agent when needed',
        color: 'bg-blue-50',
        svgPath: '/icons/human-escalation.svg'
    },
    {
        icon: 'multi-channel',
        title: 'Multi-Channel',
        description: 'Website, WhatsApp, email support',
        color: 'bg-blue-50',
        svgPath: '/icons/multi-channel.svg'
    },
    {
        icon: 'analytics',
        title: 'Analytics',
        description: 'Track performance and gaps',
        color: 'bg-blue-50',
        svgPath: '/icons/analytics.svg'
    },
    {
        icon: 'integrations',
        title: 'Integrations',
        description: 'Connect your existing tools',
        color: 'bg-blue-50',
        svgPath: '/icons/integrations.svg'
    }
];

// SVG Icons as components
const InstantTrainingIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="#1E40AF" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ZeroHallucinationIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default function FeaturesSection() {
    return (
        <section id="features" className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-4">
                    Everything you need to run AI customer support — in one system.
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6 mt-16">
                    {features.map((feature, index) => {
                        return (
                            <article key={index} className="flex flex-col items-center text-center">
                                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                                    {feature.svgPath && (
                                        <Image
                                            src={feature.svgPath}
                                            alt={feature.title}
                                            width={24}
                                            height={24}
                                            className="w-6 h-6"
                                        />
                                    )}
                                </div>
                                <h3 className="text-sm font-semibold text-slate-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

