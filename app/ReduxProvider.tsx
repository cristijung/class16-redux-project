'use client';

import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from './components/header/Header'; 
import Footer from './components/footer/Footer'; 

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </Provider>
  );
}