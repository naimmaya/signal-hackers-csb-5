import React, { useState } from 'react';
import { ReportTemplate } from '../data/reportData';
import { 
  Copy, 
  Check, 
  ExternalLink, 
  SlidersHorizontal, 
  ChevronDown, 
  ChevronUp, 
  FileCheck2, 
  AlertCircle,
  Share2
} from 'lucide-react';

interface ReportCardProps {
  template: ReportTemplate;
  lang: 'en' | 'bn';
  onCopyText: (text: string, title: string, type: 'info' | 'link' | 'all') => void;
  onCustomize: (template: ReportTemplate) => void;
}

export const ReportCard: React.FC<ReportCardProps> = ({
  template,
  lang,
  onCopyText,
  onCustomize,
}) => {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [showBengaliMeaning, setShowBengaliMeaning] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedMainFormLink, setCopiedMainFormLink] = useState(false);
  const [copiedMobileLink, setCopiedMobileLink] = useState(false);
  const [copiedInstagramLink, setCopiedInstagramLink] = useState(false);
  const [copiedTargetPost, setCopiedTargetPost] = useState(false);
  const [copiedSection, setCopiedSection] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedScript, setCopiedScript] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);

  const hasVariants = template.additionalInfoVariants && template.additionalInfoVariants.length > 0;
  const currentVariant = hasVariants ? template.additionalInfoVariants![selectedVariantIndex] : null;

  const currentScriptText = currentVariant ? currentVariant.text : template.additionalInfo;
  const currentScriptTextBn = currentVariant ? currentVariant.textBn : template.additionalInfoBn;

  const handleCopyLink = () => {
    onCopyText(template.url, template.title, 'link');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopyMainFormLink = () => {
    if (template.mainFormUrl) {
      onCopyText(template.mainFormUrl, `${template.title} (Main Form)`, 'link');
      setCopiedMainFormLink(true);
      setTimeout(() => setCopiedMainFormLink(false), 2000);
    }
  };

  const handleCopyInstagramLink = () => {
    if (template.instagramUrl) {
      onCopyText(template.instagramUrl, `${template.title} (Instagram Form)`, 'link');
      setCopiedInstagramLink(true);
      setTimeout(() => setCopiedInstagramLink(false), 2000);
    }
  };

  const handleCopyMobileLink = () => {
    if (template.mobileUrl) {
      onCopyText(template.mobileUrl, `${template.title} (Mobile)`, 'link');
      setCopiedMobileLink(true);
      setTimeout(() => setCopiedMobileLink(false), 2000);
    }
  };

  const handleCopyTargetPost = () => {
    if (template.targetPostSample) {
      onCopyText(template.targetPostSample, 'Target Post URL', 'link');
      setCopiedTargetPost(true);
      setTimeout(() => setCopiedTargetPost(false), 2000);
    }
  };

  const handleCopyReportSection = () => {
    if (template.reportSection) {
      onCopyText(`° Report Section - ${template.reportSection} ✅`, `${template.title} - Section`, 'info');
      setCopiedSection(true);
      setTimeout(() => setCopiedSection(false), 2000);
    }
  };

  const handleCopyEmail = () => {
    if (template.emailContact) {
      onCopyText(template.emailContact, 'Abuse Email', 'link');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleCopyScript = () => {
    const title = currentVariant ? `${template.title} - ${currentVariant.label}` : template.title;
    onCopyText(currentScriptText, title, 'info');
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2000);
  };

  const handleCopyAll = () => {
    let bundle = '';
    if (template.id === 'telegram-18plus-channel-report') {
      bundle = `Telegram 18+ Channel Report Additional 😍🛰️\n\n° Report Section - ${template.reportSection || 'illegal Adult Content ( Other illegal Sexual Content )'} ✅\n\n⇨Additional 😴🚀\n\n${currentScriptText}\n\nSupport Link: ${template.url}\nAbuse Email: ${template.emailContact || 'abuse@telegram.org'}`;
    } else if (template.id === 'defamation-inappropriate-content') {
      bundle = `Deformation Report Facebook\n\nFrom link👇\n${template.mobileUrl || template.url}\n\nTarget post link:👇\n${template.targetPostSample}\n\nAdditional👇\n\n${currentScriptText}`;
    } else if (template.id === 'legal-removed-request') {
      bundle = `Legal Removed Request\n\nFacebook From\n${template.url}\n\nInstagram From\n${template.instagramUrl}\n\nAdditional\n\n${currentScriptText}`;
    } else if (template.id === 'indian-grievance-officer-report') {
      bundle = `Indian Grievance Officer Report From Link👇\n${template.url}\n\nAdditional :👇\n\n${currentScriptText}`;
    } else {
      bundle = `Official Report Form:\n${template.url}`;
      if (template.mobileUrl) {
        bundle += `\nMobile Link: ${template.mobileUrl}`;
      }
      if (template.targetPostSample) {
        bundle += `\nSample Target Post: ${template.targetPostSample}`;
      }
      bundle += `\n\nForm: ${template.formNumber || 'Official Contact Form'}\n\nAdditional Info / Description Script:\n${currentScriptText}`;
    }
    
    onCopyText(bundle, template.title, 'all');
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  const getUrgencyDisplay = (urgency: ReportTemplate['urgency']) => {
    switch (urgency) {
      case 'critical':
        return {
          text: lang === 'en' ? 'Critical / Urgent' : 'জরুরি / ক্রিটিক্যাল',
          badgeClass: 'text-red-400 bg-red-950/60 border border-red-800/60',
        };
      case 'high':
        return {
          text: lang === 'en' ? 'High Priority' : 'উচ্চ অগ্রাধিকার',
          badgeClass: 'text-amber-400 bg-amber-950/60 border border-amber-800/60',
        };
      default:
        return {
          text: lang === 'en' ? 'Standard Review' : 'সাধারণ রিভিউ',
          badgeClass: 'text-blue-400 bg-blue-950/60 border border-blue-800/60',
        };
    }
  };

  const urgencyInfo = getUrgencyDisplay(template.urgency);

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 md:p-6 transition-all duration-200 hover:border-slate-700 shadow-lg shadow-black/20 flex flex-col justify-between">
      <div>
        {/* Top Metadata Line (Zero-pill discipline: unboxed with separators) */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 mb-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-blue-400 uppercase tracking-wider text-[11px]">
              {template.category}
            </span>
            {template.formNumber && (
              <>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="font-mono text-slate-300">{template.formNumber}</span>
              </>
            )}
          </div>
          <span className={`text-[11px] font-medium px-2 py-0.5 rounded ${urgencyInfo.badgeClass}`}>
            {urgencyInfo.text}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-white tracking-tight mb-1">
          {lang === 'en' ? template.title : template.titleBn}
        </h3>
        {lang === 'bn' && (
          <p className="text-xs text-slate-400 font-mono mb-2">
            {template.title}
          </p>
        )}

        {/* Summary Description */}
        <p className="text-sm text-slate-300 mb-4 leading-relaxed">
          {lang === 'en' ? template.summary : template.summaryBn}
        </p>

        {/* Direct Link Section (Desktop + Mobile) */}
        <div className="bg-slate-950 border border-slate-800/90 rounded-lg p-3 mb-4 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
            <span>{lang === 'en' ? 'Official Meta Direct Link:' : 'অফিসিয়াল মেটা রিপোর্ট ফর্ম লিংক:'}</span>
            <span className="font-mono text-[11px] text-emerald-400">Verified Form</span>
          </div>

          {/* Desktop Link */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 bg-slate-900/80 px-3 py-2 rounded border border-slate-800">
            <span className="font-mono text-xs text-blue-300 truncate select-all">
              {template.url}
            </span>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleCopyLink}
                className="px-2.5 py-1 text-xs font-medium rounded bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Copy Link to Clipboard"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">{lang === 'en' ? 'Copied' : 'কপি হয়েছে'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>{lang === 'en' ? 'Copy Link' : 'লিংক কপি'}</span>
                  </>
                )}
              </button>

              <a
                href={template.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 text-xs font-medium rounded bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 flex items-center gap-1 transition-colors"
                title="Open directly in Facebook"
              >
                <span>{lang === 'en' ? 'Open' : 'প্রবেশ করুন'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Main Form Link if present (e.g. Meta Copyright Main Form) */}
          {template.mainFormUrl && (
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 bg-slate-900/60 px-3 py-1.5 rounded border border-amber-900/40">
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="text-[10px] uppercase font-bold text-amber-300 bg-amber-950/80 px-1.5 py-0.5 rounded border border-amber-800/40">
                  {lang === 'en' ? 'Main Form' : 'মেইন ফর্ম'}
                </span>
                <span className="font-mono text-xs text-amber-300 truncate select-all">
                  {template.mainFormUrl}
                </span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleCopyMainFormLink}
                  className="px-2 py-0.5 text-xs font-medium rounded bg-amber-900/40 hover:bg-amber-900/60 text-amber-200 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  {copiedMainFormLink ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{lang === 'en' ? 'Copy Main' : 'মেইন ফর্ম কপি'}</span>
                </button>
                <a
                  href={template.mainFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-0.5 text-xs font-medium rounded bg-slate-800 text-amber-400 hover:text-amber-300 flex items-center gap-1"
                >
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}

          {/* Instagram Form Link if present */}
          {template.instagramUrl && (
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 bg-slate-900/60 px-3 py-1.5 rounded border border-pink-900/40">
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="text-[10px] uppercase font-bold text-pink-300 bg-pink-950/80 px-1.5 py-0.5 rounded border border-pink-800/40">
                  Instagram
                </span>
                <span className="font-mono text-xs text-pink-300 truncate select-all">
                  {template.instagramUrl}
                </span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleCopyInstagramLink}
                  className="px-2 py-0.5 text-xs font-medium rounded bg-pink-900/40 hover:bg-pink-900/60 text-pink-200 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  {copiedInstagramLink ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{lang === 'en' ? 'Copy Insta Form' : 'ইনস্টাগ্রাম লিংক কপি'}</span>
                </button>
                <a
                  href={template.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-0.5 text-xs font-medium rounded bg-slate-800 text-pink-300 hover:text-pink-200 flex items-center gap-1"
                >
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}

          {/* Mobile Link if present */}
          {template.mobileUrl && (
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 bg-slate-900/60 px-3 py-1.5 rounded border border-slate-800/80">
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-800 px-1 rounded">Mobile</span>
                <span className="font-mono text-xs text-slate-300 truncate select-all">
                  {template.mobileUrl}
                </span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleCopyMobileLink}
                  className="px-2 py-0.5 text-xs font-medium rounded bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  {copiedMobileLink ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{lang === 'en' ? 'Copy Mobile' : 'মোবাইল লিংক কপি'}</span>
                </button>
                <a
                  href={template.mobileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-0.5 text-xs font-medium rounded bg-slate-800 text-blue-400 hover:text-blue-300 flex items-center gap-1"
                >
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}

          {/* Direct Email row if present */}
          {template.emailContact && (
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 bg-slate-900/60 px-3 py-1.5 rounded border border-amber-900/40">
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="text-[10px] uppercase font-bold text-amber-300 bg-amber-950/80 px-1.5 py-0.5 rounded border border-amber-800/40">
                  Abuse Email
                </span>
                <span className="font-mono text-xs text-amber-300 truncate select-all">
                  {template.emailContact}
                </span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleCopyEmail}
                  className="px-2 py-0.5 text-xs font-medium rounded bg-amber-900/40 hover:bg-amber-900/60 text-amber-200 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{lang === 'en' ? 'Copy Email' : 'ইমেইল কপি'}</span>
                </button>
                <a
                  href={`mailto:${template.emailContact}?subject=Urgent%20Illegal%20Content%20Report`}
                  className="px-2 py-0.5 text-xs font-medium rounded bg-slate-800 text-amber-400 hover:text-amber-300 flex items-center gap-1"
                >
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}

          {/* Report Section if present */}
          {template.reportSection && (
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 bg-sky-950/20 px-3 py-1.5 rounded border border-sky-900/40">
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="text-[10px] uppercase font-bold text-sky-300 bg-sky-950 px-1 rounded">Report Section</span>
                <span className="font-mono text-xs text-sky-200 truncate select-all">
                  ° Report Section - {template.reportSection} ✅
                </span>
              </div>

              <button
                onClick={handleCopyReportSection}
                className="px-2 py-0.5 text-xs font-medium rounded bg-sky-900/40 hover:bg-sky-900/60 text-sky-200 flex items-center gap-1 transition-colors cursor-pointer shrink-0"
              >
                {copiedSection ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{lang === 'en' ? 'Copy Section' : 'সেকশন কপি'}</span>
              </button>
            </div>
          )}

          {/* Target Post Link if provided */}
          {template.targetPostSample && (
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 bg-red-950/20 px-3 py-1.5 rounded border border-red-900/30">
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="text-[10px] uppercase font-bold text-red-400 bg-red-950 px-1 rounded">Target Post</span>
                <span className="font-mono text-xs text-red-300 truncate select-all">
                  {template.targetPostSample}
                </span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleCopyTargetPost}
                  className="px-2 py-0.5 text-xs font-medium rounded bg-red-900/40 hover:bg-red-900/60 text-red-200 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  {copiedTargetPost ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{lang === 'en' ? 'Copy Target Post' : 'পোস্ট লিংক কপি'}</span>
                </button>
                <a
                  href={template.targetPostSample}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-0.5 text-xs font-medium rounded bg-red-900/40 text-red-300 hover:text-red-200 flex items-center gap-1"
                >
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Additional Info / Description Box */}
        <div className="mb-4">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                {lang === 'en' ? 'Additional Info Script' : 'অতিরিক্ত বিবরণ স্ক্রিপ্ট'}
              </span>
              <span className="text-[11px] text-slate-500">
                ({lang === 'en' ? 'Ready to Paste' : 'সরাসরি পেস্টযোগ্য'})
              </span>
            </div>

            <button
              onClick={() => setShowBengaliMeaning(!showBengaliMeaning)}
              className="text-xs text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors cursor-pointer"
            >
              {showBengaliMeaning 
                ? (lang === 'en' ? 'Show English Official Script' : 'ইংরেজি স্ক্রিপ্ট দেখুন') 
                : (lang === 'en' ? 'Show Bengali Translation' : 'বাংলা অর্থ দেখুন')}
            </button>
          </div>

          {/* If there are multiple script variants, show interactive tab buttons */}
          {hasVariants && (
            <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-lg mb-2.5 overflow-x-auto scrollbar-none border border-slate-800">
              {template.additionalInfoVariants!.map((variant, idx) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariantIndex(idx)}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all whitespace-nowrap cursor-pointer ${
                    selectedVariantIndex === idx
                      ? 'bg-blue-600 text-white font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  {lang === 'en' ? variant.label : variant.labelBn}
                </button>
              ))}
            </div>
          )}

          {/* Script Content */}
          <div className="relative group">
            <pre className="w-full max-h-56 overflow-y-auto p-3.5 text-xs text-slate-200 bg-slate-950 border border-slate-800 rounded-lg whitespace-pre-wrap font-mono leading-relaxed select-text">
              {showBengaliMeaning ? currentScriptTextBn : currentScriptText}
            </pre>

            <div className="absolute top-2 right-2 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
              <button
                onClick={handleCopyScript}
                className="px-3 py-1.5 text-xs font-semibold rounded-md bg-blue-600 hover:bg-blue-500 text-white shadow-md flex items-center gap-1.5 transition-all cursor-pointer"
              >
                {copiedScript ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-white" />
                    <span>{lang === 'en' ? 'Copied Script!' : 'স্ক্রিপ্ট কপি হয়েছে!'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{lang === 'en' ? 'Copy Script' : 'স্ক্রিপ্ট কপি'}</span>
                  </>
                )}
              </button>
            </div>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            {lang === 'en' 
              ? 'Tip: Meta review agents require professional English descriptions. Replace bracketed placeholders before submitting.' 
              : 'পরামর্শ: ফেসবুকের রিভিউ টিম ইংরেজিতে দ্রুত সাড়া দেয়। ব্র্যাকেটে থাকা তথ্যগুলো আপনার আসল তথ্যে রূপান্তর করুন।'}
          </p>
        </div>

        {/* Required Evidence */}
        <div className="mb-4 bg-slate-950/60 p-3 rounded-lg border border-slate-800/80">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 mb-1.5">
            <FileCheck2 className="w-3.5 h-3.5 text-blue-400" />
            <span>{lang === 'en' ? 'Required Evidence / Attachments:' : 'প্রয়োজনীয় প্রমাণপত্র:'}</span>
          </div>
          <ul className="text-xs text-slate-400 space-y-1 pl-4 list-disc marker:text-blue-500">
            {template.requiredEvidence.map((ev, i) => (
              <li key={i}>{ev}</li>
            ))}
          </ul>
        </div>

        {/* Expandable Step-by-Step Instructions */}
        <div className="mb-4">
          <button
            onClick={() => setShowInstructions(!showInstructions)}
            className="flex items-center justify-between w-full text-xs font-medium text-slate-400 hover:text-slate-200 py-1.5 transition-colors cursor-pointer"
          >
            <span>{lang === 'en' ? 'Step-by-step submission instructions' : 'ধাপে ধাপে জমা দেওয়ার নিয়ম'}</span>
            {showInstructions ? (
              <ChevronUp className="w-4 h-4 text-slate-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-slate-400" />
            )}
          </button>

          {showInstructions && (
            <ol className="mt-2 text-xs text-slate-300 space-y-1.5 pl-4 list-decimal marker:text-slate-500 bg-slate-950/70 p-3 rounded-lg border border-slate-800">
              {(lang === 'en' ? template.instructions : template.instructionsBn).map((step, idx) => (
                <li key={idx} className="leading-relaxed">
                  {step}
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onCustomize(template)}
            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-blue-400" />
            <span>{lang === 'en' ? 'Customize Details' : 'তথ্য দিয়ে পূরণ করুন'}</span>
          </button>
        </div>

        <button
          onClick={handleCopyAll}
          className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 flex items-center gap-1.5 transition-colors cursor-pointer"
          title="Copy Link + Full Additional Info bundle"
        >
          {copiedAll ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">{lang === 'en' ? 'Copied Bundle!' : 'সব কপি হয়েছে!'}</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Copy All (Link + Info)' : 'সব একসাথে কপি'}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
