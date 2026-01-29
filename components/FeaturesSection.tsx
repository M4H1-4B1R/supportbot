import { FileText, Award, Users, Code, Zap, Puzzle } from 'lucide-react';

const features = [
    { icon: FileText, title: 'Document Upload', description: 'Upload your existing docs', color: 'bg-blue-100 text-blue-600' },
    { icon: Award, title: 'Verified Answers', description: 'AI trained on your content', color: 'bg-purple-100 text-purple-600' },
    { icon: Users, title: 'Multi-agent Support', description: 'Handle multiple conversations', color: 'bg-green-100 text-green-600' },
    { icon: Code, title: 'API Access', description: 'Integrate anywhere', color: 'bg-orange-100 text-orange-600' },
    { icon: Zap, title: 'Instant Deploy', description: 'Go live in minutes', color: 'bg-yellow-100 text-yellow-600' },
    { icon: Puzzle, title: 'Integrations', description: 'Connect your existing tools', color: 'bg-pink-100 text-pink-600' }
];

export default function FeaturesSection() {
    return (
        <section id="features" className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-16">
                    Everything you need to run AI customer support — in one system.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <article key={index} className="flex flex-col items-center text-center group hover:scale-105 transition-transform">
                                <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-5 shadow-md`}>
                                    <Icon size={32} strokeWidth={2} />
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-600">
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
