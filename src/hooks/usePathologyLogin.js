import { useState } from "react";
import { useNavigate } from "react-router-dom";

const usePathologyLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const naviagte = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      email: email,
      password: password,
    };
    console.log(payload);

    try {
      const response = await fetch("http://localhost:3000/pathologylogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        naviagte("/");
      } else {
        console.error("Login failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
  };
};

export default usePathologyLogin;
