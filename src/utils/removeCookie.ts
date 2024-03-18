import Cookies from "universal-cookie";

export const removeCookie = () => {
  const cookies = new Cookies();

  cookies.remove("user_id", { path: "/" });
  cookies.remove("user_name", { path: "/" });
  cookies.remove("full_name", { path: "/" });
  cookies.remove("email", { path: "/" });
  cookies.remove("avatar_path", { path: "/" });
};
