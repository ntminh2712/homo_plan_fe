import Cookies from "universal-cookie";

interface dataCookie {
  id?: number;
}

export const addCookie = (data: dataCookie) => {
  const cookies = new Cookies();
  if (data?.id) {
    cookies.set("user_id", data?.id, { path: "/" });
  }
};
