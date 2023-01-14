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
      if (parseRes) {
        console.log(parseRes);
      }
    } catch (err) {
      console.log("Error!");
      console.log(err.message);
    }
  }

  function logOut(e) {
    e.preventDefault();
    localStorage.removeItem("token"); // Remove token from localStorage
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
