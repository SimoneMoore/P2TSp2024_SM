import React from "react";
import { Routes, Route } from "react-router-dom";
import DocumentMeta from 'react-document-meta';
import MainPage from "./Pages/Main";
import NotFound from "./Pages/NotFound";

function App() {
  const meta = {
    title: 'Simone Moore Portfolio',
    description: 'Invested in ethical solutions for the future of tech. Lets get to work.',
    canonical: 'http://localhost:3000',
    meta: {
      charset: 'utf-8',
      name: {
        viewport: `width=device-width, initial-scale=1.0`,
        keywords: `react,meta,document,html,tags`
      }
    }
  };

  return (
    <DocumentMeta {...meta}>
      <section className="content-container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
      </DocumentMeta>
  )
}

export default App
