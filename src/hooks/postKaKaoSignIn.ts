import axios from "axios";
import { instance } from ".";
// import { useNavigate } from "react-router-dom";
// import { useMutation } from "react-query";

export const postKaKaoSignIn = async (code: string, redirectUrl: string) => {
  try {
    const response = await axios.post(`/api/users/sign-in/kakao`, {
      code,
      redirectUrl,
    });
    console.log(response);
  } catch (e) {
    console.error(e);
  }
};

// export function usePostKaKaoSignIn(code:string, redirectUrl:string) {
//   const navigate = useNavigate();

//   return useMutation(() => postKaKaoSignIn(code, redirectUrl), {
//     onSuccess: (response) => {
//       const token = response.data.token;
//     },

//     onError: (error) => {
//       showAlert("Error", error.response.data.message, "error", () => {});
//     },
//   });
// }
