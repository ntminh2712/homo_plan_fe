import { toast } from "react-toastify";

export const ToastSuccess = (message?: string, time?: number) => {
  toast["success"](message || "success", {
    position: "top-right",
    autoClose: time || 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const ToastError = (message?: string, time?: number) => {
  toast["error"](message || "error", {
    position: "top-right",
    autoClose: time || 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const ToastLoading = (message?: string, time?: number) => {
  toast["loading"](message || "loading", {
    position: "top-right",
    autoClose: time || 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
