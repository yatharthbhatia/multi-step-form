import React from "react";
import { useRouter } from "next/router";
import Stepper from "../../components/Stepper";

export default function Step() {
  const router = useRouter();
  const { step } = router.query;
  const steps = ["Personal Info", "Address", "Preferences", "Review"];

  const currentStep = parseInt(step) || 0;

  return (
    <div className="p-4">
      <Stepper currentStep={currentStep} steps={steps} />
      <div className="mt-4">
        <h2>Step {currentStep + 1}: {steps[currentStep]}</h2>
        {/* Add step-specific content here */}
        <button
          onClick={() =>
            router.push(`/form/${Math.min(currentStep + 1, steps.length - 1)}`)
          }
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
