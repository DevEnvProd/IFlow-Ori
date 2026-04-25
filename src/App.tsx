/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Transactions from './pages/Transactions';
import GamingSector from './pages/GamingSector';
import InsiderProfile from './pages/InsiderProfile';
import CompanyProfile from './pages/CompanyProfile';

// Placeholder components for other routes
const Placeholder = ({ title }: { title: string }) => (
  <div className="p-8 border border-black/10 bg-[#FAF8F0] shadow-sm">
    <h1 className="text-2xl font-mono font-bold mb-4 uppercase">{title}</h1>
    <p className="font-sans text-sm">This section is currently being compiled from public data sources.</p>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'transactions', element: <Transactions /> },
      { path: 'sectors/gaming', element: <GamingSector /> },
      { path: 'insiders/:id', element: <InsiderProfile /> },
      { path: 'companies/:id', element: <CompanyProfile /> },
      { 
        path: 'learn', 
        element: (
          <div className="flex flex-col gap-6 max-w-4xl">
            <h1 className="text-3xl font-mono font-black border-l-4 border-black pl-4 mb-2">EDUCATIONAL FORENSICS</h1>
            <div className="bg-[#FAF8F0] p-6 border border-black/10 shadow-sm">
              <h2 className="text-sm font-mono font-bold mb-4 uppercase flex items-center"><span className="w-2 h-2 bg-[#0A0A0A] mr-2 block"></span>Interpreting Director Buy Signals</h2>
              <p className="font-sans text-[11px] uppercase mb-4 opacity-80 leading-relaxed">Not all insider buys are created equal. A routine monthly purchase as part of a compensation plan carries significantly less weight than a sudden, ad-hoc millions-of-ringgit buy by a CFO who hasn't bought shares in three years.</p>
              <ul className="list-disc pl-5 font-mono text-[10px] uppercase space-y-2 text-gray-600">
                <li><strong className="text-black">The Cluster Effect:</strong> When multiple directors buy in the same week, probability of strong upcoming quarterly numbers increases drastically.</li>
                <li><strong className="text-black">Value vs Volume:</strong> A RM 5M buy is a strong signal. Ten RM 5k buys scattered across months is noise.</li>
              </ul>
            </div>
          </div>
        )
      },
      { 
        path: 'about', 
        element: (
          <div className="max-w-3xl flex flex-col gap-6">
            <h1 className="text-3xl font-mono font-black">ABOUT INSIDER FLOW MY</h1>
            <p className="font-sans text-sm">We scrape, structure, and analyze Form 1325 and substantial shareholder filings published on Bursa Malaysia to find the real story behind price movements.</p>
            <div className="bg-[#0A0A0A] text-white p-6 font-mono text-[10px] border border-black/10 shadow-sm uppercase leading-relaxed">
              <span className="text-[#D32F2F] font-bold block mb-2">DISCLAIMER:</span> All data presented is extracted from public regulatory filings. This platform does not provide investment advice. Always conduct your own clinical due diligence before acting on trading signals.
            </div>
          </div>
        )
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
