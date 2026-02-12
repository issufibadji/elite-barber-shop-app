
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="phone-frame bg-background-light dark:bg-background-dark border-[8px] border-slate-800 dark:border-slate-900 relative flex flex-col">
      {/* Status Bar */}
      <div className="absolute top-0 w-full px-8 py-3 flex justify-between items-center z-50">
        <span className="text-xs font-semibold text-slate-800 dark:text-white">13:55</span>
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-sm text-slate-800 dark:text-white">signal_cellular_alt</span>
          <span className="material-symbols-outlined text-sm text-slate-800 dark:text-white">wifi</span>
          <span className="material-icons-round text-sm text-slate-800 dark:text-white">battery_full</span>
        </div>
      </div>
      
      {children}

      {/* iOS Home Indicator */}
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-800/20 dark:bg-white/20 rounded-full z-50"></div>
    </div>
  );
};

export default Layout;
