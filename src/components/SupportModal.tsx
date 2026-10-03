import React, { useState, useEffect } from 'react';
import { 
  X, 
  MessageCircle, 
  Send, 
  Mail, 
  ExternalLink, 
  Check, 
  Copy, 
  Settings, 
  ShieldAlert, 
  User, 
  Phone,
  MessageSquare,
  Sparkles
} from 'lucide-react';

export interface AdminContactInfo {
  whatsappNumber: string;
  telegramUsername: string;
  facebookUrl: string;
  email: string;
  noticeText: string;
}

const DEFAULT_CONTACT_INFO: AdminContactInfo = {
  whatsappNumber: '+8801679164271',
  telegramUsername: 'Signalhackers',
  facebookUrl: 'https://facebook.com',
  email: 'naimmaya109@gmail.com',
  noticeText: 'যেকোনো ফেসবুক আইডি রিকভারি, ১৮+ কনটেন্ট রিমুভ, সাইবার বুলিং ও রিপোর্ট সংক্রান্ত সহায়তার জন্য সরাসরি যোগাযোগ করতে পারেন।'
};

const STORAGE_KEY = 'signal_hackers_csb_contacts_v2';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'bn';
  onToast: (msg: string, sub?: string) => void;
}

export const SupportModal: React.FC<SupportModalProps> = ({
  isOpen,
  onClose,
  lang,
  onToast,
}) => {
  const [contactInfo, setContactInfo] = useState<AdminContactInfo>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) return { ...DEFAULT_CONTACT_INFO, ...JSON.parse(stored) };
    } catch (e) {
      console.error('Failed to load contact info', e);
    }
    return DEFAULT_CONTACT_INFO;
  });

  const [isEditingContacts, setIsEditingContacts] = useState(false);
  const [editForm, setEditForm] = useState<AdminContactInfo>(contactInfo);

  // Visitor Quick Message state
  const [visitorName, setVisitorName] = useState('');
  const [visitorContact, setVisitorContact] = useState('');
  const [issueType, setIssueType] = useState('Account Problem');
  const [targetUrl, setTargetUrl] = useState('');
  const [problemDetails, setProblemDetails] = useState('');
  const [copiedMessage, setCopiedMessage] = useState(false);

  useEffect(() => {
    setEditForm(contactInfo);
  }, [contactInfo]);

  if (!isOpen) return null;

  const handleSaveContacts = (e: React.FormEvent) => {
    e.preventDefault();
    setContactInfo(editForm);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(editForm));
    } catch (err) {
      console.error('Failed to save contact info', err);
    }
    setIsEditingContacts(false);
    onToast(
      lang === 'en' ? 'Contact details updated!' : 'যোগাযোগের তথ্য সংরক্ষিত হয়েছে!',
      lang === 'en' ? 'Saved to local storage' : 'আপনার দেওয়া নতুন তথ্য সেভ করা হয়েছে'
    );
  };

  const getCleanWhatsappUrl = (customText?: string) => {
    let clean = contactInfo.whatsappNumber.replace(/[^0-9]/g, '');
    if (clean.startsWith('01') && clean.length === 11) {
      clean = '880' + clean.substring(1);
    } else if (clean.startsWith('1') && clean.length === 10) {
      clean = '880' + clean;
    }
    const query = customText ? `?text=${encodeURIComponent(customText)}` : '';
    return `https://wa.me/${clean}${query}`;
  };

  const getCleanTelegramUrl = () => {
    const raw = contactInfo.telegramUsername.trim();
    if (raw.startsWith('http://') || raw.startsWith('https://')) return raw;
    const cleanHandle = raw.replace(/^@/, '');
    return `https://t.me/${cleanHandle}`;
  };

  const buildFormattedMessage = () => {
    let msg = `🔴 [Signal Hackers CSB - Help Request]\n`;
    msg += `Name: ${visitorName.trim() || 'Visitor'}\n`;
    if (visitorContact.trim()) {
      msg += `Contact: ${visitorContact.trim()}\n`;
    }
    msg += `Issue: ${issueType}\n`;
    if (targetUrl.trim()) {
      msg += `Target URL: ${targetUrl.trim()}\n`;
    }
    if (problemDetails.trim()) {
      msg += `Details: ${problemDetails.trim()}\n`;
    }
    msg += `\nSent via Signal Hackers CSB Portal`;
    return msg;
  };

  const handleCopyFormattedMessage = () => {
    const text = buildFormattedMessage();
    navigator.clipboard.writeText(text);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2000);
    onToast(
      lang === 'en' ? 'Help request copied!' : 'মেসেজটি কপি হয়েছে!',
      lang === 'en' ? 'Ready to paste in chat' : 'যেকোনো চ্যাটে পেস্ট করে পাঠাতে পারেন'
    );
  };

  const handleSendWhatsApp = () => {
    const text = buildFormattedMessage();
    window.open(getCleanWhatsappUrl(text), '_blank');
  };

  const handleSendTelegram = () => {
    handleCopyFormattedMessage();
    window.open(getCleanTelegramUrl(), '_blank');
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`[Help Request] ${issueType} - Signal Hackers CSB`);
    const body = encodeURIComponent(buildFormattedMessage());
    window.open(`mailto:${contactInfo.email}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[92vh] flex flex-col bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl shadow-emerald-950/40 text-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-950/80 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                Signal Hackers CSB Support
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 font-mono">
                  Online
                </span>
              </h3>
              <p className="text-[11px] text-slate-400">
                {lang === 'en' 
                  ? 'Connect directly with the admin for recovery & report assistance' 
                  : 'অ্যাডমিনের সাথে সরাসরি যোগাযোগ ও রিপোর্ট সহায়তার জন্য'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsEditingContacts(!isEditingContacts)}
              className="p-2 text-xs rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Edit Admin Contact Info / যোগাযোগের নম্বর ও লিংক পরিবর্তন"
            >
              <Settings className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-6">

          {/* Admin Customization Form Mode */}
          {isEditingContacts ? (
            <form onSubmit={handleSaveContacts} className="bg-slate-950 border border-emerald-500/40 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Settings className="w-3.5 h-3.5" />
                  {lang === 'en' ? 'Configure Your Contact Channels' : 'আপনার যোগাযোগের তথ্য সেট করুন'}
                </span>
                <span className="text-[11px] text-slate-400 font-mono">Admin Settings</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    WhatsApp Number (with Country Code)
                  </label>
                  <input
                    type="text"
                    value={editForm.whatsappNumber}
                    onChange={(e) => setEditForm({ ...editForm, whatsappNumber: e.target.value })}
                    placeholder="+8801700000000"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Telegram Username / Link
                  </label>
                  <input
                    type="text"
                    value={editForm.telegramUsername}
                    onChange={(e) => setEditForm({ ...editForm, telegramUsername: e.target.value })}
                    placeholder="@signalhackers_csb or t.me/..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Facebook Profile or Page Link
                  </label>
                  <input
                    type="text"
                    value={editForm.facebookUrl}
                    onChange={(e) => setEditForm({ ...editForm, facebookUrl: e.target.value })}
                    placeholder="https://facebook.com/..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Support Email
                  </label>
                  <input
                    type="email"
                    value={editForm.email}
                    onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                    placeholder="admin@example.com"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Custom Notice / স্বাগতম বার্তা
                </label>
                <textarea
                  rows={2}
                  value={editForm.noticeText}
                  onChange={(e) => setEditForm({ ...editForm, noticeText: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditingContacts(false)}
                  className="px-3.5 py-1.5 text-xs rounded-lg bg-slate-800 text-slate-300 hover:text-white"
                >
                  {lang === 'en' ? 'Cancel' : 'বাতিল'}
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 text-xs font-bold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-900"
                >
                  {lang === 'en' ? 'Save Settings' : 'তথ্য সংরক্ষণ করুন'}
                </button>
              </div>
            </form>
          ) : null}

          {/* Quick Notice Banner */}
          <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-200 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <span className="font-bold text-white">Signal Hackers CSB:</span>{' '}
              {contactInfo.noticeText}
            </div>
          </div>

          {/* Direct Contact Buttons Row */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              {lang === 'en' ? 'Direct Contact Options:' : 'সরাসরি যোগাযোগের মাধ্যমসমূহ:'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              
              {/* WhatsApp Button */}
              <a
                href={getCleanWhatsappUrl('Hello Signal Hackers CSB, I need assistance with Facebook report / ID issue.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-600/40 hover:border-emerald-500 text-slate-200 hover:text-white transition-all group shadow-lg shadow-black/20"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-bold block text-white truncate">WhatsApp</span>
                  <span className="text-[11px] text-emerald-300 font-mono truncate block">
                    {contactInfo.whatsappNumber}
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400" />
              </a>

              {/* Telegram Button */}
              <a
                href={getCleanTelegramUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-sky-950/40 border border-sky-600/40 hover:border-sky-500 text-slate-200 hover:text-white transition-all group shadow-lg shadow-black/20"
              >
                <div className="w-9 h-9 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Send className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-bold block text-white truncate">Telegram</span>
                  <span className="text-[11px] text-sky-300 font-mono truncate block">
                    @{contactInfo.telegramUsername.replace(/^@/, '')}
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-400" />
              </a>

              {/* Email / Facebook Button */}
              <a
                href={`mailto:${contactInfo.email}?subject=Signal%20Hackers%20CSB%20Support`}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-blue-950/40 border border-blue-600/40 hover:border-blue-500 text-slate-200 hover:text-white transition-all group shadow-lg shadow-black/20"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-bold block text-white truncate">Direct Email</span>
                  <span className="text-[11px] text-blue-300 font-mono truncate block">
                    {contactInfo.email}
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-400" />
              </a>

            </div>
          </div>

          {/* Quick Help Request Form (Prepare message to send) */}
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                {lang === 'en' ? 'Quick Help Request Generator' : 'সমস্যা জানিয়ে সরাসরি মেসেজ পাঠান'}
              </span>
              <span className="text-[11px] text-slate-400 font-mono">1-Click Dispatch</span>
            </div>

            <p className="text-xs text-slate-400">
              {lang === 'en'
                ? 'Fill in your problem details below and click WhatsApp or Telegram to send it formatted directly to the admin.'
                : 'নিচের বক্সে আপনার সমস্যা ও টার্গেট লিংক লিখুন এবং সরাসরি WhatsApp বা Telegram-এ এক ক্লিকে অ্যাডমিনকে পাঠান।'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  {lang === 'en' ? 'Your Name' : 'আপনার নাম'}
                </label>
                <input
                  type="text"
                  value={visitorName}
                  onChange={(e) => setVisitorName(e.target.value)}
                  placeholder={lang === 'en' ? 'e.g. Rahul' : 'যেমন: রাকিব'}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  {lang === 'en' ? 'Your Contact (Phone/Email - Optional)' : 'যোগাযোগ নম্বর বা ইমেইল (ঐচ্ছিক)'}
                </label>
                <input
                  type="text"
                  value={visitorContact}
                  onChange={(e) => setVisitorContact(e.target.value)}
                  placeholder="+8801... / your@email.com"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  {lang === 'en' ? 'Problem Category' : 'সমস্যার ধরন'}
                </label>
                <select
                  value={issueType}
                  onChange={(e) => setIssueType(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                >
                  <option value="ID Disabled Appeal">আইডি ডিজঅ্যাবল আপিল (ID Disabled Appeal)</option>
                  <option value="Hacked Account Recovery">হ্যাকড আইডি রিকভারি (Hacked Recovery)</option>
                  <option value="Defamation / 18+ Content Removal">মানহানি / ১৮+ কনটেন্ট রিমুভ (Defamation Removal)</option>
                  <option value="Impersonating / Fake Profile">নকল প্রোফাইল বন্ধ (Fake ID Removal)</option>
                  <option value="Copyright & DMCA Issue">কপিরাইট লঙ্ঘন (Copyright Issue)</option>
                  <option value="TikTok Privacy Issue">টিকটক প্রাইভেসি সমস্যা (TikTok Privacy)</option>
                  <option value="Other Urgent Assistance">অন্যান্য জরুরি সহায়তা (Other Urgent)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  {lang === 'en' ? 'Target Profile / Post URL' : 'টার্গেট আইডি বা পোস্টের লিংক'}
                </label>
                <input
                  type="url"
                  value={targetUrl}
                  onChange={(e) => setTargetUrl(e.target.value)}
                  placeholder="https://facebook.com/..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                {lang === 'en' ? 'Short Description of the Issue' : 'সমস্যার সংক্ষিপ্ত বিবরণ'}
              </label>
              <textarea
                rows={2}
                value={problemDetails}
                onChange={(e) => setProblemDetails(e.target.value)}
                placeholder={lang === 'en' ? 'Describe what happened and how we can help...' : 'কী সমস্যা হয়েছে সংক্ষেপে লিখুন...'}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Action Buttons to Send */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2 border-t border-slate-800">
              <button
                type="button"
                onClick={handleCopyFormattedMessage}
                className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copiedMessage ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{lang === 'en' ? 'Copy Message' : 'মেসেজ কপি করুন'}</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleSendTelegram}
                  className="px-4 py-2 text-xs font-bold rounded-lg bg-sky-600 hover:bg-sky-500 text-white flex items-center gap-1.5 shadow-md shadow-sky-950 transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Telegram</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="px-4 py-2 text-xs font-bold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 shadow-md shadow-emerald-950 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Send on WhatsApp' : 'WhatsApp-এ পাঠান'}</span>
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Footer info */}
        <div className="px-5 py-3 border-t border-slate-800 bg-slate-950 text-center text-[11px] text-slate-400 shrink-0">
          <span>Signal Hackers CSB Official Helpdesk · Privacy Protected</span>
        </div>

      </div>
    </div>
  );
};
