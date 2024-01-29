import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right"/>
      </QueryClientProvider>
  </React.StrictMode>,
)
