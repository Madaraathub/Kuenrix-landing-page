import { Link } from 'react-router-dom';
import { FileText, ShoppingBag, Sparkles, ArrowRight } from 'lucide-react';

export const ProductsPage = () => {
  return (
    <div className="py-8 sm:py-12 space-y-16">
      {/* HEADER SECTION */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 text-slate-900 text-xs font-semibold tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-slate-700" />
          <span>Product Suite</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Our Products
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed font-normal">
          Discover AI-powered business operating systems built by Kuenrix.
        </p>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Product Card 1: LaunchLegal */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-sm">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Professional AI Legal Document Generator
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">
                LaunchLegal
              </h2>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Generate professional legal documents for your business in minutes using AI.
            </p>
          </div>
          <div className="pt-6 border-t border-slate-100 mt-6">
            <Link
              to="/launchlegal"
              className="inline-flex items-center justify-center w-full px-4 py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors shadow-sm group"
            >
              <span>Learn More</span>
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Product Card 2: TikTok Shop Business OS */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-sm">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Complete Operating System for TikTok Shop
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">
                TikTok Shop Business OS
              </h2>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              The complete operating system for managing, scaling and automating your TikTok Shop business.
            </p>
          </div>
          <div className="pt-6 border-t border-slate-100 mt-6">
            <Link
              to="/tiktok-shop-business-os"
              className="inline-flex items-center justify-center w-full px-4 py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors shadow-sm group"
            >
              <span>Learn More</span>
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Product Card 3: Future Products */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center border border-slate-200">
              <Sparkles className="w-6 h-6 text-slate-600" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                In Pipeline
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">
                Future Products
              </h2>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              More professional AI business software is coming soon.
            </p>
          </div>
          <div className="pt-6 border-t border-slate-100 mt-6">
            <button
              disabled
              type="button"
              className="w-full px-4 py-3 rounded-xl bg-slate-100 text-slate-400 font-semibold text-sm cursor-not-allowed border border-slate-200"
            >
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
