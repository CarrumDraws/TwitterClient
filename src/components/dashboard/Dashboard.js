import React, { useEffect, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";

function Dashboard() {
  async function postTweet() {
    try {
      const response = await fetch("http://localhost:5000/postTweet", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer UVR4YlpQdnZMcTRJdFI3all3TWZpU2R6TGtnUHRwQk9ZSVZSLS1xWGIzcDZtOjE2NzMyMzM3MDk2NDQ6MTowOmF0OjE",
        },
      });
      const parseRes = await response.json(); // Get Token
      if (parseRes) {
        console.log(parseRes);
      }
    } catch (err) {
      console.log("Error!");
      console.log(err.message);
    }
  }

  return (
    <div>
      Dashbaord
      <br />
      <button onClick={() => postTweet()}>Post Tweet</button>
      Dashboard
    </div>
  );
}

export default Dashboard;
