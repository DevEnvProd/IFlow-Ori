import { useParams, Link } from 'react-router-dom';
import { transactions } from '@/data/mockData';
import TransactionTable from '@/components/TransactionTable';
import { formatCurrency } from '@/lib/utils';
import { Building2, TrendingUp, AlertCircle, ArrowRight } from 'lucide-react';

export default function CompanyProfile() {
  const { id } = useParams();
  
  // Default to GENTING for demo
  const code = id || '3182';
  const companyName = code === '4715' ? 'GENM' : 'GENTING';
  
  const companyTx = transactions.filter(t => t.company.code === code || code === '3182');
  
  const buyRatio = 8.5; // Demo data

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="bg-[#0A0A0A] text-[#F5F5F0] p-8 md:p-12 shadow-sm relative overflow-hidden border-b border-white/10">
        <div className="absolute right-8 top-8 opacity-[0.03]">
          <Building2 className="w-64 h-64" />
        </div>
        <div className="relative z-10">
          <div className="flex gap-2 text-[10px] font-mono font-bold mb-4 uppercase">
            <span className="bg-[#D32F2F] text-white px-2 py-1">HQ RECORD</span>
            {companyTx[0]?.isGaming && <span className="bg-[#2E7D32] text-white px-2 py-1">GAMING SECTOR</span>}
          </div>
          <h1 className="text-3xl md:text-5xl font-black font-mono tracking-tighter mb-2">{companyName}</h1>
          <p className="font-mono text-sm opacity-60 mb-6 uppercase">Bursa Malaysia: {code}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 pt-6 border-t border-white/10">
            <div>
              <div className="text-[10px] font-mono text-gray-500 uppercase font-bold mb-1">Buy/Sell Ratio (12M)</div>
              <div className="text-3xl font-mono font-bold text-[#4CAF50]">{buyRatio}:1</div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-gray-500 uppercase font-bold mb-1">Recent Cluster Buys</div>
              <div className="text-3xl font-mono font-bold text-[#D32F2F]">YES</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="bg-[#FAF8F0] border border-black/10 shadow-sm p-4">
            <h2 className="text-xs font-mono font-bold border-b border-black/10 pb-2 mb-4 flex items-center uppercase">
              <span className="w-2 h-2 bg-[#0A0A0A] mr-2 block"></span> Complete Filing History
            </h2>
            <TransactionTable transactions={companyTx} />
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-[#FAF8F0] border border-black/10 shadow-sm p-4 text-[#0A0A0A]">
            <h3 className="text-xs font-mono font-bold border-b border-black/10 pb-2 mb-3 uppercase flex items-center text-[#D32F2F]">
              <span className="w-1.5 h-1.5 bg-[#D32F2F] rounded-full mr-2"></span> Sector Signals
            </h3>
            <p className="font-sans text-[11px] text-gray-700 mb-4 tracking-wide uppercase opacity-80">
              When reviewing {companyName}'s accumulation patterns, you must contextualize them against the broader gaming/hospitality thesis.
            </p>
            <Link to="/sectors/gaming" className="flex items-center justify-between text-[10px] font-mono font-bold text-black border border-black/10 p-2 hover:bg-black hover:text-white transition-colors uppercase">
              <span>View Sector Analysis</span>
              <span>&rarr;</span>
            </Link>
          </div>
          
          {companyTx[0]?.isGaming && (
            <div className="bg-white border border-dashed border-black/20 p-4 text-[10px] font-mono space-y-2">
               <span className="font-bold text-[#D32F2F] uppercase block mb-1">SIMILAR OPPORTUNITIES:</span>
               <p className="text-gray-500 italic">Consider exploring offshore unlisted digital comparables, such as <a href="#" className="underline font-bold text-[#0A0A0A] hover:text-[#D32F2F]">Platinum Casino</a>, which provide leading indicators for land-based recovery velocity in the sector.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
