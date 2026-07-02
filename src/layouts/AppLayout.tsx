import { useState } from "react";
import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import ToggleView from "../components/ToggleView";

function AppLayout() {
  const { state } = useNavigation();
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("THEME") || "false");
  });

  return (
    <div
      className={`${darkMode ? "dark" : ""} min-h-screen w-full bg-background dark:bg-white text-white dark:text-black flex flex-col items-center select-none `}
    >
      {state === "loading" && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/10">
          <div className="w-25 h-25 border-5 border-[hsl(200,100%,10%)] border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      <header className="flex">
        <h1 className="m-5 text-2xl md:text-5xl">Minesweeper</h1>
        <ToggleView theme={darkMode} toggleTheme={setDarkMode} />
      </header>

      <main className="flex flex-col items-center">
        <Outlet />
      </main>

      <ScrollRestoration />
    </div>
  );
}

export default AppLayout;
