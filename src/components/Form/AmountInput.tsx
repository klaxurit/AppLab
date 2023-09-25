import { NetworkSelector } from "../NetworkSelector/NetworkSelector";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useState } from "react";

export const AmountInput = () => {
  const selectedNetwork = useSelector((state: RootState) => state.selectedNetwork.selectedNetwork);
  const [quantity, setQuantity] = useState(0);
  const price = quantity * (selectedNetwork ? selectedNetwork.price : 0);

  return (
    <div className="AmountInput">
      <div className="AmountInput__token">
        <input
          type="text"
          placeholder="0"
          onChange={(e) => setQuantity(Number(e.target.value))}
          value={quantity}
          className="AmountInput__tokenQuantity"
          onKeyPress={(e) => {
            if (!/[0-9]/.test(e.key)) {
              e.preventDefault();
            }
          }}
        />
        <div className="AmountInput__tokenValue">
          ${price.toFixed(2)}
        </div>
      </div>
      <NetworkSelector />
    </div>
  )
}