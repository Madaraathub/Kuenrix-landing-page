import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export const PageHeader = ({ title, description, children }: PageHeaderProps) => {
  return (
    <div className="py-12 md:py-20">
      <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm max-w-4xl">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-200 text-slate-600 text-xs font-bold uppercase tracking-widest mb-6">
          Phase 1 Foundation
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          {title}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-500 leading-relaxed">
          {description}
        </p>
        {children && <div className="mt-6">{children}</div>}
      </div>
    </div>
  );
};
