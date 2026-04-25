import { useParams } from 'react-router-dom';
import { transactions } from '@/data/mockData';
import TransactionTable from '@/components/TransactionTable';
import { formatCurrency } from '@/lib/utils';
import { User, ShieldAlert, BarChart } from 'lucide-react';

export default function InsiderProfile() {
  const { id } = useParams();
  
  // Fake robust data for demo
  const insiderName = "TAN SRI LIM KOK THAY";
  const insiderRole = "Chairman/CEO";
  const insiderCompany = "GENTING (3182)";
  
  const insiderTx = transactions.filter(t => t.insider.id === id || id === 'ins-1'); // Default to ins-1 for demo
  
  const totalBuy = insiderTx.filter(t => t.type === 'BUY').reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto">
      {/* Header Profile */}
      <div className="bg-[#FAF8F0] border border-black/10 shadow-sm p-8 relative overflow-hidden">
        <div className="absolute right-[-20px] top-[-20px] opacity-[0.03]">
          <User className="w-64 h-64" />
        </div>
        <div className="relative z-10">
          <div className="flex gap-2 text-[10px] font-mono font-bold mb-4 uppercase">
            <span className="bg-black text-white px-2 py-1">DOSSIER</span>
            <span className="bg-[#D32F2F] text-white px-2 py-1">PUBLIC RECORD</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black font-mono tracking-tighter mb-2">{insiderName}</h1>
          <p className="font-mono text-sm opacity-60 mb-6 uppercase">{insiderRole} &mdash; <span className="font-bold text-black opacity-100">{insiderCompany}</span></p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-black/10">
            <div>
              <div className="text-[10px] font-mono text-gray-500 uppercase font-bold mb-1">Total Accumulation (YTD)</div>
              <div className="text-2xl font-mono font-bold text-[#2E7D32]">{formatCurrency(16925000)}</div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-gray-500 uppercase font-bold mb-1">Success Rate (Est.)</div>
              <div className="text-2xl font-mono font-bold text-[#0A0A0A]">84.2%</div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-gray-500 uppercase font-bold mb-1">Style</div>
              <div className="text-lg font-mono font-bold text-[#0A0A0A] uppercase">Contrarian</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FAF8F0] border border-black/10 shadow-sm p-4">
        <h2 className="text-xs font-mono font-bold border-b border-black/10 pb-2 mb-4 flex items-center uppercase">
          <span className="w-2 h-2 bg-[#0A0A0A] mr-2 block"></span>
          Recent Filings Timeline
        </h2>
        <TransactionTable transactions={insiderTx} compact />
      </div>

      <div className="bg-yellow-100 border border-yellow-200 p-5 shadow-sm rotate-[-1deg]">
        <h2 className="text-[10px] font-mono font-bold pb-2 mb-2 flex items-center text-[#D32F2F] uppercase underline decoration-[#D32F2F]">
          Analyst Desk Note
        </h2>
        <p className="font-serif italic text-xs leading-relaxed text-[#1A1A1A]">
          Significant accumulation detected over the last 14 days. This represents the largest consecutive buying spree by this director since March 2020. 
        </p>
        <div className="mt-4 pt-3 border-t border-black/10 text-right font-mono text-[9px] opacity-60 block uppercase">
          — Forensic Desk #IFMY
        </div>
      </div>
    </div>
  );
}
