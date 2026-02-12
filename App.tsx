
import React, { useState, useCallback } from 'react';
import Layout from './components/Layout';
import Login from './components/Login';
import Home from './components/Home';
import Appointment from './components/Appointment';
import { Screen, Service, AppointmentState } from './types';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.LOGIN);
  const [selectedService, setSelectedService] = useState<Service | undefined>();

  const handleLogin = useCallback(() => {
    setCurrentScreen(Screen.HOME);
  }, []);

  const handleSelectService = useCallback((service: Service) => {
    setSelectedService(service);
    setCurrentScreen(Screen.APPOINTMENT);
  }, []);

  const handleBook = useCallback((details: AppointmentState) => {
    console.log('Booking requested:', details);
    alert(`Success! Appointment booked for ${details.time} on the ${details.date}th.`);
    setCurrentScreen(Screen.HOME);
  }, []);

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.LOGIN:
        return <Login onLogin={handleLogin} />;
      case Screen.HOME:
        return (
          <Home 
            onSelectService={handleSelectService} 
            onNavigateToAppointments={() => setCurrentScreen(Screen.APPOINTMENT)} 
          />
        );
      case Screen.APPOINTMENT:
        return (
          <Appointment 
            onBack={() => setCurrentScreen(Screen.HOME)} 
            onBook={handleBook}
            initialService={selectedService?.id}
          />
        );
      default:
        return <Login onLogin={handleLogin} />;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-slate-950">
      <Layout>
        {renderScreen()}
        
        {/* Universal Dark Mode Toggle */}
        <div className="fixed bottom-4 right-4 z-[100] flex gap-2">
          <button 
            className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-xl text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 active:scale-90 transition-transform"
            onClick={() => document.documentElement.classList.toggle('dark')}
          >
            <span className="material-icons-round block dark:hidden">dark_mode</span>
            <span className="material-icons-round hidden dark:block">light_mode</span>
          </button>
        </div>
      </Layout>
    </div>
  );
};

export default App;
