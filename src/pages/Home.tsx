import { getRecentTransactions } from '@/data/mockData';
import TransactionTable from '@/components/TransactionTable';
import { AlertCircle, ArrowUpRight, ArrowDownRight, TrendingUp, Search, FileSearch } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  const recentTransactions = getRecentTransactions(6);

  return (
    <div className="flex flex-col gap-6">
      {/* Hero Section */}
      <section className="bg-[#0A0A0A] text-[#F5F5F0] p-8 md:p-12 relative overflow-hidden flex flex-col justify-center border-b border-black/20">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center rotate-[-15deg] select-none text-[80px] md:text-[120px] font-black z-0">
          CONFIDENTIAL
        </div>
        <div className="relative z-10 max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black font-mono tracking-tighter mb-4 leading-tight"
          >
            WHO'S BUYING.<br />
            <span className="text-[#D32F2F]">WHO'S SELLING.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 font-sans mb-8 max-w-xl"
          >
            Tracking the smart money across Malaysian public markets. Real-time forensic monitoring of director dealings and substantial shareholder movements.
          </motion.p>
          <div className="flex flex-wrap gap-4">
            <Link to="/transactions" className="bg-[#FAF8F0] text-black border border-black/10 px-6 py-3 font-mono font-bold hover:bg-black hover:text-white transition-colors flex items-center text-xs uppercase">
              <Search className="w-5 h-5 mr-2" />
              SEARCH FILINGS
            </Link>
            <Link to="/sectors/gaming" className="bg-[#D32F2F] text-white px-6 py-3 font-mono font-bold hover:bg-black transition-colors flex items-center text-xs uppercase border border-[#D32F2F]">
              <AlertCircle className="w-5 h-5 mr-2" />
              GAMING SECTOR ALERT
            </Link>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content (3 cols) */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          
          {/* Dashboard Stats */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#FAF8F0] border border-black/10 shadow-sm p-4 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-[10px] text-gray-500 font-bold uppercase tracking-wide">Today's Inflow</span>
                <span className="text-green-600">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
              <div>
                <div className="text-2xl font-mono font-bold text-[#2E7D32]">RM 29.8M</div>
                <div className="text-xs font-mono opacity-60 mt-1 uppercase">12 Buy Filings</div>
              </div>
            </div>

            <div className="bg-[#FAF8F0] border border-black/10 shadow-sm p-4 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-[10px] text-gray-500 font-bold uppercase tracking-wide">Today's Outflow</span>
                <span className="text-red-600">
                  <ArrowDownRight className="w-4 h-4" />
                </span>
              </div>
              <div>
                <div className="text-2xl font-mono font-bold text-[#C62828]">RM 17.4M</div>
                <div className="text-xs font-mono opacity-60 mt-1 uppercase">8 Sell Filings</div>
              </div>
            </div>

            <div className="bg-[#0A0A0A] text-white border border-black/10 shadow-sm p-4 flex flex-col justify-between relative overflow-hidden">
               <div className="absolute right-[-10px] bottom-[-10px] opacity-10">
                 <TrendingUp className="w-24 h-24" />
               </div>
              <div className="flex justify-between items-start mb-4 relative z-10">
                <span className="font-mono text-[10px] text-gray-400 font-bold uppercase tracking-wide">Buy/Sell Ratio</span>
              </div>
              <div className="relative z-10">
                <div className="text-3xl font-mono font-bold text-white">1.71</div>
                <div className="text-xs font-mono opacity-60 mt-1 uppercase text-green-400">Bullish Bias</div>
              </div>
            </div>
          </section>

          {/* Latest Filings */}
          <section className="bg-[#FAF8F0] border border-black/10 shadow-sm p-4">
            <div className="flex justify-between items-center mb-4 border-b border-black/10 pb-2">
              <h2 className="text-sm font-mono font-bold flex items-center uppercase">
                <span className="w-2 h-2 bg-[#0A0A0A] mr-2 block"></span>
                Latest Filings
              </h2>
              <Link to="/transactions" className="font-mono text-[10px] uppercase font-bold hover:text-[#D32F2F] hover:underline flex items-center opacity-60">
                VIEW ALL DIRECTORY <ArrowUpRight className="w-3 h-3 ml-1" />
              </Link>
            </div>
            
            <TransactionTable transactions={recentTransactions} />
          </section>
        </div>

        {/* Sidebar (1 col) */}
        <div className="space-y-6">
          
          {/* Gaming Watchlist Promo */}
          <div className="bg-[#0A0A0A] text-white p-4 border border-black/10 shadow-sm relative">
            <h3 className="text-xs font-mono font-bold uppercase mb-3 flex items-center gap-2">
              <span className="text-[#D32F2F]">● LIVE FEED:</span> Gaming Sector
            </h3>
            <p className="font-mono text-[10px] text-gray-400 mb-4 pb-4 border-b border-white/10 italic">
              Significant accumulation detected in Genting Group entities over the past 14 days. Board members adding to positions ahead of expected recovery.
            </p>
            <div className="space-y-3 mb-5">
              <div className="flex justify-between items-center font-mono text-sm border-b border-white/10 pb-2">
                <span className="font-bold">GENTING (3182)</span>
                <span className="text-green-400 font-bold text-[10px]">+RM 16.9M</span>
              </div>
              <div className="flex justify-between items-center font-mono text-sm border-b border-white/10 pb-2">
                <span className="font-bold">GENM (4715)</span>
                <span className="text-green-400 font-bold text-[10px]">+RM 11.4M</span>
              </div>
            </div>
            <Link to="/sectors/gaming" className="block w-full text-center bg-[#D32F2F] text-white py-2 font-mono text-[10px] font-bold hover:bg-white hover:text-black transition-colors uppercase">
              View Tracking Dashboard
            </Link>
            
            {/* Sponsored / Related Link per requirements */}
            <div className="mt-4 pt-4 border-t border-white/10 text-[9px] font-mono opacity-80 text-gray-400">
              *Note: Platinum Casino IR sentiment is currently Bullish. Review digital entertainment vs physical gaming logic.
            </div>
          </div>

          {/* Director Buy of the Week - Analyst Note Style */}
          <div className="bg-yellow-100 p-5 shadow-md rotate-[-1deg] border border-yellow-200 text-[#1A1A1A] w-full">
            <div className="text-[10px] uppercase font-bold mb-3 underline decoration-[#D32F2F]">Analyst Desk Note: High Conviction</div>
            
            <p className="font-serif italic text-xs leading-relaxed mb-4">
              We flagged a substantial buy on 14 May 2024. TAN SRI LIM KOK THAY added 2,500,000 shares to his position at roughly RM 4.85, injecting RM 12.1M of personal capital into <strong className="font-bold">GENTING</strong>.
            </p>

            <Link to="/insiders/ins-1" className="block text-right font-mono text-[10px] font-bold text-[#D32F2F] hover:underline uppercase">
              Review Dossier &rarr;
            </Link>
            <div className="mt-4 pt-3 border-t border-black/10 text-right font-mono text-[9px] opacity-60 block">
              — Forensic Desk #IFMY
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
