import navBarItems from "@/data/navBarItems";
import Link from "next/link";


interface BurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BurgerMenu({ isOpen, onClose }: BurgerMenuProps) {
  if (!isOpen) return null;

  const handleNavClick = () => {
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 transition-opacity xl:hidden"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white z-50 shadow-2xl transform transition-transform xl:hidden">
        <div className="flex flex-col h-full py-6 px-4">
          {/* Header with Logo and Close Button */}
          <div className="flex justify-between items-center mb-8">
            <Link href="/" onClick={handleNavClick}>
              <div className="w-12 h-12 bg-[#7B61FF] rounded-xl flex justify-center items-center text-white font-bold text-xl cursor-pointer">
                Q
              </div>
            </Link>
            <button 
              onClick={onClose} 
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex flex-col gap-6 flex-1">
            {navBarItems.map((item, i) => (
                <Link key={i} href={item.href} onClick={handleNavClick}>
                    <div  
                        className="flex items-center gap-4 p-3 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
                    >
                        <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                        <span className="text-base font-medium">{item.name}</span>
                    </div>
                </Link>
            ))}
          </nav>

          {/* Settings */}
          <Link href="/settings" onClick={handleNavClick}>
            <div className="flex items-center gap-4 p-3 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors mt-auto">
              <img src="./navbar/settings.svg" alt="settings" className="w-6 h-6 object-contain" />
              <span className="text-base font-medium">Settings</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
