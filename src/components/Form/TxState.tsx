import React from 'react';
import Sheet from "react-modal-sheet";
import { useState } from 'react';
import { NetworkSelector } from '../NetworkSelector/NetworkSelector';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import loader from "../../assets/images/loader2.svg";
import success from "../../assets/images/success.svg";
import failed from "../../assets/images/failed.svg";

const TxPanel: React.FC = () => {
  const [isOpen, setOpen] = useState(true);
  const [isDesktopOpen, setDesktopOpen] = useState(true);
  const { txState } = useSelector((state: RootState) => state.txState);
  const { format } = useSelector((state: RootState) => state.device);
  const selectedOption = useSelector((state: RootState) => state.form.selectedOption);
  const handleClose = () => {
    setOpen(false);
    setDesktopOpen(false);
  };
  return (
    format === "mobile" ? (
      <Sheet
        className="TxPanel"
        isOpen={isOpen}
        onClose={() => { setOpen(false); setDesktopOpen(false) }}
      >
        <Sheet.Backdrop className="TxPanel__SheetBackdrop" />
        <Sheet.Container className="TxPanel__SheetContainer">
          <Sheet.Header />
          <Sheet.Content className="TxPanel__SheetContent">
            {txState === "waiting" && (

              <>
                <div className="TxPanel__txState">
                  <img src={loader} alt="loading icon" className="TxPanel__loader rotate" />
                </div>
                <div className="TxPanel__delegationState">
                  {selectedOption === "Stake" && (
                    <p>Confirm Delegation</p>
                  )}
                  {selectedOption === "Claim" && (
                    <p>Confirm Claim</p>
                  )}
                </div>
                <div className="TxPanel__NetworkSelector">
                  <NetworkSelector />
                </div>
                <div className="TxPanel__txConfirmation">
                  <p>Proceed in your wallet</p>
                </div>
              </>
            )}
            {txState === "success" && (
              <>
                <div className="TxPanel__txState">
                  <img src={success} alt="loading icon" className="TxPanel__success" />
                </div>
                <div className="TxPanel__delegationSuccessful">
                  {selectedOption === "Stake" && (
                    <p>Delegate successful</p>
                  )}
                  {selectedOption === "Claim" && (
                    <p>Claim successful</p>
                  )}
                </div>
                <div className="TxPanel__delegatedValue">
                  <p>100 ATOM</p>
                </div>
                <div className="TxPanel__continueStaking">
                  <button className="btn__primary btn--large" onClick={handleClose}>Continue Staking</button>
                </div>
              </>
            )}
            {txState === "failed" && (
              <>
                <div className="TxPanel__txState">
                  <img src={failed} alt="loading icon" className="TxPanel__success" />
                </div>
                <div className="TxPanel__delegationFailed">
                  {selectedOption === "Stake" && (
                    <p>Delegate failed</p>
                  )}
                  {selectedOption === "Claim" && (
                    <p>Claim failed</p>
                  )}
                </div>
                <div className="TxPanel__delegatedValue">
                  <p>100 ATOM</p>
                </div>
                <div className="TxPanel__continueStaking">
                  <button className="btn__primary btn--large" onClick={handleClose}>Retry</button>
                </div>
              </>
            )}
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    ) : (
      <>
        {isDesktopOpen && (
          <div className="TxPanel__desktop">
            {txState === "waiting" && (
              <>
                <div className="TxPanel__txState">
                  <img src={loader} alt="loading icon" className="TxPanel__loader rotate" />
                </div>
                <div className="TxPanel__delegationState">
                  {selectedOption === "Stake" && (
                    <p>Confirm Delegation</p>
                  )}
                  {selectedOption === "Claim" && (
                    <p>Confirm Claim</p>
                  )}
                </div>
                <div className="TxPanel__NetworkSelector">
                  <NetworkSelector />
                </div>
                <div className="TxPanel__txConfirmation">
                  <p>Proceed in your wallet</p>
                </div>
              </>
            )}
            {txState === "success" && (
              <>
                <div className="TxPanel__txState">
                  <img src={success} alt="loading icon" className="TxPanel__success" />
                </div>
                <div className="TxPanel__delegationSuccessful">
                  {selectedOption === "Stake" && (
                    <p>Delegate successful</p>
                  )}
                  {selectedOption === "Claim" && (
                    <p>Claim successful</p>
                  )}
                </div>
                <div className="TxPanel__delegatedValue">
                  <p>100 ATOM</p>
                </div>
                <div className="TxPanel__continueStaking">
                  <button className="btn__primary btn--large" onClick={handleClose}>Continue Staking</button>
                </div>
              </>
            )}
            {txState === "failed" && (
              <>
                <div className="TxPanel__txState">
                  <img src={failed} alt="loading icon" className="TxPanel__success" />
                </div>
                <div className="TxPanel__delegationFailed">
                  {selectedOption === "Stake" && (
                    <p>Delegate failed</p>
                  )}
                  {selectedOption === "Claim" && (
                    <p>Claim failed</p>
                  )}
                </div>
                <div className="TxPanel__delegatedValue">
                  <p>100 ATOM</p>
                </div>
                <div className="TxPanel__continueStaking">
                  <button className="btn__primary btn--large" onClick={handleClose}>Retry</button>
                </div>
              </>
            )}
          </div>
        )}
      </>
    )
  );
};

export default TxPanel;
