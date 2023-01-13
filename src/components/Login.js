import React, { useEffect, useState } from "react";

// "https://twitter.com/i/oauth2/authorize?response_type=code&client_id=QmdUek1xLWNOampYVktWSU9QaVk6MTpjaQ&state=state&scope=tweet.read%20tweet.write%20users.read&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2FDashboard&code_challenge=challenge&code_challenge_method=plain"
// "https://twitter.com/i/oauth2/authorize?scope=tweet.read%20tweet.write%20users.read&response_type=code&client_id=QmdUek1xLWNOampYVktWSU9QaVk6MTpjaQ&state=state&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2FDashboard&code_challenge=challenge&code_challenge_method=plain"
function Login() {
  const params = new URLSearchParams({
    response_type: "code",
    client_id: "QmdUek1xLWNOampYVktWSU9QaVk6MTpjaQ",
    state: "state",
    // scope: "tweet.read+tweet.write+users.read", // Not percent-encoding spaces correctly
    redirect_uri: "http://localhost:3000/redirect",
    code_challenge: "challenge",
    code_challenge_method: "plain",
  });
  const queries = params.toString();

  return (
    <div>
      Login
      <br />
      <a
        href={
          "https://twitter.com/i/oauth2/authorize?" +
          "scope=tweet.read%20tweet.write%20users.read&" +
          queries
        }
        target="_blank"
        rel="noreferrer"
      >
        Log in to Twitter
      </a>
    </div>
  );
}

export default Login;
