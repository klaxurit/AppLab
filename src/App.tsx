import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import TxPanel from "./components/Form/TxState";
import { useGetNetworksQuery } from "./store/networkSlice";
import { useEffect } from "react";
import { setSelectedNetwork } from "./store/selectedNetworkSlice";
import { setDevice } from './store/deviceSlice';
import { Network } from "./types";
import { setStatus, setData } from './store/walletSlice';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";


function App() {
  const { data: networks, isLoading } = useGetNetworksQuery();
  const walletStatus = useSelector((state: RootState) => state.wallet.status);
  const walletData = useSelector((state: RootState) => state.wallet.data);
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
