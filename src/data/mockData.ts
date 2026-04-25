export type TransactionType = 'BUY' | 'SELL' | 'ESOS' | 'MARRIED';

export interface Transaction {
  id: string;
  date: string;
  company: {
    name: string;
    code: string;
    sector: string;
  };
  insider: {
    id: string;
    name: string;
    role: string;
  };
  type: TransactionType;
  shares: number;
  price: number;
  value: number;
  isGaming?: boolean;
}

export const transactions: Transaction[] = [
  {
    id: 'tx-101',
    date: '2024-05-14',
    company: { name: 'GENTING', code: '3182', sector: 'Gaming' },
    insider: { id: 'ins-1', name: 'TAN SRI LIM KOK THAY', role: 'Chairman/CEO' },
    type: 'BUY',
    shares: 2500000,
    price: 4.85,
    value: 12125000,
    isGaming: true
  },
  {
    id: 'tx-102',
    date: '2024-05-13',
    company: { name: 'GENM', code: '4715', sector: 'Gaming' },
    insider: { id: 'ins-2', name: 'KWAP', role: 'Substantial Shareholder' },
    type: 'BUY',
    shares: 4200000,
    price: 2.72,
    value: 11424000,
    isGaming: true
  },
  {
    id: 'tx-103',
    date: '2024-05-12',
    company: { name: 'MAYBANK', code: '1155', sector: 'Finance' },
    insider: { id: 'ins-3', name: 'EPF BOARD', role: 'Substantial Shareholder' },
    type: 'SELL',
    shares: 1500000,
    price: 9.80,
    value: 14700000,
  },
  {
    id: 'tx-104',
    date: '2024-05-10',
    company: { name: 'TENAGA', code: '5347', sector: 'Utilities' },
    insider: { id: 'ins-4', name: 'DATUK SERI AMIR HAMZAH', role: 'Director' },
    type: 'ESOS',
    shares: 500000,
    price: 11.20,
    value: 5600000,
  },
  {
    id: 'tx-105',
    date: '2024-05-09',
    company: { name: 'BJTOTO', code: '1562', sector: 'Gaming' },
    insider: { id: 'ins-5', name: 'TAN SRI VINCENT TAN', role: 'Substantial Shareholder' },
    type: 'BUY',
    shares: 1000000,
    price: 1.55,
    value: 1550000,
    isGaming: true
  },
  {
    id: 'tx-106',
    date: '2024-05-08',
    company: { name: 'YTL', code: '4677', sector: 'Utilities/Conglomerate' },
    insider: { id: 'ins-6', name: 'DATO SRI MICHAEL YEOH', role: 'Director' },
    type: 'SELL',
    shares: 800000,
    price: 3.45,
    value: 2760000,
  },
  {
    id: 'tx-107',
    date: '2024-05-05',
    company: { name: 'GENTING', code: '3182', sector: 'Gaming' },
    insider: { id: 'ins-1', name: 'TAN SRI LIM KOK THAY', role: 'Chairman/CEO' },
    type: 'BUY',
    shares: 1000000,
    price: 4.80,
    value: 4800000,
    isGaming: true
  },
   {
    id: 'tx-108',
    date: '2024-05-03',
    company: { name: 'MAGNUM', code: '3859', sector: 'Gaming' },
    insider: { id: 'ins-7', name: 'DATO SURIN Upatkoon', role: 'Director' },
    type: 'MARRIED',
    shares: 5000000,
    price: 1.15,
    value: 5750000,
    isGaming: true
  }
];

export const getGamingTransactions = () => transactions.filter(t => t.isGaming);
export const getRecentTransactions = (limit = 5) => [...transactions].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit);
