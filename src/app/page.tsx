"use client";

import "../index.css";
import { useState } from "react";

export default function Page() {
  const [count] = useState(0);

  return (
    <>
      <span>{count}</span>
    </>
  );
}
