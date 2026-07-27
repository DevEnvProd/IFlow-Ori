import React from 'react';
import { Shield, Database, History, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto pb-12">
      <div className="bg-[#0A0A0A] text-[#F5F5F0] p-8 md:p-12 shadow-sm border-b border-white/10 relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-[0.03] w-64 h-64 transform translate-x-16 -translate-y-16">
          <Shield className="w-full h-full" />
        </div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-mono font-black mb-4 uppercase tracking-tight">ABOUT INSIDER FLOW MALAYSIA</h1>
          <p className="font-sans text-sm md:text-base uppercase opacity-80 max-w-2xl leading-relaxed">
            The premier platform for financial forensic journalism and institutional-grade tracking of director dealings, substantial shareholder movements, and public market insiders on Bursa Malaysia.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
        <div className="bg-[#FAF8F0] p-6 md:p-8 border border-black/10 shadow-sm flex flex-col">
          <div className="text-[#D32F2F] mb-4">
            <Target className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-mono font-bold mb-4 uppercase">Our Introduction</h2>
          <p className="font-sans text-sm text-gray-700 leading-relaxed mb-4">
            Insider Flow Malaysia bridges the information asymmetry gap in the Malaysian equities market. We systematically scrape, structure, and analyze Form 1325 and substantial shareholder filings published on Bursa Malaysia to reveal the authentic narrative driving price movements.
          </p>
          <p className="font-sans text-sm text-gray-700 leading-relaxed">
            By transforming raw, unstructured regulatory disclosures into highly structured, actionable intelligence, we empower retail and institutional participants to monitor smart money and insider confidence with clinical precision.
          </p>
        </div>

        <div className="bg-[#FAF8F0] p-6 md:p-8 border border-black/10 shadow-sm flex flex-col">
          <div className="text-[#D32F2F] mb-4">
            <History className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-mono font-bold mb-4 uppercase">Our History</h2>
          <p className="font-sans text-sm text-gray-700 leading-relaxed mb-4">
            Established as a response to the opaque nature of manual exchange filing extraction, Insider Flow began as a proprietary forensic tool utilized by a small cohort of private equity researchers.
          </p>
          <p className="font-sans text-sm text-gray-700 leading-relaxed">
            Over the years, the architecture evolved to process millions of historical transactions across the entire Bursa ecosystem. Today, it stands as an independent beacon of financial transparency, democratizing access to crucial insider flow data and algorithmic relationship mapping between directors, syndicates, and public corporations.
          </p>
        </div>
      </div>

      <div className="bg-white p-6 md:p-8 border border-black/10 shadow-sm mx-4 md:mx-0">
        <div className="flex items-center gap-3 mb-6 border-b border-black/10 pb-4">
          <Database className="w-6 h-6 text-[#D32F2F]" />
          <h2 className="text-xl font-mono font-bold uppercase">Methodology & Data Integrity</h2>
        </div>
        <div className="space-y-4 font-sans text-sm text-gray-700 leading-relaxed">
          <p>
            Our ingestion pipelines operate strictly on publicly mandated regulatory filings. Each transaction record, volume block, and price point is cryptographically traced back to the original source document submitted to the exchange.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4 font-mono text-[11px] uppercase tracking-wide">
            <li>Continuous monitoring of Form 1325 and 137, Substantial Shareholder Notices</li>
            <li>Real-time aggregation of Director Dealings & Options Exercises</li>
            <li>Cross-referencing entities to expose beneficial ownership chains</li>
          </ul>
        </div>
      </div>

      <div className="bg-[#0A0A0A] text-white p-6 md:p-8 font-mono text-[10px] sm:text-xs border border-black/10 shadow-sm mx-4 md:mx-0 uppercase leading-relaxed tracking-wider">
        <span className="text-[#D32F2F] font-bold block mb-3 text-sm flex items-center gap-2">
          <span className="w-2 h-2 bg-[#D32F2F] rounded-full animate-pulse"></span>
          REGULATORY DISCLAIMER
        </span>
        <p className="opacity-80">
          All data presented on this platform is extracted programmatically from public regulatory filings. Insider Flow Malaysia functions exclusively as an aggregator and structural analyzer of public domain data. This platform does not provide investment advice, financial planning, or buy/sell recommendations. Always conduct your own clinical due diligence and consult with a licensed financial advisor before acting on any trading signals or insider patterns identified herein.
        </p>
      </div>
    </div>
  );
}
