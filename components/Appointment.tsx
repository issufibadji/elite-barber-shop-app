
import React, { useState } from 'react';
import { BARBERS, DATES, TIMES } from '../constants';
import { AppointmentState, Barber } from '../types';

interface AppointmentProps {
  onBack: () => void;
  onBook: (details: AppointmentState) => void;
  initialService?: string;
}

const Appointment: React.FC<AppointmentProps> = ({ onBack, onBook, initialService }) => {
  const [details, setDetails] = useState<AppointmentState>({
    serviceId: initialService,
    date: '17', // Pre-selected as per screenshot
    time: '10:00 AM', // Pre-selected
    barberId: '1' // Pre-selected
  });

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Header */}
      <div className="px-6 py-4 pt-16 flex flex-col items-center">
        <div className="w-full flex justify-between items-center mb-2">
          <button 
            onClick={onBack}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-card-dark text-slate-600 dark:text-slate-400 active:scale-90 transition-transform"
          >
            <span className="material-icons-round">chevron_left</span>
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-card-dark text-slate-600 dark:text-slate-400">
            <span className="material-icons-round">more_horiz</span>
          </button>
        </div>
        <h1 className="text-3xl font-display italic text-slate-800 dark:text-white mt-2">Appointment</h1>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-24">
        {/* Select Barber */}
        <section className="mt-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">Select Barber</h2>
          <div className="grid grid-cols-2 gap-4">
            {BARBERS.map((barber) => (
              <div 
                key={barber.id}
                onClick={() => setDetails(prev => ({ ...prev, barberId: barber.id }))}
                className={`p-3 rounded-2xl border-2 transition-all cursor-pointer bg-card-light dark:bg-card-dark ${
                  details.barberId === barber.id 
                    ? 'border-primary shadow-lg shadow-primary/20 scale-[1.02]' 
                    : 'border-transparent hover:border-slate-200 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <img 
                    alt={barber.name} 
                    className="w-10 h-10 rounded-xl object-cover bg-slate-200 dark:bg-slate-700" 
                    src={barber.image}
                  />
                  <div className="flex-1 min-w-0">
                    <p className={`text-xs font-bold truncate ${details.barberId === barber.id ? 'text-primary' : 'text-slate-800 dark:text-white'}`}>
                      {barber.name}
                    </p>
                    <div className="flex text-yellow-400">
                      {[...Array(barber.rating)].map((_, i) => (
                        <span key={i} className="material-icons-round text-[10px]">star</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Choose Date */}
        <section className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">Choose the date</h2>
          <div className="bg-card-light dark:bg-card-dark rounded-2xl p-4 flex justify-between items-center shadow-sm">
            {DATES.map((date) => (
              <div 
                key={date.num}
                onClick={() => setDetails(prev => ({ ...prev, date: date.num }))}
                className={`flex flex-col items-center space-y-2 cursor-pointer transition-all p-2 rounded-xl w-12 ${
                  details.date === date.num
                    ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-110'
                    : 'text-slate-400 dark:text-slate-500 opacity-60'
                }`}
              >
                <span className="text-[10px] font-bold uppercase">{date.day}</span>
                <span className="text-sm font-bold">{date.num}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Choose Time */}
        <section className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">Choose the time</h2>
          <div className="bg-card-light dark:bg-card-dark rounded-2xl p-4 grid grid-cols-3 gap-3 shadow-sm">
            {TIMES.map((time) => (
              <button 
                key={time}
                onClick={() => setDetails(prev => ({ ...prev, time }))}
                className={`py-2 text-[10px] font-bold rounded-lg transition-all ${
                  details.time === time
                    ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105'
                    : 'bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* Footer CTA */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background-light dark:from-background-dark via-background-light dark:via-background-dark to-transparent pt-10">
        <button 
          onClick={() => onBook(details)}
          className="w-full bg-primary text-white font-bold py-4 rounded-2xl shadow-xl shadow-primary/20 active:scale-95 transition-all uppercase tracking-widest text-sm"
        >
          Book Appointment
        </button>
        <div className="w-32 h-1 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mt-6"></div>
      </div>
    </div>
  );
};

export default Appointment;
