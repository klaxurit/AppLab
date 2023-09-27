import React from "react";
import Logo from "../../assets/images/logo.png";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
// import { useChain } from "@cosmos-kit/react";
import { closeSidebar } from "../../store/helpSlice";
import { useWalletClient } from "@cosmos-kit/react";
import { setStatus, setData } from '../../store/walletSlice';
import { ConnectButton } from "../Form/ConnectButton";

const Navbar: React.FC = () => {
  const isSidebarOpen = useSelector((state: RootState) => state.help.isSidebarOpen);
  const dispatch = useDispatch();
  const walletStatus = useSelector((state: RootState) => state.wallet.status);
  const walletData = useSelector((state: RootState) => state.wallet.data);

  const handleCloseSidebar = () => {
    dispatch(closeSidebar());
  };
  const { status, client } = useWalletClient("keplr-extension"); // or comostation-extension, leap-extension, etc.

  useEffect(() => {
    dispatch(setStatus(status)); 
    console.log("ici", walletStatus, walletData)
    if (status === "Done") {
      client?.enable?.(["cosmoshub-4", "osmosis-1", "juno-1"]);
      client?.getAccount?.("juno-4").then((account) => dispatch(setData(account)));
      client?.getAccount?.("osmosis-1").then((account) => dispatch(setData(account)));
      client?.getAccount?.("cosmoshub-4")
        .then((account) => dispatch(setData(account)));
      console.log("la", walletStatus, walletData)
    }
  }, [status]);

  return (
    <div className={`Navbar ${isSidebarOpen ? 'Navbar--shrink' : ''}`}>
      <div className="Navbar__logosWrapper">
        <img src={Logo} alt="StakeLab logo" className="Navbar__logo" />
        <svg className="Navbar__desktopLogo" width="88" height="16" viewBox="0 0 88 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.13063 10.7458C0.13063 13.5125 2.34823 15.6034 6.14983 15.6034C9.95143 15.6034 11.8522 13.7026 11.8522 11.1682C11.8522 8.71825 10.5005 7.47217 7.52263 6.94417L5.19943 6.52177C3.61543 6.24721 3.19303 5.67697 3.19303 4.83217C3.19303 3.75505 4.01671 2.93137 5.93863 2.93137C7.86055 2.93137 8.89543 3.98737 8.89543 5.25457H11.641C11.641 2.48785 9.74023 0.396973 5.93863 0.396973C2.45383 0.396973 0.44743 2.38225 0.44743 4.83217C0.44743 6.94417 1.58791 8.42257 4.14343 8.84497L6.67783 9.26737C8.57863 9.60529 9.10663 10.3023 9.10663 11.1682C9.10663 12.2453 8.26183 13.069 6.14983 13.069C4.14343 13.069 2.87623 12.0341 2.87623 10.7458H0.13063Z" fill="white" />
          <path d="M14.2649 12.8578C14.2649 14.4629 15.2153 15.3922 17.0105 15.3922H19.3337V13.069H17.6441C17.1583 13.069 16.9049 12.8155 16.9049 12.3298V7.15537H19.3337V4.62097H16.9049V1.55857H14.2649V4.62097H12.5753V7.15537H14.2649V12.8578Z" fill="white" />
          <path d="M27.6574 15.3922H29.875V8.52817C29.875 6.22609 28.0798 4.40977 25.3342 4.40977C22.4619 4.40977 21.0257 6.12049 20.7934 7.89457H23.4334C23.539 7.28209 24.1515 6.52177 25.3342 6.52177C26.5169 6.52177 27.235 7.34545 27.235 8.52817V8.73937H24.8062C21.8494 8.73937 20.371 10.2178 20.371 12.3298C20.371 14.1039 21.8283 15.6034 24.2782 15.6034C25.3553 15.6034 26.0945 15.2866 26.6014 14.9698C26.8971 14.7797 27.1505 14.5685 27.3406 14.3362H27.4462L27.6574 15.3922ZM27.235 11.0626C27.235 12.5621 26.3057 13.4914 24.7006 13.4914C23.6235 13.4914 23.011 12.9634 23.011 12.1186C23.011 11.2738 23.6446 10.7458 25.0174 10.7458H27.235V11.0626Z" fill="white" />
          <path d="M32.2786 15.3922H34.9186V10.3234L39.1426 15.3922H42.205L37.5586 9.90097L41.9938 4.62097H38.9314L34.9186 9.47857V0.608172H32.2786V15.3922Z" fill="white" />
          <path d="M44.6308 9.05617C44.9476 7.68337 45.8769 6.62737 47.482 6.62737C48.9815 6.62737 49.8897 7.68337 50.122 9.05617H44.6308ZM49.6996 12.2242C49.4884 12.6677 48.7281 13.3858 47.482 13.3858C45.9825 13.3858 44.8631 12.3509 44.6308 10.8514H52.6564L52.6986 10.5557C52.7198 10.3656 52.762 10.1122 52.762 9.79537C52.762 6.73297 50.4388 4.40977 47.482 4.40977C44.314 4.40977 41.9908 6.73297 41.9908 10.0066C41.9908 13.2802 44.314 15.6034 47.482 15.6034C50.8823 15.6034 52.2129 13.069 52.4452 12.2242H49.6996Z" fill="white" />
          <path d="M54.8496 15.3922H64.5648V12.7522H57.5952V0.608172H54.8496V15.3922Z" fill="white" />
          <path d="M72.3614 15.3922H74.5789V8.52817C74.5789 6.22609 72.7838 4.40977 70.0382 4.40977C67.1658 4.40977 65.7297 6.12049 65.4974 7.89457H68.1374C68.243 7.28209 68.8554 6.52177 70.0382 6.52177C71.2209 6.52177 71.9389 7.34545 71.9389 8.52817V8.73937H69.5102C66.5534 8.73937 65.075 10.2178 65.075 12.3298C65.075 14.1039 66.5322 15.6034 68.9821 15.6034C70.0593 15.6034 70.7985 15.2866 71.3054 14.9698C71.601 14.7797 71.8545 14.5685 72.0446 14.3362H72.1502L72.3614 15.3922ZM71.9389 11.0626C71.9389 12.5621 71.0097 13.4914 69.4046 13.4914C68.3274 13.4914 67.715 12.9634 67.715 12.1186C67.715 11.2738 68.3486 10.7458 69.7214 10.7458H71.9389V11.0626Z" fill="white" />
          <path d="M82.3681 13.1746C80.763 13.1746 79.6225 12.0341 79.6225 10.0066C79.6225 7.97905 80.763 6.83857 82.3681 6.83857C83.9732 6.83857 85.1137 7.97905 85.1137 10.0066C85.1137 12.0341 83.9732 13.1746 82.3681 13.1746ZM76.9825 15.3922H79.3057L79.5169 14.2306H79.6225C79.8337 14.5051 80.0872 14.7375 80.3828 14.9275C80.8897 15.2655 81.6711 15.6034 82.7905 15.6034C85.5361 15.6034 87.7537 13.3858 87.7537 10.0066C87.7537 6.62737 85.5361 4.40977 82.7905 4.40977C81.7134 4.40977 80.9742 4.76881 80.4673 5.10673C80.1716 5.29681 79.9182 5.52913 79.7281 5.78257H79.6225V0.608172H76.9825V15.3922Z" fill="white" />
        </svg>
      </div>
      <div className="Navbar__btnWrapper">
        {status === "Done" && (
          <ConnectButton className="Navbar__button btn--small btn__shade" label="Connect"/>
        )}
        {status === "Init" && (
          <ConnectButton label="Connect" />
        )}
        {status === "Pending" && (
          <ConnectButton label="Connect" />
        )}
        {isSidebarOpen && (
          <svg className="Navbar__iconCloseSidebar" onClick={handleCloseSidebar} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.8423 10.0018H16.8389L10.6621 3.82501L16.8389 10.0054L10.6621 16.1822M9.3423 10.0018H9.33889L3.16211 3.82501L9.33889 10.0054L3.16211 16.1822" strokeWidth="2" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Navbar;
