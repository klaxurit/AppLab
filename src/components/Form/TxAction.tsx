
import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedOption } from '../../store/formSlice';
import Sheet from "react-modal-sheet";
import { RootState } from '../../store';

const TxAction: React.FC = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector((state: RootState) => state.form.selectedOption);
  const {format} = useSelector((state: RootState) => state.device);
  const [isOpen, setOpen] = useState(false);

  const handleLabelClick = (newLabel: string) => {
    dispatch(setSelectedOption(newLabel));
    setOpen(false);
  };

  const renderOptions = () => (
    ['Stake', 'Claim', 'Redelegate', 'Undelegate'].map((option) => (
      <div
        key={option}
        className={`TxPanel__option ${selectedOption === option ? 'selected' : ''}`}
        onClick={() => handleLabelClick(option)}
      >
        {option}
      </div>
    ))
  );

  if (format === "mobile") {
    return (
      <>
        <div className="Form__tabs tabs" onClick={() => setOpen(true)}>
          <div className="Form__label">
            {selectedOption}
          </div>
          <div className="Form__icon">
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.00731 12.2862V12.2832L14.5688 6.72168L9.00407 12.2832L3.44257 6.72168" stroke="white" strokeWidth="1.8" />
            </svg>
          </div>
        </div>
        <Sheet
          isOpen={isOpen}
          onClose={() => setOpen(false)}
        >
          <Sheet.Backdrop className="Form__SheetBackdrop" {...{ onClick: () => setOpen(false) } as any} />
          <Sheet.Container className="Form__SheetContainer">
            <Sheet.Header />
            <Sheet.Content>
              <div className="TxPanel__content">
                <p className="TxPanel__title">Transaction</p>
                <div className="TxPanel__options">
                  {['Stake', 'Claim', 'Redelegate', 'Undelegate'].map((option, index) => (
                    <div
                      key={index}
                      className={`TxPanel__option ${selectedOption === option ? 'selected' : ''}`}
                      onClick={() => 
                        handleLabelClick(option)
                      }
                    >
                      {option}
                      {selectedOption === option && (
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.0625 9.375L9.0625 14.375L16.5625 5.625" stroke="#7950F2" strokeWidth="2" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Sheet.Content>
          </Sheet.Container>
        </Sheet>
      </>
    );
  } else {
    return (
      <div className="Form__label DesktopOnly">
        {renderOptions()}
      </div>
    );
  }
}

export default TxAction;
