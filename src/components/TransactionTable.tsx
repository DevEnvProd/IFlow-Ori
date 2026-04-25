import { Transaction } from '@/data/mockData';
import { formatCurrency, formatNumber } from '@/lib/utils';
import { ArrowDownRight, ArrowUpRight, Maximize2, Repeat } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TransactionTableProps {
  transactions: Transaction[];
  compact?: boolean;
}

export default function TransactionTable({ transactions, compact = false }: TransactionTableProps) {
  const getTypeStyles = (type: Transaction['type']) => {
    switch (type) {
      case 'BUY':
        return 'bg-[#2E7D32] text-white';
      case 'SELL':
        return 'bg-[#C62828] text-white';
      case 'ESOS':
        return 'bg-blue-600 text-white';
      case 'MARRIED':
        return 'bg-gray-600 text-white';
      default:
        return 'bg-gray-400 text-white';
    }
  };

  const getRowStyle = (type: Transaction['type']) => {
    switch (type) {
      case 'BUY':
        return 'bg-green-50/30';
      case 'SELL':
        return 'bg-red-50/30';
      default:
        return '';
    }
  }

  return (
    <div className="bg-[#FAF8F0] border border-black/10 shadow-sm flex-1 overflow-x-auto flex flex-col">
      <table className="w-full text-left font-mono text-[11px] whitespace-nowrap">
        <thead className="bg-[#0A0A0A] text-[#F5F5F0] text-[10px] uppercase">
          <tr>
            <th className="px-4 py-2 font-normal">Stamp</th>
            <th className="px-4 py-2 font-normal">Company</th>
            {!compact && <th className="px-4 py-2 font-normal">Entity / Insider</th>}
            <th className="px-4 py-2 font-normal">Type</th>
            <th className="px-4 py-2 font-normal text-right">Shares</th>
            {!compact && <th className="px-4 py-2 font-normal text-right">Price</th>}
            <th className="px-4 py-2 font-normal text-right">Value (RM)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-black/5 bg-white">
          {transactions.map((tx) => (
            <tr key={tx.id} className={`hover:bg-black/[0.02] transition-colors items-center ${getRowStyle(tx.type)}`}>
              <td className="px-4 py-3 opacity-50">{tx.date}</td>
              <td className="px-4 py-3 font-bold text-black">
                <Link to={`/companies/${tx.company.code}`} className={`hover:underline ${tx.isGaming ? 'text-[#D32F2F]' : ''}`}>
                  {tx.company.name} ({tx.company.code})
                </Link>
                {tx.isGaming && !compact && (
                  <span className="ml-2 inline-flex items-center px-1 py-0.5 rounded-sm text-[8px] font-medium bg-[#D32F2F] text-white">
                    GAMING
                  </span>
                )}
              </td>
              {!compact && (
                <td className="px-4 py-3 font-bold text-gray-800">
                  <Link to={`/insiders/${tx.insider.id}`} className="hover:text-[#D32F2F] hover:underline block truncate max-w-[200px]">
                    {tx.insider.name}
                  </Link>
                  <span className="text-[9px] opacity-60 font-sans font-normal uppercase tracking-wide">{tx.insider.role}</span>
                </td>
              )}
              <td className="px-4 py-3">
                <span className={`inline-flex items-center px-1.5 py-0.5 rounded-sm text-[9px] font-bold ${getTypeStyles(tx.type)}`}>
                  {tx.type === 'BUY' ? 'ACQUISITION' : tx.type === 'SELL' ? 'DISPOSAL' : tx.type}
                </span>
              </td>
              <td className="px-4 py-3 text-right">{formatNumber(tx.shares)}</td>
              {!compact && <td className="px-4 py-3 text-right">{tx.price.toFixed(3)}</td>}
              <td className="px-4 py-3 text-right font-bold">
                {formatCurrency(tx.value)}
              </td>
            </tr>
          ))}
          {transactions.length === 0 && (
            <tr>
              <td colSpan={compact ? 5 : 7} className="px-4 py-8 text-center text-gray-500 font-sans italic">
                No filings found matching the criteria.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
