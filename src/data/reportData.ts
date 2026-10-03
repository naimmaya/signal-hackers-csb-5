export interface ScriptVariant {
  id: string;
  label: string;
  labelBn: string;
  text: string;
  textBn: string;
}

export interface ReportTemplate {
  id: string;
  folderName: string;
  folderNameBn: string;
  category: 'impersonation' | 'security' | 'harassment' | 'copyright' | 'disabled' | 'safety' | 'scams' | 'deceased';
  title: string;
  titleBn: string;
  formNumber?: string;
  reportSection?: string;
  platform?: 'facebook' | 'instagram' | 'telegram' | 'tiktok' | 'meta';
  url: string;
  mainFormUrl?: string;
  mobileUrl?: string;
  instagramUrl?: string;
  emailContact?: string;
  targetPostSample?: string;
  summary: string;
  summaryBn: string;
  urgency: 'critical' | 'high' | 'standard';
  requiredEvidence: string[];
  additionalInfo: string;
  additionalInfoBn: string;
  additionalInfoVariants?: ScriptVariant[];
  instructions: string[];
  instructionsBn: string[];
}

export const CATEGORIES = [
  { id: 'all', label: 'All Links & Scripts', labelBn: 'সবগুলো লিংক ও স্ক্রিপ্ট' },
  { id: 'harassment', label: 'Defamation & Inappropriate Content', labelBn: 'মানহানি ও আপত্তিকর কনটেন্ট' },
  { id: 'impersonation', label: 'Impersonation & Fake', labelBn: 'নকল প্রোফাইল ও ফেক আইডি' },
  { id: 'security', label: 'Hacked & Security', labelBn: 'হ্যাকড ও অ্যাকাউন্ট সিকিউরিটি' },
  { id: 'copyright', label: 'Copyright & DMCA', labelBn: 'কপিরাইট ও মেধা সম্পত্তি' },
  { id: 'disabled', label: 'Disabled & Appeals', labelBn: 'অ্যাকাউন্ট ডিজঅ্যাবল ও আপিল' },
  { id: 'scams', label: 'Scam & Phishing', labelBn: 'প্রতারণা ও ফিশিং পেজ' },
  { id: 'safety', label: 'Child Protection', labelBn: 'শিশু সুরক্ষা ও অপ্রাপ্তবয়স্ক' },
  { id: 'deceased', label: 'Memorial & Removal', labelBn: 'মৃত ব্যক্তি ও মেমোরিয়ালাইজ' },
] as const;

