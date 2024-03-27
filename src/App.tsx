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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastError, ToastSuccess } from "./components/common/toast";

function App() {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: false,
          onError: (result: any) => {
            ToastError(result.response?.data ?? "Network error");
          },
        },
        mutations: {
          onSuccess: (result: any) => {
            ToastSuccess(result.response?.data);
          },
          onError: (result: any) => {
            ToastError(result.response?.data ?? "Network error");
          },
        },
      },
    })
  );
  toast.clearWaitingQueue();
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Loading />
        <ToastContainer />
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
