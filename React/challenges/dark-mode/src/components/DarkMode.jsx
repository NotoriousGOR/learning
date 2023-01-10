import React from "react";

export default function DarkMode() {
  return (
    <div className="page">
      <button onClick={() => {
        document.body.classList.add("dark-mode");
      }}  className="dark-mode-button">Dark Mode</button>
      <button onClick={() => {
        document.body.classList.remove("dark-mode");
      }} className="light-mode-button">Light Mode</button>
    </div>
  );
}
