import { useState } from 'react';
import { Link } from 'react-router-dom';
import tikTokShopHeroImg from '../assets/images/tiktok_shop_hero_1786059520249.jpg';
import tikTokShopMobileImg from '../assets/images/tiktok_shop_mobile_1786059536457.jpg';
import { 
  ArrowRight, 
  ArrowLeft,
  ShoppingBag, 
  Sparkles, 
  Clock, 
  Sliders, 
  FolderKanban, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Check,
  PackageCheck,
  BarChart3,
  Bot,
  FileCheck2,
  TrendingUp,
  Workflow,
  Store,
  Users,
  Building2,
  Zap
} from 'lucide-react';
import { PRODUCT_LINKS } from '../config/productLinks';

export const TikTokShopPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is TikTok Shop Business OS?',
      answer: 'TikTok Shop Business OS is an all-in-one workspace and operations framework built specifically for TikTok Shop merchants, e-commerce brands, and agencies to organize inventory, order fulfillment, creator outreach, and performance analytics.'
    },
    {
      question: 'Do I need technical skills or coding knowledge to use it?',
      answer: 'Not at all. The operating system is pre-configured with ready-to-use dashboards, standard operating procedures (SOPs), and automated tracking views designed for immediate execution.'
    },
    {
      question: 'Is this a monthly subscription or a one-time purchase?',
      answer: 'TikTok Shop Business OS is a one-time payment of $49 USD. You receive lifetime access to the entire operating system, including all future updates and template enhancements, with zero recurring software fees.'
    },
    {
      question: 'Can I use this OS to manage multiple TikTok Shop accounts?',
      answer: 'Yes! The workspace architecture is modular, allowing agencies and multi-brand operators to manage separate store views, affiliate campaigns, and product inventories from a unified dashboard.'
    },
    {
      question: 'How does it help with TikTok creator and affiliate management?',
      answer: 'TikTok Shop Business OS includes built-in affiliate CRM tracking pipelines, sample dispatch logs, script templates, and commission performance calculators to scale your creator outreach.'
    },
    {
      question: 'Does it support team collaboration?',
      answer: 'Yes. You can invite team members, assign task responsibilities for order processing or content creation, and track operational progress in real-time.'
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
            <ShoppingBag className="w-3.5 h-3.5 text-slate-700" />
            <span>TikTok Shop Operating System</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            TikTok Shop Business OS
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
            The complete operating system for managing, scaling and automating your TikTok Shop business.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-4 sm:items-center">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 text-white font-semibold text-base hover:bg-slate-800 transition-all shadow-md hover:shadow-lg group"
            >
              <span>Get Business OS</span>
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

        {/* Hero Dashboard Mockup with Production Marketing Image Asset */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none bg-slate-900 rounded-2xl p-2 sm:p-3 shadow-2xl border border-slate-800 text-slate-100 overflow-hidden">
            {/* Window bar */}
            <div className="flex items-center justify-between pb-2.5 px-3 border-b border-slate-800/80 mb-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>
              <div className="text-xs font-mono text-slate-400">TikTokShop_OS_v3.0</div>
            </div>

            {/* Production Dashboard Image */}
            <div className="relative overflow-hidden rounded-xl border border-slate-800/60 aspect-[16/9] bg-slate-950">
              <img
                src={tikTokShopHeroImg}
                alt="TikTok Shop Business OS Executive CEO Dashboard"
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
            Operational Hurdles
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            The Problem
          </h2>
          <p className="text-slate-600 text-base">
            Scaling a TikTok Shop without a dedicated operational framework leads to chaos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Managing Orders Manually</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Handling customer inquiries, fulfillment status, and tracking info in fragmented spreadsheets wastes hours daily.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <Sliders className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Poor Workflow</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Lack of clear daily SOPs causes missed creator follow-ups, delayed sample dispatches, and stockouts.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
              <FolderKanban className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Lack of Organization</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Managing affiliates, video assets, ad spend, and supplier communication across multiple disconnected tools.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Store className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No Centralized System</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Without a single source of truth, team members work in silos leading to communication breakdowns.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow lg:col-span-2 sm:col-span-2">
            <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Time-Consuming Operations</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Founders burn out working in the business instead of focusing on high-level growth strategy and brand expansion.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE SOLUTION */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-8 shadow-xl">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Complete Control
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            The Solution
          </h2>
          <p className="text-slate-300 text-base">
            How Business OS streamlines your entire TikTok Shop e-commerce business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-700 text-white flex items-center justify-center">
              <Store className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Centralized Workspace</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Bring orders, inventory, affiliate CRM, and team workflows into one clear dashboard.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-700 text-white flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Automation</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Automate creator outreach pipelines, sample tracking, and order status updates seamlessly.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-700 text-white flex items-center justify-center">
              <FolderKanban className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Task Management</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Assign execution checklists to team members with step-by-step operating instructions.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-700 text-white flex items-center justify-center">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Business Tracking</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Monitor key metrics including ROI, affiliate revenue split, margins, and stock levels.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 space-y-3 sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 rounded-lg bg-slate-700 text-white flex items-center justify-center">
              <Workflow className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Professional OS</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              A standardized software operating structure engineered specifically for high-volume TikTok sellers.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: CORE FEATURES */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            System Modules
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Core Features
          </h2>
          <p className="text-slate-600 text-base">
            6 core modules designed to handle every aspect of your TikTok Shop business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900/5 text-slate-900 flex items-center justify-center">
              <PackageCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Order Management</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Track fulfillment pipelines, processing bottlenecks, customer return requests, and shipping milestones.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900/5 text-slate-900 flex items-center justify-center">
              <Sliders className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Inventory Tracking</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Real-time stock alerts, reorder threshold notifications, supplier contact database, and SKU management.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900/5 text-slate-900 flex items-center justify-center">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Business Dashboard</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              A high-level executive summary displaying daily sales revenue, net profit margins, top affiliate performers, and store health.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900/5 text-slate-900 flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Task Automation</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Pre-built automated rules for outreach sequences, sample follow-up notifications, and team task assignments.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900/5 text-slate-900 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Analytics</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              In-depth performance reports tracking viral video conversion rates, ROAS across ad campaigns, and creator attribution.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900/5 text-slate-900 flex items-center justify-center">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Templates & SOPs</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Battle-tested creator outreach scripts, sample request agreements, content briefs, and team onboarding guides.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW IT WORKS */}
      <section id="how-it-works" className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Implementation Path
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            How It Works
          </h2>
          <p className="text-slate-600 text-base">
            Get your entire TikTok Shop operating system configured in 4 steps.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm relative">
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h3 className="text-lg font-bold text-slate-900">Setup Workspace</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Import the OS workspace, configure your store details, product catalog, and team roles.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm relative">
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h3 className="text-lg font-bold text-slate-900">Organize Operations</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Plug in supplier databases, active inventory levels, creator outreach lists, and fulfillment workflows.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm relative">
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h3 className="text-lg font-bold text-slate-900">Track Business</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Monitor real-time sales performance, sample shipping statuses, and creator video posts.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm relative">
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h3 className="text-lg font-bold text-slate-900">Scale Efficiently</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Automate routine management tasks and focus resources on scaling top-performing product lines.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHO IS IT FOR */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Tailored Solutions
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Who Is It For
          </h2>
          <p className="text-slate-600 text-base">
            Built for modern e-commerce leaders focused on TikTok Shop growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900/5 text-slate-900 flex items-center justify-center text-xl">
              🛍️
            </div>
            <h3 className="text-lg font-bold text-slate-900">TikTok Sellers</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Independent store owners scaling past their first 100 daily orders without losing control.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900/5 text-slate-900 flex items-center justify-center text-xl">
              👥
            </div>
            <h3 className="text-lg font-bold text-slate-900">E-commerce Teams</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Operations managers needing centralized task delegation, inventory logs, and performance tracking.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900/5 text-slate-900 flex items-center justify-center text-xl">
              🏢
            </div>
            <h3 className="text-lg font-bold text-slate-900">Agencies</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Social commerce agencies managing affiliate networks and store operations for multiple client brands.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-900/5 text-slate-900 flex items-center justify-center text-xl">
              🚀
            </div>
            <h3 className="text-lg font-bold text-slate-900">Growing Brands</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Established direct-to-consumer brands expanding into the TikTok ecosystem with structured SOPs.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: WHY CHOOSE BUSINESS OS */}
      <section className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 space-y-8 shadow-sm">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            System Value
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Why Choose Business OS
          </h2>
          <p className="text-slate-600 text-base">
            Built for operational efficiency, rapid scaling, and complete store visibility.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center space-y-2">
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white mx-auto flex items-center justify-center text-xs font-bold">
              ✓
            </div>
            <div className="font-bold text-slate-900 text-sm">Organized</div>
            <div className="text-xs text-slate-500">Single source of truth</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center space-y-2">
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white mx-auto flex items-center justify-center text-xs font-bold">
              📈
            </div>
            <div className="font-bold text-slate-900 text-sm">Scalable</div>
            <div className="text-xs text-slate-500">Built for high volume</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center space-y-2">
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white mx-auto flex items-center justify-center text-xs font-bold">
              ⚡
            </div>
            <div className="font-bold text-slate-900 text-sm">Time Saving</div>
            <div className="text-xs text-slate-500">Automate routine work</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center space-y-2">
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white mx-auto flex items-center justify-center text-xs font-bold">
              💼
            </div>
            <div className="font-bold text-slate-900 text-sm">Professional</div>
            <div className="text-xs text-slate-500">Tested enterprise SOPs</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center space-y-2 col-span-2 sm:col-span-1">
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white mx-auto flex items-center justify-center text-xs font-bold">
              🤖
            </div>
            <div className="font-bold text-slate-900 text-sm">AI Ready</div>
            <div className="text-xs text-slate-500">Smart prompt integration</div>
          </div>
        </div>
      </section>

      {/* SECTION 8: PRICING */}
      <section id="pricing" className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Transparent Pricing
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Pricing
          </h2>
          <p className="text-slate-600 text-base">
            Get complete lifetime access with zero ongoing subscription costs.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-white border-2 border-slate-900 rounded-3xl p-8 space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-4 right-4 px-3 py-1 bg-slate-900 text-white text-xs font-bold uppercase rounded-full tracking-wider">
              Lifetime Access
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-slate-900">TikTok Shop Business OS</h3>
              <p className="text-slate-500 text-sm mt-1">Complete E-Commerce Operating System</p>
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
                <span className="font-medium">Complete e-commerce operating modules</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Full creator CRM & inventory trackers</span>
              </li>
            </ul>

            <div>
              <a
                href={PRODUCT_LINKS.tiktok}
                onClick={(e) => {
                  if (PRODUCT_LINKS.tiktok === '#') {
                    e.preventDefault();
                    alert("Checkout page is coming soon.");
                  }
                }}
                className="w-full py-3.5 px-6 rounded-xl bg-slate-900 text-white font-semibold text-base hover:bg-slate-800 transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>Buy Business OS</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-center text-xs text-slate-400 mt-3">
                30-day money-back guarantee. Instant workspace setup.
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
            Everything you need to know about TikTok Shop Business OS.
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
            Run your TikTok business like a professional.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Get instant access to the complete operating system and scale your store with confidence.
          </p>
          <div className="pt-2">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-white text-slate-900 font-semibold text-base hover:bg-slate-100 transition-all shadow-md hover:shadow-lg group"
            >
              <span>Get Business OS</span>
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
