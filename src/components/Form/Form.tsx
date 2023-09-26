import React from 'react';
import { AmountInput } from './AmountInput';
import { ConnectButton } from './ConnectButton';
import TxAction from './TxAction';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ClaimTokenSelect } from './TokenSelect';

const Form: React.FC = () => {
  const selectedOption = useSelector((state: RootState) => state.form.selectedOption);

  return (
    <div className="Form">
      <div className="Form__box">
        <TxAction/>
        {selectedOption === "Stake" && 
          <>
            <AmountInput />
            <ConnectButton/>
          </>
        }
        {selectedOption === "Claim" &&
          <>
            <ClaimTokenSelect />
            <ConnectButton />
          </>
        }
        {selectedOption === "Redelegate" &&
          <>
            <ClaimTokenSelect />
            <ConnectButton />
          </>
        }
        {selectedOption === "Undelegate" &&
          <>
            <ClaimTokenSelect />
            <ConnectButton />
          </>
        }
      </div>
    </div>
  );
};

export default Form;
