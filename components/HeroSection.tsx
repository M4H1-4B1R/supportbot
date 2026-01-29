import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white">
            {/* Background illustration */}
            <div className="absolute inset-0 opacity-90">
                <Image
                    src="/hero-blocks.png"
                    alt="3D blocks illustration"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                {/* Main headline - H1 for SEO */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight max-w-4xl mx-auto">
                    Production-Ready AI Customer Support, Built From Your Docs
                </h1>

                {/* Subtitle */}
                <p className="text-lg lg:text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                    Deploy AI agents that answer only from verified sources, escalate safely to humans, and work across channels
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                    <button className="px-6 py-3 bg-blue-600 text-white text-base font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                        Build Your Support Bot
                    </button>
                    <button className="px-6 py-3 bg-white text-slate-700 text-base font-semibold rounded-lg border-2 border-slate-300 hover:border-slate-400 transition-colors">
                        See How It Works
                    </button>
                </div>

                {/* Feature badges */}
                <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={18} className="text-blue-600" />
                        <span>Source-based answers</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={18} className="text-blue-600" />
                        <span>Website • WhatsApp • Email</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={18} className="text-blue-600" />
                        <span>Flat pricing</span>
                    </div>
                </div>

                {/* Chat interface mockup */}
                <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                    {/* Chat header */}
                    <div className="bg-gradient-to-r from-slate-100 to-slate-50 px-6 py-4 border-b border-slate-200 flex items-center gap-3">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <span className="text-sm font-medium text-slate-700">Customer Support Chat</span>
                    </div>

                    {/* Chat messages */}
                    <div className="p-6 space-y-6 bg-gradient-to-b from-white to-slate-50">
                        {/* User message 1 */}
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-slate-300 flex-shrink-0"></div>
                            <div className="bg-slate-100 rounded-2xl rounded-tl-none px-4 py-3 max-w-md">
                                <p className="text-sm text-slate-700">What&apos;s your return policy for defective items?</p>
                            </div>
                        </div>

                        {/* Bot response 1 */}
                        <div className="flex items-start gap-3 justify-end">
                            <div className="bg-blue-600 rounded-2xl rounded-tr-none px-4 py-3 max-w-md">
                                <p className="text-sm text-white mb-3">
                                    We offer a 30-day return policy for defective items. You can initiate a return by contacting our support team with your order number and photos of the defect. We&apos;ll provide a prepaid return label and process your refund within 5-7 business days of receiving the item.
                                </p>
                                <div className="flex items-center gap-2 text-xs text-blue-100 bg-blue-700/30 rounded px-2 py-1">
                                    <span>📄</span>
                                    <span>Source: Return Policy, Section 2.3</span>
                                </div>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">
                                AI
                            </div>
                        </div>

                        {/* User message 2 */}
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-slate-300 flex-shrink-0"></div>
                            <div className="bg-slate-100 rounded-2xl rounded-tl-none px-4 py-3 max-w-md">
                                <p className="text-sm text-slate-700">Can I get a refund in store credit instead?</p>
                            </div>
                        </div>

                        {/* Bot response 2 - escalation */}
                        <div className="flex items-start gap-3 justify-end">
                            <div className="bg-amber-50 border border-amber-200 rounded-2xl rounded-tr-none px-4 py-3 max-w-md">
                                <p className="text-sm text-amber-800 mb-2">
                                    ⚠️ I don&apos;t have specific information about store credit options. Let me connect you with a team member who can help with this request.
                                </p>
                                <div className="text-xs text-amber-600 italic">
                                    Escalating to human agent...
                                </div>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">
                                AI
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
