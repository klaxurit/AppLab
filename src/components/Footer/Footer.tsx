import React from "react";

import { useSelector, useDispatch } from 'react-redux';
import { openHelp, openSidebar } from "../../store/helpSlice";
import { RootState } from "../../store";
import LogoGray from "../../assets/images/logo_gray.svg";
import Help from "./Help";

const Footer: React.FC = () => {
  const isSidebarOpen = useSelector((state: RootState) => state.help.isSidebarOpen);
  const dispatch = useDispatch();

  const handleOpenHelp = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth > 1400) {
        dispatch(openSidebar());
      } else {
        dispatch(openHelp());
      }
    }
  };

  return (
    <>  
      <div className={`Footer ${isSidebarOpen ? 'Footer--shrink' : ''}`}>
        <a href="/" className="Footer__link">Powered by <img src={LogoGray} alt="StakeLab Logo" /></a>
        <span
          className="Footer__helpButton icon--small icon__white"
          onClick={handleOpenHelp}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="7.5" stroke="#A29FAB" strokeWidth="2" strokeLinecap="square" />
            <path d="M8.03574 8.1762C8.03574 7.21391 8.93385 6.29177 9.89611 6.25167C10.8584 6.21158 11.8848 6.89315 11.8848 8.17623C11.8848 9.78003 9.96026 9.66174 9.96026 11.2655V11.5982" stroke="#A29FAB" strokeWidth="1.6" />
            <circle cx="10" cy="13.75" r="1" fill="#A29FAB" stroke="#A29FAB" strokeWidth="0.5" />
          </svg>
        </span>
      </div>
      <Help />
    </>

  );
};

export default Footer;
