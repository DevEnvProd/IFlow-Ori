import { ReactNode, useState, useEffect } from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { FileSearch, TrendingUp, AlertTriangle, BookOpen, Building2, Menu, X } from 'lucide-react';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dateStr, setDateStr] = useState('');

  useEffect(() => {
    setDateStr(new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).replace(/ /g, '-').toUpperCase());
  }, []);

  const navLinks = [
    { to: '/', label: 'TERMINAL', icon: TrendingUp },
    { to: '/transactions', label: 'ARCHIVE', icon: FileSearch },
    { to: '/sectors/gaming', label: 'GAMING WATCH', icon: AlertTriangle },
    { to: '/learn', label: 'EDUCATION', icon: BookOpen },
    { to: '/about', label: 'ABOUT', icon: Building2 },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[#D32F2F] selection:text-white bg-[#EBF0E8] text-[#1A1A1A]">
      {/* Top Navigation / Forensic Header */}
      <header className="flex items-center justify-between px-4 lg:px-6 py-4 border-b border-black/20 bg-[#0A0A0A] text-[#F5F5F0] sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="bg-[#D32F2F] text-white px-2 py-1 text-xs font-mono font-bold tracking-tighter hidden sm:block">TOP SECRET</div>
          <NavLink to="/" className="text-xl lg:text-2xl font-mono font-bold tracking-tight hover:opacity-80 transition-opacity">INSIDER FLOW MY</NavLink>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-xs font-mono uppercase tracking-widest opacity-80">
          {navLinks.map((link) => (
             <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `hover:opacity-100 transition-opacity flex items-center ${isActive ? 'border-b border-[#D32F2F] opacity-100 text-white' : ''}`
                }
             >
                {link.label}
             </NavLink>
          ))}
          <span className="hidden lg:inline border-l border-white/20 pl-6">System Status: <span className="text-green-500">Live</span></span>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Sub-Header Utility */}
      <div className="hidden md:flex items-center justify-between px-6 py-2 bg-white/50 border-b border-black/10 text-[10px] font-mono sticky top-[65px] z-40 backdrop-blur-sm">
        <div className="flex gap-4 opacity-60 uppercase">
          <span>Session: {dateStr}</span>
          <span>Source: Bursa Malaysia Filings</span>
          <span>Region: MY-KLSE</span>
        </div>
        <div className="text-[#D32F2F] font-bold uppercase animate-pulse">
          ● Tracking 42 active whale movements today
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-white/20">
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block pl-3 pr-4 py-2 border-l-4 text-base font-mono ${
                      isActive
                        ? 'border-[#D32F2F] text-white bg-white/5'
                        : 'border-transparent text-gray-400 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  <div className="flex items-center uppercase tracking-wider">
                    <Icon className="w-5 h-5 mr-3 opacity-70" />
                    {link.label}
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
        <Outlet />
      </main>

      {/* Regulatory Footer */}
      <footer className="px-4 lg:px-6 py-4 bg-[#FAF8F0] border-t border-black/10 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono opacity-80 mt-auto gap-4">
        <div className="hidden sm:block">&copy; {new Date().getFullYear()} INSIDER FLOW MY • Independent Financial Forensic Journalism</div>
        <div className="flex flex-wrap justify-center gap-4 text-gray-600">
          <Link to="/about" className="hover:text-black">TERMS OF SERVICE</Link>
          <Link to="/learn" className="hover:text-black">METHODOLOGY</Link>
          <span className="font-bold">DISCLAIMER: NOT FINANCIAL ADVICE</span>
        </div>
        <div className="hidden md:block">BUILD: v2.4.0-STABLE</div>
      </footer>
    </div>
  );
}
