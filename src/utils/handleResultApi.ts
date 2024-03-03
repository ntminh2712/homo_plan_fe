import { ToastError, ToastSuccess } from "../components/common/toast";
import { removeCookie } from "./removeCookie";

export const handleResultApi = (response: any) => {
  if (!response) {
    return;
  }
  if (!response.status) {
    return response.message !== ""
      ? ToastError(response.message)
      : ToastError("Network error");
  }
  if (response.message !== "") {
    return response.status
      ? ToastSuccess(response.message)
      : ToastError(response.message);
  }
};
