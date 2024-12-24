import React from "react";

export default function Stepper({ currentStep, steps }) {
  return (
    <div className="flex space-x-4 mb-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`px-4 py-2 rounded ${
            index === currentStep ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          {step}
        </div>
      ))}
    </div>
  );
}
