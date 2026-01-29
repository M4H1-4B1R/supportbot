import { Check } from 'lucide-react';

const plans = [
    {
        name: 'Starter',
        price: '$49',
        period: '/month',
        description: 'Perfect for small teams',
        features: ['Up to 1,000 conversations/month', '5 document uploads', 'Basic analytics', 'Email support'],
        cta: 'Start Free Trial',
        highlighted: false
    },
    {
        name: 'Professional',
        price: '$149',
        period: '/month',
        description: 'For growing businesses',
        features: ['Up to 10,000 conversations/month', 'Unlimited documents', 'Advanced analytics', 'Priority support', 'API access'],
        cta: 'Start Free Trial',
        highlighted: true
    },
    {
        name: 'Enterprise',
        price: '$499',
        period: '/month',
        description: 'For large teams',
        features: ['Unlimited conversations', 'Unlimited documents', 'Dedicated account manager', '24/7 support', 'Custom integrations'],
        cta: 'Contact Sales',
        highlighted: false
    }
];

export default function PricingSection() {
    return (
        <section id="pricing" className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                        Simple Pricing for Growing Teams
                    </h2>
                    <p className="text-lg text-slate-600">
                        Choose the plan that fits your needs. All plans include a 14-day free trial.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <article
                            key={index}
                            className={`relative rounded-2xl p-8 border-2 transition-all hover:scale-105 ${plan.highlighted ? 'border-blue-600 shadow-2xl bg-gradient-to-b from-blue-50 to-white' : 'border-slate-200 shadow-lg bg-white'}`}
                        >
                            {plan.highlighted && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-1 rounded-full text-sm font-semibold">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                            <p className="text-slate-600 mb-6">{plan.description}</p>
                            <div className="mb-6">
                                <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                                <span className="text-slate-600 text-lg">{plan.period}</span>
                            </div>
                            <button className={`w-full py-3 px-6 rounded-lg font-semibold mb-8 ${plan.highlighted ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                                {plan.cta}
                            </button>
                            <ul className="space-y-4">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-700">{feature}</span>
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
