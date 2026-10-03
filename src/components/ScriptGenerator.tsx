import React, { useState, useEffect } from 'react';
import { REPORT_TEMPLATES, ReportTemplate } from '../data/reportData';
import { 
  Sparkles, 
  Copy, 
  Check, 
  ExternalLink, 
  RotateCcw, 
  Bookmark, 
  FileCheck,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

interface ScriptGeneratorProps {
  initialTemplate?: ReportTemplate | null;
  lang: 'en' | 'bn';
  onCopyText: (text: string, title: string, type: 'info' | 'link' | 'all') => void;
  onSaveToVault: (item: { title: string; category: string; url: string; script: string }) => void;
}

export const ScriptGenerator: React.FC<ScriptGeneratorProps> = ({
  initialTemplate,
  lang,
  onCopyText,
  onSaveToVault,
}) => {
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(
    initialTemplate?.id || REPORT_TEMPLATES[0].id
  );
  const [selectedVariantIdx, setSelectedVariantIdx] = useState<number>(0);

  const [reporterName, setReporterName] = useState('');
  const [reporterEmail, setReporterEmail] = useState('');
  const [reporterPhone, setReporterPhone] = useState('');
  const [targetUrl, setTargetUrl] = useState('');
  const [originalUrl, setOriginalUrl] = useState('');
  const [incidentDate, setIncidentDate] = useState('');
  const [customViolationNotes, setCustomViolationNotes] = useState('');
  const [copiedState, setCopiedState] = useState(false);
  const [savedState, setSavedState] = useState(false);

  // Sync if initialTemplate changes from outside
  useEffect(() => {
    if (initialTemplate) {
      setSelectedTemplateId(initialTemplate.id);
      setSelectedVariantIdx(0);
      if (initialTemplate.targetPostSample && !targetUrl) {
        setTargetUrl(initialTemplate.targetPostSample);
      }
    }
  }, [initialTemplate]);

  const activeTemplate = REPORT_TEMPLATES.find((t) => t.id === selectedTemplateId) || REPORT_TEMPLATES[0];

  const hasVariants = activeTemplate.additionalInfoVariants && activeTemplate.additionalInfoVariants.length > 0;
  const currentVariant = hasVariants ? activeTemplate.additionalInfoVariants![selectedVariantIdx] : null;

  // Dynamically replace placeholders with user input or fallback placeholders
  const generatedScript = React.useMemo(() => {
    let script = currentVariant ? currentVariant.text : activeTemplate.additionalInfo;

    const rName = reporterName.trim() || '[YOUR_NAME]';
    const rEmail = reporterEmail.trim() || '[YOUR_EMAIL]';
    const rPhone = reporterPhone.trim() || '[YOUR_PHONE_NUMBER]';
    const tUrl = targetUrl.trim() || '[TARGET_PROFILE_URL]';
    const oUrl = originalUrl.trim() || '[ORIGINAL_PROFILE_URL]';
    const iDate = incidentDate.trim() || new Date().toISOString().split('T')[0];

    // Generic replacements
    script = script.replace(/\[YOUR_NAME\]/g, rName);
    script = script.replace(/\[YOUR_FULL_NAME\]/g, rName);
    script = script.replace(/\[YOUR_LEGAL_NAME\]/g, rName);
    script = script.replace(/\[ACCOUNT_FULL_NAME\]/g, rName);
    script = script.replace(/\[LEGAL_FULL_NAME\]/g, rName);
    
    script = script.replace(/\[YOUR_EMAIL\]/g, rEmail);
    script = script.replace(/\[LOGIN_EMAIL\]/g, rEmail);
    script = script.replace(/\[NEW_RECOVERY_EMAIL\]/g, rEmail);
    script = script.replace(/\[REGISTERED_EMAIL\]/g, rEmail);
    script = script.replace(/\[YOUR_BUSINESS_EMAIL\]/g, rEmail);

    script = script.replace(/\[YOUR_PHONE_NUMBER\]/g, rPhone);
    script = script.replace(/\[LOGIN_PHONE\]/g, rPhone);

    script = script.replace(/\[TARGET_PROFILE_URL\]/g, tUrl);
    script = script.replace(/\[TARGET_PAGE_URL\]/g, tUrl);
    script = script.replace(/\[TARGET_PAGE_OR_GROUP_URL\]/g, tUrl);
    script = script.replace(/\[INFRINGING_POST_URLS\]/g, tUrl);
    script = script.replace(/\[INFRINGING_POST_OR_VIDEO_URL_1\]/g, tUrl);
    script = script.replace(/\[INFRINGING_PAGE_OR_POST_URL\]/g, tUrl);

    script = script.replace(/\[ORIGINAL_PROFILE_URL\]/g, oUrl);
    script = script.replace(/\[ORIGINAL_CONTENT_URL\]/g, oUrl);
    script = script.replace(/\[ORIGINAL_PROFILE_OR_LEGAL_NAME\]/g, rName || oUrl);
    script = script.replace(/\[PROFILE_URL\]/g, oUrl);

    script = script.replace(/\[DATE\]/g, iDate);
    script = script.replace(/\[INCIDENT_DATE\]/g, iDate);
    script = script.replace(/\[BREACH_DATE_TIME\]/g, iDate);
    script = script.replace(/\[CURRENT_DATE_TIME\]/g, `${iDate} (UTC)`);

    if (customViolationNotes.trim()) {
      script += `\n\nSpecific Incident Details & Additional Evidence:\n${customViolationNotes.trim()}`;
    }

    return script;
  }, [
    activeTemplate,
    reporterName,
    reporterEmail,
    reporterPhone,
    targetUrl,
    originalUrl,
    incidentDate,
    customViolationNotes,
  ]);

  const handleCopy = () => {
    onCopyText(generatedScript, activeTemplate.title, 'info');
    setCopiedState(true);
    setTimeout(() => setCopiedState(false), 2000);
  };

  const handleSaveVault = () => {
    onSaveToVault({
      title: `${activeTemplate.title} (${reporterName || 'Custom'})`,
      category: activeTemplate.category,
      url: activeTemplate.url,
      script: generatedScript,
    });
    setSavedState(true);
    setTimeout(() => setSavedState(false), 2500);
  };

  const handleReset = () => {
    setReporterName('');
    setReporterEmail('');
    setReporterPhone('');
    setTargetUrl('');
    setOriginalUrl('');
    setIncidentDate('');
    setCustomViolationNotes('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4" />
          <span>{lang === 'en' ? 'Interactive Form & Script Builder' : 'ইন্টারেক্টিভ স্ক্রিপ্ট জেনারেটর'}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {lang === 'en' ? 'Generate Tailored Report Description' : 'আপনার নির্দিষ্ট তথ্য দিয়ে নিখুঁত স্ক্রিপ্ট তৈরি করুন'}
        </h2>
        <p className="text-sm text-slate-300 mt-1 max-w-3xl">
          {lang === 'en' 
            ? 'Fill in the fields below. MetaReview agents favor well-structured, formal reports with precise target URLs and owner documentation.'
            : 'নিচের ঘরে আপনার নাম, টার্গেট আইডির লিংক এবং প্রমাণ দিন। এটি স্বয়ংক্রিয়ভাবে একটি অফিশিয়াল ফরম্যাটের ইংরেজি বিবরণ তৈরি করে দেবে যা সরাসরি কপি করে মেটা ফর্মে জমা দিতে পারবেন।'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Form: Inputs (5 Cols) */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-xl p-6 shadow-xl space-y-4">
          
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              {lang === 'en' ? '1. Select Violation / Form Type' : '১. সমস্যার ধরন নির্বাচন করুন'}
            </label>
            <select
              value={selectedTemplateId}
              onChange={(e) => {
                setSelectedTemplateId(e.target.value);
                setSelectedVariantIdx(0);
              }}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
            >
              {REPORT_TEMPLATES.map((tmpl) => (
                <option key={tmpl.id} value={tmpl.id} className="bg-slate-950 text-white">
                  {lang === 'en' ? tmpl.title : `${tmpl.titleBn} (${tmpl.category})`}
                </option>
              ))}
            </select>
          </div>

          {/* If the template has multiple script variants */}
          {hasVariants && (
            <div className="pt-1">
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                {lang === 'en' ? 'Select Script Variation:' : 'স্ক্রিপ্ট ভ্যারিয়েন্ট নির্বাচন করুন:'}
              </label>
              <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-lg border border-slate-800 overflow-x-auto scrollbar-none">
                {activeTemplate.additionalInfoVariants!.map((variant, idx) => (
                  <button
                    key={variant.id}
                    type="button"
                    onClick={() => setSelectedVariantIdx(idx)}
                    className={`px-3 py-1 text-xs rounded-md font-medium transition-all whitespace-nowrap cursor-pointer ${
                      selectedVariantIdx === idx
                        ? 'bg-blue-600 text-white font-semibold shadow-sm'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                    }`}
                  >
                    {lang === 'en' ? variant.label : variant.labelBn}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                {lang === 'en' ? 'Your Full Legal Name' : 'আপনার আসল নাম'}
              </label>
              <input
                type="text"
                placeholder="e.g. Naim Maya"
                value={reporterName}
                onChange={(e) => setReporterName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                {lang === 'en' ? 'Your Contact Email' : 'আপনার ইমেইল অ্যাড্রেস'}
              </label>
              <input
                type="email"
                placeholder="e.g. naim@example.com"
                value={reporterEmail}
                onChange={(e) => setReporterEmail(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-medium text-slate-300">
                {lang === 'en' ? 'Offending / Target URL (Post or Profile)' : 'টার্গেট পোস্ট বা অ্যাকাউন্টের লিংক'}
              </label>
              {activeTemplate.targetPostSample && (
                <button
                  type="button"
                  onClick={() => setTargetUrl(activeTemplate.targetPostSample!)}
                  className="text-[11px] text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors cursor-pointer"
                >
                  {lang === 'en' ? 'Load Sample Post' : 'নমুনা পোস্ট লিংক বসান'}
                </button>
              )}
            </div>
            <input
              type="url"
              placeholder="https://www.facebook.com/..."
              value={targetUrl}
              onChange={(e) => setTargetUrl(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              {lang === 'en' ? 'Original Authentic Profile / Content Link' : 'আসল প্রোফাইল বা কনটেন্টের লিংক'}
            </label>
            <input
              type="url"
              placeholder="https://www.facebook.com/original.profile"
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 font-mono"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                {lang === 'en' ? 'Incident Date' : 'ঘটনার তারিখ'}
              </label>
              <input
                type="date"
                value={incidentDate}
                onChange={(e) => setIncidentDate(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                {lang === 'en' ? 'Contact Phone (Optional)' : 'ফোন নম্বর (ঐচ্ছিক)'}
              </label>
              <input
                type="tel"
                placeholder="+8801700000000"
                value={reporterPhone}
                onChange={(e) => setReporterPhone(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 font-mono"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              {lang === 'en' ? 'Additional Notes / Specific Violations' : 'অতিরিক্ত বিবরণ বা সুনির্দিষ্ট পয়েন্ট'}
            </label>
            <textarea
              rows={3}
              placeholder="e.g. Scammer asked mutual friends for money via mobile banking pretending to be me..."
              value={customViolationNotes}
              onChange={(e) => setCustomViolationNotes(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handleReset}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Reset Fields' : 'রিসেট করুন'}</span>
            </button>
            <span className="text-[11px] text-slate-400">
              {lang === 'en' ? 'Auto-updates live preview' : 'লাইভ প্রিভিউ স্বয়ংক্রিয়ভাবে আপডেট হচ্ছে'}
            </span>
          </div>

        </div>

        {/* Right Output: Live Preview & One-click Action (7 Cols) */}
        <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-xl p-6 shadow-xl flex flex-col justify-between">
          <div>
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  {lang === 'en' ? 'Generated Additional Info Script' : 'প্রস্তুতকৃত অতিরিক্ত বিবরণ (Additional Info)'}
                </span>
                <p className="text-xs text-slate-400 mt-0.5">
                  {activeTemplate.formNumber || 'Official Meta Contact Form'}
                </p>
              </div>

              {/* Direct Link button */}
              <div className="flex items-center gap-2">
                {activeTemplate.mobileUrl && (
                  <a
                    href={activeTemplate.mobileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1.5 text-xs font-medium rounded-lg bg-slate-800 text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
                    title="Open Mobile Form (m.facebook.com)"
                  >
                    <span>Mobile</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                <a
                  href={activeTemplate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 flex items-center gap-1.5 transition-colors"
                >
                  <span>{lang === 'en' ? 'Open Official Form' : 'অফিসিয়াল ফর্ম লিংক'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Live Script Pre block */}
            <div className="relative mb-4">
              <pre className="w-full h-80 sm:h-96 overflow-y-auto p-4 text-xs font-mono text-slate-100 bg-slate-950 border border-slate-800 rounded-lg whitespace-pre-wrap leading-relaxed select-all">
                {generatedScript}
              </pre>
            </div>

            {/* Quick Checklist Notice */}
            <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">
                  {lang === 'en' ? 'Next step:' : 'পরবর্তী করণীয়:'}
                </span>{' '}
                {lang === 'en'
                  ? 'Click "Copy Customized Script", open the official form link, paste this text into the "Additional info / Explanation" box, and attach clear ID/screenshots.'
                  : '"কাস্টম স্ক্রিপ্ট কপি করুন" বাটনে চাপুন, এরপর অফিশিয়াল ফর্মে ঢুকে "Additional info" বক্সে এটি পেস্ট করুন এবং প্রমাণ আপলোড করুন।'}
              </div>
            </div>
          </div>

          {/* Action Button Bar */}
          <div className="pt-5 mt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={handleSaveVault}
                className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-2 transition-colors cursor-pointer"
              >
                {savedState ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">{lang === 'en' ? 'Saved to Vault!' : 'ভল্টে সংরক্ষিত!'}</span>
                  </>
                ) : (
                  <>
                    <Bookmark className="w-3.5 h-3.5 text-blue-400" />
                    <span>{lang === 'en' ? 'Save to Personal Vault' : 'ব্যক্তিগত ভল্টে সেভ'}</span>
                  </>
                )}
              </button>
            </div>

            <button
              onClick={handleCopy}
              className="px-5 py-2 text-xs font-bold rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 flex items-center gap-2 transition-all cursor-pointer"
            >
              {copiedState ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>{lang === 'en' ? 'Copied to Clipboard!' : 'ক্লিপবোর্ডে কপি সম্পন্ন!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Copy Customized Script' : 'কাস্টম স্ক্রিপ্ট কপি করুন'}</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
