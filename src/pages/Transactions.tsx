import { useState } from 'react';
import { transactions, TransactionType } from '@/data/mockData';
import TransactionTable from '@/components/TransactionTable';
import { Filter, Search, Download } from 'lucide-react';

export default function Transactions() {
  const [filterType, setFilterType] = useState<TransactionType | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTransactions = transactions.filter((tx) => {
    const matchesSearch = 
      tx.company.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      tx.company.code.includes(searchQuery) ||
      tx.insider.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = filterType === 'ALL' || tx.type === filterType;
    
    return matchesSearch && matchesType;
  });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-black/20 pb-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-mono font-bold tracking-tight mb-2 uppercase border-l-4 border-[#0A0A0A] pl-3">MASTER LEDGER</h1>
          <p className="font-sans text-[11px] uppercase opacity-60 max-w-2xl text-black">
            Complete archive of Form 1325 and substantial shareholder disclosures. Search by company, insider name, or filter by transaction type.
          </p>
        </div>
        <button className="bg-[#FAF8F0] border border-black/10 px-4 py-2 font-mono text-xs font-bold flex items-center hover:bg-black hover:text-white transition-colors">
          <Download className="w-4 h-4 mr-2" />
          EXPORT CSV
        </button>
      </div>

      <div className="bg-[#FAF8F0] border border-black/10 shadow-sm p-4 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-9 pr-3 py-2 border border-black/10 bg-white focus:outline-none focus:border-black font-mono text-[11px]"
            placeholder="SEARCH COMPANY NAME, CODE OR INSIDER..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
          <Filter className="w-4 h-4 text-gray-500 hidden md:block" />
          {(['ALL', 'BUY', 'SELL', 'ESOS', 'MARRIED'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-3 py-1.5 font-mono text-[10px] font-bold whitespace-nowrap border ${
                filterType === type 
                  ? 'bg-[#0A0A0A] text-white border-black' 
                  : 'bg-white text-black border-black/10 hover:border-black'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full">
        <TransactionTable transactions={filteredTransactions} />
        
        <div className="mt-4 flex justify-between items-center text-[10px] uppercase font-mono opacity-60">
          <div>SHOWING {filteredTransactions.length} OF {transactions.length} RECORDS</div>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-black/10 hover:bg-gray-100 disabled:opacity-50" disabled>PREV</button>
            <button className="px-3 py-1 border border-black/10 hover:bg-gray-100 disabled:opacity-50" disabled>NEXT</button>
          </div>
        </div>
      </div>
    </div>
  );
}
