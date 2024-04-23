"use client";

import { useRecoilState } from "recoil";
import { useState } from "react";
import { isLoggedInState } from "../recoil/atoms/isLoggedinState";

export default function Page() {
  const [count] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  console.log(isLoggedIn);
  return (
    <>
      <span>아아아아ㅏ</span>
    </>
  );
}
