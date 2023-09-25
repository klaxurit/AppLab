import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../store";
import { closeHelp, closeSidebar } from "../../store/helpSlice";
import Sheet from "react-modal-sheet";

const Help: React.FC = () => {
  const isHelpOpen = useSelector((state: RootState) => state.help.isHelpOpen);
  const isSidebarOpen = useSelector((state: RootState) => state.help.isSidebarOpen);
  const dispatch = useDispatch();
  const { format } = useSelector((state: RootState) => state.device);
  const handleClose = () => {
    if (isHelpOpen) dispatch(closeHelp());
    if (isSidebarOpen) dispatch(closeSidebar());
  };

  return (
    <div className="Help">
      {(format === "mobile" || format === "tablet") &&
        (
          <Sheet isOpen={isHelpOpen} onClose={handleClose}>
            <Sheet.Backdrop className="Help__SheetBackdrop" {...{ onClick: () => handleClose() } as any} />
            <Sheet.Container className="Help__SheetContainer">
              <Sheet.Header />
              <Sheet.Content>
                <Sheet.Scroller>
                  <div className="Help__content">
                    <div className="Help__head">
                      <h1 className="Help__headTitle">Get Help</h1>
                      <p className="Help__headDesc">Understand the transaction types and become the Master of Staking</p>
                    </div>
                    <div className="Help__cards">
                      <div className="Help__stake">
                        <span className="Help__icon">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.8125 10.002H16.1841M16.1841 10.002H16.1875M16.1841 10.002L10.0073 3.8252L16.1841 10.0056L10.0073 16.1824" stroke="#9A78FF" strokeWidth="2.4" />
                          </svg>
                        </span>
                        <h1 className="Help__title">Stake</h1>
                        <p className="Help__desc">Make your assets grow by delegating them to StakeLab. You will earn a variable percentage of rewards on the asset delegated</p>
                      </div>
                      <div className="Help__claim">
                        <span className="Help__icon">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.0082 3.8125V16.1894M10.0082 16.1894V16.1928M10.0082 16.1894L16.1877 10.01L10.0046 16.1894L3.8252 10.01" stroke="#9A78FF" strokeWidth="2.4" />
                          </svg>
                        </span>
                        <h1 className="Help__title">Claim</h1>
                        <p className="Help__desc">Get your rewards on your account. You can continue to make them bloom by delegating them again</p>
                      </div>
                      <div className="Help__redelegate">
                        <span className="Help__icon">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.11887 9.58914L2.93196 9.41237L4.11887 9.58914ZM9.23469 16.4954L9.05793 17.6823H9.05793L9.23469 16.4954ZM11.0251 4.47332L10.8484 5.66023L11.0251 4.47332ZM13.1679 6.66748L14.106 7.41588L15.6028 5.53983L14.6647 4.79143L13.1679 6.66748ZM15.6044 6.68594L15.9294 7.84109L17.0846 7.51608L16.7596 6.36093L15.6044 6.68594ZM2.93196 9.41237C2.33993 13.3877 5.08261 17.0903 9.05793 17.6823L9.41146 15.3085C6.74717 14.9117 4.90899 12.4302 5.30578 9.7659L2.93196 9.41237ZM11.2019 3.28641C7.22657 2.69437 3.524 5.43706 2.93196 9.41237L5.30578 9.7659C5.70257 7.10161 8.18407 5.26344 10.8484 5.66023L11.2019 3.28641ZM14.6647 4.79143C13.6949 4.01764 12.5139 3.48181 11.2019 3.28641L10.8484 5.66023C11.731 5.79168 12.5198 6.15034 13.1679 6.66748L14.6647 4.79143ZM9.05793 17.6823C12.6796 18.2217 16.073 15.9941 17.0974 12.5879L14.7991 11.8966C14.1131 14.1777 11.837 15.6697 9.41146 15.3085L9.05793 17.6823ZM16.7596 6.36093L15.318 1.23749L13.0077 1.88751L14.4493 7.01095L16.7596 6.36093ZM15.2794 5.53079L10.156 6.97232L10.806 9.28262L15.9294 7.84109L15.2794 5.53079Z" fill="#9A78FF" />
                          </svg>
                        </span>
                        <h1 className="Help__title">Redelegate</h1>
                        <p className="Help__desc">Change your delegation to another validator. Come delegate to StakeLab for less commission on your rewards</p>
                      </div>
                      <div className="Help__unstake">
                        <span className="Help__icon">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.8159 10.002H16.1875H3.8125M3.8159 10.002H3.8125M3.8159 10.002L9.99269 3.8252M3.8125 10.002L9.99269 3.8252M3.8125 10.002L9.99269 16.1824L3.8159 10.0056L9.99269 3.8252" stroke="#9A78FF" strokeWidth="2.4" />
                          </svg>
                        </span>
                        <h1 className="Help__title">Unstake</h1>
                        <p className="Help__desc">Stop delegating your assets. You will enter an unbonding period of few days without earning anymore rewards from them</p>
                      </div>
                    </div>
                  </div>
                </Sheet.Scroller>
                <div className="Help__buttonWrapper">
                  <button className="Help__button btn--medium btn__shade">Got it</button>
                  <a href="" className="Help__link">Learn more</a>
                </div>
              </Sheet.Content>
            </Sheet.Container>
          </Sheet>
        )} {format === "desktop" && (
          <aside className={isSidebarOpen ? 'Help__sidebar--open' : 'Help__sidebar--closed'}>
            <div className="Help__sidebarWrapper">
              <div className="Help__content">
                <div className="Help__head">
                  <h1 className="Help__headTitle">Get Help</h1>
                  <p className="Help__headDesc">Understand the transaction types and become the Master of Staking</p>
                </div>
                <div className="Help__cards">
                  <div className="Help__stake">
                    <span className="Help__icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.8125 10.002H16.1841M16.1841 10.002H16.1875M16.1841 10.002L10.0073 3.8252L16.1841 10.0056L10.0073 16.1824" stroke="#9A78FF" strokeWidth="2.4" />
                      </svg>
                    </span>
                    <h1 className="Help__title">Stake</h1>
                    <p className="Help__desc">Make your assets grow by delegating them to StakeLab. You will earn a variable percentage of rewards on the asset delegated</p>
                  </div>
                  <div className="Help__claim">
                    <span className="Help__icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0082 3.8125V16.1894M10.0082 16.1894V16.1928M10.0082 16.1894L16.1877 10.01L10.0046 16.1894L3.8252 10.01" stroke="#9A78FF" strokeWidth="2.4" />
                      </svg>
                    </span>
                    <h1 className="Help__title">Claim</h1>
                    <p className="Help__desc">Get your rewards on your account. You can continue to make them bloom by delegating them again</p>
                  </div>
                  <div className="Help__redelegate">
                    <span className="Help__icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.11887 9.58914L2.93196 9.41237L4.11887 9.58914ZM9.23469 16.4954L9.05793 17.6823H9.05793L9.23469 16.4954ZM11.0251 4.47332L10.8484 5.66023L11.0251 4.47332ZM13.1679 6.66748L14.106 7.41588L15.6028 5.53983L14.6647 4.79143L13.1679 6.66748ZM15.6044 6.68594L15.9294 7.84109L17.0846 7.51608L16.7596 6.36093L15.6044 6.68594ZM2.93196 9.41237C2.33993 13.3877 5.08261 17.0903 9.05793 17.6823L9.41146 15.3085C6.74717 14.9117 4.90899 12.4302 5.30578 9.7659L2.93196 9.41237ZM11.2019 3.28641C7.22657 2.69437 3.524 5.43706 2.93196 9.41237L5.30578 9.7659C5.70257 7.10161 8.18407 5.26344 10.8484 5.66023L11.2019 3.28641ZM14.6647 4.79143C13.6949 4.01764 12.5139 3.48181 11.2019 3.28641L10.8484 5.66023C11.731 5.79168 12.5198 6.15034 13.1679 6.66748L14.6647 4.79143ZM9.05793 17.6823C12.6796 18.2217 16.073 15.9941 17.0974 12.5879L14.7991 11.8966C14.1131 14.1777 11.837 15.6697 9.41146 15.3085L9.05793 17.6823ZM16.7596 6.36093L15.318 1.23749L13.0077 1.88751L14.4493 7.01095L16.7596 6.36093ZM15.2794 5.53079L10.156 6.97232L10.806 9.28262L15.9294 7.84109L15.2794 5.53079Z" fill="#9A78FF" />
                      </svg>
                    </span>
                    <h1 className="Help__title">Redelegate</h1>
                    <p className="Help__desc">Change your delegation to another validator. Come delegate to StakeLab for less commission on your rewards</p>
                  </div>
                  <div className="Help__unstake">
                    <span className="Help__icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.8159 10.002H16.1875H3.8125M3.8159 10.002H3.8125M3.8159 10.002L9.99269 3.8252M3.8125 10.002L9.99269 3.8252M3.8125 10.002L9.99269 16.1824L3.8159 10.0056L9.99269 3.8252" stroke="#9A78FF" strokeWidth="2.4" />
                      </svg>
                    </span>
                    <h1 className="Help__title">Unstake</h1>
                    <p className="Help__desc">Stop delegating your assets. You will enter an unbonding period of few days without earning anymore rewards from them</p>
                  </div>
                </div>
              </div>
              <div className="Help__buttonWrapper">
                <button className="Help__button btn--medium btn__shade">Got it</button>
                <a href="" className="Help__link">Learn more</a>
              </div>
            </div>
          </aside>
        )}
    </div>
  );
};

export default Help;
