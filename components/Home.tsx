
import React from 'react';
import { SERVICES } from '../constants';
import { Service } from '../types';

interface HomeProps {
  onSelectService: (service: Service) => void;
  onNavigateToAppointments: () => void;
}

const Home: React.FC<HomeProps> = ({ onSelectService, onNavigateToAppointments }) => {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-24 pt-16">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-white">Hello, Sam Dany</h1>
            <p className="text-sm opacity-60 text-slate-500 dark:text-slate-400">Welcome back!</p>
          </div>
          <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-primary">
            <img 
              alt="User Avatar" 
              className="w-full h-full bg-slate-200 dark:bg-surface-dark" 
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop"
            />
          </div>
        </header>

        <div className="mt-6 relative flex items-center">
          <input 
            className="w-full h-12 pl-4 pr-24 rounded-2xl bg-white dark:bg-surface-dark border-none focus:ring-2 focus:ring-primary text-sm shadow-sm text-slate-800 dark:text-white" 
            placeholder="Search services..." 
            type="text"
          />
          <button className="absolute right-1.5 h-9 px-5 bg-primary text-white rounded-xl text-xs font-bold uppercase tracking-wider transition hover:bg-opacity-90 active:scale-95">
            Search
          </button>
        </div>

        {/* Promo Banner */}
        <div 
          onClick={onNavigateToAppointments}
          className="mt-8 relative bg-secondary rounded-[2rem] p-6 flex items-center justify-between overflow-hidden shadow-lg group cursor-pointer transition-transform hover:scale-[1.02]"
        >
          <div className="relative z-10 w-1/2">
            <h2 className="text-4xl font-extrabold text-slate-900 leading-none font-outfit">50% OFF</h2>
            <p className="text-sm text-slate-600 mt-2 font-medium">Enjoy exclusive discounts on your first visit today!</p>
            <button className="mt-4 text-xs font-bold text-slate-900 flex items-center gap-1 group">
              CLAIM NOW <span className="material-icons-round text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-20 dark:opacity-40">
            <span className="material-icons-round text-[180px] text-slate-800 rotate-12">content_cut</span>
          </div>
          <div className="relative z-10 w-24 h-24 flex items-center justify-center">
            <span className="material-icons-round text-7xl text-slate-800">content_cut</span>
          </div>
        </div>

        {/* Services Section */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold italic tracking-wide text-slate-800 dark:text-white">Services</h3>
            <button className="text-primary text-sm font-semibold hover:underline">See all</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {SERVICES.map((service) => (
              <div 
                key={service.id}
                onClick={() => onSelectService(service)}
                className="bg-secondary p-5 rounded-[1.5rem] flex flex-col items-center justify-center text-center space-y-3 transition hover:shadow-md cursor-pointer group active:scale-95"
              >
                <div className="bg-white/50 p-3 rounded-2xl group-hover:scale-110 transition-transform">
                  <span className="material-icons-round text-4xl text-slate-800">{service.icon}</span>
                </div>
                <span className="text-slate-800 font-bold tracking-wide">{service.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Mockup */}
        <div className="mt-8 mb-4 flex justify-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600"></div>
        </div>
      </div>

      {/* Bottom Nav */}
      <nav className="absolute bottom-0 w-full bg-white dark:bg-card-dark border-t border-slate-200 dark:border-slate-800 px-8 py-4 flex justify-between items-center rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <button className="flex flex-col items-center gap-1 text-primary">
          <span className="material-icons-round">home</span>
        </button>
        <button onClick={onNavigateToAppointments} className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors">
          <span className="material-icons-round">calendar_today</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors">
          <span className="material-icons-round">notifications</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors">
          <span className="material-icons-round">person</span>
        </button>
      </nav>
    </div>
  );
};

export default Home;
