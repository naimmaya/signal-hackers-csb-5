import React from 'react';
import { ShieldCheck, Sparkles, Globe2, BookOpen, Bookmark, FileText, Headphones } from 'lucide-react';

interface HeaderProps {
  currentTab: 'reports' | 'generator' | 'guide' | 'vault';
  setCurrentTab: (tab: 'reports' | 'generator' | 'guide' | 'vault') => void;
  lang: 'en' | 'bn';
  setLang: (lang: 'en' | 'bn') => void;
  vaultCount: number;
  onOpenSupport: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  lang,
  setLang,
  vaultCount,
  onOpenSupport,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark with icon */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-emerald-600/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
              Signal Hackers CSB
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 font-mono">
                FB Report & Additional
              </span>
            </span>
          </div>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button
            onClick={() => setCurrentTab('reports')}
            className={`transition-colors flex items-center gap-1.5 cursor-pointer ${
              currentTab === 'reports' ? 'text-blue-400 font-semibold' : 'hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            {lang === 'en' ? 'Report Links & Scripts' : 'রিপোর্ট লিংক ও স্ক্রিপ্ট'}
          </button>

          <button
            onClick={() => setCurrentTab('generator')}
            className={`transition-colors flex items-center gap-1.5 cursor-pointer ${
              currentTab === 'generator' ? 'text-blue-400 font-semibold' : 'hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            {lang === 'en' ? 'Script Generator' : 'কাস্টম স্ক্রিপ্ট বিল্ডার'}
          </button>

          <button
            onClick={() => setCurrentTab('guide')}
            className={`transition-colors flex items-center gap-1.5 cursor-pointer ${
              currentTab === 'guide' ? 'text-blue-400 font-semibold' : 'hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            {lang === 'en' ? 'Reporting Guide' : 'রিপোর্টিং নির্দেশিকা'}
          </button>

          <button
            onClick={() => setCurrentTab('vault')}
            className={`transition-colors flex items-center gap-1.5 cursor-pointer relative ${
              currentTab === 'vault' ? 'text-blue-400 font-semibold' : 'hover:text-white'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            {lang === 'en' ? 'Saved Vault' : 'সংরক্ষিত ভল্ট'}
            {vaultCount > 0 && (
              <span className="text-[10px] font-mono px-1.5 py-0.2 bg-blue-500 text-white rounded-full ml-1">
                {vaultCount}
              </span>
            )}
          </button>
        </nav>

        {/* Zone 3: Primary Actions (Support, Language Toggle & Fast Action) */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            onClick={onOpenSupport}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-950 transition-all cursor-pointer"
            title="Contact Admin & Support / সহায়তা ও যোগাযোগ"
          >
            <Headphones className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Support' : 'যোগাযোগ'}</span>
          </button>

          <button
            onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 transition-colors cursor-pointer"
            title="Switch Language / ভাষা পরিবর্তন করুন"
          >
            <Globe2 className="w-3.5 h-3.5 text-blue-400" />
            <span>{lang === 'en' ? 'বাংলা' : 'English'}</span>
          </button>

          <button
            onClick={() => setCurrentTab('generator')}
            className="hidden lg:inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg transition-colors shadow-sm shadow-blue-500/20 whitespace-nowrap cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            {lang === 'en' ? 'Build Custom Script' : 'নতুন স্ক্রিপ্ট তৈরি'}
          </button>
        </div>

      </div>

      {/* Mobile navigation bar */}
      <div className="md:hidden flex items-center justify-around border-t border-slate-900 bg-slate-950 px-2 py-2 text-xs">
        <button
          onClick={() => setCurrentTab('reports')}
          className={`flex flex-col items-center py-1 px-2 rounded ${
            currentTab === 'reports' ? 'text-blue-400 font-semibold' : 'text-slate-400'
          }`}
        >
          <FileText className="w-4 h-4 mb-0.5" />
          <span>{lang === 'en' ? 'Links' : 'লিংকসমূহ'}</span>
        </button>
        <button
          onClick={() => setCurrentTab('generator')}
          className={`flex flex-col items-center py-1 px-2 rounded ${
            currentTab === 'generator' ? 'text-blue-400 font-semibold' : 'text-slate-400'
          }`}
        >
          <Sparkles className="w-4 h-4 mb-0.5" />
          <span>{lang === 'en' ? 'Generator' : 'বিল্ডার'}</span>
        </button>
        <button
          onClick={() => setCurrentTab('vault')}
          className={`flex flex-col items-center py-1 px-2 rounded ${
            currentTab === 'vault' ? 'text-blue-400 font-semibold' : 'text-slate-400'
          }`}
        >
          <Bookmark className="w-4 h-4 mb-0.5" />
          <span>{lang === 'en' ? 'Vault' : 'ভল্ট'}</span>
        </button>
        <button
          onClick={onOpenSupport}
          className="flex flex-col items-center py-1 px-2 rounded text-emerald-400 font-semibold"
        >
          <Headphones className="w-4 h-4 mb-0.5" />
          <span>{lang === 'en' ? 'Support' : 'যোগাযোগ'}</span>
        </button>
      </div>
    </header>
  );
};
