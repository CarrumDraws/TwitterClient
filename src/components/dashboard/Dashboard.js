import React, { useEffect, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // Maybe pass in useAuth as prop instead
import axios from "axios";

function Dashboard() {
  const { setLoggedIn } = useAuth();

  async function postTweet() {
    try {
      const response = await axios.post("http://localhost:5000/postTweet", {
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          text: "Hellooo",
          token: localStorage.getItem("accessToken"),
        },
      });
      const parseRes = await response; // Get Token
      console.log(parseRes);
    } catch (err) {
      console.log(err.message);
    }
  }

  async function revokeRefreshToken() {
    try {
      const response = await axios.post("http://localhost:5000/revokeToken", {
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          text: "Hellooo",
          token: localStorage.getItem("accessToken"),
        },
      });
      const parseRes = await response; // Get Token
      console.log(parseRes);
    } catch (err) {
      console.log(err.message);
    }
  }

  function logOut(e) {
    console.log("Logging Out");
    e.preventDefault();
    localStorage.removeItem("accessToken"); // Remove accessToken from localStorage
    localStorage.removeItem("refreshToken"); // Remove refreshToken from localStorage
    setLoggedIn(false);
  }

  return (
    <div>
      Dashboard
      <br />
      <button onClick={() => postTweet()}>Post Tweet</button>
      <br />
      <button onClick={(e) => logOut(e)}>Log Out</button>
    </div>
  );
}

export default Dashboard;
