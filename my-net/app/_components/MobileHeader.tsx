interface MobileHeaderProps {
  onToggleSidebar: () => void;
  onToggleMessages: () => void;
}

export default function MobileHeader({ onToggleSidebar, onToggleMessages }: MobileHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-white z-20 xl:hidden">
      {/* Hamburger Menu Button */}
      <button 
        onClick={onToggleSidebar}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Toggle sidebar"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Logo/Title */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#7B61FF] rounded-lg flex justify-center items-center text-white font-bold text-sm">
          Q
        </div>
        <span className="font-bold text-lg">MyNet</span>
      </div>

      {/* Messages Button */}
      <button 
        onClick={onToggleMessages}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Toggle messages"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
    </div>
  );
}
