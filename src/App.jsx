import Header from "./components/Header.jsx";
import Main from "./components/main.jsx"
import { useState, useEffect} from "react";

export default function App() {
  const [isDark, setMode] = useState(
    JSON.parse(localStorage.getItem("isDark")) || false,
  );
  useEffect(() => {
    const root = document.getElementById("root");
    root.classList.toggle("dark", isDark);
    localStorage.setItem("isDark", isDark);
  }, [isDark]);
  return (
    <>
      <Header setMode={setMode} isDark={isDark} />
      <Main/>
    </>
  );
}
