
import React, { useState } from 'react';
import { Screen } from '../types';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simplified login check
    onLogin();
  };

  return (
    <div className="h-full flex flex-col px-8 pt-20 pb-12 overflow-y-auto no-scrollbar">
      <div className="flex flex-col items-center mb-12">
        <div className="w-32 h-32 mb-6 flex items-center justify-center text-slate-800 dark:text-white">
          <svg className="w-full h-full fill-current" viewBox="0 0 100 100">
            <path d="M50 15c-12 0-22 10-22 22 0 10 7 18 16 21-2 2-4 5-4 8 0 5 4 9 9 9s9-4 9-9c0-3-2-6-4-8 9-3 16-11 16-21 0-12-10-22-22-22zm0 4c10 0 18 8 18 18 0 8-5 15-13 17l-1 1c-1 1-1 3-1 4v1c0 3-2 5-5 5s-5-2-5-5v-1c0-1 0-3-1-4l-1-1c-8-2-13-9-13-17 0-10 8-18 18-18z"></path>
            <path d="M30 65c0 8 10 15 20 15s20-7 20-15h-40zM45 45c-2 0-4 1-5 3-1-2-3-3-5-3s-4 1-5 3c-1-2-3-3-5-3-3 0-5 2-5 5s10 10 20 10 20-7 20-10-2-5-5-5zm-20 3c1 0 2 1 2 2s-1 2-2 2-2-1-2-2 1-2 2-2zm10 0c1 0 2 1 2 2s-1 2-2 2-2-1-2-2 1-2 2-2zm10 0c1 0 2 1 2 2s-1 2-2 2-2-1-2-2 1-2 2-2z" opacity="0.4"></path>
            <path d="M28 65c-3 0-5 2-5 5 0 8 12 14 27 14s27-6 27-14c0-3-2-5-5-5h-44z"></path>
          </svg>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-primary text-[8px]">★</span>
            <span className="text-primary text-[8px]">★</span>
            <span className="text-primary text-[8px]">★</span>
            <h1 className="text-3xl font-display font-bold uppercase tracking-widest text-slate-800 dark:text-white px-2">
              Barber Shop
            </h1>
            <span className="text-primary text-[8px]">★</span>
            <span className="text-primary text-[8px]">★</span>
            <span className="text-primary text-[8px]">★</span>
          </div>
          <div className="w-full h-0.5 bg-slate-800 dark:bg-white mb-4"></div>
          <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed max-w-[250px] mx-auto italic">
            Premium grooming for the modern gentleman. Experience excellence in every cut.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex-grow flex flex-col gap-5">
        <div>
          <label className="block text-[10px] uppercase tracking-widest font-semibold text-slate-400 dark:text-slate-500 mb-2 ml-1">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-slate-100 dark:bg-surface-dark border border-slate-200 dark:border-slate-700/50 text-slate-800 dark:text-white px-5 py-4 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
            placeholder="Enter your username"
            type="text"
            required
          />
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-widest font-semibold text-slate-400 dark:text-slate-500 mb-2 ml-1">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-slate-100 dark:bg-surface-dark border border-slate-200 dark:border-slate-700/50 text-slate-800 dark:text-white px-5 py-4 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
            placeholder="••••••••"
            type="password"
            required
          />
        </div>
        <div className="flex justify-end">
          <button type="button" className="text-xs text-primary font-medium hover:underline">Forgot Password?</button>
        </div>
        <button
          type="submit"
          className="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-4 rounded-2xl mt-4 shadow-lg shadow-primary/20 active:scale-[0.98] transition-all uppercase tracking-widest text-sm"
        >
          Login
        </button>
      </form>

      <div className="mt-auto pt-8 text-center">
        <p className="text-slate-500 dark:text-slate-400 text-xs">
          Don't have an account? 
          <button className="text-primary font-semibold ml-1 hover:underline">Sign Up</button>
        </p>
      </div>
    </div>
  );
};

export default Login;
