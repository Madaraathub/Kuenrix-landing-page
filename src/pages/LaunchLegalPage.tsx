import { useState } from 'react';
import { Link } from 'react-router-dom';
import launchLegalHeroImg from '../assets/images/launchlegal_hero_1786058968125.jpg';
import { 
  ArrowRight, 
  ArrowLeft,
  ShieldCheck, 
  FileText, 
  Sparkles, 
  AlertTriangle, 
  Clock, 
  DollarSign, 
  HelpCircle, 
  Globe, 
  Download, 
  CheckCircle2, 
  Cpu, 
  Briefcase, 
  UserCheck, 
  ChevronDown, 
  ChevronUp, 
  Zap, 
  Lock,
  Layers,
  Check
} from 'lucide-react';
import { PRODUCT_LINKS } from '../config/productLinks';

export const LaunchLegalPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'Are AI-generated legal documents legally binding?',
      answer: 'Yes. Once customized with your business information and agreed upon by the relevant parties, properly drafted legal agreements—such as a Privacy Policy, Terms of Service, or Refund Policy—are legally binding contracts in most major jurisdictions.'
    },
    {
      question: 'How does LaunchLegal handle different state or country laws?',
      answer: 'LaunchLegal incorporates jurisdiction-specific legal frameworks, including GDPR, CCPA, and UK/EU consumer privacy rules, allowing you to select your operating region for precise localization.'
    },
    {
      question: 'Is this a one-time purchase or a subscription?',
      answer: 'LaunchLegal is a one-time payment of $49 USD. You receive lifetime access to generate and update all your business legal documents with zero recurring monthly subscription fees.'
    },
    {
      question: 'In what formats can I download my documents?',
      answer: 'Documents can be exported instantly in PDF, Microsoft Word (DOCX), Markdown, and plain text formats—ready to embed directly on your website or share with clients.'
    },
    {
      question: 'Can I edit the documents after generation?',
      answer: 'Absolutely. LaunchLegal provides a built-in inline editor and exports fully editable DOCX and Markdown files so you or your team can make fine adjustments anytime.'
    },
    {
      question: 'Do I need a lawyer after using LaunchLegal?',
      answer: 'LaunchLegal is engineered to fulfill standard operational legal document needs for the vast majority of early-stage businesses, SaaS products, and e-commerce stores. For complex corporate mergers, specialized patent disputes, or active litigation, consulting a licensed attorney is recommended.'
    }
  ];

  return (
    <div className="py-8 sm:py-12 space-y-20 md:space-y-28">
      {/* Back to Products Navigation */}
      <div>
        <Link
          to="/products"
          className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          <span>Back to Products</span>
        </Link>
      </div>

      {/* SECTION 1: HERO */}
      <section className="pt-2 pb-8 md:pt-4 md:pb-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 text-slate-900 text-xs font-semibold tracking-wide">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-700" />
            <span>AI Legal Document Generator</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            LaunchLegal
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
            Generate enterprise-grade, compliant legal documents for your business in minutes using AI.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-4 sm:items-center">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 text-white font-semibold text-base hover:bg-slate-800 transition-all shadow-md hover:shadow-lg group"
            >
              <span>Get LaunchLegal</span>
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-800 font-semibold text-base hover:bg-slate-100 hover:text-slate-900 transition-all shadow-sm"
            >
              Explore Features
            </a>
          </div>
        </div>

        {/* Hero Mockup with Production Marketing Image Asset */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none bg-slate-900 rounded-2xl p-2 sm:p-3 shadow-2xl border border-slate-800 text-slate-100 overflow-hidden">
            {/* Window bar */}
            <div className="flex items-center justify-between pb-2.5 px-3 border-b border-slate-800/80 mb-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>
              <div className="text-xs font-mono text-slate-400">LaunchLegal OS</div>
            </div>

            {/* Dashboard Screenshot Asset */}
            <div className="relative overflow-hidden rounded-xl border border-slate-800/60 aspect-[16/9] bg-slate-950">
              <img
                src={launchLegalHeroImg}
                alt="LaunchLegal AI Legal Document Generator Studio Dashboard"
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top rounded-xl transform hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE PROBLEM */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Current Challenges
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            The Problem
          </h2>
          <p className="text-slate-600 text-base">
            Traditional legal document creation is broken for modern business owners.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Small Businesses Waste Time</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Spending weeks writing, researching, and updating basic legal policies delays launches.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <DollarSign className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Lawyers Are Expensive</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              High hourly rates mean standard document packages cost thousands of dollars upfront.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Templates Are Unreliable</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Generic online boilerplates miss critical clauses, leaving your company exposed to risk.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Compliance Is Confusing</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Navigating global data privacy rules like GDPR and CCPA without guidance is overwhelming.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE SOLUTION */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-8 shadow-xl">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Engineered For Speed
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            The Solution
          </h2>
          <p className="text-slate-300 text-base">
            How LaunchLegal transforms legal compliance into an effortless automated workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-700 text-white flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Professional AI Generation</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Trained on standard commercial agreements to deliver precise, contextual legal text.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-700 text-white flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Localized Legal Documents</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Adapt clauses according to your operating state, country, and regulatory requirements.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-700 text-white flex items-center justify-center">
              <Download className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Export-Ready Formats</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Instantly download clean PDF, Word, Markdown, or HTML files ready for immediate deployment.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-700 text-white flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Business-Focused Workflow</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Answer simple questions about your company; the AI builds tailored agreements automatically.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: CORE FEATURES */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Comprehensive Coverage
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Core Features
          </h2>
          <p className="text-slate-600 text-base">
            Everything required to protect your website, app, and business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900/5 text-slate-900 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Privacy Policy Generator</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Fully compliant with GDPR, CCPA, and global privacy standards. Covers user data collection, storage, and third-party trackers.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900/5 text-slate-900 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Terms of Service</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Define clear user rules, intellectual property protection, liability limitations, and account termination policies.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900/5 text-slate-900 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Refund Policy</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Set clear return windows, eligibility rules, and chargeback protections tailored to SaaS or e-commerce products.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900/5 text-slate-900 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Cookie Policy</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Generate precise cookie classification statements for analytics, advertising, and strictly necessary session cookies.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900/5 text-slate-900 flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Localization</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Multi-region jurisdiction selection ensuring document alignment with European, North American, or Asian regulatory norms.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900/5 text-slate-900 flex items-center justify-center">
              <Download className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Export Center</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Export in PDF, Word (DOCX), Markdown, and plain text. Re-generate or update your policies whenever your business evolves.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW IT WORKS */}
      <section id="how-it-works" className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Simple Process
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            How It Works
          </h2>
          <p className="text-slate-600 text-base">
            Four simple steps from start to legally protected business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm relative">
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h3 className="text-lg font-bold text-slate-900">Business Information</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Input basic details about your company name, location, domain, and data handling practices.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm relative">
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h3 className="text-lg font-bold text-slate-900">Generate Documents</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our legal AI drafts custom, compliant legal texts customized to your exact operational parameters.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm relative">
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h3 className="text-lg font-bold text-slate-900">Preview</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Review and inspect every clause with interactive inline legal tips and customizable fields.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm relative">
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h3 className="text-lg font-bold text-slate-900">Export</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Download production-ready documents instantly and publish them directly to your website.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHO IS IT FOR */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Target Audience
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Who Is It For
          </h2>
          <p className="text-slate-600 text-base">
            Tailored legal operating tools built for modern digital creators and operators.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900/5 text-slate-900 flex items-center justify-center text-xl">
              🚀
            </div>
            <h3 className="text-lg font-bold text-slate-900">Entrepreneurs</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Protect your new venture from day one without burning through early funding.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900/5 text-slate-900 flex items-center justify-center text-xl">
              💻
            </div>
            <h3 className="text-lg font-bold text-slate-900">Freelancers</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Establish clear terms with clients effortlessly and safeguard intellectual property.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900/5 text-slate-900 flex items-center justify-center text-xl">
              🏢
            </div>
            <h3 className="text-lg font-bold text-slate-900">Agencies</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Provide compliant legal document packages directly for client web builds and launches.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900/5 text-slate-900 flex items-center justify-center text-xl">
              🛍️
            </div>
            <h3 className="text-lg font-bold text-slate-900">Small Businesses</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Scale safely with reliable, up-to-date agreements across all customer touchpoints.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: WHY CHOOSE LAUNCHLEGAL */}
      <section className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 space-y-8 shadow-sm">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Key Advantages
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Why Choose LaunchLegal
          </h2>
          <p className="text-slate-600 text-base">
            Built from the ground up for speed, quality, and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center space-y-2">
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white mx-auto flex items-center justify-center text-xs font-bold">
              ✓
            </div>
            <div className="font-bold text-slate-900 text-sm">Professional</div>
            <div className="text-xs text-slate-500">Standardized language</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center space-y-2">
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white mx-auto flex items-center justify-center text-xs font-bold">
              ⚡
            </div>
            <div className="font-bold text-slate-900 text-sm">Fast</div>
            <div className="text-xs text-slate-500">Ready in &lt;3 minutes</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center space-y-2">
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white mx-auto flex items-center justify-center text-xs font-bold">
              $
            </div>
            <div className="font-bold text-slate-900 text-sm">Affordable</div>
            <div className="text-xs text-slate-500">One-time payment</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center space-y-2">
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white mx-auto flex items-center justify-center text-xs font-bold">
              🌐
            </div>
            <div className="font-bold text-slate-900 text-sm">Localized</div>
            <div className="text-xs text-slate-500">Multi-region focus</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center space-y-2 col-span-2 sm:col-span-1">
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white mx-auto flex items-center justify-center text-xs font-bold">
              🤖
            </div>
            <div className="font-bold text-slate-900 text-sm">AI Powered</div>
            <div className="text-xs text-slate-500">Smart clause generation</div>
          </div>
        </div>
      </section>

      {/* SECTION 8: PRICING */}
      <section id="pricing" className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Simple Pricing
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Pricing
          </h2>
          <p className="text-slate-600 text-base">
            Clear, transparent access without subscriptions or hidden costs.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-white border-2 border-slate-900 rounded-3xl p-8 space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-4 right-4 px-3 py-1 bg-slate-900 text-white text-xs font-bold uppercase rounded-full tracking-wider">
              Lifetime Access
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-slate-900">LaunchLegal</h3>
              <p className="text-slate-500 text-sm mt-1">Full AI Legal Document Suite</p>
            </div>

            <div className="flex items-baseline gap-1.5">
              <span className="text-5xl font-black text-slate-900">$49</span>
              <span className="text-slate-500 text-sm font-semibold">USD / one-time</span>
            </div>

            <ul className="space-y-3 text-sm text-slate-700 border-t border-b border-slate-100 py-6">
              <li className="flex items-center gap-2.5">
                <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="font-medium">One-time payment ($49 USD)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="font-medium">Zero subscription fees</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="font-medium">Lifetime access & free updates</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="font-medium">Complete legal document suite</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Unlimited document exports (PDF, DOCX, MD)</span>
              </li>
            </ul>

            <div>
              <a
                href={PRODUCT_LINKS.launchlegal}
                onClick={(e) => {
                  if (PRODUCT_LINKS.launchlegal === '#') {
                    e.preventDefault();
                    alert("Checkout page is coming soon.");
                  }
                }}
                className="w-full py-3.5 px-6 rounded-xl bg-slate-900 text-white font-semibold text-base hover:bg-slate-800 transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>Buy LaunchLegal</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-center text-xs text-slate-400 mt-3">
                30-day money-back guarantee. Instant access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: FAQ */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Got Questions?
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base">
            Everything you need to know about LaunchLegal.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all"
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full p-6 text-left font-bold text-slate-900 text-base sm:text-lg flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-50/50 transition-colors"
              >
                <span>{faq.question}</span>
                {openFaq === idx ? (
                  <ChevronUp className="w-5 h-5 text-slate-500 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                )}
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 bg-slate-50/30">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-xl relative overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to launch legally?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Generate all your required business legal documents in minutes.
          </p>
          <div className="pt-2">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-white text-slate-900 font-semibold text-base hover:bg-slate-100 transition-all shadow-md hover:shadow-lg group"
            >
              <span>Get LaunchLegal</span>
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
