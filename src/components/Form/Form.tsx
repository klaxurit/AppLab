import React from 'react';
import { AmountInput } from './AmountInput';
import { ConnectButton } from './ConnectButton';
import TxAction from './TxAction';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { TokenSelect } from './TokenSelect';

const Form: React.FC = () => {
  const selectedOption = useSelector((state: RootState) => state.form.selectedOption);

  return (
    <div className="Form">
      <div className="Form__box">
        <TxAction/>
        {selectedOption === "Stake" && 
          <>
            <AmountInput />
            <ConnectButton className="Form__button btn--medium btn__shade" label="Connect Wallet" />
          </>
        }
        {(selectedOption === "Claim" || selectedOption === "Redelegate" || selectedOption === "Undelegate") &&
          <>
            <TokenSelect />
            <ConnectButton className="Form__button btn--medium btn__shade" label="Connect Wallet" showWalletLogo={false} />
          </>
        }
      </div>
    </div>
  );
};

export default Form;
