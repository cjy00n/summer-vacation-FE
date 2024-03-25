import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Analytics } from "@vercel/analytics/react";

const JAVASCRIPT_KET = import.meta.env.VITE_APP_JAVASCRIPT_KEY;

window.Kakao.init(JAVASCRIPT_KET);
window.Kakao.isInitialized();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60, // 1시간
      cacheTime: 1000 * 60 * 10, // 10분
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <Analytics />
          <App />
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
    ,
  </React.StrictMode>,
);
