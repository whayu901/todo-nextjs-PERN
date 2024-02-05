"use client";

import { useRouter } from "next/navigation";

const Register = () => {
  const route = useRouter();

  const handleClickButton = () => {
    route.push("/");
  };
  return (
    <div>
      <p>This is Register</p>
      <button onClick={handleClickButton}>Back to Home</button>
    </div>
  );
};

export default Register;
