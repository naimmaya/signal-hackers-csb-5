import React from 'react';
import { CheckCircle2, Copy } from 'lucide-react';

interface ToastProps {
  message: string;
  subMessage?: string;
  isVisible: boolean;
}

export const Toast: React.FC<ToastProps> = ({ message, subMessage, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-900 border border-emerald-500/40 text-slate-100 px-4 py-3 rounded-xl shadow-2xl shadow-emerald-950/40 animate-in fade-in slide-in-from-bottom-3 duration-200">
      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
        <CheckCircle2 className="w-5 h-5" />
      </div>
      <div>
        <p className="text-sm font-semibold text-white flex items-center gap-1.5">
          {message}
        </p>
        {subMessage && (
          <p className="text-xs text-slate-400 mt-0.5">{subMessage}</p>
        )}
      </div>
    </div>
  );
};
