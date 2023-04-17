import { useState } from "react";
import DarkTheme from "./DarkTheme";

export default function ThemeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const text = isDarkMode ? "Light Mode" : "Dark Mode";
  console.log(isDarkMode);
  return (
    <>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>{text}</button>
      <style jsx>
        {`
          button {
            background: none;
            color: inherit;
            border: none;
            cursor: pointer;
          }
        `}
      </style>
      {isDarkMode && <DarkTheme />}
    </>
  );
}
