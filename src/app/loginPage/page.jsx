"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const router = useRouter();
  return (
    <div>
      <h3>this is a login page</h3>
      <button onClick={() => router.push("/loginPage/forgetpassword")}>
        forget password
      </button>
    </div>
  );
};

export default Login;
