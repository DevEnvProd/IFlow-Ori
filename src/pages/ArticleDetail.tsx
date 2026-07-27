import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticleById } from '../data/articles';
import { ArrowLeft } from 'lucide-react';

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const article = id ? getArticleById(id) : undefined;

  if (!article) {
    return (
      <div className="flex flex-col gap-6 max-w-3xl mx-auto text-center py-20">
        <h1 className="text-2xl font-mono font-bold">ARTICLE NOT FOUND</h1>
        <Link to="/learn" className="text-[10px] font-mono font-bold hover:underline uppercase text-[#D32F2F]">
          &larr; Back to Education
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto">
      <Link to="/learn" className="text-[10px] font-mono font-bold hover:underline uppercase text-gray-500 flex items-center mb-2">
        <ArrowLeft className="w-3 h-3 mr-1" /> Back to Directory
      </Link>
      
      <div className="bg-[#FAF8F0] border border-black/10 shadow-sm overflow-hidden">
        <div className="h-64 md:h-80 w-full relative">
          <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-[10px] font-mono text-white/80 font-bold mb-2 uppercase tracking-widest">{new Date(article.date).toLocaleDateString('en-MY', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
            <h1 className="text-2xl md:text-4xl font-mono font-black text-white uppercase leading-tight">{article.title}</h1>
          </div>
        </div>
        
        <div className="p-6 md:p-10">
          <div className="prose prose-sm md:prose-base max-w-none font-sans text-gray-800 leading-relaxed space-y-4" dangerouslySetInnerHTML={{ __html: article.content.replace(/\\n/g, '<br />') }} />
        </div>
      </div>
    </div>
  );
}
