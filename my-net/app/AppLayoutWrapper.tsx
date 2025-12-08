'use client'
import { ReactNode } from 'react';
import SideBar from './_components/SideBar';
import BurgerMenu from './_components/BurgerMenu';
import MobileHeader from './_components/MobileHeader';
import { useAppStore } from '../store/useAppStore';

interface AppLayoutWrapperProps {
  children: ReactNode;
}

export default function AppLayoutWrapper({ children }: AppLayoutWrapperProps) {
  const { 
    isSidebarOpen,
    setIsSidebarOpen,
    toggleMessagesDrawer,
    toggleSidebarDrawer
  } = useAppStore();

  return (
    <div className="w-screen h-screen font-inter relative overflow-hidden">
      {/* Desktop Layout */}
      <div className="hidden xl:grid h-full" style={{
        gridTemplateColumns: '5% 95%'
      }}>
        <SideBar />
        <div className="overflow-hidden">
          {children}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="xl:hidden h-full flex flex-col">
        <MobileHeader 
          onToggleSidebar={toggleSidebarDrawer}
          onToggleMessages={toggleMessagesDrawer}
        />
        
        <div className="flex-1 overflow-hidden">
          {children}
        </div>
      </div>

      {/* Burger Menu (Mobile Sidebar) */}
      <BurgerMenu 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
    </div>
  );
}