export const REPORT_TEMPLATES: ReportTemplate[] = [
  {
    id: 'defamation-inappropriate-content',
    folderName: 'Deformation Report Facebook',
    folderNameBn: 'Deformation Report Facebook (মানহানি ও আপত্তিকর কনটেন্ট)',
    category: 'harassment',
    title: 'Deformation Report Facebook (Contact Form 430253071144967)',
    titleBn: 'ফেসবুক মানহানি ও ১৮+ আপত্তিকর কনটেন্ট রিপোর্ট',
    formNumber: 'Contact Form 430253071144967',
    url: 'https://www.facebook.com/help/contact/430253071144967',
    mobileUrl: 'https://m.facebook.com/help/contact/430253071144967',
    targetPostSample: 'https://www.facebook.com/100044294760903/posts/1599226344897176/?app=fbl',
    summary: 'Direct Meta legal & content form to report defamation, obscene posts, nudity, and adult-oriented sexually explicit material.',
    summaryBn: 'ফেসবুকে মানহানিকর, ১৮+ নগ্নতা বা আপত্তিকর কনটেন্ট স্থায়ীভাবে মুছে ফেলার মেটা অফিসিয়াল রিপোর্ট ফর্ম। ৩টি কার্যকর স্ক্রিপ্ট অন্তর্ভুক্ত।',
    urgency: 'critical',
    requiredEvidence: [
      'Direct Target Post Link (Permalink)',
      'Specific violation category (Nudity / Sexual Content / Defamation)',
      'Clear screenshots preserving post ID and timestamp'
    ],
    additionalInfo: `Dear Facebook Content Review Team,

I am submitting this request regarding the reported post because it appears to contain sexually explicit and adult-oriented visual content that may be inappropriate for Facebook users and may violate Meta’s Community Standards on nudity and sexual content.

The material is not appropriate for a general social media environment and could negatively affect users who encounter it, including younger audiences. I respectfully request that your review team examine the post and determine whether it violates Facebook’s policies.

If the content is found to be in violation, please remove the post or apply the appropriate enforcement action according to your policies.

Thank you for your time and consideration.`,
    additionalInfoBn: `প্রিয় ফেসবুক কনটেন্ট রিভিউ টিম,
আমি উক্ত রিপোর্টেড পোস্টটির ব্যাপারে আবেদন জানাচ্ছি কারণ এটি মেটার নগ্নতা ও যৌন কনটেন্ট বিষয়ক কমিউনিটি স্ট্যান্ডার্ড সুস্পষ্টভাবে লঙ্ঘন করে। সাধারণ সামাজিক মাধ্যমে এমন কনটেন্ট অপ্রীতিকর এবং তরুণ ও অপ্রাপ্তবয়স্ক ব্যবহারকারীদের জন্য ক্ষতিকর। পোস্টটি পর্যালোচনা করে অবিলম্বে অপসারণ করার বিনীত অনুরোধ জানাচ্ছি। ধন্যবাদ।`,
    additionalInfoVariants: [
      {
        id: 'variant-1',
        label: '1st Script (Standard Comprehensive Review)',
        labelBn: '১ম স্ক্রিপ্ট (স্ট্যান্ডার্ড পর্যালোচনা)',
        text: `Dear Facebook Content Review Team,

I am submitting this request regarding the reported post because it appears to contain sexually explicit and adult-oriented visual content that may be inappropriate for Facebook users and may violate Meta’s Community Standards on nudity and sexual content.

The material is not appropriate for a general social media environment and could negatively affect users who encounter it, including younger audiences. I respectfully request that your review team examine the post and determine whether it violates Facebook’s policies.

If the content is found to be in violation, please remove the post or apply the appropriate enforcement action according to your policies.

Thank you for your time and consideration.`,
        textBn: `প্রিয় ফেসবুক কনটেন্ট রিভিউ টিম,
আমি উক্ত রিপোর্টেড পোস্টটির ব্যাপারে আবেদন জানাচ্ছি কারণ এটি মেটার নগ্নতা ও যৌন কনটেন্ট বিষয়ক কমিউনিটি স্ট্যান্ডার্ড সুস্পষ্টভাবে লঙ্ঘন করে। সাধারণ সামাজিক মাধ্যমে এমন কনটেন্ট অপ্রীতিকর এবং তরুণ ও অপ্রাপ্তবয়স্ক ব্যবহারকারীদের জন্য ক্ষতিকর। পোস্টটি পর্যালোচনা করে অবিলম্বে অপসারণ করার বিনীত অনুরোধ জানাচ্ছি। ধন্যবাদ।`
      },
      {
        id: 'variant-2',
        label: '2nd Script (Urgent 18+ Removal Appeal)',
        labelBn: '২য় স্ক্রিপ্ট (জরুরি ১৮+ অপসারণ দাবি)',
        text: `Dear Facebook Team,

I respectfully request an urgent review of this post. The reported content appears to contain inappropriate 18+ / sexually explicit imagery that is not suitable for Facebook’s general audience and may violate Meta’s policies on nudity and sexual content.

The post is publicly accessible and exposes users to inappropriate adult-oriented material. I believe this content should not remain available if it violates Facebook’s Community Standards.

Please investigate the post and take the appropriate enforcement action, including removal of the content if it is confirmed to violate Facebook’s policies.

Thank you for your attention and prompt review.`,
        textBn: `প্রিয় ফেসবুক টিম,
আমি এই পোস্টটির একটি জরুরি পর্যালোচনার বিনীত অনুরোধ করছি। পোস্টটিতে ১৮+ আপত্তিকর নগ্নতা ও অনুপযুক্ত উপাদান রয়েছে যা সাধারণ ব্যবহারকারীদের সামনে উন্মুক্ত। যদি এটি ফেসবুকের পলিসি ভঙ্গ করে তবে কোনোভাবেই এটি থাকা উচিত নয়। অবিলম্বে তদন্ত করে এই কনটেন্ট অপসারণের অনুরোধ জানাচ্ছি।`
      },
      {
        id: 'variant-3',
        label: '3rd Script (Community & Child Protection)',
        labelBn: '৩য় স্ক্রিপ্ট (শিশু ও কমিউনিটি সুরক্ষা ফোকাস)',
        text: `Hello Facebook Review Team,

I am requesting a review of this post because it appears to contain sexually explicit/adult-oriented imagery that may violate Facebook’s Community Standards regarding nudity and sexual content.

The content is inappropriate for general audiences and may be particularly harmful or disturbing when viewed by younger users. I believe this post should be reviewed under Facebook’s policies concerning adult sexual content and explicit imagery.

Please review the reported post carefully and, if it is found to violate your policies, take appropriate action to remove or restrict the content.

Thank you for reviewing my report`,
        textBn: `হ্যালো ফেসবুক রিভিউ টিম,
আমি এই পোস্টটি রিভিউ করার অনুরোধ জানাচ্ছি কারণ এতে ফেসবুকের নগ্নতা বিষয়ক নিয়ম লঙ্ঘনকারী প্রাপ্তবয়স্ক কনটেন্ট রয়েছে। বিশেষ করে তরুণ ও অল্পবয়সী ব্যবহারকারীদের জন্য এটি অত্যন্ত ক্ষতিকর। দয়া করে নীতিমালার আলোকে দ্রুত এটি রিমুভ অথবা সীমাবদ্ধ করুন। ধন্যবাদ।`
      }
    ],
    instructions: [
      'Open the official Meta contact form (Desktop or Mobile link above).',
      'Select the exact legal or content rights category on Form 430253071144967.',
      'Paste the exact target post URL into the Web Address (URL) field.',
      'Select your preferred script (1st, 2nd, or 3rd variant) and paste into the Additional Details / Description box.',
      'Submit the report and save the tracking case number.'
    ],
    instructionsBn: [
      'উপরের মেটা অফিসিয়াল ফর্ম লিংক (ডেস্কটপ অথবা মোবাইল লিংক) ওপেন করুন।',
      'ফর্ম ৪৩০২৫৩০৭১১৪৪৯৬৭ এ সঠিক ক্যাটাগরি সিলেক্ট করুন।',
      'টার্গেট পোস্টের নির্দিষ্ট পার্মালিংকটি ওয়েব অ্যাড্রেস (URL) বক্সে পেস্ট করুন।',
      'পছন্দসই স্ক্রিপ্ট (১ম, ২য় বা ৩য় ভ্যারিয়েন্ট) বেছে নিয়ে কপি করে অতিরিক্ত বিবরণ বক্সে পেস্ট করুন।',
      'ফর্মটি জমা দিয়ে রেফারেন্স ট্র্যাকিং নম্বরটি সংরক্ষণ করুন।'
    ]
  },
  {
    id: 'legal-removed-request',
    folderName: 'Legal Removed Request',
    folderNameBn: 'Legal Removed Request (লিগ্যাল রিমুভড রিকোয়েস্ট)',
    category: 'harassment',
    title: 'Legal Removed Request (Facebook & Instagram Form)',
    titleBn: 'লিগ্যাল রিমুভড রিকোয়েস্ট (ফেসবুক ও ইনস্টাগ্রাম ফর্ম)',
    formNumber: 'Contact Form 319149701968527 & 406206379945942',
    url: 'https://www.facebook.com/help/contact/319149701968527',
    instagramUrl: 'https://help.instagram.com/contact/406206379945942',
    summary: 'Official Meta Legal Removal request form for Facebook and Instagram to report sexually explicit memes, defamatory attacks, and cyberbullying.',
    summaryBn: 'ফেসবুক ও ইনস্টাগ্রামে যৌন উত্তেজক মিম, মানহানিকর পোস্ট ও সাইবার বুলিং কনটেন্ট দ্রুত অপসারণের অফিশিয়াল লিগ্যাল রিকোয়েস্ট ফর্ম।',
    urgency: 'critical',
    requiredEvidence: [
      'Direct Post / Account URL on Facebook or Instagram',
      'Screenshots of defamatory trolling or sexually explicit memes',
      'Confirmation of reporting for yourself or victim'
    ],
    additionalInfo: `Hello,
This user is regularly uploading sexually explicit memes (Sexual Act 33+) on their account. These posts are leading to bullying and harassment of both boys and girls. This content clearly violates Facebook's Community Guidelines. I kindly request that you review this material and take appropriate action to remove the post(s).

Who are you reporting for?
I am reporting on behalf of myself.

Thank you for your attention to this matter`,
    additionalInfoBn: `হ্যালো,
এই অ্যাকাউন্ট থেকে নিয়মিত যৌন উত্তেজক ও কুরুচিপূর্ণ মিম (Sexual Act 33+) পোস্ট করা হচ্ছে। এর ফলে তরুণ-তরুণীরা সাইবার বুলিং ও হয়রানির শিকার হচ্ছে। এই কনটেন্টটি ফেসবুকের কমিউনিটি গাইডলাইনের সরাসরি লঙ্ঘন। অনুরোধ করছি এই উপাদানগুলো দ্রুত পর্যালোচনা করে পোস্টটি মুছে দিন।
আমি নিজের পক্ষে রিপোর্ট করছি। ধন্যবাদ।`,
    additionalInfoVariants: [
      {
        id: 'variant-1',
        label: '1st Additional (Explicit Memes & Bullying)',
        labelBn: '১ম অতিরিক্ত বিবরণ (যৌন উত্তেজক মিম ও হয়রানি)',
        text: `Hello,
This user is regularly uploading sexually explicit memes (Sexual Act 33+) on their account. These posts are leading to bullying and harassment of both boys and girls. This content clearly violates Facebook's Community Guidelines. I kindly request that you review this material and take appropriate action to remove the post(s).

Who are you reporting for?
I am reporting on behalf of myself.

Thank you for your attention to this matter`,
        textBn: `হ্যালো,
এই অ্যাকাউন্ট থেকে নিয়মিত যৌন উত্তেজক ও কুরুচিপূর্ণ মিম (Sexual Act 33+) পোস্ট করা হচ্ছে। এর ফলে তরুণ-তরুণীরা সাইবার বুলিং ও হয়রানির শিকার হচ্ছে। এই কনটেন্টটি ফেসবুকের কমিউনিটি গাইডলাইনের সরাসরি লঙ্ঘন। অনুরোধ করছি এই উপাদানগুলো দ্রুত পর্যালোচনা করে পোস্টটি মুছে দিন।
আমি নিজের পক্ষে রিপোর্ট করছি। ধন্যবাদ।`
      },
      {
        id: 'variant-2',
        label: '2nd Additional (Defamation & Trolling Victim)',
        labelBn: '২য় অতিরিক্ত বিবরণ (মানহানি ও ট্রোলিং)',
        text: `I am reporting a post that contains offensive and defamatory content targeting a specific person. The individual has deactivated their Facebook account due to mental stress, and the person behind the post is now trolling them using their old photos and information.

This is clear cyberbullying and violates Facebook’s Community Standards. Please take action and remove the post.

Thank you.`,
        textBn: `আমি এমন একটি পোস্টের বিরুদ্ধে রিপোর্ট করছি যাতে একজন নির্দিষ্ট ব্যক্তিকে টার্গেট করে মানহানিকর ও আক্রমণাত্মক বক্তব্য দেওয়া হয়েছে। মানসিক কষ্টের কারণে ভুক্তভোগী তার ফেসবুক আইডি বন্ধ করে দিয়েছেন, আর এখন অপরাধী তার পুরোনো ছবি ও তথ্য নিয়ে ট্রোল করছে। এটি স্পষ্ট সাইবার বুলিং। দয়া করে পোস্টটি দ্রুত রিমুভ করুন। ধন্যবাদ।`
      }
    ],
    instructions: [
      'Choose whether reporting on Facebook (Form 319149701968527) or Instagram (Form 406206379945942).',
      'Provide the direct URL of the infringing post or meme.',
      'Under "Who are you reporting for?", select "Myself" or specify the victim.',
      'Select the 1st or 2nd Additional script above and copy-paste it into the description box.',
      'Submit the form and record your Meta Case ID.'
    ],
    instructionsBn: [
      'ফেসবুকের জন্য উপরের ফেসবুক লিংক অথবা ইনস্টাগ্রামের জন্য ইনস্টাগ্রাম লিংকে ক্লিক করুন।',
      'আপত্তিকর পোস্ট বা ট্রোলের সরাসরি পার্মালিংকটি দিন।',
      '"Who are you reporting for?" এ "Myself" সিলেক্ট করুন।',
      '১ম অথবা ২য় অতিরিক্ত স্ক্রিপ্ট কপি করে ফর্মে পেস্ট করুন এবং সাবমিট করুন।'
    ]
  },
  {
    id: 'indian-grievance-officer-report',
    folderName: 'Indian Grievance Officer Report',
    folderNameBn: 'Indian Grievance Officer Report (মেটা গ্রিভেন্স অফিসার)',
    category: 'harassment',
    title: 'Indian Grievance Officer Report Form',
    titleBn: 'মেটা ইন্ডিয়া গ্রিভেন্স অফিসার রিপোর্ট ফর্ম',
    formNumber: 'Meta Grievance Request 1371776380779082',
    url: 'https://help.meta.com/requests/1371776380779082/',
    summary: 'Official statutory Grievance Officer appeal portal for Meta Platforms under India IT Rules to report inappropriate adult material, spam, and severe policy violations.',
    summaryBn: 'মেটা ইন্ডিয়া গ্রিভেন্স অফিসারের নিকট সরাসরি আইটি রুলস অনুযায়ী ১৮+ কনটেন্ট, যৌন আবেদনময়ী ছবি ও স্প্যামের বিরুদ্ধে আইনি রিপোর্ট করার পোর্টাল।',
    urgency: 'critical',
    requiredEvidence: [
      'Target Profile / Post URL',
      'Description of violating adult content / spam',
      'Contact Email address'
    ],
    additionalInfo: `Dear Facebook Team,
I am reporting this account for operating specifically to share inappropriate adult material and spam. This behavior severely violates platform safety guidelines and degrades the user experience. I request a prompt review and permanent removal of this profile to ensure platform integrity.`,
    additionalInfoBn: `প্রিয় ফেসবুক টিম,
আমি এই অ্যাকাউন্টটির বিরুদ্ধে অভিযোগ জানাচ্ছি কারণ এটি উদ্দেশ্যপ্রণোদিতভাবে অনুপযুক্ত প্রাপ্তবয়স্ক কনটেন্ট ও স্প্যাম ছড়ানোর কাজে ব্যবহৃত হচ্ছে। এটি প্ল্যাটফর্মের নিরাপত্তা নির্দেশিকা সরাসরি লঙ্ঘন করে। প্ল্যাটফর্মের নিরাপত্তা বজায় রাখতে এই প্রোফাইলটি দ্রুত রিভিউ করে স্থায়ীভাবে অপসারণ করার বিনীত অনুরোধ করছি।`,
    additionalInfoVariants: [
      {
        id: 'variant-1',
        label: '1. Inappropriate Adult Material & Spam',
        labelBn: '১. প্রাপ্তবয়স্ক কনটেন্ট ও স্প্যাম রিমুভ',
        text: `Dear Facebook Team,
I am reporting this account for operating specifically to share inappropriate adult material and spam. This behavior severely violates platform safety guidelines and degrades the user experience. I request a prompt review and permanent removal of this profile to ensure platform integrity.`,
        textBn: `প্রিয় ফেসবুক টিম,
আমি এই অ্যাকাউন্টটির বিরুদ্ধে অভিযোগ জানাচ্ছি কারণ এটি উদ্দেশ্যপ্রণোদিতভাবে অনুপযুক্ত প্রাপ্তবয়স্ক কনটেন্ট ও স্প্যাম ছড়ানোর কাজে ব্যবহৃত হচ্ছে। এটি প্ল্যাটফর্মের নিরাপত্তা নির্দেশিকা সরাসরি লঙ্ঘন করে। প্ল্যাটফর্মের নিরাপত্তা বজায় রাখতে এই প্রোফাইলটি দ্রুত রিভিউ করে স্থায়ীভাবে অপসারণ করার বিনীত অনুরোধ করছি।`
      },
      {
        id: 'variant-2',
        label: '2. Explicit 18+ & Sexual Activity',
        labelBn: '২. ১৮+ নগ্নতা ও যৌন আবেদনময়ী কনটেন্ট',
        text: `Hello Facebook Support Team,
This profile is actively distributing explicit 18+ and sexually suggestive content, directly violating Facebook's Community Standards regarding Nudity and Sexual Activity. Such accounts create an unsafe environment for the community. Please investigate and disable this account immediately.`,
        textBn: `হ্যালো ফেসবুক সাপোর্ট টিম,
এই প্রোফাইলটি সক্রিয়ভাবে ১৮+ ও যৌন আবেদনময়ী নগ্ন কনটেন্ট প্রচার করছে, যা ফেসবুকের নগ্নতা বিষয়ক কমিউনিটি স্ট্যান্ডার্ড সরাসরি অমান্য করে। এমন অ্যাকাউন্ট পুরো কমিউনিটির জন্য অনিরাপদ পরিবেশ তৈরি করে। অবিলম্বে তদন্ত সাপেক্ষে অ্যাকাউন্টটি ডিসঅ্যাবল করার দাবি জানাচ্ছি।`
      }
    ],
    instructions: [
      'Open the official Meta India Grievance Officer link above.',
      'Enter your contact information and target profile/content URL.',
      'Select script 1 or script 2 from the Additional tabs above.',
      'Paste the text into the explanation/grievance box and submit.',
      'Save the Grievance Reference Ticket number dispatched to your email.'
    ],
    instructionsBn: [
      'উপরের মেটা ইন্ডিয়া গ্রিভেন্স অফিসার লিংকটিতে প্রবেশ করুন।',
      'আপনার যোগাযোগের ইমেইল এবং অপরাধী অ্যাকাউন্টের লিংক দিন।',
      'উপরে থাকা ১ম অথবা ২য় অতিরিক্ত স্ক্রিপ্ট কপি করে গ্রিভেন্স বক্সে পেস্ট করুন।',
      'ফর্ম জমা দিয়ে ইমেইলে আসা রেফারেন্স টিকিট নম্বরটি সংরক্ষণ করুন।'
    ]
  },
  {
    id: 'telegram-18plus-channel-report',
    folderName: 'Telegram 18+ Channel Report',
    folderNameBn: 'Telegram 18+ Channel Report (টেলিগ্রাম ১৮+ চ্যানেল রিপোর্ট)',
    category: 'safety',
    title: 'Telegram 18+ Channel Report (Illegal Adult Content)',
    titleBn: 'টেলিগ্রাম ১৮+ চ্যানেল রিপোর্ট ও অতিরিক্ত বিবরণ',
    formNumber: 'Report Section: Illegal Adult Content (Other Illegal Sexual Content)',
    reportSection: 'illegal Adult Content ( Other illegal Sexual Content )',
    platform: 'telegram',
    emailContact: 'abuse@telegram.org',
    url: 'https://telegram.org/support',
    summary: 'Report Section: Illegal Adult Content (Other illegal Sexual Content). Official script and procedure to report and terminate Telegram channels distributing leaked pornography, non-consensual videos, and illicit media.',
    summaryBn: 'রিপোর্ট সেকশন: illegal Adult Content (Other illegal Sexual Content)। টেলিগ্রাম চ্যানেলে অনুমতিহীন নগ্ন ছবি, ফাঁসকৃত ভিডিও ও ১৮+ আপত্তিকর কনটেন্ট স্থায়ীভাবে বন্ধ করার অফিশিয়াল স্ক্রিপ্ট ও প্রটোকল।',
    urgency: 'critical',
    requiredEvidence: [
      'Direct Telegram Channel Link (t.me/...)',
      'Specific Message/Video post links or screenshots',
      'Category Selection: Illegal Adult Content -> Other Illegal Sexual Content'
    ],
    additionalInfo: `This Telegram channel is repeatedly and deliberately distributing illegal pornographic material, including non-consensually leaked videos, sexually explicit images of women, and possible child sexual exploitation content. The material includes instances of ‘revenge porn’, secretly recorded acts without consent, and other forms of sexual abuse — all of which are serious criminal offenses under international cybercrime and privacy protection laws.`,
    additionalInfoBn: `এই টেলিগ্রাম চ্যানেলটিতে নিয়মবহির্ভূতভাবে এবং ইচ্ছাকৃতভাবে অবৈধ পর্নোগ্রাফিক উপাদান, গোপনে ধারণকৃত ও অনুমতি ছাড়া ফাঁস করা ভিডিও, নারীদের ব্যক্তিগত ছবি এবং যৌন নিপীড়নমূলক কনটেন্ট প্রচার করা হচ্ছে। এতে 'রিভেঞ্জ পর্ন' এবং সম্মতিহীন গোপন রেকর্ডিংয়ের প্রমাণ রয়েছে—যা আন্তর্জাতিক সাইবার ক্রাইম ও ব্যক্তিগত গোপনীয়তা সুরক্ষা আইনের অধীনে গুরুতর ফৌজদারি অপরাধ।`,
    additionalInfoVariants: [
      {
        id: 'variant-1',
        label: 'Illegal Adult Content (Requested Script)',
        labelBn: '১. রিকোয়েস্টেড স্ক্রিপ্ট (Illegal Adult Content)',
        text: `This Telegram channel is repeatedly and deliberately distributing illegal pornographic material, including non-consensually leaked videos, sexually explicit images of women, and possible child sexual exploitation content. The material includes instances of ‘revenge porn’, secretly recorded acts without consent, and other forms of sexual abuse — all of which are serious criminal offenses under international cybercrime and privacy protection laws.`,
        textBn: `এই টেলিগ্রাম চ্যানেলটিতে নিয়মবহির্ভূতভাবে এবং ইচ্ছাকৃতভাবে অবৈধ পর্নোগ্রাফিক উপাদান, গোপনে ধারণকৃত ও অনুমতি ছাড়া ফাঁস করা ভিডিও, নারীদের ব্যক্তিগত ছবি এবং যৌন নিপীড়নমূলক কনটেন্ট প্রচার করা হচ্ছে। এতে 'রিভেঞ্জ পর্ন' এবং সম্মতিহীন গোপন রেকর্ডিংয়ের প্রমাণ রয়েছে—যা আন্তর্জাতিক সাইবার ক্রাইম ও ব্যক্তিগত গোপনীয়তা সুরক্ষা আইনের অধীনে গুরুতর ফৌজদারি অপরাধ।`
      },
      {
        id: 'variant-2',
        label: 'Urgent Channel Takedown & Ban',
        labelBn: '২. জরুরি চ্যানেল ব্যান ও ডিলিট স্ক্রিপ্ট',
        text: `URGENT NOTICE TO TELEGRAM MODERATION & ABUSE TEAM:
Report Section: Illegal Adult Content (Other Illegal Sexual Content)
Target Channel: [TARGET_TELEGRAM_CHANNEL_URL]

The reported Telegram channel is systematically disseminating non-consensual intimate imagery, leaked adult videos, and non-consensual sexual harassment material. This directly violates Telegram Terms of Service and global cybercrime protections.

I demand:
1. Immediate blocking and permanent termination of this channel.
2. Deletion of all hosted media hashes across Telegram servers.
3. Ban of administrator accounts and registered phone numbers associated with this operation.

Thank you for prompt enforcement.`,
        textBn: `টেলিগ্রাম মডারেশন ও অ্যাবিউজ টিমের প্রতি জরুরি নোটিশ:
রিপোর্ট সেকশন: Illegal Adult Content (Other Illegal Sexual Content)। উক্ত চ্যানেলটি সম্মতিহীন ব্যক্তিগত ভিডিও ও বেআইনি যৌন কনটেন্ট প্রচার করে টেলিগ্রামের শর্তাবলি মারাত্মকভাবে লঙ্ঘন করছে। অবিলম্বে চ্যানেলটি স্থায়ীভাবে ব্লক ও মুছে ফেলার অনুরোধ জানাচ্ছি।`
      }
    ],
    instructions: [
      'Open the offending Telegram Channel in your Telegram App.',
      'Tap the 3 dots (top right corner) -> Tap "Report".',
      'Select: "Illegal Adult Content" -> "Other Illegal Sexual Content".',
      'Paste the Additional text above into the details box and confirm.',
      'For severe cases, forward evidence and channel link directly to abuse@telegram.org and stopCA@telegram.org.'
    ],
    instructionsBn: [
      'টেলিগ্রাম অ্যাপে আপত্তিকর চ্যানেলটিতে প্রবেশ করুন।',
      'উপরে ডানদিকের ৩টি ডট আইকনে ট্যাপ করে "Report" সিলেক্ট করুন।',
      '"Illegal Adult Content" এরপর "Other Illegal Sexual Content" বেছে নিন।',
      'উপরের Additional টেক্সটটি কপি করে বক্সে পেস্ট করে রিপোর্ট কনফার্ম করুন।',
      'অতিরিক্ত নিশ্চিতকরণের জন্য abuse@telegram.org ঠিকানায় ইমেইল পাঠাতে পারেন।'
    ]
  },
  {
    id: 'meta-copyright-update',
    folderName: '🔰 Copyright Update 🔰',
    folderNameBn: '🔰 Copyright Update (কপিরাইট আপডেট) 🔰',
    category: 'copyright',
    title: 'Meta Copyright Update Form (Instagram & Facebook IP Claim)',
    titleBn: 'মেটা কপিরাইট আপডেট ও ইনস্টাগ্রাম/ফেসবুক আইপি ক্লেইম ফর্ম',
    formNumber: 'Meta Request 1523801815366035',
    url: 'https://help.meta.com/requests/1523801815366035?claim_type=IP_COPYRIGHT&platform_copyright=INSTAGRAM_CORE',
    mainFormUrl: 'https://help.meta.com/requests/1523801815366035/',
    platform: 'meta',
    summary: 'Official Meta Intellectual Property & Copyright Claim Form with direct parameters for Instagram Core & Facebook original content rights.',
    summaryBn: 'ইনস্টাগ্রাম ও ফেসবুকে নিজস্ব অরিজিনাল ভিডিও, ছবি ও পোস্টের মেধাস্বত্ব সুরক্ষায় মেটা কপিরাইট ক্লেইমের মেইন ও স্পেসিফিক ফর্ম লিংক।',
    urgency: 'high',
    requiredEvidence: [
      'Original work links (Your original Facebook profile/video)',
      'Infringing content URL',
      'Proof of ownership or statement of rights'
    ],
    additionalInfo: `This link contains my original Facebook profile content, including original videos and posts created and published by me. I am the rightful owner of this content, and it is protected by copyright.`,
    additionalInfoBn: `উক্ত লিংকে আমার ফেসবুক প্রোফাইলের নিজস্ব তৈরিকৃত কনটেন্ট রয়েছে, যার মধ্যে আমার তৈরি ও প্রকাশিত আসল ভিডিও ও পোস্ট অন্তর্ভুক্ত। আমি এই কনটেন্টের প্রকৃত স্বত্বাধিকারী এবং এটি কপিরাইট আইন দ্বারা সুরক্ষিত।`,
    instructions: [
      'Open the specific Meta Copyright form link or main form link above.',
      'Under intellectual property selection, choose Copyright infringement.',
      'Paste your original content link and the infringing post/reel link.',
      'Copy the Additional statement above and paste it into the ownership/description section.',
      'Provide your legal contact name and electronic signature, then submit.'
    ],
    instructionsBn: [
      'উপরের মেটা কপিরাইট ক্লেইম ফর্ম অথবা মেইন ফর্ম লিংকে প্রবেশ করুন।',
      'আইপি সিলেকশনে Copyright infringement বেছে নিন।',
      'আপনার আসল পোস্ট এবং অভিযুক্ত পোস্টের লিংক বসান।',
      'উপরের Additional বক্তব্যটি কপি করে ডেসক্রিপশন বক্সে পেস্ট করুন।',
      'আপনার নাম দিয়ে ডিজিটাল সিগনেচার সম্পন্ন করে সাবমিট করুন।'
    ]
  },
  {
    id: 'tiktok-privacy-violation',
    folderName: 'Tiktok Privacy Violence Report ✅',
    folderNameBn: 'Tiktok Privacy Violence Report (টিকটক প্রাইভেসি রিপোর্ট) ✅',
    category: 'harassment',
    title: 'TikTok Privacy Violation Webform (Unauthorized Clip & Harassment)',
    titleBn: 'টিকটক প্রাইভেসি ভায়োলেশন রিপোর্ট ওয়েবফর্ম',
    formNumber: 'TikTok Webform: /legal/report/privacy',
    url: 'https://www.tiktok.com/legal/report/privacy/webform/en',
    platform: 'tiktok',
    summary: 'Official TikTok Legal & Privacy webform to report stolen personal video clips, harassment, threats, and non-consensual media distribution.',
    summaryBn: 'অনুমতি ছাড়া ব্যক্তিগত ভিডিও ক্লিপ ব্যবহার, হুমকি ও সাইবার বুলিংয়ের বিরুদ্ধে টিকটকে আইনি প্রাইভেসি রিপোর্ট করার অফিসিয়াল ওয়েবফর্ম।',
    urgency: 'critical',
    requiredEvidence: [
      'TikTok infringing video URL',
      'Your original video proof or identity confirmation',
      'Statement of lack of consent & harassment'
    ],
    additionalInfo: `Hello Sir,
I am [Your Name], a user of your site. This person copied my clip from my personal video and used it without my permission. I've contacted him, but he treats me badly and threatens me. Me and my family are feeling insecure and suffering from it. Please understand my situation and remove this video as soon as possible. Sir, I hope you will solve this problem and help me, 
Thanks.`,
    additionalInfoBn: `হ্যালো স্যার,
আমি আপনার ওয়েবসাইটের একজন ব্যবহারকারী। এই ব্যক্তি আমার ব্যক্তিগত ভিডিও থেকে অনুমতি ছাড়া ক্লিপ নিয়ে ব্যবহার করেছে। আমি তার সাথে যোগাযোগ করলেও সে দুর্ব্যবহার এবং হুমকি দিয়েছে। এতে আমি ও আমার পরিবার নিরাপত্তাহীনতায় ভুগছি। দয়া করে পরিস্থিতি বিবেচনা করে অতি দ্রুত এই ভিডিওটি মুছে দিন। আশা করি আপনি এই সমস্যার সমাধান করবেন এবং আমাকে সহায়তা করবেন। ধন্যবাদ।`,
    instructions: [
      'Open the official TikTok Privacy Webform link above.',
      'Select: "I want to report a violation of my privacy / personal data".',
      'Paste the infringing TikTok video URL into the form.',
      'Replace [Your Name] in the Additional text with your real name and paste into the explanation box.',
      'Submit the report and save the verification email sent by TikTok Trust & Safety.'
    ],
    instructionsBn: [
      'উপরের টিকটক প্রাইভেসি ওয়েবফর্মের লিংকে প্রবেশ করুন।',
      'প্রাইভেসি লঙ্ঘন অপশনটি সিলেক্ট করে অভিযুক্ত টিকটক ভিডিওর লিংক দিন।',
      'Additional টেক্সটে [Your Name]-এর জায়গায় আপনার নাম লিখে বিবরণ বক্সে পেস্ট করুন।',
      'ফর্ম সাবমিট করুন এবং টিকটক থেকে আসা কনফার্মেশন ইমেইল সংরক্ষণ করুন।'
    ]
  },
  {
    id: 'ai-assistant-18plus-removal',
    folderName: 'Ai Assistant ১৮+ আইডি রিমুভ',
    folderNameBn: 'Ai Assistant এর মাধ্যমে ১৮+ আইডি রিমুভ এডিশনাল',
    category: 'safety',
    title: 'AI Assistant Report - Inappropriate & Scam Account Removal',
    titleBn: 'মেটা এআই ও ফেসবুক অ্যাসিস্ট্যান্টের মাধ্যমে ১৮+ আইডি রিমুভ স্ক্রিপ্ট',
    formNumber: 'Meta AI / In-App Direct Route',
    url: 'https://www.facebook.com/help/contact/430253071144967',
    targetPostSample: 'https://www.facebook.com/share/199NAKj2D5/?mibextid=wwXIfr',
    platform: 'facebook',
    summary: 'Prompt script and direct workflow to report and take down fake/scam accounts spreading adult content or luring users using Meta AI Assistant or direct review.',
    summaryBn: 'মেটা এআই অ্যাসিস্ট্যান্ট কিংবা ফেসবুক রিভিউ টিমে ভুয়া ১৮+ ও স্ক্যাম অ্যাকাউন্ট রিমুভ করার জন্য প্রস্তুতকৃত কার্যকর স্ক্রিপ্ট ও টার্গেট অ্যাকাউন্ট লিংক।',
    urgency: 'critical',
    requiredEvidence: [
      'Target Account Link: https://www.facebook.com/share/199NAKj2D5/?mibextid=wwXIfr',
      'Screenshots of explicit/scam posts',
      'Report Category: Nudity/Sexual Content & Fraud/Scam'
    ],
    additionalInfo: `This account is posting 18+ adult content and is likely a fake/scam profile. 
They are trying to lure people and possibly commit fraud. 
Please review and remove this account to protect other users.

Account Link:-
https://www.facebook.com/share/199NAKj2D5/?mibextid=wwXIfr`,
    additionalInfoBn: `এই অ্যাকাউন্টটি ১৮+ আপত্তিকর কনটেন্ট পোস্ট করছে এবং এটি একটি ভুয়া/প্রতারণামূলক প্রোফাইল। তারা মানুষকে ফাঁদে ফেলার এবং সম্ভাব্য আর্থিক বা সাইবার প্রতারণা করার চেষ্টা করছে। প্ল্যাটফর্মের সাধারণ ব্যবহারকারীদের সুরক্ষার স্বার্থে এই অ্যাকাউন্টটি অবিলম্বে বন্ধ ও মুছে দেওয়ার জন্য বিনীত অনুরোধ জানাচ্ছি।

অ্যাকাউন্ট লিংক:
https://www.facebook.com/share/199NAKj2D5/?mibextid=wwXIfr`,
    instructions: [
      'Open the Meta AI Assistant in WhatsApp/Messenger/Instagram or open the Facebook Contact Form.',
      'Copy the Additional Script with the target profile link included.',
      'Paste into the Meta AI chat or form explanation box: "Report and request takedown for policy violation".',
      'Alternatively, visit the target account profile -> Tap 3 dots -> Report Profile -> Fake Account / Inappropriate Content -> Submit.'
    ],
    instructionsBn: [
      'মেটা এআই অ্যাসিস্ট্যান্ট চ্যাটে কিংবা ফেসবুক রিপোর্ট ফর্মে যান।',
      'টার্গেট অ্যাকাউন্ট লিংকসহ উপরের Additional স্ক্রিপ্টটি এক ক্লিকে কপি করুন।',
      'মেটা এআই অথবা রিপোর্ট বক্সে পেস্ট করে দ্রুত অ্যাকশন নেওয়ার আবেদন করুন।',
      'টার্গেট অ্যাকাউন্টে গিয়ে ৩ ডটে ট্যাপ করেও সরাসরি "Report Profile" করতে পারেন।'
    ]
  },
  {
    id: 'impersonation-profile',
    folderName: 'Impersonation Profile Report',
    folderNameBn: 'নকল প্রোফাইল রিপোর্ট ফোল্ডার',
    category: 'impersonation',
    title: 'Report an Impersonating Profile (Direct Contact Form)',
    titleBn: 'আমাকে বা কাউকে অনুকরণ করা নকল প্রোফাইল রিপোর্ট',
    formNumber: 'Contact Form 295309487309948',
    url: 'https://www.facebook.com/help/contact/295309487309948',
    summary: 'Official form to report a fake account falsely using your name, photos, or identity.',
    summaryBn: 'আপনার ছবি, নাম বা পরিচিতি ব্যবহার করে তৈরি করা প্রতারণামূলক নকল আইডি বন্ধের অফিসিয়াল ফর্ম।',
    urgency: 'critical',
    requiredEvidence: [
      'Target Impersonator Profile URL',
      'Real Profile URL / Legal ID proof',
      'Screenshots of stolen pictures / timeline'
    ],
    additionalInfo: `Dear Meta Trust & Safety Review Team,

I am writing to formally report an impersonation account that is directly violating Facebook's Community Standards on Misrepresentation and Identity Integrity.

1. Target Impersonating Profile: [TARGET_PROFILE_URL]
2. Impersonated Person / Legal Entity: [ORIGINAL_PROFILE_OR_LEGAL_NAME]
3. Authentic Profile URL: [ORIGINAL_PROFILE_URL]

The reported profile is using my authorized name, profile pictures, and personal details without authorization. Furthermore, the account is engaging in deceptive conduct, misleading mutual contacts, and damaging personal credibility.

As verified in Section 4 of Meta's Terms of Service, creating an account pretending to be someone else is strictly prohibited. I have attached legitimate government identity documentation and comparison screenshots to verify genuine ownership.

I respectfully urge Meta to permanently suspend this fraudulent profile and take appropriate preventative measures.

Thank you for your prompt assistance in protecting user integrity.

Respectfully,
[YOUR_NAME]
Contact Email: [YOUR_EMAIL]`,
    additionalInfoBn: `প্রিয় মেটা ট্রাস্ট অ্যান্ড সেফটি টিম,
আমি একটি ভুয়া ও নকল প্রোফাইলের বিরুদ্ধে রিপোর্ট করছি যা ফেসবুকের পলিসি ও নিয়ম সরাসরি লঙ্ঘন করছে। এটি আমার নাম, ছবি ও ব্যক্তিগত পরিচিতি অপব্যবহার করে অন্য মানুষদের বিভ্রান্ত করছে। আমি আসল পরিচয় নিশ্চিত করতে উপযুক্ত প্রমাণপত্র সংযুক্ত করেছি। অনুগ্রহ করে এই নকল প্রোফাইলটি দ্রুত বাতিল করুন।
ধন্যবাদ,
[আপনার নাম]`,
    instructions: [
      'Open the official Meta contact link above.',
      'Select "Someone is using my photos or pretending to be me".',
      'Provide your valid email and the exact link to the fake profile.',
      'Paste this Additional Info script into the "Additional info / Explanation" box.',
      'Upload a government-issued photo ID (National ID / Passport / Driving License) for rapid resolution.'
    ],
    instructionsBn: [
      'উপরের অফিসিয়াল মেটা ফর্ম লিংকে ক্লিক করে ওপেন করুন।',
      '"Someone is using my photos or pretending to be me" অপশনটি সিলেক্ট করুন।',
      'আপনার একটি কার্যকর ইমেইল দিন এবং নকল আইডির লিংক দিন।',
      '"Additional info" বক্সে এই স্ক্রিপ্টটি কপি করে পেস্ট করুন।',
      'দ্রুত ভেরিফিকেশনের জন্য জাতীয় পরিচয়পত্র (NID) বা পাসপোর্ট এর ছবি সংযুক্ত করুন।'
    ]
  },
  {
    id: 'impersonation-no-account',
    folderName: 'Impersonator (No Account Required)',
    folderNameBn: 'ফেসবুক আইডি ছাড়াই নকল আইডি রিপোর্ট',
    category: 'impersonation',
    title: 'Report Impersonator (Without a Facebook Account)',
    titleBn: 'ফেসবুক অ্যাকাউন্ট ছাড়াই নকল আইডি বা পেজ রিপোর্ট',
    formNumber: 'Contact Form 169486816475808',
    url: 'https://www.facebook.com/help/contact/169486816475808',
    summary: 'For individuals or representatives who do not have a Facebook account but need an impersonator removed.',
    summaryBn: 'যাদের নিজের ফেসবুক আইডি নেই কিন্তু কেউ তাদের নামে ভুয়া অ্যাকাউন্ট খুলে ক্ষতি করছে।',
    urgency: 'high',
    requiredEvidence: [
      'Official photo identification (NID / Passport)',
      'Direct link to offending profile or post'
    ],
    additionalInfo: `To the Meta Review Center,

I do not possess an active Facebook account, but an individual on your platform is illegitimately claiming my identity, using my likeness, copyrighted photography, and personal identifiers without consent.

- Offending URL: [TARGET_PROFILE_URL]
- Full Legal Name of Person Being Impersonated: [LEGAL_FULL_NAME]
- Incident Summary: The creator of this page/profile is maliciously posting and communicating with others under my representation.

This constitutes a gross breach of Section 3 of Meta's Terms of Service (Representing Identity Accurately). I have supplied certified government identification to establish legal standing. Please eradicate this impersonating presence immediately.

Declaration: I attest under penalty of perjury that the information in this report is authentic and that I am the individual whose likeness is being misappropriated.

Sincerely,
[YOUR_NAME]
Official Contact: [YOUR_EMAIL]`,
    additionalInfoBn: `মেটা রিভিউ সেন্টার বরাবর,
আমার কোন সক্রিয় ফেসবুক আইডি নেই, তবে আপনাদের প্ল্যাটফর্মে একটি অ্যাকাউন্ট আমার ছবি ও নাম ব্যবহার করে অবৈধভাবে প্রতারণা করছে। এর ফলে সামাজিকভাবে আমি ক্ষতির সম্মুখীন হচ্ছি। প্রমাণ হিসেবে আমার অফিসিয়াল আইডি কার্ড প্রদান করা হলো। অনুগ্রহ করে দ্রুত ব্যবস্থা গ্রহণ করুন।`,
    instructions: [
      'Use this form if you do not have an active Facebook profile.',
      'Fill in your active contact email so Meta can confirm case status.',
      'Paste the generated Additional Info statement.',
      'Attach clear image of official photo identification.'
    ],
    instructionsBn: [
      'আপনার যদি কোনো ফেসবুক আইডি না থাকে তবে এই ফর্মটি ব্যবহার করুন।',
      'সঠিক ইমেইল এড্রেস প্রদান করুন যেন মেটা আপনাকে কেস আপডেট জানাতে পারে।',
      'অতিরিক্ত বিবরণ বক্সে এই তথ্যটি পেস্ট করুন এবং প্রমাণ হিসেবে আইডি কার্ড আপলোড করুন।'
    ]
  },
  {
    id: 'hacked-compromised-recovery',
    folderName: 'Hacked Account Recovery',
    folderNameBn: 'হ্যাকড আইডি রিকভারি ফোল্ডার',
    category: 'security',
    title: 'Report Compromised & Hacked Account (Direct Flow)',
    titleBn: 'হ্যাকড হওয়া ফেসবুক আইডি রিপোর্ট ও উদ্ধারের লিংক',
    formNumber: 'Account Security / Recovery Portal',
    url: 'https://www.facebook.com/hacked',
    summary: 'Official automated and secure pathway to freeze, regain control, and recover a compromised account.',
    summaryBn: 'ফেসবুক অ্যাকাউন্টের পাসওয়ার্ড, ইমেইল বা ফোন নম্বর পরিবর্তন হয়ে গেলে তাৎক্ষণিক উদ্ধারের লিংক।',
    urgency: 'critical',
    requiredEvidence: [
      'Previous password or old linked email/phone number',
      'Government ID matching account legal name',
      'Accessible clean alternate email address'
    ],
    additionalInfo: `Attention Meta Security Operations & Account Integrity Team,

My Facebook account has suffered an unauthorized takeover by an unverified third party. The unauthorized intruder has maliciously detached my registered contact credentials (Email / Phone Number) and altered account security parameters.

- Original Account Profile URL: [ORIGINAL_PROFILE_URL]
- Registered Original Email / Phone: [OLD_EMAIL_OR_PHONE]
- Estimated Date of Breach: [BREACH_DATE_TIME]
- Unauthorized Changes Observed: Password altered, secondary 2FA code blocked, recovery email replaced with unknown address.

I am the lawful owner of this profile. I confirm that any posts, messages, or financial requests initiated from this account after the breach date were NOT generated or authorized by me.

I request an immediate freeze on all unauthorized active sessions, revocation of newly inserted recovery emails, and a secure manual ID verification link dispatched to my verified alternate contact email: [NEW_RECOVERY_EMAIL].

Sincerely,
[YOUR_NAME]`,
    additionalInfoBn: `মেটা সিকিউরিটি অপারেশন টিম,
আমার ফেসবুক অ্যাকাউন্টটি একজন অনুপ্রবেশকারী দ্বারা হ্যাক হয়েছে এবং আমার অনুমতি ছাড়া মূল ইমেইল ও ফোন নম্বর পরিবর্তন করা হয়েছে। আমি অ্যাকাউন্টের প্রকৃত মালিক। উক্ত সময়ের পর করা কোনো পোস্ট বা মেসেজের দায় আমার নয়। অ্যাকাউন্টটি সাময়িক লক করে আমার নতুন ইমেইলে আইডি যাচাইকরণ লিংক প্রদানের অনুরোধ করছি।`,
    instructions: [
      'Navigate to facebook.com/hacked directly from a familiar device/browser previously used with the account.',
      'Click "My account is compromised".',
      'Search using your old email, phone, or account username.',
      'Follow the identity verification steps and supply alternate clean contact email.',
      'Use the additional statement if prompted for support ticket notes.'
    ],
    instructionsBn: [
      'পূর্বে ব্যবহার করা ফোন বা কম্পিউটার থেকে সরাসরি facebook.com/hacked এ প্রবেশ করুন।',
      '"My account is compromised" অপশনে ক্লিক করুন।',
      'পুরাতন ফোন নম্বর বা ইউজারনেম দিয়ে আইডিটি খুঁজুন।',
      'নতুন একটি নিরাপদ ইমেইল প্রদান করে এনআইডি/পাসপোর্ট সাবমিট করুন।'
    ]
  },
  {
    id: 'hijacked-page-group',
    folderName: 'Hijacked Page & Group Recovery',
    folderNameBn: 'হ্যাকড পেজ ও গ্রুপ রিকভারি',
    category: 'security',
    title: 'Report Hijacked / Stolen Page or Group',
    titleBn: 'ফেসবুক পেজ বা গ্রুপ হ্যাক হলে বা অ্যাডমিন রিমুভ হলে রিপোর্ট',
    formNumber: 'Contact Form 128043970682387',
    url: 'https://www.facebook.com/help/contact/128043970682387',
    summary: 'Direct appeal route when rogue admins remove your ownership or phishing takes your business page.',
    summaryBn: 'ব্যবসায়িক পেজ বা গ্রুপের মালিকানা চুরি হলে বা আসল অ্যাডমিনকে রিমুভ করে দিলে রিকভারি ফর্ম।',
    urgency: 'critical',
    requiredEvidence: [
      'Direct Page or Group URL',
      'Original Admin profile link & Business Manager ID',
      'Business registration certificate or billing statement'
    ],
    additionalInfo: `Dear Meta Business Integrity & Rights Management Team,

I am filing an urgent claim regarding the unlawful seizure of our Facebook Page/Group. Our authorized administrative credentials have been hijacked without consent.

1. Impacted Page / Group URL: [TARGET_PAGE_OR_GROUP_URL]
2. Page / Group Name: [PAGE_NAME]
3. Legitimate Owner / Original Admin Profile URL: [ORIGINAL_PROFILE_URL]
4. Date of Unauthorized Removal: [INCIDENT_DATE]

Description of Breach:
Our legitimate administrator was removed following unauthorized access or deceptive phishing. The current unauthorized administrators have no legal claim or authority over the brand and content of this page.

Attached Documentation:
- Proof of brand ownership / official business license
- Previous payment invoices associated with Meta Ad Account: [AD_ACCOUNT_ID]
- Screenshots proving historical admin management

We formally request Meta to audit the Admin Activity History log, remove the unauthorized managers, and restore primary administrative ownership to [ORIGINAL_PROFILE_URL].

Thank you for your decisive intervention.

Authorized Signatory:
[YOUR_NAME]
Title: [YOUR_ROLE_OR_TITLE]
Organization: [BUSINESS_NAME]
Verified Email: [YOUR_EMAIL]`,
    additionalInfoBn: `মেটা বিজনেস ইন্টিগ্রিটি টিম,
আমাদের অফিশিয়াল ফেসবুক পেজ/গ্রুপটির অ্যাডমিন এক্সেস অননুমোদিতভাবে দখল করা হয়েছে এবং মূল মালিককে সরিয়ে দেওয়া হয়েছে। পেজের পূর্ববর্তী অ্যাডমিন হিস্ট্রি চেক করলেই এর সত্যতা প্রমাণিত হবে। আমাদের ব্যবসায়িক লাইসেন্স ও পূর্ববর্তী বিজ্ঞাপন রসিদ সংযুক্ত রয়েছে। দ্রুত মূল মালিকানা ফিরিয়ে দেওয়ার বিনীত অনুরোধ জানাচ্ছি।`,
    instructions: [
      'Collect your business registration or government ID before opening the form.',
      'Enter the exact Page URL and date when the takeover occurred.',
      'Paste the tailored statement in the narrative box.',
      'Include previous transaction IDs from Facebook Ads if available.'
    ],
    instructionsBn: [
      'আপনার ট্রেড লাইসেন্স বা পূর্বের অ্যাড পেমেন্ট ইনভয়েস প্রস্তুত রাখুন।',
      'পেজের সঠিক লিংক এবং যেদিন সমস্যাটি ঘটেছিল সেই তারিখ দিন।',
      'বর্ণনা বক্সে উপরের স্ক্রিপ্টটি পেস্ট করুন এবং প্রমাণপত্র সংযুক্ত করুন।'
    ]
  },
  {
    id: 'cyberbullying-harassment',
    folderName: 'Cyberbullying & Defamation Report',
    folderNameBn: 'সাইবার বুলিং ও মানহানি রিপোর্ট ফোল্ডার',
    category: 'harassment',
    title: 'Report Harassment, Bullying, or Defamation',
    titleBn: 'হয়রানি, সাইবার বুলিং ও মানহানি রিপোর্ট',
    formNumber: 'Contact Form 274459462613911',
    url: 'https://www.facebook.com/help/contact/274459462613911',
    summary: 'Report persistent targeted harassment, malicious defamation, hate campaigns, or doxxing.',
    summaryBn: 'কোনো ব্যক্তি বা পেজ দ্বারা ইচ্ছাকৃতভাবে গালাগালি, হুমকি বা ব্যক্তিগত তথ্য ফাঁস (ডক্সিং) করলে।',
    urgency: 'high',
    requiredEvidence: [
      'Direct permalinks to abusive posts/comments/messages',
      'Timestamps and unaltered screenshots',
      'Link to victim profile'
    ],
    additionalInfo: `To the Meta Safety Operations Division,

This formal complaint concerns systematic and targeted harassment, cyberbullying, and defamation that directly breaches Meta's Bullying and Harassment Community Standards.

- Offending Profile / Page URL: [TARGET_PROFILE_URL]
- Direct URL(s) to Infringing Content: [INFRINGING_POST_URLS]
- Target of Harassment: [VICTIM_NAME_AND_PROFILE_URL]

Specific Violations:
1. Malicious Defamation & Character Assassination: Spreading unsubstantiated claims and derogatory falsehoods designed to incite social harm.
2. Doxxing & Non-Consensual Personal Information: Disseminating private phone numbers, locations, and personal imagery without consent.
3. Unsolicited Targeted Hostility: Continual coordinated attacks creating an unsafe and hostile digital environment.

Meta's policies explicitly prohibit content that degrades, threatens, or relentlessly singles out an individual for harassment. The reported materials pose genuine mental anguish and real-world safety risks.

We request that the infringing posts be expunged immediately and appropriate punitive measures (warning / account suspension) be applied to the offending account.

Sincerely,
[YOUR_NAME]
Date: [DATE]`,
    additionalInfoBn: `মেটা সেফটি অপারেশন ডিভিশন,
আমি লক্ষ্যবস্তু করে চালানো সাইবার বুলিং ও মানহানিকর পোস্টের বিরুদ্ধে অভিযোগ দাখিল করছি যা ফেসবুকের কমিউনিটি স্ট্যান্ডার্ড সরাসরি অমান্য করছে। এতে ব্যক্তিগত তথ্য ফাঁস ও অসম্মানজনক বক্তব্য দিয়ে উদ্দেশ্যপ্রণোদিতভাবে ক্ষতিসাধন করা হচ্ছে। প্রমাণাদির স্ক্রিনশট ও লিংক সংযুক্ত করা হলো। অবিলম্বে এই পোস্ট ও অ্যাকাউন্ট অপসারণের দাবি জানাচ্ছি।`,
    instructions: [
      'Ensure you copy the direct permalinks to specific posts or comments, not just general profile links.',
      'Take uncropped full screenshots showing date and time.',
      'Paste the additional text with exact URLs included in brackets.',
      'Submit and record your Support Dashboard Reference ticket.'
    ],
    instructionsBn: [
      'পোস্ট বা কমেন্টের সরাসরি পার্মালিংক কপি করুন।',
      'তারিখ ও সময় সহ ফুল স্ক্রিনশট সংগ্রহে রাখুন।',
      'উপরের স্ক্রিপ্টে ব্র্যাকেট দেওয়া স্থানে সঠিক লিংকগুলো বসিয়ে পেস্ট করুন।'
    ]
  },
  {
    id: 'intimate-images-ncvi',
    folderName: 'NCII & Adult Content Report',
    folderNameBn: 'ব্যক্তিগত গোপন ছবি ও ব্ল্যাকমেইল রিপোর্ট',
    category: 'harassment',
    title: 'Report Non-Consensual Private / Explicit Images (NCII)',
    titleBn: 'সম্মতিহীন ব্যক্তিগত ছবি/ভিডিও বা ব্ল্যাকমেইল রিপোর্ট',
    formNumber: 'Contact Form 383679321740945 & StopNCII Portal',
    url: 'https://www.facebook.com/help/contact/383679321740945',
    summary: 'High priority urgent report for non-consensual intimate imagery, sextortion, or revenge pornography.',
    summaryBn: 'ব্যক্তিগত গোপন ছবি/ভিডিও ছড়িয়ে দেওয়া বা ব্ল্যাকমেইল করার বিরুদ্ধে তাৎক্ষণিক জরুরি অ্যাকশন ফর্ম।',
    urgency: 'critical',
    requiredEvidence: [
      'Direct URL of post, story, or group where shared',
      'Profile URL of perpetrator/blackmailer',
      'Documentation of extortion threats (if applicable)'
    ],
    additionalInfo: `URGENT NOTICE: Non-Consensual Intimate Imagery (NCII) / Extortion Report

To the Meta Threat Disruption & Emergency Review Team,

I am submitting an urgent violation report regarding the publication or threat of distribution of intimate, private, and non-consensual media.

- Perpetrator Profile Link: [TARGET_PROFILE_URL]
- Location of Content / Chat Link: [CONTENT_OR_CHAT_URL]
- Victim Identity: [VICTIM_NAME_AND_CONTACT]

This material violates Meta's zero-tolerance policy on Non-Consensual Sexual Imagery and Adult Sexual Exploitation. The perpetrator is distributing or threatening distribution to intimidate, coerce, or cause irreparable emotional trauma.

Under Meta's global community standards and international legal statutes regarding non-consensual intimate imagery, I demand:
1. Immediate takedown and digital hash blacklisting of the media to prevent re-upload across Meta platforms (Facebook, Instagram, Messenger).
2. Permanent deactivation of the offending user profile.
3. Retention of server logs for referral to law enforcement agencies if necessary.

This is an ongoing safety emergency. Your swift response is critical.

Submitted by:
[YOUR_NAME]
Date & Time: [CURRENT_DATE_TIME]`,
    additionalInfoBn: `জরুরি নোটিশ: মেটা থ্রেট ডিসরাপশন টিম,
অনুমতি ছাড়া সংবেদনশীল বা ব্যক্তিগত ছবি/ভিডিও ইন্টারনেটে প্রচার বা ব্ল্যাকমেইল করার বিরুদ্ধে এই জরুরি রিপোর্ট দাখিল করা হচ্ছে। এটি মেটার জিরো-টলারেন্স পলিসি সরাসরি লঙ্ঘন করে। এই কনটেন্টটি দ্রুত মুছে ফেলা এবং হ্যাশ ব্লকলিস্ট করার অনুরোধ করছি যেন অন্য কোথাও পুনরায় আপলোড না হতে পারে। একই সাথে অপরাধীর অ্যাকাউন্ট স্থায়ীভাবে বন্ধ করার দাবি জানাচ্ছি।`,
    instructions: [
      'Prioritize reporting via this direct form and also consider StopNCII.org for proactive digital image hashing.',
      'Do not reply or negotiate with the blackmailer.',
      'Submit the exact URL and attach screenshots of the blackmail threats.',
      'Meta has a dedicated priority queue for intimate image takedowns.'
    ],
    instructionsBn: [
      'এই ফর্মের পাশাপাশি StopNCII.org ওয়েবসাইটে ডিজিটাল হ্যাশ সাবমিট করতে পারেন।',
      'ব্ল্যাকমেইলকারীকে কোনো প্রকার অর্থ প্রদান করবেন না।',
      'হুমকির মেসেজের স্পষ্ট স্ক্রিনশট এবং অ্যাকাউন্টের লিংক দিয়ে দ্রুত সাবমিট করুন।'
    ]
  },
  {
    id: 'copyright-dmca',
    folderName: 'DMCA Copyright Report',
    folderNameBn: 'ডিএমসিএ কপিরাইট নোটিশ ফোল্ডার',
    category: 'copyright',
    title: 'DMCA Copyright Infringement Notice (Official Form)',
    titleBn: 'কপিরাইট লঙ্ঘন ও ডিএমসিএ নোটিশ (DMCA Report)',
    formNumber: 'Contact Form 1758255661104383',
    url: 'https://www.facebook.com/help/contact/1758255661104383',
    summary: 'Official form to request removal of your copyrighted videos, photography, music, or written works.',
    summaryBn: 'আপনার মূল ভিডিও, ছবি, অডিও বা কনটেন্ট অন্য কেউ চুরি করে আপলোড করলে ডিএমসিএ নোটিশ ফর্ম।',
    urgency: 'high',
    requiredEvidence: [
      'Original work link or proof of copyright registration',
      'Specific infringing Facebook post/video URLs',
      'Authorized signature of copyright owner'
    ],
    additionalInfo: `To the Designated Copyright Agent of Meta Platforms, Inc.,

I am submitting a formal Notice of Copyright Infringement pursuant to the Digital Millennium Copyright Act (17 U.S.C. § 512) and Meta's Intellectual Property Policies.

1. Description of Copyrighted Work:
Original creative work titled: "[ORIGINAL_WORK_TITLE]"
Authentic source published at: [ORIGINAL_CONTENT_URL]
Creation / Publication Date: [ORIGINAL_PUBLICATION_DATE]

2. Location of Allegedly Infringing Material:
Direct URL(s) to unauthorized copies on Facebook:
- [INFRINGING_POST_OR_VIDEO_URL_1]
- [INFRINGING_POST_OR_VIDEO_URL_2]

3. Statement of Rights:
I have a good faith belief that the disputed use of the copyrighted material is not authorized by the copyright owner, its agent, or the law (such as fair use).

4. Sworn Declaration:
The information in this notification is accurate. Under penalty of perjury, I declare that I am the owner (or authorized to act on behalf of the owner) of the exclusive copyright that is allegedly infringed.

I request that you expeditiously disable access to the infringing material and notify the poster as required by law.

Electronic Signature:
/[YOUR_LEGAL_NAME]/
Full Name: [YOUR_FULL_NAME]
Mailing Address: [YOUR_POSTAL_ADDRESS]
Phone: [YOUR_PHONE_NUMBER]
Email: [YOUR_EMAIL]`,
    additionalInfoBn: `মেটা কপিরাইট এজেন্ট বরাবর,
ডিজিটাল মিলেনিয়াম কপিরাইট অ্যাক্ট (DMCA) অনুযায়ী আমি মেধা সম্পত্তি লঙ্ঘনের অফিশিয়াল নোটিশ দিচ্ছি। উল্লিখিত ফেসবুক লিংকগুলোতে আমার স্বত্বাধিকারী কনটেন্ট কোনো অনুমতি বা লাইসেন্স ছাড়াই বেআইনিভাবে ব্যবহার করা হয়েছে। আমি শপথ করে বলছি যে আমি এই কনটেন্টের প্রকৃত মালিক। মেটার পলিসি অনুযায়ী অননুমোদিত কনটেন্টটি দ্রুত সরিয়ে নেওয়ার আহ্বান জানাচ্ছি।`,
    instructions: [
      'Provide your real legal name and address as legally required by DMCA provisions.',
      'Specify the exact timestamps or video links being infringed.',
      'Include a link to your original YouTube, website, or publication.',
      'Type your full legal name as digital signature.'
    ],
    instructionsBn: [
      'ডিএমসিএ আইন অনুযায়ী আপনার আসল নাম ও যোগাযোগের ঠিকানা প্রদান করুন।',
      'চুরি হওয়া ভিডিও বা পোস্টের নির্দিষ্ট পার্মালিংক দিন।',
      'আপনার আসল কাজের প্রমাণের লিংক সংযুক্ত করুন।',
      'সবশেষে আপনার পূর্ণ নাম টাইপ করে ডিজিটাল সিগনেচার দিন।'
    ]
  },
  {
    id: 'trademark-infringement',
    folderName: 'Trademark Protection',
    folderNameBn: 'ট্রেডমার্ক সংরক্ষণ ফোল্ডার',
    category: 'copyright',
    title: 'Report Trademark Infringement',
    titleBn: 'ট্রেডমার্ক বা ব্র্যান্ড নাম অপব্যবহার রিপোর্ট',
    formNumber: 'Contact Form 634636770043106',
    url: 'https://www.facebook.com/help/contact/634636770043106',
    summary: 'For registered business brands, logos, and company names used by counterfeiters or unauthorized pages.',
    summaryBn: 'নিবন্ধিত ব্র্যান্ডের লোগো বা নাম ব্যবহার করে ভুয়া ব্যবসা বা নকল পণ্য বিক্রির পেজ বন্ধ করার ফর্ম।',
    urgency: 'high',
    requiredEvidence: [
      'Trademark registration certificate / Serial number',
      'Jurisdiction of trademark (USPTO / National IPO)',
      'Infringing page or ad links'
    ],
    additionalInfo: `To Meta Intellectual Property Department,

Re: Formal Notice of Trademark Infringement

This notice is to report the unauthorized commercial use of our registered trademark on Facebook, creating consumer confusion and brand dilution.

- Registered Trademark Wordmark/Logo: [TRADEMARK_NAME]
- Trademark Registration Number: [REGISTRATION_NUMBER]
- Trademark Office / Country of Registration: [COUNTRY_OR_OFFICE]
- URL of Infringing Page / Post / Ad: [INFRINGING_PAGE_OR_POST_URL]

The offending entity is selling counterfeit goods or masquerading as an authorized distributor using our proprietary brand identity, in direct violation of Meta's Trademark Policy.

We ask Meta to immediately take down the infringing content or revoke the infringing page's vanity URL and commercial privileges.

Authorized Trademark Representative:
[YOUR_FULL_NAME]
Organization: [COMPANY_NAME]
Contact: [YOUR_BUSINESS_EMAIL]`,
    additionalInfoBn: `মেটা ইন্টেলেকচুয়াল প্রোপার্টি ডিপার্টমেন্ট,
আমাদের নিবন্ধিত ট্রেডমার্ক ও ব্র্যান্ড লোগো অপব্যবহার করে এই পেজে অননুমোদিত পণ্য বিক্রি ও গ্রাহকদের বিভ্রান্ত করা হচ্ছে। ট্রেডমার্ক রেজিস্ট্রেশন নম্বর এবং প্রমাণপত্র সংযুক্ত করা হলো। অবিলম্বে এই ট্রেডমার্ক লঙ্ঘনকারী পেজটির বিরুদ্ধে আইনগত ব্যবস্থা নেওয়ার অনুরোধ করছি।`,
    instructions: [
      'Enter the official trademark number and registration authority.',
      'Provide official business email for communication.',
      'Attach certified registration certificate scans.'
    ],
    instructionsBn: [
      'আপনার ট্রেডমার্ক রেজিস্ট্রেশন সার্টিফিকেট ও নম্বর দিন।',
      'ব্যবসায়িক ইমেইল ব্যবহার করুন।',
      'ব্র্যান্ডের আসল ওয়েবসাইট লিংক উল্লেখ করুন।'
    ]
  },
  {
    id: 'disabled-personal-account',
    folderName: 'Disabled ID Appeal',
    folderNameBn: 'আইডি ডিজেবল আপিল ফোল্ডার',
    category: 'disabled',
    title: 'My Personal Account Was Disabled (Appeal Form)',
    titleBn: 'ফেসবুক আইডি ডিজঅ্যাবল বা নিষ্ক্রিয় হলে আপিল করার ফর্ম',
    formNumber: 'Contact Form 260749603972907',
    url: 'https://www.facebook.com/help/contact/260749603972907',
    summary: 'Submit government ID and formal appeal when your legitimate account is mistakenly disabled.',
    summaryBn: 'ভুলবশত ফেসবুক আইডি ডিজেবল হলে জাতীয় পরিচয়পত্র সাবমিট করে অ্যাকাউন্ট ফেরত পাওয়ার ফর্ম।',
    urgency: 'high',
    requiredEvidence: [
      'Government ID photo (NID / Passport / Driving License)',
      'Linked email address or phone number',
      'Full account name matching government ID'
    ],
    additionalInfo: `Dear Meta User Operations & Account Integrity Team,

My authentic personal Facebook account has been disabled unexpectedly. I believe this action was executed in error by automated moderation algorithms.

- Account Full Name: [ACCOUNT_FULL_NAME]
- Registered Login Email: [LOGIN_EMAIL]
- Linked Mobile Number: [LOGIN_PHONE]
- Profile URL (if known): [PROFILE_URL]

Declaration of Compliance:
I have maintained this account in good faith and adhere strictly to Meta's Terms of Service and Community Standards. I have not knowingly engaged in spam, misleading behavior, hate speech, or authenticity violations.

To authenticate my identity beyond doubt, I have attached a clear, high-resolution copy of my government-issued photo identification (National ID / Passport) confirming that my legal name and birthdate exactly match the records on the profile.

I respectfully request a manual human review of my profile history and the reinstatement of my account privileges.

Thank you for your review and understanding.

Sincerely,
[YOUR_NAME]`,
    additionalInfoBn: `সম্মানিত মেটা ইউজার অপারেশন টিম,
আমার ব্যক্তিগত ফেসবুক আইডিটি হঠাৎ নিষ্ক্রিয় (Disabled) করা হয়েছে। আমি নিশ্চিত করছি যে আমি ফেসবুকের কোনো পলিসি ভঙ্গ করিনি এবং এটি রোবটিক সিস্টেমের ভুলের কারণে হয়েছে। আমার আইডির নাম ও জন্ম তারিখ প্রমাণে সরকারি পরিচয়পত্র (NID) সংযুক্ত করেছি। অনুগ্রহ করে ম্যানুয়াল রিভিউ করে আমার আইডিটি পুনরায় সচল করে দিন।`,
    instructions: [
      'Ensure the photo of your Government ID is clear, well-lit, with all 4 corners visible.',
      'The name on your ID should match or closely resemble your account profile name.',
      'Fill in the login email associated with the disabled profile.',
      'Submit once and allow 24-72 hours for processing.'
    ],
    instructionsBn: [
      'জাতীয় পরিচয়পত্র বা পাসপোর্টের ৪টি কোণা যেন স্পষ্ট দেখা যায় এমন পরিষ্কার ছবি তুলুন।',
      'আইডি কার্ডের নাম ও ফেসবুকের নাম মিল থাকা জরুরি।',
      'একবার সাবমিট করে ২৪ থেকে ৭২ ঘণ্টা অপেক্ষা করুন।'
    ]
  },
  {
    id: 'disabled-ineligible',
    folderName: 'Ineligible Notice Appeal',
    folderNameBn: 'ইনএলিজিবল নোটিশ আপিল ফোল্ডার',
    category: 'disabled',
    title: 'Disabled - Ineligible / Community Standards Appeal',
    titleBn: 'ইনএলিজিবল (Ineligible) নোটিশের বিরুদ্ধে আপিল',
    formNumber: 'Contact Form 317389574998690',
    url: 'https://www.facebook.com/help/contact/317389574998690',
    summary: 'For accounts flagged with the "Ineligible" notice or severe policy misinterpretation.',
    summaryBn: 'অ্যাকাউন্টে ঢোকার সময় "Ineligible" দেখালে সরাসরি নীতি পর্যালোচনার জন্য আপিল ফর্ম।',
    urgency: 'high',
    requiredEvidence: [
      'Government Photo ID',
      'Account username or registration date',
      'Detailed statement of good standing'
    ],
    additionalInfo: `Dear Meta Trust & Safety Appeals Reviewer,

I am submitting an appeal regarding the "Ineligible to use Facebook" determination applied to my personal account.

- Name: [FULL_LEGAL_NAME]
- Registered Email Address: [REGISTERED_EMAIL]
- Date of Disabling Notice: [DATE]

I submit that my account activity was compliant with Meta policies. I suspect my profile may have been confused with an impersonation attempt or flagged due to unusual network activity (such as VPN or travel login).

I have always strived to maintain an authentic and respectful presence. I have uploaded my legitimate government-issued ID to prove my legal eligibility and age requirements (above 13/18 years).

Please conduct a secondary human inspection of my activity log to overturn this ineligibility status.

With appreciation,
[YOUR_LEGAL_NAME]`,
    additionalInfoBn: `মেটা আপিল টিম,
আমার অ্যাকাউন্টে "Ineligible" নোটিশ এসেছে যা একটি যান্ত্রিক ভুল। আমি সব নিয়ম মেনে চলি এবং কোনো অসাধু কাজের সাথে জড়িত নই। আমার বয়স ও পরিচয় প্রমাণে অফিশিয়াল আইডি কার্ড আপলোড করছি। দয়া করে একজন হিউম্যান রিভিউয়ার দ্বারা আমার অ্যাকাউন্টটি পুনরায় পরীক্ষা করে সচল করুন।`,
    instructions: [
      'Use this form if you see the "You are not eligible to use Facebook" screen.',
      'Provide your full legal name as printed on your ID.',
      'Paste the appeal script and upload your document.'
    ],
    instructionsBn: [
      'স্ক্রিনে "You are not eligible to use Facebook" আসলে এই ফর্মটি ব্যবহার করতে হবে।',
      'সরকারি আইডির সাথে মিল রেখে সঠিক নাম প্রদান করুন।',
      'স্ক্রিপ্টটি পেস্ট করে সাবমিট করুন।'
    ]
  },
  {
    id: 'scam-phishing-page',
    folderName: 'Scam & Phishing Report',
    folderNameBn: 'প্রতারণা ও ফিশিং রিপোর্ট ফোল্ডার',
    category: 'scams',
    title: 'Report Scam, Fake Giveaway & Phishing Page',
    titleBn: 'প্রতারণা, ভুয়া উপহার ও ফিশিং পেজ রিপোর্ট',
    formNumber: 'Security & Phishing Incident Form',
    url: 'https://www.facebook.com/help/contact/540977946302924',
    summary: 'Report fraudulent lottery schemes, crypto scams, malicious links, or fake corporate promotions.',
    summaryBn: 'ভুয়া লটারি, ফেক পুরস্কারের ফাঁদ বা ফিশিং লিংক দিয়ে সাধারণ মানুষের টাকা ও আইডি চুরির পেজ বন্ধ করার রিপোর্ট।',
    urgency: 'critical',
    requiredEvidence: [
      'Direct URL of the scam page or sponsored ad',
      'Screenshots of fraudulent promise / phishing website link'
    ],
    additionalInfo: `To the Meta Fraud Prevention & Security Team,

I am reporting a deceptive and fraudulent page actively engaged in financial scams, deceptive giveaways, and credential harvesting on Facebook.

- Reported Page/Account URL: [TARGET_PAGE_URL]
- Phishing / Malicious Domain Promoted: [SUSPICIOUS_WEBSITE_URL]
- Type of Fraud: [FINANCIAL_SCAM_OR_PHISHING]

Modus Operandi:
This entity is running deceptive posts claiming to offer unauthorized monetary gifts, lotteries, or account verification badges. Users are directed to an external credential-harvesting site or instructed to send money to fraudulent mobile wallets.

This constitutes a flagrant breach of Meta's Fraud and Deception Standards. Swift removal is necessary to safeguard unsuspecting platform members from economic harm.

Submitted by a concerned community member:
[YOUR_NAME]`,
    additionalInfoBn: `মেটা ফ্রড প্রিভেনশন টিম,
উক্ত পেজটি সাধারণ ফেসবুক ব্যবহারকারীদের সাথে বিভিন্ন ভুয়া উপহার, লটারি ও ফিশিং লিংকের মাধ্যমে প্রতারণা ও অর্থ আত্মসাৎ করছে। এটি ফেসবুকের পলিসির সরাসরি ব্যত্যয়। অবিলম্বে পেজটি ব্লক করার অনুরোধ জানাচ্ছি যাতে নিরীহ মানুষ ক্ষতিগ্রস্ত না হয়।`,
    instructions: [
      'Note the external link the scammer is asking victims to visit.',
      'Report both the Facebook page and include the phishing domain in the report text.',
      'If sponsored, also click the 3 dots on the Ad to report directly.'
    ],
    instructionsBn: [
      'প্রতারক চক্রের ব্যবহৃত ভুয়া ওয়েবসাইট বা ফোন নম্বর সংগ্রহ করুন।',
      'ফেসবুক পেজের লিংক ও ফিশিং ওয়েবসাইট দুটিই বর্ণনায় উল্লেখ করুন।',
      'স্পনসর্ড বিজ্ঞাপন হলে বিজ্ঞাপনের থ্রি-ডট থেকেও রিপোর্ট করুন।'
    ]
  },
  {
    id: 'underage-child-report',
    folderName: 'Underage Child Report',
    folderNameBn: 'শিশু সুরক্ষা রিপোর্ট ফোল্ডার',
    category: 'safety',
    title: 'Report a Child Under the Age of 13',
    titleBn: '১৩ বছরের কম বয়সী শিশুর ফেসবুক আইডি রিপোর্ট',
    formNumber: 'Contact Form 209046679279097',
    url: 'https://www.facebook.com/help/contact/209046679279097',
    summary: 'Enforce COPPA and Meta child safety guidelines by reporting accounts belonging to children under 13.',
    summaryBn: '১৩ বছরের কম বয়সী শিশুর মানসিক ও ডিজিটাল সুরক্ষায় অ্যাকাউন্ট বন্ধের অফিশিয়াল ফর্ম।',
    urgency: 'high',
    requiredEvidence: [
      'Direct profile URL of the child',
      'Proof of actual age / birth certificate / school record (if parent)'
    ],
    additionalInfo: `To the Meta Child Safety Compliance Office,

I am filing a mandatory report regarding a child under the age of 13 maintaining an active profile on Facebook, in violation of Meta's Minimum Age Requirements and COPPA regulations.

- Child's Profile URL: [CHILD_PROFILE_URL]
- Child's Full Name: [CHILD_FULL_NAME]
- Actual Date of Birth / Approximate Age: [ACTUAL_AGE_OR_DOB]
- Relationship to Child: [PARENT_GUARDIAN_OR_COMMUNITY_MEMBER]

Evidence of Underage Status:
The account holder is under 13 years old. This is substantiated by [EVIDENCE_DETAILS_OR_SCHOOL_RECORDS]. Under your Terms of Service (Eligibility Section), individuals under 13 are prohibited from creating or maintaining accounts.

In compliance with international child privacy legislation, please promptly delete this account and purge collected data.

Thank you,
[YOUR_NAME]
Contact: [YOUR_EMAIL]`,
    additionalInfoBn: `মেটা চাইল্ড সেফটি কমপ্লায়েন্স অফিস,
আমি ১৩ বছরের কম বয়সী একজন অপ্রাপ্তবয়স্ক শিশুর ফেসবুক আইডির ব্যাপারে রিপোর্ট করছি। আন্তর্জাতিক চাইল্ড অনলাইন প্রাইভেসি প্রটেকশন অ্যাক্ট (COPPA) ও মেটার নীতি অনুযায়ী ১৩ বছরের নিচে কেউ অ্যাকাউন্ট চালাতে পারবে না। শিশুটির ডিজিটাল সুরক্ষার্থে অ্যাকাউন্টটি দ্রুত অপসারণ করার বিনীত অনুরোধ জানাচ্ছি।`,
    instructions: [
      'Meta will review and delete the account if verified under 13.',
      'Parents can provide birth certificate or proof of guardianship.',
      'Fill in the estimated birth year on the form.'
    ],
    instructionsBn: [
      'মেটা যাচাই করে অ্যাকাউন্টটি মুছে ফেলবে।',
      'অভিভাবক হলে জন্মনিবন্ধন বা বয়স প্রমাণের তথ্য দিতে পারেন।',
      'ফর্মের বক্সে সম্ভাব্য জন্মসাল উল্লেখ করুন।'
    ]
  },
  {
    id: 'deceased-memorialize',
    folderName: 'Deceased Person Memorial',
    folderNameBn: 'মৃত ব্যক্তির মেমোরিয়াল ফোল্ডার',
    category: 'deceased',
    title: 'Memorialization or Account Removal for a Deceased Person',
    titleBn: 'মৃত ব্যক্তির আইডি মেমোরিয়ালাইজ বা স্থায়ী অপসারণ ফর্ম',
    formNumber: 'Contact Form 228813247197482',
    url: 'https://www.facebook.com/help/contact/228813247197482',
    summary: 'Request to convert a deceased relative or friend’s profile into a memorial or permanently remove it.',
    summaryBn: 'মারা যাওয়া নিকটাত্মীয় বা বন্ধুর প্রোফাইল স্মরণীয় (Remembering) করা বা স্থায়ীভাবে ডিলিট করার ফর্ম।',
    urgency: 'standard',
    requiredEvidence: [
      'Link to deceased person’s profile',
      'Proof of death (Obituary link, death certificate, news clipping)',
      'Documentation of family relationship (if requesting removal)'
    ],
    additionalInfo: `To the Meta Special Inquiries & Memorialization Department,

I am submitting a formal request on behalf of a deceased loved one regarding their Facebook presence.

- Profile URL of Deceased Person: [DECEASED_PROFILE_URL]
- Full Name of the Deceased: [DECEASED_FULL_NAME]
- Date of Passing: [DATE_OF_PASSING]
- Requested Action: [MEMORIALIZE_ACCOUNT_OR_PERMANENT_REMOVAL]
- My Relationship to Deceased: [IMMEDIATE_FAMILY_OR_AUTHORIZED_REPRESENTATIVE]

We have provided certified proof of death (death certificate / official obituary documentation) to verify this sensitive request. We ask that Meta respect the dignity and memory of the deceased and prevent unauthorized access or automated birthday notifications.

Thank you for your compassionate assistance during this difficult time.

Sincerely,
[YOUR_NAME]
Contact Email: [YOUR_EMAIL]`,
    additionalInfoBn: `মেটা মেমোরিয়ালাইজেশন ডিপার্টমেন্ট,
আমাদের একজন প্রিয়জন ইন্তেকাল করেছেন। তার স্মৃতির প্রতি শ্রদ্ধা জানাতে ও অ্যাকাউন্টের অপব্যবহার রোধে এটি মেমোরিয়ালাইজ (Remembering) অথবা স্থায়ীভাবে অপসারণ করার আবেদন জানাচ্ছি। মৃত্যুর সনদপত্র ও প্রমাণপত্র সংযুক্ত করা হলো।`,
    instructions: [
      'Choose whether you want the profile "Memorialized" (keeps memories safe) or "Permanently Removed".',
      'Immediate family members can request permanent deletion with a death certificate.',
      'Friends can request memorialization with an obituary link.'
    ],
    instructionsBn: [
      'প্রোফাইলটি মেমোরিয়াল (Remembering) রাখতে চান নাকি পার্মানেন্ট ডিলিট করতে চান তা বেছে নিন।',
      'মৃত্যু সনদ বা মৃত্যুর প্রমাণপত্র সংযুক্ত করুন।'
    ]
  },
  {
    id: 'identity-confirmation',
    folderName: 'Facebook Identity Verification',
    folderNameBn: 'আইডেন্টিটি ভেরিফিকেশন ফোল্ডার',
    category: 'disabled',
    title: 'Confirm Your Identity with Facebook (Direct ID Check)',
    titleBn: 'আইডি ভেরিফিকেশন ও কনফার্মেশন ফর্ম',
    formNumber: 'Contact Form 183000765122339',
    url: 'https://www.facebook.com/help/contact/183000765122339',
    summary: 'Direct portal to upload National ID, Driving License, or Passport to verify real name ownership.',
    summaryBn: 'নিজের নাম ও পরিচয়ের সত্যতা প্রমাণের জন্য মেটার অফিসিয়াল ডকুমেন্ট আপলোড পোর্টাল।',
    urgency: 'high',
    requiredEvidence: [
      'Clear color photograph of Government Photo ID',
      'Active phone/email registered on the account'
    ],
    additionalInfo: `Dear Meta Identity Verification Team,

I am submitting my official government identity documentation to confirm my authentic name and verify genuine profile ownership.

- Account Name: [ACCOUNT_NAME]
- Associated Email: [LOGIN_EMAIL]
- Associated Phone: [LOGIN_PHONE]

I confirm that my personal profile represents my genuine real-world identity. I have attached a certified government document displaying my legal name, photograph, and date of birth in accordance with Meta's authentic name requirements.

Please confirm identity verification and remove any temporary login restrictions.

Thank you,
[YOUR_NAME]`,
    additionalInfoBn: `মেটা আইডেন্টিটি ভেরিফিকেশন টিম,
আমার আসল নাম ও পরিচয় নিশ্চিতকরণের জন্য সরকারি আইডি কার্ড সংযুক্ত করছি। আমার অ্যাকাউন্টের তথ্যের সাথে আইডি কার্ডের তথ্য হুবহু মিলে। দয়া করে পরিচয় যাচাইকরণ সম্পন্ন করে অ্যাকাউন্টের সীমাবদ্ধতা দূর করুন।`,
    instructions: [
      'Take a clear photo with no glare or shadows on the ID card.',
      'Make sure full name and birthdate are legible.',
      'Acceptable IDs: NID, Passport, Driver License, Marriage Certificate.'
    ],
    instructionsBn: [
      'আইডি কার্ডের ছবি পরিষ্কার আলোতে তুলুন যেন কোনো রিফ্লেকশন না থাকে।',
      'নাম ও জন্মতারিখ স্পষ্টভাবে পাঠযোগ্য হতে হবে।'
    ]
  }
];
