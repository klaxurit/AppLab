import { RootState } from "../../store";
import { useSelector } from "react-redux";
import Cosmos from "../../assets/images/cosmos.svg";

export const ClaimTokenSelect: React.FC = () => {
  const selectedNetwork = useSelector((state: RootState) => state.selectedNetwork.selectedNetwork);

  return(
    <div className="ClaimTokenSelect">
      <div className="ClaimTokenSelect__network">
        <div className="ClaimTokenSelect__networkLogo">
          <img src={selectedNetwork ? selectedNetwork.logo : Cosmos} alt="Network logo" />
        </div>
        <p className="ClaimTokenSelect__networkInfo">Connect wallet to claim</p>
      </div>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.0073 13.095V13.0916L16.1867 6.91211L10.0037 13.0916L3.82422 6.91211" stroke="#4E495F" strokeWidth="2" />
      </svg>
    </div>
  )
}