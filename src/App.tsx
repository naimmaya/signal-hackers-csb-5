import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ReportCard } from './components/ReportCard';
import { FolderExplorer } from './components/FolderExplorer';
import { ScriptGenerator } from './components/ScriptGenerator';
import { PersonalVault, VaultItem } from './components/PersonalVault';
import { ReportingGuide } from './components/ReportingGuide';
import { SupportModal } from './components/SupportModal';
import { Toast } from './components/Toast';
import { REPORT_TEMPLATES, CATEGORIES, ReportTemplate } from './data/reportData';
import { 
  Search, 
  Folder, 
  LayoutGrid, 
  Sparkles, 
  Copy, 
  ExternalLink, 
  SlidersHorizontal, 
  FileText, 
  CheckCircle2,
  AlertCircle,
  FolderOpen,
  Headphones
} from 'lucide-react';

const VAULT_STORAGE_KEY = 'meta_report_hub_vault_v1';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'reports' | 'generator' | 'guide' | 'vault'>('reports');
  const [viewMode, setViewMode] = useState<'folders' | 'cards'>('folders');
  const [lang, setLang] = useState<'en' | 'bn'>('bn');
  const [isSupportOpen, setIsSupportOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [customizingTemplate, setCustomizingTemplate] = useState<ReportTemplate | null>(null);

  // Toast feedback state
  const [toast, setToast] = useState<{ message: string; subMessage?: string; isVisible: boolean }>({
    message: '',
    subMessage: '',
    isVisible: false,
  });

  // Local storage for personal vault
  const [vaultItems, setVaultItems] = useState<VaultItem[]>(() => {
    try {
      const stored = localStorage.getItem(VAULT_STORAGE_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error('Failed to load vault items', e);
    }
    return [
      {
        id: 'vault-default-1',
        title: 'Emergency Impersonation Script (Quick Paste)',
        category: 'impersonation',
        url: 'https://www.facebook.com/help/contact/295309487309948',
        script: `To Meta Review Operations:
I am reporting an unauthorized impersonating account directly violating Facebook's Community Standards on Identity Integrity.
Target Profile: [TARGET_PROFILE_URL]
Authentic Profile: [ORIGINAL_PROFILE_URL]
The reported account is using my photos and full name without consent to mislead my contacts. Please verify my attached official ID and terminate this fraudulent profile immediately.
Sincerely,
[YOUR_NAME]`,
        createdAt: new Date().toISOString(),
      },
    ];
  });

  useEffect(() => {
    try {
      localStorage.setItem(VAULT_STORAGE_KEY, JSON.stringify(vaultItems));
    } catch (e) {
      console.error('Failed to persist vault items', e);
    }
  }, [vaultItems]);

  const showToast = (message: string, subMessage?: string) => {
    setToast({ message, subMessage, isVisible: true });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, isVisible: false }));
    }, 2800);
  };

  const handleCopyText = (text: string, title: string, type: 'info' | 'link' | 'all') => {
    navigator.clipboard.writeText(text);
    if (type === 'link') {
      showToast(
        lang === 'en' ? 'Direct Link Copied!' : 'অফিসিয়াল লিংক কপি হয়েছে!',
        lang === 'en' ? 'Ready to open or share' : 'ব্রাউজারে পেস্ট করে সহজে ওপেন করুন'
      );
    } else if (type === 'info') {
      showToast(
        lang === 'en' ? 'Additional Info Copied!' : 'অতিরিক্ত বিবরণ (Additional Info) কপি হয়েছে!',
        lang === 'en' ? `${text.length} characters ready to paste in Meta form` : 'মেটা রিপোর্ট ফর্মে সরাসরি পেস্ট করুন'
      );
    } else {
      showToast(
        lang === 'en' ? 'Full Package Copied!' : 'সব তথ্য একসাথে কপি হয়েছে!',
        lang === 'en' ? 'Link and script copied to clipboard' : 'লিংক ও স্ক্রিপ্ট ক্লিপবোর্ডে কপি সম্পন্ন'
      );
    }
  };

  const handleCustomizeFromCard = (template: ReportTemplate) => {
    setCustomizingTemplate(template);
    setCurrentTab('generator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveToVault = (item: { title: string; category: string; url: string; script: string }) => {
    const newItem: VaultItem = {
      id: `vault-${Date.now()}`,
      title: item.title,
      category: item.category,
      url: item.url,
      script: item.script,
      createdAt: new Date().toISOString(),
    };
    setVaultItems((prev) => [newItem, ...prev]);
    showToast(
      lang === 'en' ? 'Saved to Vault!' : 'ভল্টে সংরক্ষণ করা হয়েছে!',
      lang === 'en' ? 'Saved in browser local storage' : 'আপনার ব্রাউজারে সুরক্ষিত রয়েছে'
    );
  };

  const handleDeleteVaultItem = (id: string) => {
    setVaultItems((prev) => prev.filter((item) => item.id !== id));
    showToast(
      lang === 'en' ? 'Item removed from vault' : 'স্ক্রিপ্ট মুছে ফেলা হয়েছে'
    );
  };

  const handleAddVaultItem = (item: Omit<VaultItem, 'id' | 'createdAt'>) => {
    handleSaveToVault(item);
  };

  // Filtered Templates
  const filteredTemplates = REPORT_TEMPLATES.filter((template) => {
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    const matchesSearch =
      template.title.toLowerCase().includes(query) ||
      template.titleBn.toLowerCase().includes(query) ||
      template.summary.toLowerCase().includes(query) ||
      template.summaryBn.toLowerCase().includes(query) ||
      template.additionalInfo.toLowerCase().includes(query) ||
      (template.formNumber && template.formNumber.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      
      {/* 3-Zone Sticky Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        lang={lang}
        setLang={setLang}
        vaultCount={vaultItems.length}
        onOpenSupport={() => setIsSupportOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentTab === 'reports' && (
          <div>
            {/* Hero Section */}
            <section className="border-b border-slate-800 bg-radial from-slate-900 via-slate-950 to-slate-950 py-12 sm:py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                {/* Clean unboxed kicker */}
                <div className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-400 mb-3 uppercase tracking-wider">
                  <span>Signal Hackers CSB</span>
                  <span aria-hidden="true">·</span>
                  <span>Facebook Official Report Routes</span>
                  <span aria-hidden="true">·</span>
                  <span>Verified Additional Info</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-4xl mx-auto text-balance">
                  {lang === 'en' ? (
                    <>Signal Hackers CSB — <span className="text-emerald-400">Facebook Report Links</span> & Additional Info</>
                  ) : (
                    <>Signal Hackers CSB — <span className="text-emerald-400">ফেসবুক রিপোর্ট লিংক</span> ও অতিরিক্ত তথ্য</>
                  )}
                </h1>

                <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  {lang === 'en'
                    ? 'Direct links to Meta contact forms paired with professionally articulated, policy-compliant additional descriptions. One-click copy ready for impersonation, hacked accounts, copyright, cyberbullying, and disabled appeals.'
                    : 'নকল প্রোফাইল, হ্যাকড আইডি, হয়রানি, কপিরাইট ও আইডি ডিজেবল সমস্যার জন্য ফেসবুকের অফিসিয়াল লিংক এবং দ্রুত অ্যাকশন পেতে নিখুঁত ইংরেজি "Additional Info" স্ক্রিপ্ট এক ক্লিকে কপি করুন।'}
                </p>

                {/* Quick stats strip */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-bold text-white tabular-nums">12+</span>
                    <span>{lang === 'en' ? 'Verified Meta Forms' : 'অফিসিয়াল ফর্ম লিংক'}</span>
                  </div>
                  <span aria-hidden="true" className="text-slate-700 hidden sm:inline">·</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-bold text-white tabular-nums">100%</span>
                    <span>{lang === 'en' ? 'Policy Compliant' : 'পলিসি মানসম্পন্ন স্ক্রিপ্ট'}</span>
                  </div>
                  <span aria-hidden="true" className="text-slate-700 hidden sm:inline">·</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-bold text-emerald-400 tabular-nums">1-Click</span>
                    <span>{lang === 'en' ? 'Instant Clipboard Copy' : 'ইনস্ট্যান্ট কপি সুবিধা'}</span>
                  </div>
                </div>

                {/* Search Bar & View Mode Toggle */}
                <div className="mt-8 max-w-2xl mx-auto space-y-4">
                  <div className="relative">
                    <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
                    <input
                      type="text"
                      placeholder={
                        lang === 'en'
                          ? 'Search by issue, folder, form number (e.g. 430253071144967)...'
                          : 'সমস্যার নাম, ফোল্ডার, ফর্ম নম্বর দিয়ে খুঁজুন (যেমন: Deformation, ৪৩০২৫৩০৭১১৪৪৯৬৭)...'
                      }
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 hover:border-slate-600 focus:border-blue-500 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-slate-400 shadow-xl focus:outline-none transition-all"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-3.5 top-3 text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800"
                      >
                        {lang === 'en' ? 'Clear' : 'মুছুন'}
                      </button>
                    )}
                  </div>

                  {/* View Mode Switcher (Folders vs Cards) */}
                  <div className="flex items-center justify-center gap-2 pt-1">
                    <div className="inline-flex p-1 bg-slate-900/90 rounded-xl border border-slate-800 shadow-inner">
                      <button
                        onClick={() => setViewMode('folders')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          viewMode === 'folders'
                            ? 'bg-blue-600 text-white shadow-md shadow-blue-900'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        <FolderOpen className="w-3.5 h-3.5" />
                        <span>{lang === 'en' ? 'Folder System (Recommended)' : 'ফোল্ডার সিস্টেম (পছন্দনীয়)'}</span>
                      </button>

                      <button
                        onClick={() => setViewMode('cards')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          viewMode === 'cards'
                            ? 'bg-blue-600 text-white shadow-md shadow-blue-900'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        <LayoutGrid className="w-3.5 h-3.5" />
                        <span>{lang === 'en' ? 'All Cards View' : 'সকল কার্ড ভিউ'}</span>
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </section>

            {/* Category Segmented Tabs (Shown in Card view) */}
            {viewMode === 'cards' && (
              <div className="border-b border-slate-800 bg-slate-950/80 sticky top-16 z-30 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 overflow-x-auto scrollbar-none flex items-center gap-1.5">
                  {CATEGORIES.map((cat) => {
                    const isActive = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`whitespace-nowrap px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                          isActive
                            ? 'bg-blue-600 text-white shadow-sm font-semibold'
                            : 'bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white'
                        }`}
                      >
                        {lang === 'en' ? cat.label : cat.labelBn}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Results Grid / Folder Explorer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              
              {/* If in Folder View Mode */}
              {viewMode === 'folders' ? (
                <FolderExplorer
                  templates={filteredTemplates}
                  lang={lang}
                  onCopyText={handleCopyText}
                  onCustomize={handleCustomizeFromCard}
                />
              ) : (
                <>
                  {/* Category Status Bar */}
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-6">
                    <div>
                      <span>
                        {lang === 'en' ? 'Showing' : 'প্রদর্শিত হচ্ছে'}{' '}
                        <strong className="text-white font-mono tabular-nums">{filteredTemplates.length}</strong>{' '}
                        {lang === 'en' ? 'official report routes' : 'টি ফর্ম ও স্ক্রিপ্ট'}
                      </span>
                      {selectedCategory !== 'all' && (
                        <span className="ml-2 text-blue-400">
                          (Filtered by: {CATEGORIES.find((c) => c.id === selectedCategory)?.[lang === 'en' ? 'label' : 'labelBn']})
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => setCurrentTab('generator')}
                      className="hidden sm:inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{lang === 'en' ? 'Need a custom script? Open Generator' : 'কাস্টম তথ্য বসাতে চান? বিল্ডার খুলুন'}</span>
                    </button>
                  </div>

                  {filteredTemplates.length === 0 ? (
                    <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-12 text-center">
                      <AlertCircle className="w-10 h-10 text-slate-500 mx-auto mb-3" />
                      <h3 className="text-base font-bold text-white mb-1">
                        {lang === 'en' ? 'No matching report templates found' : 'কোনো ফলাফল পাওয়া যায়নি'}
                      </h3>
                      <p className="text-xs text-slate-400 max-w-sm mx-auto mb-4">
                        {lang === 'en'
                          ? 'Try adjusting your search terms or switch back to "All Links & Scripts".'
                          : 'ভিন্ন কিওয়ার্ড দিয়ে খুঁজুন অথবা "সবগুলো লিংক ও স্ক্রিপ্ট" ফিল্টারে ফিরে যান।'}
                      </p>
                      <button
                        onClick={() => {
                          setSearchQuery('');
                          setSelectedCategory('all');
                        }}
                        className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                      >
                        {lang === 'en' ? 'Reset Filters' : 'ফিল্টার রিসেট করুন'}
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {filteredTemplates.map((template) => (
                        <ReportCard
                          key={template.id}
                          template={template}
                          lang={lang}
                          onCopyText={handleCopyText}
                          onCustomize={handleCustomizeFromCard}
                        />
                      ))}
                    </div>
                  )}
                </>
              )}

            </div>
          </div>
        )}

        {currentTab === 'generator' && (
          <ScriptGenerator
            initialTemplate={customizingTemplate}
            lang={lang}
            onCopyText={handleCopyText}
            onSaveToVault={handleSaveToVault}
          />
        )}

        {currentTab === 'guide' && (
          <ReportingGuide lang={lang} />
        )}

        {currentTab === 'vault' && (
          <PersonalVault
            vaultItems={vaultItems}
            lang={lang}
            onDeleteItem={handleDeleteVaultItem}
            onAddItem={handleAddVaultItem}
            onCopyText={handleCopyText}
          />
        )}
      </main>

      {/* Professional Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-10 mt-16 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="text-center md:text-left">
              <span className="font-bold text-slate-300 text-sm">MetaReport Hub</span>
              <p className="text-xs text-slate-400 mt-1">
                {lang === 'en'
                  ? 'Official Facebook direct contact links and verified legal appeal scripts utility.'
                  : 'ফেসবুক অফিসিয়াল রিপোর্ট লিংক এবং লিগ্যাল আপিল ও অতিরিক্ত বিবরণ তৈরির স্বয়ংক্রিয় প্ল্যাটফর্ম।'}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400">
              <button
                onClick={() => setCurrentTab('reports')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {lang === 'en' ? 'All Report Links' : 'সকল রিপোর্ট লিংক'}
              </button>
              <button
                onClick={() => setCurrentTab('generator')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {lang === 'en' ? 'Custom Builder' : 'কাস্টম বিল্ডার'}
              </button>
              <button
                onClick={() => setCurrentTab('guide')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {lang === 'en' ? 'Submission Rules' : 'রিপোর্ট নির্দেশিকা'}
              </button>
              <button
                onClick={() => setCurrentTab('vault')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {lang === 'en' ? 'Saved Vault' : 'সংরক্ষিত স্ক্রিপ্ট'}
              </button>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
            <p>
              {lang === 'en'
                ? 'Independent community utility. Facebook and Meta are trademarks of Meta Platforms, Inc. All external links redirect directly to official facebook.com endpoints.'
                : 'স্বতন্ত্র কমিউনিটি সিকিউরিটি টুল। ফেসবুক ও মেটা হলো মেটা প্ল্যাটফর্মস ইনকর্পোরেটেডের ট্রেডমার্ক। সকল লিংক সরাসরি facebook.com এর অফিশিয়াল ফর্মে নির্দেশ করে।'}
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              <span>All 12 Official Forms Online & Verified</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Support Button */}
      <button
        onClick={() => setIsSupportOpen(true)}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-2xl shadow-emerald-950 border border-emerald-400/40 hover:scale-105 active:scale-95 transition-all cursor-pointer group"
        title="Contact Signal Hackers CSB / সহায়তা ও যোগাযোগ"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
        <Headphones className="w-4 h-4" />
        <span className="hidden sm:inline">
          {lang === 'en' ? 'Support / Contact' : 'যোগাযোগ ও সাপোর্ট'}
        </span>
      </button>

      {/* Support & Contact Modal */}
      <SupportModal
        isOpen={isSupportOpen}
        onClose={() => setIsSupportOpen(false)}
        lang={lang}
        onToast={showToast}
      />

      {/* Notification Toast */}
      <Toast
        message={toast.message}
        subMessage={toast.subMessage}
        isVisible={toast.isVisible}
      />

    </div>
  );
}
