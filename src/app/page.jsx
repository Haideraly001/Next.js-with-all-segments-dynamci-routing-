"use client";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Hello world </h1>
      <button onClick={() => router.push("/loginPage")}>Login page</button>
    </div>
  );
};

export default page;
