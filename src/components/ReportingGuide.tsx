import React from 'react';
import { 
  ShieldCheck, 
  HelpCircle, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  ExternalLink,
  Lock,
  Layers
} from 'lucide-react';

interface ReportingGuideProps {
  lang: 'en' | 'bn';
}

export const ReportingGuide: React.FC<ReportingGuideProps> = ({ lang }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-10 text-center">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
          <ShieldCheck className="w-4 h-4" />
          <span>{lang === 'en' ? 'Meta Trust & Safety Standards' : 'মেটা ট্রাস্ট ও সেফটি নির্দেশিকা'}</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          {lang === 'en' 
            ? 'Professional Facebook Reporting Protocol' 
            : 'ফেসবুকে সঠিকভাবে রিপোর্ট ও আপিল করার নিয়মাবলি'}
        </h2>
        <p className="text-sm text-slate-300 mt-2 max-w-2xl mx-auto">
          {lang === 'en'
            ? 'Learn how Meta review agents evaluate claims and how to construct high-credibility reports that get decisive action.'
            : 'ফেসবুকের মডারেশন টিম কীভাবে রিপোর্ট মূল্যায়ন করে এবং কোন উপায়ে রিপোর্ট করলে অ্যাকাউন্ট বা কনটেন্ট দ্রুত বন্ধ হয় তার বিস্তারিত তথ্য।'}
        </p>
      </div>

      {/* 4 Pillars Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
            <FileText className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white mb-2">
            {lang === 'en' ? '1. Why Professional "Additional Info" Matters' : '১. কেন "Additional Info" এত গুরুত্বপূর্ণ?'}
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            {lang === 'en'
              ? 'When automated moderation algorithms cannot decide on ambiguous claims, tickets get routed to human Review Analysts. Emotion-laden or hostile text causes delays. Fact-based statements detailing the specific Community Standards clause and exact URLs ensure priority processing.'
              : 'ফেসবুকের রোবট যখন কোনো বিষয়ে সিদ্ধান্ত নিতে পারে না, তখন তা সরাসরি হিউম্যান রিভিউয়ারের কাছে পাঠায়। অস্পষ্ট বা গালিগালাজপূর্ণ লেখা রিভিউয়াররা বাতিল করে দেয়। অন্যদিকে শালীন, প্রাতিষ্ঠানিক ও নির্দিষ্ট পলিসি উল্লেখ করা ইংরেজি স্ক্রিপ্ট থাকলে রিভিউয়ার দ্রুত ব্যবস্থা নিতে বাধ্য হয়।'}
          </p>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs text-slate-400">
            <span className="text-blue-400 font-semibold font-mono">Formula:</span> Target URL + Precise Violation Type + Proof Reference + Sworn Statement.
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white mb-2">
            {lang === 'en' ? '2. Government ID Standards' : '২. সরকারি পরিচয়পত্র (NID) সাবমিটের সঠিক নিয়ম'}
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            {lang === 'en'
              ? 'Over 60% of identity appeals fail due to substandard photo submissions. Meta requires unedited, high-contrast, flat scans or photos where all four corners are visible without camera flash glare.'
              : '৬০% এর বেশি আপিল বাতিল হয় ঝাপসা বা কাটাছেঁড়া ছবির কারণে। আসল পাসপোর্ট, জাতীয় পরিচয়পত্র (NID) বা ড্রাইভিং লাইসেন্স সমতল জায়গায় রেখে স্পষ্ট আলোতে তুলুন যাতে কার্ডের চারটি কোণাই স্পষ্ট দেখা যায়। কোনো ফিল্টার ব্যবহার করবেন না।'}
          </p>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs text-slate-400">
            <span className="text-emerald-400 font-semibold">Acceptable:</span> Smart NID, Passport, Driver License. Formats: JPG / PNG (under 10MB).
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 mb-4">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white mb-2">
            {lang === 'en' ? '3. The Myth of "Mass Reporting"' : '৩. ভুয়া "ম্যাস রিপোর্টিং" এর বিভ্রান্তি'}
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            {lang === 'en'
              ? 'A common myth is that having 50 people report an account instantly terminates it. Meta’s fraud filters flag synchronized duplicate reports from unrelated IP addresses as coordinated inauthentic behavior, often muting subsequent reports.'
              : 'অনেকে মনে করেন ৫০-১০০ জন মিলে রিপোর্ট করলেই আইডি বন্ধ হয়ে যাবে—এটি সম্পূর্ণ ভুল। উল্টো ফেসবুক একই সাথে একাধিক রিপোর্টকে স্প্যাম মনে করে এবং স্বয়ংক্রিয়ভাবে ফিল্টার করে দেয়। একজন ভুক্তভোগী সঠিক প্রমাণ ও লিগ্যাল স্ক্রিপ্ট দিয়ে ১ বার রিপোর্ট করলেই আইডি সহজে রিমুভ হয়।'}
          </p>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs text-slate-400">
            <span className="text-amber-400 font-semibold">Rule:</span> 1 official report with solid documentation &gt; 100 spam reports.
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4">
            <Clock className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white mb-2">
            {lang === 'en' ? '4. Tracking Case in Support Inbox' : '৪. সাপোর্ট ইনবক্সে কেস ট্র্যাকিং'}
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            {lang === 'en'
              ? 'Every formal report generates a Case Reference Ticket visible in your Meta Support Dashboard. Monitor responses and provide supplementary documentation directly within the case thread.'
              : 'রিপোর্ট সাবমিট করার পর ফেসবুকের অফিসিয়াল সাপোর্ট ইনবক্সে একটি টিকিট তৈরি হয়। সেখানে গিয়ে দেখতে পারবেন আপনার রিপোর্টের বর্তমান অবস্থা এবং মেটা কোনো অতিরিক্ত ডকুমেন্ট চেয়েছে কিনা।'}
          </p>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
            <span className="font-mono text-blue-400">facebook.com/support</span>
            <a
              href="https://www.facebook.com/support"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-400 hover:underline flex items-center gap-1"
            >
              Open Inbox <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>

      {/* Step by step checklist card */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 md:p-8">
        <h3 className="text-lg font-bold text-white mb-4">
          {lang === 'en' ? 'Execution Checklist Before Submitting' : 'সাবমিট করার আগে করণীয় চেকলিস্ট'}
        </h3>
        
        <div className="space-y-3 text-xs sm:text-sm text-slate-300">
          <div className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-blue-600/20 text-blue-400 font-mono flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">1</span>
            <div>
              <strong className="text-white">{lang === 'en' ? 'Preserve Exact URLs:' : 'নির্দিষ্ট পার্মালিংক সংরক্ষণ করুন:'}</strong>{' '}
              {lang === 'en'
                ? 'Copy the numerical or exact vanity URL (e.g. facebook.com/profile.php?id=...) before the target deletes the evidence.'
                : 'টার্গেট ব্যক্তি পোস্ট মুছে ফেলার আগেই সুনির্দিষ্ট পোস্ট ও প্রোফাইলের পার্মালিংক কপি করে নিন।'}
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-blue-600/20 text-blue-400 font-mono flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">2</span>
            <div>
              <strong className="text-white">{lang === 'en' ? 'Capture Full Screenshots:' : 'সম্পূর্ণ স্ক্রিনশট নিন:'}</strong>{' '}
              {lang === 'en'
                ? 'Take screenshots including browser address bar, desktop clock/timestamp, and abusive material.'
                : 'ব্রাউজারের অ্যাড্রেস বার ও তারিখ-সময় সহ স্পষ্ট স্ক্রিনশট নিন। ক্রপ বা দাগ দেবেন না।'}
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-blue-600/20 text-blue-400 font-mono flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">3</span>
            <div>
              <strong className="text-white">{lang === 'en' ? 'Use the Official Contact Link:' : 'সঠিক অফিসিয়াল লিংক ব্যবহার করুন:'}</strong>{' '}
              {lang === 'en'
                ? 'In-app 3-dot reports have lower priority than direct web contact forms (such as Form 295309487309948).'
                : 'অ্যাপের ভেতরের ৩-ডট রিপোর্টের চেয়ে ব্রাউজার ভিত্তিক অফিসিয়াল কনটাক্ট ফর্ম (যেমন ফর্ম ২৯৫৩০৯৪৮৭৩০৯৯৪৮) অনেক বেশি শক্তিশালী ও দ্রুত কার্যকর হয়।'}
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-blue-600/20 text-blue-400 font-mono flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">4</span>
            <div>
              <strong className="text-white">{lang === 'en' ? 'Allow 24 to 72 Hours:' : '২৪ থেকে ৭২ ঘণ্টা ধৈর্য ধরুন:'}</strong>{' '}
              {lang === 'en'
                ? 'Repeatedly spamming the same form within a few hours creates duplicate tickets that delay human review.'
                : 'একই ফর্মে ঘনঘন রি-সাবমিট করবেন না। এতে টিকিট কিউতে জট তৈরি হয়। অন্তত ২৪-৭২ ঘণ্টা অপেক্ষা করে সাপোর্ট ইনবক্স চেক করুন।'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
