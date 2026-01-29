export default function CustomerSupportSection() {
    return (
        <section className="py-20 lg:py-28" style={{ backgroundColor: '#F8FAFC' }}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-2 border-dashed border-blue-300 rounded-2xl p-12 bg-white/50">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-8">
                        Customer Support Is Expensive, Slow, and Hard to Trust
                    </h2>

                    <ul className="space-y-4 mb-8 max-w-2xl mx-auto">
                        <li className="flex items-center justify-center gap-3 text-slate-600">
                            <div className="w-2 h-2 rounded-full bg-slate-400 flex-shrink-0"></div>
                            <span>Enterprise tools are costly and complex</span>
                        </li>
                        <li className="flex items-center justify-center gap-3 text-slate-600">
                            <div className="w-2 h-2 rounded-full bg-slate-400 flex-shrink-0"></div>
                            <span>Building reliable AI support takes weeks</span>
                        </li>
                        <li className="flex items-center justify-center gap-3 text-slate-600">
                            <div className="w-2 h-2 rounded-full bg-slate-400 flex-shrink-0"></div>
                            <span>Generic chatbots give unreliable answers</span>
                        </li>
                    </ul>

                    <p className="text-center text-slate-700 font-medium">
                        SupportBot Factory turns customer support into a repeatable system.
                    </p>
                </div>
            </div>
        </section>
    );
}
