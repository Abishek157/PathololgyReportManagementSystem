import { useState } from "react";
import { useNavigate } from "react-router-dom";

const usePathologySignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const naviagte = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      email: email,
      password: password,
    };
    try {
      const response = await fetch(" http://localhost:3000/pathologysignup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Handle the response
      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);
        naviagte("/login");
      } else {
        console.error("Login failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
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

export default usePathologySignUp;
