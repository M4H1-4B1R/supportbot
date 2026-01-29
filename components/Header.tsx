import { User } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
            <nav className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20" fill="none">
                                <path d="M8.12543 13.75C12.6137 13.75 16.2504 10.6719 16.2504 6.875C16.2504 3.07812 12.6137 0 8.12543 0C3.63715 0 0.000427516 3.07812 0.000427516 6.875C0.000427516 8.38281 0.574646 9.77734 1.5473 10.9141C1.41058 11.2812 1.20746 11.6055 0.992615 11.8789C0.805115 12.1211 0.613709 12.3086 0.473084 12.4375C0.402771 12.5 0.344178 12.5508 0.305115 12.582C0.285584 12.5977 0.269959 12.6094 0.262146 12.6133L0.254334 12.6211C0.03949 12.7812 -0.05426 13.0625 0.0316775 13.3164C0.117615 13.5703 0.355896 13.75 0.625428 13.75C1.47699 13.75 2.33636 13.5312 3.05121 13.2617C3.41058 13.125 3.74652 12.9727 4.03949 12.8164C5.23871 13.4102 6.63324 13.75 8.12543 13.75ZM17.5004 6.875C17.5004 11.2617 13.6293 14.5664 9.0434 14.9609C9.99261 17.8672 13.1411 20 16.8754 20C18.3676 20 19.7621 19.6602 20.9653 19.0664C21.2582 19.2227 21.5903 19.375 21.9496 19.5117C22.6645 19.7812 23.5239 20 24.3754 20C24.645 20 24.8871 19.8242 24.9692 19.5664C25.0512 19.3086 24.9614 19.0273 24.7426 18.8672L24.7348 18.8594C24.727 18.8516 24.7114 18.8438 24.6918 18.8281C24.6528 18.7969 24.5942 18.75 24.5239 18.6836C24.3832 18.5547 24.1918 18.3672 24.0043 18.125C23.7895 17.8516 23.5864 17.5234 23.4496 17.1602C24.4223 16.0273 24.9965 14.6328 24.9965 13.1211C24.9965 9.49609 21.6801 6.52344 17.4731 6.26562C17.4887 6.46484 17.4965 6.66797 17.4965 6.87109L17.5004 6.875Z" fill="white" />
                            </svg>
                        </div>
                        <span className="text-lg font-semibold text-slate-900">
                            SupportBot Factory
                        </span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="#features" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                            Features
                        </Link>
                        <Link href="#how-it-works" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                            How It Works
                        </Link>
                        <Link href="#use-cases" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                            Use Cases
                        </Link>
                        <Link href="#pricing" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                            Pricing
                        </Link>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:text-slate-900 transition-colors">
                            <User size={16} />
                            <span>Sign In</span>
                        </button>
                        <button className="px-5 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm">
                            Get Started
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}
