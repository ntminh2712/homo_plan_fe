import React, { useState } from "react";
import logo from "./logo.svg";
import "./styles/global.css";
import "./styles/loading.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import { QueryClient, QueryClientProvider } from "react-query";
import { handleResultApi } from "./utils/handleResultApi";
import Loading from "./components/common/loading";
import { RecoilRoot } from "recoil";

function App() {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: false,
          onError: (result: any) => {
            handleResultApi(result.response?.data);
          },
        },
        mutations: {
          onSuccess: (result) => {
            handleResultApi(result);
          },
          onError: (result: any) => {
            handleResultApi(result.response?.data);
          },
        },
      },
    })
  );
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Loading />
        <BrowserRouter>
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
