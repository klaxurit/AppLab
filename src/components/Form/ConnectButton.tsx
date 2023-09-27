import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import walletLogo from "../../assets/images/wallet_logo.svg";

interface ConnectButtonProps {
  className?: string;
  label: string;
  walletAddress?: string;
  showWalletLogo?: boolean;
}

export const ConnectButton: React.FC<ConnectButtonProps> = ({ className, label, walletAddress, showWalletLogo }) => {
  const [isLoading, setIsLoading] = useState(false);
  const walletStatus = useSelector((state: RootState) => state.wallet.status);
  const walletData = useSelector((state: RootState) => state.wallet.data);
  const formatWalletAddress = (address: string) => {
    const start = address.substr(0, 11);
    const end = address.substr(-7);
    return `${start}...${end}`;
  };

  let displayLabel = label;

  if (walletStatus === "Done" && walletAddress) {
    displayLabel = formatWalletAddress(walletAddress);
  }

  useEffect(() => {
    console.log("ISLOADING", walletStatus)
    if (walletStatus === "Pending"){
      setIsLoading(true);
    }
    setIsLoading(false)
  }, [walletStatus]);

  return(
    <button
      className={`${isLoading ? 'btn--loading' : ''} ${className}`}
    >
      {isLoading ? (
        <svg className="rotate" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.24" cx="14" cy="13.9998" r="9.33333" stroke="white" strokeWidth="3.2" strokeLinecap="round" />
          <path d="M23.3334 13.9998C23.3334 19.1545 19.1547 23.3332 14 23.3332C8.84536 23.3332 4.66669 19.1545 4.66669 13.9998C4.66669 8.84518 8.84536 4.6665 14 4.6665" stroke="white" strokeWidth="3.2" />
        </svg>
      ) : (
        <span className="ConnectButton__walletLogo">
          {walletData && showWalletLogo && <img src={walletLogo} alt="wallet logo" />}
          {displayLabel}
        </span>
      )}
    </button>
  )
}