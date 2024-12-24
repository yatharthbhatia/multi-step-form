import React from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="p-4">
      <h1>Welcome to the Multi-Step Form</h1>
      <button
        onClick={() => router.push("/form/0")}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Get Started
      </button>
    </div>
  );
}
