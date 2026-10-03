import React, { useState } from 'react';
import { 
  Bookmark, 
  Trash2, 
  Copy, 
  Check, 
  Plus, 
  ExternalLink, 
  Download, 
  Upload, 
  Search,
  FileText
} from 'lucide-react';

export interface VaultItem {
  id: string;
  title: string;
  category: string;
  url: string;
  script: string;
  createdAt: string;
}

interface PersonalVaultProps {
  vaultItems: VaultItem[];
  lang: 'en' | 'bn';
  onDeleteItem: (id: string) => void;
  onAddItem: (item: Omit<VaultItem, 'id' | 'createdAt'>) => void;
  onCopyText: (text: string, title: string, type: 'info' | 'link' | 'all') => void;
}

export const PersonalVault: React.FC<PersonalVaultProps> = ({
  vaultItems,
  lang,
  onDeleteItem,
  onAddItem,
  onCopyText,
}) => {
  const [isAdding, setIsAdding] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Custom');
  const [newUrl, setNewUrl] = useState('');
  const [newScript, setNewScript] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredItems = vaultItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.script.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newScript.trim()) return;

    onAddItem({
      title: newTitle.trim(),
      category: newCategory.trim() || 'Custom',
      url: newUrl.trim() || 'https://www.facebook.com/help',
      script: newScript.trim(),
    });

    setNewTitle('');
    setNewUrl('');
    setNewScript('');
    setIsAdding(false);
  };

  const handleExport = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(vaultItems, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `meta-report-vault-${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleCopy = (item: VaultItem) => {
    onCopyText(item.script, item.title, 'info');
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
            <Bookmark className="w-4 h-4" />
            <span>{lang === 'en' ? 'Personal Local Storage Vault' : 'ব্যক্তিগত সংরক্ষিত ভল্ট'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {lang === 'en' ? 'Saved Report Links & Templates' : 'আপনার সংরক্ষিত কাস্টম স্ক্রিপ্ট ও লিংক'}
          </h2>
          <p className="text-sm text-slate-300 mt-1">
            {lang === 'en'
              ? 'Scripts saved here persist directly in your browser without requiring an external account.'
              : 'এখানে সেভ করা স্ক্রিপ্ট ও লিংক আপনার ব্রাউজারে সুরক্ষিত থাকবে, যে কোনো সময় সহজে কপি করতে পারবেন।'}
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          {vaultItems.length > 0 && (
            <button
              onClick={handleExport}
              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Export all saved templates as JSON"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Export Backup' : 'ব্যাকআপ ডাউনলোড'}</span>
            </button>
          )}

          <button
            onClick={() => setIsAdding(!isAdding)}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center gap-1.5 transition-all shadow-md shadow-blue-600/20 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>{lang === 'en' ? 'Add Custom Script' : 'নতুন স্ক্রিপ্ট যোগ করুন'}</span>
          </button>
        </div>
      </div>

      {/* Add New Form (Collapsible) */}
      {isAdding && (
        <form
          onSubmit={handleCreate}
          className="mb-8 bg-slate-900 border border-blue-500/40 rounded-xl p-5 sm:p-6 shadow-xl space-y-4 animate-in fade-in duration-200"
        >
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Plus className="w-4 h-4 text-blue-400" />
              {lang === 'en' ? 'Create New Custom Report Template' : 'নতুন কাস্টম রিপোর্ট টেমপ্লেট সংরক্ষণ করুন'}
            </h3>
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="text-xs text-slate-400 hover:text-white"
            >
              {lang === 'en' ? 'Cancel' : 'বাতিল'}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-slate-300 mb-1">
                {lang === 'en' ? 'Template Title' : 'স্ক্রিপ্টের নাম / শিরোনাম'} *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. My Custom Page Impersonation Appeal"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                {lang === 'en' ? 'Category' : 'ক্যাটাগরি'}
              </label>
              <input
                type="text"
                placeholder="e.g. Impersonation / Hacked"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              {lang === 'en' ? 'Associated Facebook Report URL' : 'ফেসবুক রিপোর্ট লিংক'}
            </label>
            <input
              type="url"
              placeholder="https://www.facebook.com/help/contact/..."
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              {lang === 'en' ? 'Additional Info Text (Script Content)' : 'অতিরিক্ত বিবরণ বা আপিল স্ক্রিপ্ট'} *
            </label>
            <textarea
              required
              rows={4}
              placeholder="Paste your custom appeal or report description text here..."
              value={newScript}
              onChange={(e) => setNewScript(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-white font-mono placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="px-4 py-2 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
            >
              {lang === 'en' ? 'Cancel' : 'বাতিল'}
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-bold rounded-lg bg-blue-600 hover:bg-blue-500 text-white"
            >
              {lang === 'en' ? 'Save to Vault' : 'ভল্টে সংরক্ষণ করুন'}
            </button>
          </div>
        </form>
      )}

      {/* Search Filter if has items */}
      {vaultItems.length > 0 && (
        <div className="mb-6 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder={lang === 'en' ? 'Search your saved templates...' : 'সংরক্ষিত স্ক্রিপ্ট খুঁজুন...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
          />
        </div>
      )}

      {/* List / Empty State */}
      {vaultItems.length === 0 ? (
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-12 text-center">
          <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 mx-auto mb-3">
            <Bookmark className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-white mb-1">
            {lang === 'en' ? 'Your Personal Vault is Empty' : 'আপনার ভল্টে এখনো কোনো স্ক্রিপ্ট নেই'}
          </h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto mb-4">
            {lang === 'en'
              ? 'Generate a custom script in the Generator and click "Save to Personal Vault" or manually create one here.'
              : 'কাস্টম স্ক্রিপ্ট বিল্ডার থেকে অথবা উপরের "নতুন স্ক্রিপ্ট যোগ করুন" বাটনে ক্লিক করে আপনার প্রয়োজনীয় স্ক্রিপ্ট সংরক্ষণ করুন।'}
          </p>
          <button
            onClick={() => setIsAdding(true)}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg inline-flex items-center gap-1.5 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>{lang === 'en' ? 'Add First Script' : 'প্রথম স্ক্রিপ্ট যোগ করুন'}</span>
          </button>
        </div>
      ) : filteredItems.length === 0 ? (
        <div className="text-center py-10 text-slate-400 text-xs">
          {lang === 'en' ? 'No saved items match your search.' : 'আপনার সার্চের সাথে কোনো ফলাফল মেলেনি।'}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-blue-400 uppercase tracking-wider text-[11px]">
                      {item.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono text-slate-500 text-[11px]">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <button
                    onClick={() => onDeleteItem(item.id)}
                    className="text-slate-500 hover:text-red-400 p-1 transition-colors cursor-pointer"
                    title="Delete item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>

                {item.url && (
                  <div className="flex items-center justify-between bg-slate-950 px-3 py-1.5 rounded text-xs font-mono text-slate-400 mb-3 border border-slate-800">
                    <span className="truncate">{item.url}</span>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-blue-400 hover:text-blue-300 shrink-0"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}

                <pre className="max-h-40 overflow-y-auto p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs font-mono text-slate-200 whitespace-pre-wrap leading-relaxed mb-4">
                  {item.script}
                </pre>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-mono tabular-nums">
                  {item.script.length} chars
                </span>

                <button
                  onClick={() => handleCopy(item)}
                  className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedId === item.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-white" />
                      <span>{lang === 'en' ? 'Copied!' : 'কপি হয়েছে!'}</span>
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
          ))}
        </div>
      )}
    </div>
  );
};
