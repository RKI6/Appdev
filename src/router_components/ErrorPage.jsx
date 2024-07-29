import React from "react";
import { Link, useRouteError } from "react-router-dom";
function ErrorPage() {
  function navigateToHome() {
    <Link to={"/"}>Back to home</Link>;
  }
  const error = useRouteError();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height : '100vh'
      }}
    >
      <p>Error Occured ! </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button>
        <a href="/">Return to home</a>
      </button>
    </div>
  );
}

export default ErrorPage;
