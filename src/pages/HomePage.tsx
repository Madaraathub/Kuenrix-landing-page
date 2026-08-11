import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  FileText, 
  ShoppingBag, 
  Sparkles, 
  Briefcase, 
  Zap, 
  Rocket, 
  CheckCircle2,
  Cpu,
  Layers,
  Activity,
  ShieldCheck,
  RefreshCw,
  HeartHandshake,
  ChevronDown,
  ChevronUp,
  Mail,
  Check
} from 'lucide-react';

export const HomePage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const globalFaqs = [
    {
      question: 'What is Kuenrix?',
      answer: 'Kuenrix is a software studio focused on creating lightweight, high-performance AI operating systems and tools for modern businesses, creators, and agencies.'
    },
    {
      question: 'Who are your products for?',
      answer: 'Our products are designed for entrepreneurs, freelancers, agencies, e-commerce brands, and small business owners who want reliable software solutions without technical overhead.'
    },
    {
      question: 'Do your products require subscriptions?',
      answer: 'No. All Kuenrix products are offered with transparent one-time pricing for lifetime access, meaning no recurring monthly software subscriptions.'
    },
    {
      question: 'Will products receive updates?',
      answer: 'Yes. We continuously maintain and refine all of our software products. Lifetime access includes all future feature enhancements, maintenance releases, and security updates.'
    },
    {
      question: 'How can I contact support?',
      answer: 'You can contact our support team directly via our Contact page or by emailing support@kuenrix.com. We provide prompt, practical assistance.'
    },
    {
      question: 'How do I purchase a product?',
      answer: 'Simply visit our Products page or any individual product page (such as LaunchLegal or TikTok Shop Business OS) and click "Buy Now" to proceed.'
    }
  ];
  return (
    <div className="py-8 sm:py-12 space-y-20 md:space-y-28">
      {/* SECTION 1: HERO */}
      <section className="pt-4 pb-8 md:pt-10 md:pb-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 text-slate-900 text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-slate-700" />
            <span>AI-Powered Business Operating Systems</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            Build Better Businesses with AI-Powered Operating Systems
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
            Kuenrix develops professional software products that help entrepreneurs, startups and agencies launch, automate and scale with confidence.
          </p>
          
          <div className="pt-2 flex flex-col sm:flex-row gap-4 sm:items-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 text-white font-semibold text-base hover:bg-slate-800 transition-all shadow-md hover:shadow-lg group"
            >
              <span>Explore Products</span>
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-800 font-semibold text-base hover:bg-slate-100 hover:text-slate-900 transition-all shadow-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Hero Mockup Placeholder */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none bg-slate-900 rounded-2xl p-4 shadow-xl border border-slate-800 text-slate-100">
            {/* Window bar */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>
              <div className="text-xs font-mono text-slate-400">kuenrix.os v1.0</div>
            </div>

            {/* Mockup Body */}
            <div className="pt-4 space-y-4">
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">System Core</div>
                    <div className="text-xs text-slate-400">AI Automation Active</div>
                  </div>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400">
                  Online
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/40 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Legal OS</span>
                    <Layers className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="text-lg font-bold text-white">LaunchLegal</div>
                  <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-400 h-full w-4/5 rounded-full"></div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/40 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>E-Commerce</span>
                    <Activity className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="text-lg font-bold text-white">TikTok Shop</div>
                  <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full w-3/4 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/30 flex items-center justify-between text-xs text-slate-400">
                <span>Enterprise Operating Layer</span>
                <span className="text-slate-200 font-medium">Ready for deployment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURED PRODUCTS */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Featured Products
          </h2>
          <p className="text-slate-600 text-base">
            Purpose-built operating systems for modern business workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: LaunchLegal */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-sm">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Legal Tech
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  LaunchLegal
                </h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Generate professional legal documents in minutes using AI.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6">
              <Link
                to="/launchlegal"
                className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-xl bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 transition-colors shadow-sm group"
              >
                <span>Learn More</span>
                <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: TikTok Shop Business OS */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-sm">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  E-Commerce OS
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  TikTok Shop Business OS
                </h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Manage your TikTok business using one complete operating system.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6">
              <Link
                to="/tiktok-shop-business-os"
                className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-xl bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 transition-colors shadow-sm group"
              >
                <span>Learn More</span>
                <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Card 3: Coming Soon */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center border border-slate-200">
                <Sparkles className="w-6 h-6 text-slate-600" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Next-Gen
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  Coming Soon
                </h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                More AI-powered business products are under development.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6">
              <button
                disabled
                className="w-full px-4 py-2.5 rounded-xl bg-slate-100 text-slate-400 font-medium text-sm cursor-not-allowed border border-slate-200"
              >
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY KUENRIX */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Why Kuenrix
          </h2>
          <p className="text-slate-600 text-base">
            Designed for execution, speed, and long-term reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900/5 text-slate-900 flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Professional</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Built for real businesses.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900/5 text-slate-900 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">AI Powered</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Automate repetitive work.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900/5 text-slate-900 flex items-center justify-center">
              <Rocket className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Fast</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Launch in minutes.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900/5 text-slate-900 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Reliable</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Built with modern technologies.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: WHO WE BUILD FOR */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Who We Build For
          </h2>
          <p className="text-slate-600 text-base">
            Professional software built for modern businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900/5 text-slate-900 flex items-center justify-center text-xl">
              🚀
            </div>
            <h3 className="text-lg font-bold text-slate-900">Startups</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Launch faster with production-ready AI business tools.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900/5 text-slate-900 flex items-center justify-center text-xl">
              🏢
            </div>
            <h3 className="text-lg font-bold text-slate-900">Agencies</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Deliver legal and operational systems to your clients.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900/5 text-slate-900 flex items-center justify-center text-xl">
              🛒
            </div>
            <h3 className="text-lg font-bold text-slate-900">E-Commerce</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Operate and scale online businesses more efficiently.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900/5 text-slate-900 flex items-center justify-center text-xl">
              💼
            </div>
            <h3 className="text-lg font-bold text-slate-900">Entrepreneurs</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Build your business using practical AI operating systems.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: WHY BUSINESSES TRUST KUENRIX */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            Trust & Reliability
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Why Businesses Trust Kuenrix
          </h2>
          <p className="text-slate-600 text-base">
            Engineered with high standards for speed, security, and long-term utility.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900/5 text-slate-900 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-slate-800" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Professional AI Software</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Built for real businesses.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900/5 text-slate-900 flex items-center justify-center">
              <Zap className="w-5 h-5 text-slate-800" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">One-Time Purchase</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              No subscriptions. Transparent pricing.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900/5 text-slate-900 flex items-center justify-center">
              <RefreshCw className="w-5 h-5 text-slate-800" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Continuous Improvements</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Products receive ongoing updates.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900/5 text-slate-900 flex items-center justify-center">
              <HeartHandshake className="w-5 h-5 text-slate-800" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Transparent & Practical</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Simple solutions focused on business results.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR PHILOSOPHY */}
      <section className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-sm">
        <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
          Our Philosophy
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2 mb-4">
          Lightweight, Practical Software
        </h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
          Kuenrix focuses on building lightweight, practical software that solves real business problems. We eliminate friction so entrepreneurs can launch quickly and operate with confidence.
        </p>
      </section>

      {/* GLOBAL FAQ SECTION */}
      <section className="space-y-8 max-w-3xl mx-auto w-full">
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            Got Questions?
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base">
            Everything you need to know about Kuenrix products and operations.
          </p>
        </div>

        <div className="space-y-4">
          {globalFaqs.map((faq, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-sm"
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-6 font-semibold text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
              >
                <span className="text-base sm:text-lg">{faq.question}</span>
                {openFaq === idx ? (
                  <ChevronUp className="w-5 h-5 text-slate-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 mt-1">
                  <p className="pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 text-center space-y-6 max-w-3xl mx-auto shadow-sm">
        <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center mx-auto shadow-sm">
          <Mail className="w-6 h-6" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Stay Updated
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            Be the first to know when Kuenrix releases new AI business products.
          </p>
        </div>

        {subscribed ? (
          <div className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold max-w-md mx-auto">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Thank you! You're subscribed to product updates.</span>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors shadow-sm flex-shrink-0"
            >
              Notify Me
            </button>
          </form>
        )}
      </section>

      {/* SECTION 5: FINAL CTA */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-xl relative overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to build your business?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Explore our growing collection of AI-powered business operating systems.
          </p>
          <div className="pt-2">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-white text-slate-900 font-semibold text-base hover:bg-slate-100 transition-all shadow-md hover:shadow-lg group"
            >
              <span>Explore Products</span>
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
