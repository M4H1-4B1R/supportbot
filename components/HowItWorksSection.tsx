import { FileText, File } from 'lucide-react';

const steps = [
    {
        number: 1,
        title: 'Upload your knowledge',
        description: 'Docs, FAQs, policies, product data'
    },
    {
        number: 2,
        title: 'Train guarded AI agents',
        description: 'Answers only from verified sources'
    },
    {
        number: 3,
        title: 'Deploy across channels',
        description: 'Website, WhatsApp, email'
    },
    {
        number: 4,
        title: 'Escalate with context',
        description: 'Humans step in when needed'
    }
];

export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="py-20 lg:py-28 lg:px-48 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-16">
                    From Docs to Live Support in Minutes
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Steps */}
                    <div className="space-y-8">
                        {steps.map((step) => (
                            <div key={step.number} className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-bold text-lg">{step.number}</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-1">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-600">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mockup */}
                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl shadow-xl p-8 border border-slate-200">
                        <h3 className="text-lg font-semibold text-slate-900 mb-6">Knowledge Base Upload</h3>

                        {/* Upload area */}
                        <div className="bg-white border-2 border-dashed border-slate-300 rounded-xl p-12 mb-6 text-center">
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                </div>
                            </div>
                            <p className="text-sm text-slate-600 mb-1">Drop files here or click to upload</p>
                            <p className="text-xs text-slate-500">PDF, DOCX, TXT, MD supported</p>
                        </div>

                        {/* Uploaded files */}
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-slate-200">
                                <FileText className="text-red-500" size={20} />
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-slate-900">Return Policy.pdf</p>
                                    <p className="text-xs text-slate-500">2.4 MB</p>
                                </div>
                                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-slate-200">
                                <FileText className="text-blue-500" size={20} />
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-slate-900">Product FAQs.docx</p>
                                    <p className="text-xs text-slate-500">1.8 MB</p>
                                </div>
                                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-slate-200">
                                <File className="text-slate-500" size={20} />
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-slate-900">Shipping Guidelines.txt</p>
                                    <p className="text-xs text-slate-500">0.3 MB</p>
                                </div>
                                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Process button */}
                        <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                            Process Knowledge Base
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
