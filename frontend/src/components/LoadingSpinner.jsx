import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-white/70">
      <svg
        className="animate-spin h-8 w-8 text-primary"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
    </div>
  );
};

export default LoadingSpinner;
