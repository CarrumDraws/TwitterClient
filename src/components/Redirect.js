import React, { useEffect, useState } from "react";
import {
  useSearchParams,
  useLocation,
  useNavigate,
  redirect,
} from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

function Redirect() {
  // Get Authorization Code

  const [authCode, setAuthCode] = useState("");
  const { setToken } = useAuth();

  let location = useLocation();
  let navigate = useNavigate();

  function GetAuthCode() {
    return new URLSearchParams(location.search).get("code");
  }
  useEffect(() => {
    console.log("A");
    setAuthCode(GetAuthCode);
  }, []);

  useEffect(() => {
    if (authCode) {
      console.log("B");
      GetAccessToken(authCode);
    }
  });

  async function GetAccessToken(authCode) {
    try {
      const response = await axios.post("http://localhost:5000/accesstoken", {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        data: {
          authCode: authCode,
        },
      });
      const parseRes = await response;
      if (parseRes) {
        console.log(parseRes);
        setToken(parseRes.data.access_token);
        navigate("/dashboard");
      }
    } catch (err) {
      console.log("Error!");
      console.log(err.message);
    }
  }

  return <div>Redirecting...</div>;
}

export default Redirect;
