import { Clock, DollarSign, TrendingDown } from 'lucide-react';

export default function CustomerSupportSection() {
    return (
        <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                            Customer Support is Expensive, Slow, and Hard to Trust
                        </h2>
                        <p className="text-lg text-slate-600 mb-8">
                            Traditional customer support teams struggle with repetitive questions, slow response times, and inconsistent answers.
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                                    <Clock className="text-red-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Slow Response Times</h3>
                                    <p className="text-slate-600">Customers wait hours for simple answers that could be automated.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                                    <DollarSign className="text-red-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-2">High Costs</h3>
                                    <p className="text-slate-600">Hiring and training support teams is expensive and doesn&apos;t scale.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                                    <TrendingDown className="text-red-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Inconsistent Answers</h3>
                                    <p className="text-slate-600">Different agents give different answers, confusing customers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
                            <div className="space-y-6">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                                        <div className="w-10 h-10 bg-red-200 rounded-full flex-shrink-0"></div>
                                        <div className="flex-1">
                                            <div className="h-3 bg-red-300 rounded w-3/4 mb-2"></div>
                                            <div className="h-3 bg-red-200 rounded w-1/2"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
