import { getGamingTransactions } from '@/data/mockData';
import TransactionTable from '@/components/TransactionTable';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, CartesianGrid } from 'recharts';
import { AlertTriangle, Crosshair, TrendingUp, Anchor } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import { motion } from 'framer-motion';

const activityData = [
  { month: 'Jan', buys: 4, sells: 1 },
  { month: 'Feb', buys: 2, sells: 3 },
  { month: 'Mar', buys: 8, sells: 0 },
  { month: 'Apr', buys: 12, sells: 2 },
  { month: 'May', buys: 18, sells: 1 },
];

export default function GamingSector() {
  const gamingTx = getGamingTransactions();
  
  const totalBuy = gamingTx.filter(t => t.type === 'BUY').reduce((acc, curr) => acc + curr.value, 0);
  const totalSell = gamingTx.filter(t => t.type === 'SELL').reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="flex flex-col gap-6">
      {/* Sector Header */}
      <div className="bg-[#0A0A0A] text-[#F5F5F0] border-l-8 border-[#2E7D32] p-6 shadow-sm relative overflow-hidden">
        <div className="absolute top-4 right-4 opacity-[0.03]">
          <AlertTriangle className="w-48 h-48" />
        </div>
        <div className="relative z-10 flex items-center mb-2">
          <span className="bg-[#2E7D32] text-white px-2 py-1 text-[10px] font-mono font-bold tracking-widest mr-3 uppercase">SECTOR WATCH</span>
          <span className="font-mono text-[#2E7D32] text-[10px] uppercase font-bold">UPDATED TRADING DAY EOD</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-mono font-black mb-4 relative z-10 uppercase tracking-tight">
          GAMING & HOSPITALITY
        </h1>
        <p className="font-sans text-[11px] uppercase opacity-70 max-w-3xl mb-6 relative z-10 border-l-2 border-[#2E7D32] pl-4">
          Monitoring casino operators, NFOs (Number Forecast Operators), and related hospitality conglomerates. 
          This sector shows historically strong correlation between director accumulation and subsequent fundamental outperformance.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
          <div className="bg-[#1A1A1A] border border-white/10 p-4">
            <div className="text-[10px] font-mono text-gray-500 uppercase font-bold mb-1">Total Sector Buys (YTD)</div>
            <div className="text-xl font-mono font-bold text-[#4CAF50]">{formatCurrency(totalBuy)}</div>
          </div>
          <div className="bg-[#1A1A1A] border border-white/10 p-4">
            <div className="text-[10px] font-mono text-gray-500 uppercase font-bold mb-1">Total Sector Sells (YTD)</div>
            <div className="text-xl font-mono font-bold text-[#F44336]">{formatCurrency(totalSell)}</div>
          </div>
          <div className="bg-[#D32F2F] text-white border border-[#D32F2F] p-4 md:col-span-2">
            <div className="text-[10px] font-mono text-white/70 uppercase font-bold mb-1">Sector Thesis</div>
            <div className="font-sans text-xs italic">Post-pandemic recovery fully pricing in? Insiders seem to think otherwise, aggressively adding positions in Q2.</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          <div className="bg-[#FAF8F0] border border-black/10 shadow-sm p-4">
            <h2 className="text-xs font-mono font-bold border-b border-black/10 pb-2 mb-4 flex items-center uppercase">
              <span className="w-2 h-2 bg-[#0A0A0A] mr-2 block"></span>
              Sector Accumulation Volume (RM M)
            </h2>
            <div className="h-64 font-mono text-[10px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={activityData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#FAF8F0', color: '#0A0A0A', fontFamily: 'Courier Prime', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '0', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}
                    itemStyle={{ color: '#0A0A0A', fontWeight: 'bold' }}
                    cursor={{ stroke: '#0A0A0A', strokeWidth: 1, strokeDasharray: '3 3' }}
                  />
                  <Area type="step" dataKey="buys" stroke="#2E7D32" fill="#2E7D32" fillOpacity={0.1} strokeWidth={2} activeDot={{ r: 4, fill: '#2E7D32', stroke: 'none' }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 text-xs font-serif italic text-gray-800 flex items-start w-full">
              <Crosshair className="text-[#D32F2F] shrink-0 mr-3 mt-0.5 w-4 h-4" />
              <div>
                <strong className="font-bold text-[#1A1A1A] not-italic uppercase text-[10px] border-b border-[#D32F2F]/30 pb-0.5 mb-1 inline-block">Analyst Note</strong>
                <br/>Notice the sharp inflection in May. Historically, when multiple directors across competing entities (e.g. Genting Group and Berjaya Toto) buy simultaneously, it signals a systemic sector tailwind rather than company-specific news.
              </div>
            </div>
          </div>

          <div className="bg-[#FAF8F0] border border-black/10 shadow-sm p-4">
            <h2 className="text-xs font-mono font-bold border-b border-black/10 pb-2 mb-4 flex items-center uppercase">
               <span className="w-2 h-2 bg-[#0A0A0A] mr-2 block"></span>
               Recent Sector Transactions
            </h2>
            <TransactionTable transactions={gamingTx} compact={false} />
          </div>

        </div>

        {/* Sidebar (1 col) */}
        <div className="space-y-6">
           
           <div className="bg-[#FAF8F0] border border-black/10 shadow-sm p-4">
            <h3 className="text-xs font-mono text-[#0A0A0A] mb-3 pb-2 border-b border-black/10 font-bold uppercase flex items-center">
              <span className="w-2 h-2 bg-[#0A0A0A] mr-2 block"></span>
              Key Entities
            </h3>
            <ul className="space-y-2 font-mono text-xs">
              <li className="flex justify-between items-center bg-white p-2 border border-black/5 hover:border-black/20 cursor-pointer transition-colors">
                <span><span className="font-bold">3182</span> GENTING</span>
                <span className="text-green-600 flex items-center text-[10px] font-bold uppercase"><Anchor className="w-3 h-3 mr-1"/> Heavy Buy</span>
              </li>
              <li className="flex justify-between items-center bg-white p-2 border border-black/5 hover:border-black/20 cursor-pointer transition-colors">
                <span><span className="font-bold">4715</span> GENM</span>
                <span className="text-green-600 flex items-center text-[10px] font-bold uppercase"><Anchor className="w-3 h-3 mr-1"/> Heavy Buy</span>
              </li>
              <li className="flex justify-between items-center bg-white p-2 border border-black/5 hover:border-black/20 cursor-pointer transition-colors">
                <span><span className="font-bold">1562</span> BJTOTO</span>
                <span className="text-gray-500 flex items-center text-[10px] font-bold uppercase">Neutral</span>
              </li>
              <li className="flex justify-between items-center bg-[#f9f9f9] p-2 border border-black/5 text-gray-500">
                <span><span className="font-bold">3859</span> MAGNUM</span>
                <span className="text-[10px] font-bold uppercase">Married Deals</span>
              </li>
            </ul>
           </div>

           {/* Tier 3: Sponsored Insight Integration */}
           <motion.div 
            whileHover={{ y: -2 }}
            className="bg-[#0A0A0A] text-white border border-black/10 shadow-sm p-4"
           >
            <div className="text-[#D32F2F] text-[10px] font-mono font-bold tracking-widest mb-2 uppercase flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F] mr-2 animate-pulse"></span>
              Industry Compare Let
            </div>
            <h3 className="text-sm font-mono font-bold mb-3 leading-tight text-[#FAF8F0]">Digital Entertainment Flows vs. Land-Based Returns</h3>
            <p className="font-sans text-[11px] text-gray-400 mb-4 pb-4 border-b border-white/10 uppercase">
              While legacy Malaysian operators see accumulation, where is international capital flowing? We compare physical casino GGR models against emerging digital frameworks.
            </p>
            <a href="#" className="flex justify-between items-center group font-mono text-[10px] font-bold uppercase">
              <span className="text-white group-hover:text-[#FAF8F0] transition-colors">Read Platinum Casino's IR Note</span>
              <span className="text-[#0A0A0A] bg-[#FAF8F0] p-1 group-hover:bg-white transition-colors">&rarr;</span>
            </a>
           </motion.div>

        </div>
      </div>
    </div>
  );
}
