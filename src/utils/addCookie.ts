import Cookies from "universal-cookie";

interface dataCookie {
  user_Id?: string;
  user_Name?: string;
  full_Name?: string;
  email?: string;
  avatar_path?: string;
  reference_Id?: string;
}

export const addCookie = (data: dataCookie) => {
  const cookies = new Cookies();
  if (data?.user_Id) {
    cookies.set("user_id", data?.user_Id, { path: "/" });
  }
  if (data?.user_Name) {
    cookies.set("user_name", data?.user_Name, { path: "/" });
  }
  if (data?.full_Name) {
    cookies.set("full_name", data?.full_Name, { path: "/" });
  }
  if (data?.email) {
    cookies.set("email", data?.email, { path: "/" });
  }
  if (data?.avatar_path) {
    cookies.set("avatar_path", data?.avatar_path, { path: "/" });
  }
  if (data?.reference_Id) {
    cookies.set("reference_id", data?.reference_Id, { path: "/" });
  }
};
