import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthContext from "./useAuthContext";

export const useLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);

    try {
      const response = await fetch("http://localhost:4000/api/user/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const json = await response.json();
      console.log("🚀 ~ login ~ json:", json);

      if (!response.ok) {
        setError(json.error); // now it works
        return { error: json.error }; // return an object so handleSubmit can check
      }

      // Successful login
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });

      if (json?.user?.role === "school-owner") {
        navigate("/dashboard");
      } else if (json?.user?.role === "teacher") {
        navigate("/teacherDashboard/profile");
      }

      return json; // return the data so handleSubmit sees it as success
    } catch (err) {
      console.error("Login fetch error:", err);
      setError("Something went wrong. Try again.");
      return { error: "Something went wrong. Try again." };
    }
  };

  const googleLogin = async (firstname, lastname, email, role) => {
    setError(null);
    const response = await fetch("http://localhost:4000/api/user/signup", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ firstname, lastname, email, role }),
    });
    const json = await response.json();
    if (!response.ok) {
      return json.error;
      setError(json.error);
    }
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));

      dispatch({ type: "LOGIN", payload: json });
      if (json?.user?.role === "school-owner") {
        navigate("/dashboard");
      } else if (json?.user?.role === "teacher") {
        navigate("/teacherDashboard");
      }
    }
  };

  return { login, googleLogin, error };
};
