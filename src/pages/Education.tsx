import React from 'react';
import { Link } from 'react-router-dom';
import { getArticles } from '../data/articles';
import { BookOpen } from 'lucide-react';

export default function Education() {
  const articles = getArticles();

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto">
      <div className="bg-[#0A0A0A] text-[#F5F5F0] p-8 shadow-sm relative overflow-hidden border-b border-white/10">
        <div className="absolute right-4 top-4 opacity-[0.03]">
          <BookOpen className="w-48 h-48" />
        </div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-mono font-black mb-2 uppercase tracking-tight">EDUCATIONAL FORENSICS</h1>
          <p className="font-sans text-[11px] uppercase opacity-70 max-w-2xl mb-4">
            Master the fundamentals of digital gaming and platform analysis.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-[#FAF8F0] border border-black/10 shadow-sm flex flex-col hover:border-black/30 transition-colors">
            <div className="h-40 overflow-hidden border-b border-black/10">
              <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <div className="text-[10px] font-mono text-[#D32F2F] font-bold mb-2 uppercase">{new Date(article.date).toLocaleDateString('en-MY', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
              <h2 className="text-sm font-mono font-bold mb-2 uppercase leading-snug line-clamp-2">{article.title}</h2>
              <p className="font-sans text-[11px] text-gray-600 mb-4 line-clamp-3 opacity-80">{article.excerpt}</p>
              <div className="mt-auto">
                <Link to={`/learn/${article.id}`} className="text-[10px] font-mono font-bold text-black border border-black/10 p-2 hover:bg-black hover:text-white transition-colors uppercase inline-block">
                  Read Article &rarr;
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
