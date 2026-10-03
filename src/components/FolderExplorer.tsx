import React, { useState } from 'react';
import { ReportTemplate } from '../data/reportData';
import { 
  Folder, 
  FolderOpen, 
  Copy, 
  Check, 
  ExternalLink, 
  ArrowLeft, 
  FileText, 
  Link as LinkIcon, 
  Share2, 
  SlidersHorizontal, 
  Search,
  ShieldAlert,
  Sparkles
} from 'lucide-react';

interface FolderExplorerProps {
  templates: ReportTemplate[];
  lang: 'en' | 'bn';
  onCopyText: (text: string, title: string, type: 'info' | 'link' | 'all') => void;
  onCustomize: (template: ReportTemplate) => void;
}

export const FolderExplorer: React.FC<FolderExplorerProps> = ({
  templates,
  lang,
  onCopyText,
  onCustomize,
}) => {
  // Default to the user's requested "defamation-inappropriate-content" folder or null to see all folders
  const [openedFolderId, setOpenedFolderId] = useState<string | null>(
    'defamation-inappropriate-content'
  );
  const [selectedVariantIdx, setSelectedVariantIdx] = useState<number>(0);
  const [folderSearch, setFolderSearch] = useState<string>('');

  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedMainFormLink, setCopiedMainFormLink] = useState(false);
  const [copiedMobileLink, setCopiedMobileLink] = useState(false);
  const [copiedInstagramLink, setCopiedInstagramLink] = useState(false);
  const [copiedTargetPost, setCopiedTargetPost] = useState(false);
  const [copiedSection, setCopiedSection] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedScript, setCopiedScript] = useState(false);
  const [copiedBundle, setCopiedBundle] = useState(false);
  const [showBnMeaning, setShowBnMeaning] = useState(false);

  const activeTemplate = templates.find((t) => t.id === openedFolderId) || templates[0];

  const hasVariants = activeTemplate.additionalInfoVariants && activeTemplate.additionalInfoVariants.length > 0;
  const currentVariant = hasVariants ? activeTemplate.additionalInfoVariants![selectedVariantIdx] : null;

  const currentScript = currentVariant ? currentVariant.text : activeTemplate.additionalInfo;
  const currentScriptBn = currentVariant ? currentVariant.textBn : activeTemplate.additionalInfoBn;

  const filteredTemplates = templates.filter(
    (t) =>
      t.folderName.toLowerCase().includes(folderSearch.toLowerCase()) ||
      t.folderNameBn.toLowerCase().includes(folderSearch.toLowerCase()) ||
      t.title.toLowerCase().includes(folderSearch.toLowerCase()) ||
      (t.formNumber && t.formNumber.toLowerCase().includes(folderSearch.toLowerCase()))
  );

  const handleCopyFormLink = () => {
    const platformLabel = activeTemplate.platform === 'telegram' 
      ? 'Telegram Support' 
      : activeTemplate.platform === 'tiktok'
      ? 'TikTok Webform'
      : 'Official Form';
    onCopyText(activeTemplate.url, `${activeTemplate.folderName} (${platformLabel})`, 'link');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopyMainFormLink = () => {
    if (activeTemplate.mainFormUrl) {
      onCopyText(activeTemplate.mainFormUrl, `${activeTemplate.folderName} (Main Form)`, 'link');
      setCopiedMainFormLink(true);
      setTimeout(() => setCopiedMainFormLink(false), 2000);
    }
  };

  const handleCopyInstagramLink = () => {
    if (activeTemplate.instagramUrl) {
      onCopyText(activeTemplate.instagramUrl, `${activeTemplate.folderName} (Instagram Form)`, 'link');
      setCopiedInstagramLink(true);
      setTimeout(() => setCopiedInstagramLink(false), 2000);
    }
  };

  const handleCopyMobileLink = () => {
    if (activeTemplate.mobileUrl) {
      onCopyText(activeTemplate.mobileUrl, `${activeTemplate.folderName} (Mobile Form Link)`, 'link');
      setCopiedMobileLink(true);
      setTimeout(() => setCopiedMobileLink(false), 2000);
    }
  };

  const handleCopyTargetPost = () => {
    if (activeTemplate.targetPostSample) {
      onCopyText(activeTemplate.targetPostSample, 'Target URL', 'link');
      setCopiedTargetPost(true);
      setTimeout(() => setCopiedTargetPost(false), 2000);
    }
  };

  const handleCopyReportSection = () => {
    if (activeTemplate.reportSection) {
      const sectionText = `° Report Section - ${activeTemplate.reportSection} ✅`;
      onCopyText(sectionText, `${activeTemplate.folderName} - Report Section`, 'info');
      setCopiedSection(true);
      setTimeout(() => setCopiedSection(false), 2000);
    }
  };

  const handleCopyEmail = () => {
    if (activeTemplate.emailContact) {
      onCopyText(activeTemplate.emailContact, 'Abuse Email Address', 'link');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleCopyScript = () => {
    const label = currentVariant ? currentVariant.label : 'Additional Info';
    onCopyText(currentScript, `${activeTemplate.folderName} - ${label}`, 'info');
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2000);
  };

  const handleCopyBundle = () => {
    let bundle = '';

    if (activeTemplate.id === 'meta-copyright-update') {
      bundle = `🔰 Copyright  Update 🔰\n\nফর্ম:\n${activeTemplate.url}\n\nমেইন ফর্ম:\n${activeTemplate.mainFormUrl}\n\n✨Additional👇\n${currentScript}`;
    } else if (activeTemplate.id === 'tiktok-privacy-violation') {
      bundle = `Tiktok Privacy Violence Report ✅\n\nFrom Link:  ${activeTemplate.url}\n\nAdditional:  \n${currentScript}`;
    } else if (activeTemplate.id === 'ai-assistant-18plus-removal') {
      bundle = `Ai Assistant এর মাধ্যমে ১৮+ আইডি রিমুভ এডিশনাল\n\n${currentScript}`;
    } else if (activeTemplate.id === 'telegram-18plus-channel-report') {
      bundle = `Telegram 18+ Channel Report Additional 😍🛰️\n\n° Report Section - ${activeTemplate.reportSection || 'illegal Adult Content ( Other illegal Sexual Content )'} ✅\n\n⇨Additional 😴🚀\n\n${currentScript}\n\nSupport Link: ${activeTemplate.url}\nAbuse Email: ${activeTemplate.emailContact || 'abuse@telegram.org'}`;
    } else if (activeTemplate.id === 'defamation-inappropriate-content') {
      bundle = `Deformation Report Facebook\n\nFrom link👇\n${activeTemplate.mobileUrl || activeTemplate.url}\n\nTarget post link:👇\n${activeTemplate.targetPostSample}\n\nAdditional👇\n\n${currentScript}`;
    } else if (activeTemplate.id === 'legal-removed-request') {
      bundle = `Legal Removed Request\n\nFacebook From\n${activeTemplate.url}\n\nInstagram From\n${activeTemplate.instagramUrl}\n\nAdditional\n\n${currentScript}`;
    } else if (activeTemplate.id === 'indian-grievance-officer-report') {
      bundle = `Indian Grievance Officer Report From Link👇\n${activeTemplate.url}\n\nAdditional :👇\n\n${currentScript}`;
    } else {
      bundle = `Folder: ${activeTemplate.folderName}\nForm: ${activeTemplate.formNumber || 'Official Contact Form'}\nFrom Link:\n${activeTemplate.url}`;
      if (activeTemplate.mainFormUrl) {
        bundle += `\nMain Form:\n${activeTemplate.mainFormUrl}`;
      }
      if (activeTemplate.instagramUrl) {
        bundle += `\n\nInstagram From:\n${activeTemplate.instagramUrl}`;
      }
      if (activeTemplate.mobileUrl) {
        bundle += `\nMobile link: ${activeTemplate.mobileUrl}`;
      }
      if (activeTemplate.targetPostSample) {
        bundle += `\nTarget link:\n${activeTemplate.targetPostSample}`;
      }
      bundle += `\n\nAdditional:\n${currentScript}`;
    }

    onCopyText(bundle, activeTemplate.folderName, 'all');
    setCopiedBundle(true);
    setTimeout(() => setCopiedBundle(false), 2000);
  };

  return (
    <div className="space-y-6">
      
      {/* Folder Selection Bar (Tabs / Badges) */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <Folder className="w-5 h-5 text-amber-400" />
            <h2 className="text-base font-bold text-white tracking-tight">
              {lang === 'en' ? 'Select Report Folder (Click to open):' : 'রিপোর্ট ফোল্ডার নির্বাচন করুন (চাপ দিয়ে খুলুন):'}
            </h2>
          </div>

          {/* Quick folder search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder={lang === 'en' ? 'Find folder...' : 'ফোল্ডার খুঁজুন...'}
              value={folderSearch}
              onChange={(e) => setFolderSearch(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Folder Tiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {filteredTemplates.map((t) => {
            const isSelected = openedFolderId === t.id;
            const isDefamationFolder = t.id === 'defamation-inappropriate-content';
            const isLegalFolder = t.id === 'legal-removed-request';
            const isGrievanceFolder = t.id === 'indian-grievance-officer-report';
            const isTelegramFolder = t.id === 'telegram-18plus-channel-report';
            const isCopyrightFolder = t.id === 'meta-copyright-update';
            const isTikTokFolder = t.id === 'tiktok-privacy-violation';
            const isAiAssistantFolder = t.id === 'ai-assistant-18plus-removal';

            return (
              <button
                key={t.id}
                onClick={() => {
                  setOpenedFolderId(t.id);
                  setSelectedVariantIdx(0);
                  setShowBnMeaning(false);
                }}
                className={`flex items-start gap-3 p-3 rounded-xl border text-left transition-all cursor-pointer relative group ${
                  isSelected
                    ? 'bg-blue-950/60 border-blue-500 shadow-md shadow-blue-950/50 text-white'
                    : isDefamationFolder
                    ? 'bg-slate-950 border-amber-500/50 hover:border-amber-400 text-slate-200'
                    : isLegalFolder
                    ? 'bg-slate-950 border-purple-500/50 hover:border-purple-400 text-slate-200'
                    : isGrievanceFolder
                    ? 'bg-slate-950 border-emerald-500/50 hover:border-emerald-400 text-slate-200'
                    : isTelegramFolder
                    ? 'bg-slate-950 border-sky-500/50 hover:border-sky-400 text-slate-200'
                    : isCopyrightFolder
                    ? 'bg-slate-950 border-amber-400/50 hover:border-amber-300 text-slate-200'
                    : isTikTokFolder
                    ? 'bg-slate-950 border-teal-500/50 hover:border-teal-400 text-slate-200'
                    : isAiAssistantFolder
                    ? 'bg-slate-950 border-rose-500/50 hover:border-rose-400 text-slate-200'
                    : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white'
                }`}
              >
                <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                  isSelected 
                    ? 'bg-blue-600 text-white' 
                    : isDefamationFolder 
                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                    : isLegalFolder
                    ? 'bg-purple-500/10 text-purple-400 border border-purple-500/30' 
                    : isGrievanceFolder
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' 
                    : isTelegramFolder
                    ? 'bg-sky-500/10 text-sky-400 border border-sky-500/30'
                    : isCopyrightFolder
                    ? 'bg-amber-400/10 text-amber-400 border border-amber-400/30'
                    : isTikTokFolder
                    ? 'bg-teal-500/10 text-teal-400 border border-teal-500/30'
                    : isAiAssistantFolder
                    ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                    : 'bg-slate-800 text-slate-400 group-hover:text-amber-400'
                }`}>
                  {isSelected ? <FolderOpen className="w-4 h-4" /> : <Folder className="w-4 h-4" />}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold truncate block">
                      {t.folderName}
                    </span>
                    {isDefamationFolder && (
                      <span className="text-[9px] px-1 py-0.2 rounded bg-amber-500/20 text-amber-300 font-mono shrink-0">
                        Featured
                      </span>
                    )}
                    {isLegalFolder && (
                      <span className="text-[9px] px-1 py-0.2 rounded bg-purple-500/20 text-purple-300 font-mono shrink-0">
                        FB + Insta
                      </span>
                    )}
                    {isGrievanceFolder && (
                      <span className="text-[9px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-mono shrink-0">
                        Meta India
                      </span>
                    )}
                    {isTelegramFolder && (
                      <span className="text-[9px] px-1 py-0.2 rounded bg-sky-500/20 text-sky-300 font-mono shrink-0">
                        Telegram 18+
                      </span>
                    )}
                    {isCopyrightFolder && (
                      <span className="text-[9px] px-1 py-0.2 rounded bg-amber-400/20 text-amber-300 font-mono shrink-0">
                        Copyright
                      </span>
                    )}
                    {isTikTokFolder && (
                      <span className="text-[9px] px-1 py-0.2 rounded bg-teal-500/20 text-teal-300 font-mono shrink-0">
                        TikTok
                      </span>
                    )}
                    {isAiAssistantFolder && (
                      <span className="text-[9px] px-1 py-0.2 rounded bg-rose-500/20 text-rose-300 font-mono shrink-0">
                        AI Assist
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-slate-400 truncate block mt-0.5 font-mono">
                    {t.formNumber || 'Contact Form'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Inside the Opened Folder View */}
      {activeTemplate && (
        <div className="bg-slate-900 border-2 border-blue-500/50 rounded-2xl p-5 sm:p-7 shadow-2xl space-y-6 animate-in fade-in duration-200">
          
          {/* Folder Header Breadcrumb */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <FolderOpen className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 text-xs text-blue-400 font-semibold uppercase tracking-wider">
                  <span>Folder View</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-400 font-mono">{activeTemplate.formNumber || 'Meta Direct Form'}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2 mt-0.5">
                  📁 {activeTemplate.folderName}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyBundle}
                className="px-4 py-2 text-xs font-bold rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 flex items-center gap-1.5 transition-all cursor-pointer"
                title="Copy all links and active script at once"
              >
                {copiedBundle ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>{lang === 'en' ? 'All Copied!' : 'ফোল্ডারের সব কপি হয়েছে!'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{lang === 'en' ? 'Copy All in Folder' : 'সব একসাথে কপি'}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Section 1: From link (ফর্ম লিংক) */}
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <LinkIcon className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  {activeTemplate.platform === 'telegram'
                    ? (lang === 'en' ? 'Telegram Support & Abuse From Link:' : 'টেলিগ্রাম সাপোর্ট ও রিপোর্ট লিংক:')
                    : activeTemplate.platform === 'tiktok'
                    ? (lang === 'en' ? 'TikTok Privacy Report From Link:' : 'From Link (টিকটক প্রাইভেসি রিপোর্ট লিংক):')
                    : activeTemplate.id === 'meta-copyright-update'
                    ? (lang === 'en' ? 'Meta Copyright Claim Forms (Specific & Main):' : 'কপিরাইট আপডেট ফর্ম লিংক:')
                    : activeTemplate.id === 'indian-grievance-officer-report'
                    ? (lang === 'en' ? 'Indian Grievance Officer Report From Link👇:' : 'Indian Grievance Officer Report From Link👇:')
                    : activeTemplate.instagramUrl
                    ? (lang === 'en' ? 'Legal Removed Request (FB & Insta):' : 'Legal Removed Request (ফেসবুক ও ইনস্টাগ্রাম লিংক):')
                    : (lang === 'en' ? 'From link (Official Forms):' : 'From link (অফিসিয়াল ফর্ম লিংক):')}
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                {activeTemplate.platform === 'telegram'
                  ? 'Telegram App / Web'
                  : activeTemplate.platform === 'tiktok'
                  ? 'TikTok Webform'
                  : activeTemplate.instagramUrl
                  ? 'Facebook & Instagram'
                  : 'Official Form'}
              </span>
            </div>

            {/* Main Form Link (Facebook / Telegram / TikTok) */}
            <div className="space-y-1">
              {activeTemplate.instagramUrl && (
                <div className="text-[11px] font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                  <span>Facebook From:</span>
                </div>
              )}
              {activeTemplate.platform === 'telegram' && (
                <div className="text-[11px] font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                  <span>Telegram Support From:</span>
                </div>
              )}
              {activeTemplate.platform === 'tiktok' && (
                <div className="text-[11px] font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
                  <span>From Link (TikTok Webform):</span>
                </div>
              )}
              {activeTemplate.mainFormUrl && (
                <div className="text-[11px] font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                  <span>ফর্ম (Copyright Specific Form):</span>
                </div>
              )}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-900 px-4 py-2.5 rounded-lg border border-slate-800">
                <span className="font-mono text-xs sm:text-sm text-blue-300 truncate select-all">
                  {activeTemplate.url}
                </span>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopyFormLink}
                    className="px-3.5 py-1.5 text-xs font-bold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 transition-colors cursor-pointer shadow-md shadow-emerald-950"
                  >
                    {copiedLink ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-white" />
                        <span>{lang === 'en' ? 'Copied Link!' : 'লিংক কপি হয়েছে!'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>
                          {activeTemplate.platform === 'telegram'
                            ? (lang === 'en' ? 'Copy Telegram Link' : 'টেলিগ্রাম লিংক কপি')
                            : activeTemplate.platform === 'tiktok'
                            ? (lang === 'en' ? 'Copy From Link' : 'লিংক কপি করুন')
                            : activeTemplate.mainFormUrl
                            ? (lang === 'en' ? 'Copy Specific Form' : 'ফর্ম লিংক কপি')
                            : activeTemplate.instagramUrl
                            ? (lang === 'en' ? 'Copy Facebook From' : 'ফেসবুক লিংক কপি')
                            : (lang === 'en' ? 'Copy Form Link' : 'ফর্ম লিংক কপি')}
                        </span>
                      </>
                    )}
                  </button>

                  <a
                    href={activeTemplate.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-1 transition-colors"
                  >
                    <span>{lang === 'en' ? 'Open' : 'প্রবেশ করুন'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Main Form Link if present (e.g. Meta Copyright Main Form) */}
            {activeTemplate.mainFormUrl && (
              <div className="space-y-1 pt-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <span>{lang === 'en' ? 'Main Form Link:' : 'মেইন ফর্ম লিংক:'}</span>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-900 px-4 py-2.5 rounded-lg border border-amber-900/40">
                  <span className="font-mono text-xs sm:text-sm text-amber-300 truncate select-all">
                    {activeTemplate.mainFormUrl}
                  </span>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={handleCopyMainFormLink}
                      className="px-3.5 py-1.5 text-xs font-bold rounded-lg bg-amber-600 hover:bg-amber-500 text-slate-950 flex items-center gap-1.5 transition-colors cursor-pointer shadow-md shadow-amber-950"
                    >
                      {copiedMainFormLink ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>{lang === 'en' ? 'Copied Main Form!' : 'মেইন ফর্ম কপি হয়েছে!'}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>{lang === 'en' ? 'Copy Main Form' : 'মেইন ফর্ম কপি'}</span>
                        </>
                      )}
                    </button>

                    <a
                      href={activeTemplate.mainFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-900/40 flex items-center gap-1 transition-colors"
                    >
                      <span>{lang === 'en' ? 'Open Main Form' : 'মেইন ফর্মে প্রবেশ'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Telegram Direct Abuse Email row if present */}
            {activeTemplate.emailContact && (
              <div className="space-y-1 pt-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <span>Direct Abuse Email (Official):</span>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-900 px-4 py-2.5 rounded-lg border border-amber-900/40">
                  <span className="font-mono text-xs sm:text-sm text-amber-300 truncate select-all">
                    {activeTemplate.emailContact}
                  </span>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={handleCopyEmail}
                      className="px-3.5 py-1.5 text-xs font-bold rounded-lg bg-amber-600 hover:bg-amber-500 text-slate-950 flex items-center gap-1.5 transition-colors cursor-pointer shadow-md shadow-amber-950"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>{lang === 'en' ? 'Copied Email!' : 'ইমেইল কপি হয়েছে!'}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>{lang === 'en' ? 'Copy Abuse Email' : 'ইমেইল কপি করুন'}</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`mailto:${activeTemplate.emailContact}?subject=Urgent%20Illegal%20Adult%20Content%20Report`}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-900/40 flex items-center gap-1 transition-colors"
                    >
                      <span>{lang === 'en' ? 'Email Now' : 'মেইল করুন'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Instagram Form Link if present */}
            {activeTemplate.instagramUrl && (
              <div className="space-y-1 pt-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-pink-400 flex items-center gap-1.5">
                  <span>Instagram From:</span>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-900 px-4 py-2.5 rounded-lg border border-pink-900/30">
                  <span className="font-mono text-xs sm:text-sm text-pink-300 truncate select-all">
                    {activeTemplate.instagramUrl}
                  </span>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={handleCopyInstagramLink}
                      className="px-3.5 py-1.5 text-xs font-bold rounded-lg bg-pink-600 hover:bg-pink-500 text-white flex items-center gap-1.5 transition-colors cursor-pointer shadow-md shadow-pink-950"
                    >
                      {copiedInstagramLink ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-white" />
                          <span>{lang === 'en' ? 'Copied Insta Link!' : 'ইনস্টাগ্রাম লিংক কপি হয়েছে!'}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>{lang === 'en' ? 'Copy Instagram From' : 'ইনস্টাগ্রাম লিংক কপি'}</span>
                        </>
                      )}
                    </button>

                    <a
                      href={activeTemplate.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-pink-300 border border-pink-900/40 flex items-center gap-1 transition-colors"
                    >
                      <span>{lang === 'en' ? 'Open Insta' : 'ইনস্টাগ্রামে ওপেন'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Mobile Link row if present */}
            {activeTemplate.mobileUrl && !activeTemplate.instagramUrl && (
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-900/60 px-4 py-2 rounded-lg border border-slate-800/80">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-[10px] font-bold uppercase bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded">
                    Mobile Link
                  </span>
                  <span className="font-mono text-xs text-slate-300 truncate select-all">
                    {activeTemplate.mobileUrl}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopyMobileLink}
                    className="px-3 py-1 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copiedMobileLink ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{lang === 'en' ? 'Copy Mobile Link' : 'মোবাইল লিংক কপি'}</span>
                  </button>

                  <a
                    href={activeTemplate.mobileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 text-xs rounded bg-slate-800 text-blue-400 hover:text-blue-300 flex items-center gap-1"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Section: Report Section (for Telegram or specific policy sections) */}
          {activeTemplate.reportSection && (
            <div className="bg-sky-950/20 border border-sky-500/40 rounded-xl p-4 sm:p-5 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-sky-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
                    {lang === 'en' ? 'Report Section (In-App Menu):' : 'Report Section (ইন-অ্যাপ অপশন নির্বাচন):'}
                  </span>
                </div>
                <span className="text-[11px] text-sky-400 font-mono">Official Section</span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-950 px-4 py-2.5 rounded-lg border border-sky-800/40">
                <span className="font-mono text-xs sm:text-sm text-sky-200 font-bold truncate select-all">
                  ° Report Section - {activeTemplate.reportSection} ✅
                </span>

                <button
                  onClick={handleCopyReportSection}
                  className="px-3.5 py-1.5 text-xs font-bold rounded-lg bg-sky-600 hover:bg-sky-500 text-white flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 shadow-md shadow-sky-950"
                >
                  {copiedSection ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>{lang === 'en' ? 'Copied Section!' : 'সেকশন কপি হয়েছে!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{lang === 'en' ? 'Copy Report Section' : 'সেকশন কপি করুন'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Section 2: Target Post Link (টার্গেট পোস্ট লিংক) if present */}
          {activeTemplate.targetPostSample && (
            <div className="bg-red-950/20 border border-red-900/40 rounded-xl p-4 sm:p-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                  {activeTemplate.id === 'ai-assistant-18plus-removal'
                    ? (lang === 'en' ? 'Target Account Link:-' : 'Account Link (টার্গেট অ্যাকাউন্ট লিংক):-')
                    : (lang === 'en' ? 'Target post link:' : 'Target post link (টার্গেট পোস্ট লিংক):')}
                </span>
                <span className="text-[11px] text-red-400/80 font-mono">
                  {activeTemplate.id === 'ai-assistant-18plus-removal' ? 'Target Profile' : 'Sample Post'}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-950 px-4 py-2.5 rounded-lg border border-red-900/30">
                <span className="font-mono text-xs sm:text-sm text-red-200 truncate select-all">
                  {activeTemplate.targetPostSample}
                </span>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopyTargetPost}
                    className="px-3.5 py-1.5 text-xs font-bold rounded-lg bg-red-900/60 hover:bg-red-800/80 text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copiedTargetPost ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-white" />
                        <span>{lang === 'en' ? 'Copied Post Link!' : 'পোস্ট লিংক কপি হয়েছে!'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{lang === 'en' ? 'Copy Post Link' : 'পোস্ট লিংক কপি'}</span>
                      </>
                    )}
                  </button>

                  <a
                    href={activeTemplate.targetPostSample}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 text-xs rounded-lg bg-red-950/80 text-red-300 hover:text-white border border-red-800/40 flex items-center gap-1"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Section 3: Additional (অতিরিক্ত বিবরণ) */}
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  {lang === 'en' ? 'Additional (Official Review Description):' : 'Additional (অফিসিয়াল অতিরিক্ত বিবরণ):'}
                </span>
              </div>

              <button
                onClick={() => setShowBnMeaning(!showBnMeaning)}
                className="text-xs text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors cursor-pointer"
              >
                {showBnMeaning 
                  ? (lang === 'en' ? 'Show English Script' : 'ইংরেজি স্ক্রিপ্ট দেখুন') 
                  : (lang === 'en' ? 'Show Bengali Meaning' : 'বাংলা অর্থ দেখুন')}
              </button>
            </div>

            {/* Script Variant Selector Tabs if variants exist */}
            {hasVariants && (
              <div className="flex items-center gap-2 p-1.5 bg-slate-900 rounded-xl border border-slate-800 overflow-x-auto scrollbar-none">
                {activeTemplate.additionalInfoVariants!.map((variant, idx) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariantIdx(idx)}
                    className={`px-4 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                      selectedVariantIdx === idx
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-900'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            )}

            {/* Script Text Box */}
            <div className="relative group">
              <pre className="w-full max-h-72 overflow-y-auto p-4 sm:p-5 text-xs sm:text-sm text-slate-100 bg-slate-900 border border-slate-800 rounded-xl whitespace-pre-wrap font-mono leading-relaxed select-all">
                {showBnMeaning ? currentScriptBn : currentScript}
              </pre>

              <div className="absolute top-3 right-3 flex items-center gap-2">
                <button
                  onClick={handleCopyScript}
                  className="px-4 py-2 text-xs font-bold rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  {copiedScript ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>{lang === 'en' ? 'Copied Additional!' : 'অতিরিক্ত বিবরণ কপি হয়েছে!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>{lang === 'en' ? 'Copy Additional' : 'Additional কপি করুন'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-blue-400" />
                <span>
                  {activeTemplate.platform === 'telegram'
                    ? (lang === 'en'
                        ? 'Telegram App: 3 dots -> Report -> Illegal Adult Content -> Other Illegal Sexual Content -> Paste Additional.'
                        : 'টেলিগ্রাম অ্যাপে চ্যানেলের ৩ ডট > Report > Illegal Adult Content > Other Illegal Sexual Content সিলেক্ট করে এই Additional পেস্ট করুন।')
                    : activeTemplate.platform === 'tiktok'
                    ? (lang === 'en'
                        ? 'TikTok Webform: Replace [Your Name] with your real name and paste into the Description box.'
                        : 'টিকটক ওয়েবফর্মে [Your Name]-এর জায়গায় আপনার নাম লিখে ডেসক্রিপশন বক্সে পেস্ট করুন।')
                    : activeTemplate.id === 'meta-copyright-update'
                    ? (lang === 'en'
                        ? 'Meta Copyright Form: Paste into "Why are you reporting this content?" / description box.'
                        : 'মেটা কপিরাইট ফর্মের বিবরণ বক্সে এই বক্তব্যটি পেস্ট করে ডিজিটাল সিগনেচার দিন।')
                    : activeTemplate.id === 'ai-assistant-18plus-removal'
                    ? (lang === 'en'
                        ? 'Meta AI / Report: Paste directly into Meta AI Assistant chat or Facebook report description box.'
                        : 'মেটা এআই চ্যাটে কিংবা ফেসবুক রিপোর্ট ফর্মে সরাসরি পেস্ট করুন।')
                    : (lang === 'en'
                        ? 'Paste this directly into the "Additional info / Explanation" box in the official form.'
                        : 'অফিসিয়াল ফর্ম ওপেন করে "Additional info / Explanation" বক্সে এটি পেস্ট করে দিন।')}
                </span>
              </div>

              <button
                onClick={() => onCustomize(activeTemplate)}
                className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 underline underline-offset-2 transition-colors cursor-pointer"
              >
                <SlidersHorizontal className="w-3 h-3" />
                <span>{lang === 'en' ? 'Customize with Your Name/Details' : 'নিজের নাম ও তথ্য দিয়ে এডিট করুন'}</span>
              </button>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
