import React from "react";
import { useState } from "react";

interface ConnectButtonProps {
  className?: string;
  label: string;
}

export const ConnectButton: React.FC<ConnectButtonProps> = ({ className, label }) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return(
    <button
      onClick={handleButtonClick}
      className={`${isLoading ? 'btn--loading' : ''} ${className}`}
    >
      {isLoading ? (
        <svg className="rotate" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.24" cx="14" cy="13.9998" r="9.33333" stroke="white" strokeWidth="3.2" strokeLinecap="round" />
          <path d="M23.3334 13.9998C23.3334 19.1545 19.1547 23.3332 14 23.3332C8.84536 23.3332 4.66669 19.1545 4.66669 13.9998C4.66669 8.84518 8.84536 4.6665 14 4.6665" stroke="white" strokeWidth="3.2" />
        </svg>
      ) : (
        label
      )}
    </button>
  )
}