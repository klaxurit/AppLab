import Cosmos from "../../assets/images/cosmos.svg";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { NetworksList } from "./NetworksList";

export const NetworkSelector = () => {
  const [isOpen, setOpen] = useState(false);
  const selectedNetwork = useSelector((state: RootState) => state.selectedNetwork.selectedNetwork);

  return (
    <div className="NetworkSelector">
      <div className="NetworkSelector__network" onClick={() => setOpen(true)}>
        <div className="NetworkSelector__networkSelector tabs">
          <div className="NetworkSelector__networkLogo">
            <img src={selectedNetwork ? selectedNetwork.logo : Cosmos} alt="Network logo" />
          </div>
          <div className="NetworkSelector__networkTokenLabel">
            {selectedNetwork ? selectedNetwork.tokenName : 'ATOM'}
          </div>
        </div>
      </div>
      <NetworksList isOpen={isOpen} setOpen={setOpen} />
    </div>
  )
}