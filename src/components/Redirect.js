import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

function Redirect() {
  // Get Authorization Code
  const { setLoggedIn } = useAuth();

  let location = useLocation();
  let navigate = useNavigate();

  function GetAuthCode() {
    return new URLSearchParams(location.search).get("code");
  }

  useEffect(() => {
    let authCode = GetAuthCode();
    if (authCode) {
      console.log("Authcode is: " + authCode);
      GetAccessToken(authCode);
    }
  }, []);

  async function GetAccessToken(authCode) {
    try {
      const response = await axios.post("http://localhost:5000/accessToken", {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        data: {
          authCode: authCode,
        },
      });
      const res = await response;
      if (res.data.access_token) {
        console.log("Redirect Success");
        setLoggedIn(true);
        localStorage.setItem("accessToken", res.data.access_token);
        localStorage.setItem("refreshToken", res.data.refresh_token);
        navigate("/dashboard");
      }
    } catch (err) {
      console.log("GetAccessToken Client Failure");
      console.log(err.message);
    }
  }

  return <div>Redirecting...</div>;
}

export default Redirect;
