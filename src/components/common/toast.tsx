import { toast } from "react-toastify";

export const ToastSuccess = (message?: string, time?: number) => {
  toast["success"](message || "success", {
    position: "bottom-right",
    autoClose: time || 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const ToastError = (message?: string, time?: number) => {
  toast["error"](message || "error", {
    position: "bottom-right",
    autoClose: time || 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const ToastLoading = (message?: string, time?: number) => {
  toast["loading"](message || "loading", {
    position: "bottom-right",
    autoClose: time || 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
