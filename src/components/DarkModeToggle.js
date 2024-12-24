import React, { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 border rounded dark:bg-gray-700 bg-gray-200"
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
