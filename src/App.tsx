import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.page';
import RQSuperHeroesPage from './components/RQSuperHeros.page';
import SuperHeroesPage from './components/SuperHeros.page';
import Root from './routes/root';
function App() {
  return (
    <BrowserRouter>
     <Root />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/super-heroes" element={<SuperHeroesPage />} />
        <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App

/**
 * 
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import App from './App.tsx'
import Root from "./routes/root";
import Home from './components/Home.page'

import  RQSuperHeroesPage from './components/RQSuperHeros.page'
import  SuperHeroesPage  from './components/SuperHeros.page'

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/home",
    element: <Home />
  }, 
  {
    path: '/super-heroes',
    element: <SuperHeroesPage />
  }, 
  {
    path: '/rq-super-heroes',
    element: <RQSuperHeroesPage />
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <Root />
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right"/>
    </QueryClientProvider>
  </React.StrictMode>
);

 */