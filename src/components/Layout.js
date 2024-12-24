import React from "react";
import DarkModeToggle from "./DarkModeToggle";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 bg-gray-100 dark:bg-gray-800">
        <h1 className="text-xl font-bold">Multi-Step Form</h1>
        <DarkModeToggle />
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="p-4 bg-gray-100 dark:bg-gray-800 text-center">
        © 2024 Multi-Step Form Project
      </footer>
    </div>
  );
}
