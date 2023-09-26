import { RootState } from "../../store";
import { useSelector } from "react-redux";
import Cosmos from "../../assets/images/cosmos.svg";

export const TokenSelect: React.FC = () => {
  const selectedNetwork = useSelector((state: RootState) => state.selectedNetwork.selectedNetwork);
  const selectedOption = useSelector((state: RootState) => state.form.selectedOption);

  const renderContent = () => {
    switch (selectedOption) {
      case "Claim":
        return <p className="TokenSelect__networkInfo">Connect wallet to claim</p>;
      case "Redelegate":
        return <p className="TokenSelect__networkInfo">Connect wallet to redelegate</p>;
      case "Undelegate":
        return <p className="TokenSelect__networkInfo">Connect wallet to undelegate</p>;
      default:
        return null;
    }
  };

  return(
    <div className="TokenSelect">
      <div className="TokenSelect__network">
        <div className="TokenSelect__networkLogo">
          <img src={selectedNetwork ? selectedNetwork.logo : Cosmos} alt="Network logo" />
        </div>
        {renderContent()}
      </div>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.0073 13.095V13.0916L16.1867 6.91211L10.0037 13.0916L3.82422 6.91211" stroke="#4E495F" strokeWidth="2" />
      </svg>
    </div>
  )
}