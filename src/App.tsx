import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import TxPanel from "./components/Form/TxState";
import { useGetNetworksQuery } from "./store/networkSlice";
import { useEffect } from "react";
import { setSelectedNetwork } from "./store/selectedNetworkSlice";
import { setDevice } from './store/deviceSlice';
import { Network } from "./types";
import { useWalletClient } from "@cosmos-kit/react";
import { setStatus, setData } from './store/walletSlice';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";


function App() {
  const { data: networks, isLoading } = useGetNetworksQuery();
  const walletStatus = useSelector((state: RootState) => state.wallet.status);
  const walletData = useSelector((state: RootState) => state.wallet.data);
  const { status, client } = useWalletClient("keplr-extension");
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatch(setDevice(window.innerWidth));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isLoading && networks) {
      const cosmosNetwork = networks.find((network: Network) => network.name === 'Cosmos Hub');
      if (cosmosNetwork) {
        dispatch(setSelectedNetwork(cosmosNetwork));
      }
    }
  }, [isLoading, networks, dispatch]);

  useEffect(() => {
    dispatch(setStatus(status));
    console.log("WALLETSTATUS: ", walletStatus, "WALLETDATA: ", walletData)
    console.log("STATUS: ", status);
    if (status === "Done") {
      const fetchAccounts = async () => {
        try {
          const networks = ["cosmoshub-4", "osmosis-1", "juno-1"];
          for (const network of networks) {
            const account = await client?.getAccount?.(network);
            if (account) {
              dispatch(setData({ network, data: account }));
            }
          }
        } catch (error) {
          console.error("Error fetching account data", error);
        }
      };
      fetchAccounts();
    }
  }, [status, client]);

  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <Form />
        <TxPanel />
      </div>
      <Footer />
    </div>
  );
}

export default App;
