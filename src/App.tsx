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
import Education from './pages/Education';
import ArticleDetail from './pages/ArticleDetail';
import About from './pages/About';

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
      { path: 'learn', element: <Education /> },
      { path: 'learn/:id', element: <ArticleDetail /> },
      { path: 'about', element: <About /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
