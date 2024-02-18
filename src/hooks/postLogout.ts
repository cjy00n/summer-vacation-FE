import { instance } from ".";
import { ROUTE } from "../routes/Route";

export const postLogout = async (navigate: (path: string) => void) => {
  try {
    const response = await instance.post("/users/logout");
    if (response) {
      localStorage.remove("accessToken");
      localStorage.remove("refreshToken");

      navigate(ROUTE.LOGIN_PAGE.link);
    }
  } catch (e) {
    console.error(e);
  }
};
