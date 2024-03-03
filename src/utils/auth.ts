import { removeCookie } from "./removeCookie";

export const logout = () => {
  removeCookie();
  localStorage.clear();
};
