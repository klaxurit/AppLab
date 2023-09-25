import React from 'react';
import { useEffect } from "react";
import { useGetNetworksQuery } from "../../store/networkSlice";
import { useState } from "react";
import Sheet from "react-modal-sheet";
import { SearchBar } from '../Form/SearchBar';
import { useDispatch } from "react-redux";
import { setSelectedNetwork } from "../../store/selectedNetworkSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Network } from '../../types';

interface NetworksListProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

export const NetworksList: React.FC<NetworksListProps> = ({ isOpen, setOpen }) => {
  const { format } = useSelector((state: RootState) => state.device);
  const { data, isLoading, isError } = useGetNetworksQuery();
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const selectedNetwork = useSelector((state: RootState) => state.selectedNetwork.selectedNetwork);
  const dispatch = useDispatch();
  const handleNetworkClick = (selected: any) => {
    dispatch(setSelectedNetwork(selected));
    setOpen(false);
  };
  useEffect(() => {
    if (data) {
      const filtered = data.filter((network: Network) =>
        network.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [data, searchValue]);
  return (
    <>
      {format === "mobile" && (
        <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
          <Sheet.Backdrop className="NetworkSelector__SheetBackdrop" {...{ onClick: () => setOpen(false) } as any} />
          <Sheet.Container className="NetworkSelector__SheetContainer">
            <Sheet.Header />
            <Sheet.Content>
              <div className="NetworkSelector__modalHeader">
                <div className="NetworkSelector__iconAndTitle">
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" {...{ onClick: () => setOpen(false) } as any}>
                    <path d="M3.4347 9.50149H14.5691H3.43164M3.4347 9.50149H3.43164M3.4347 9.50149L8.99381 3.94238M3.43164 9.50149L8.99381 3.94238M3.43164 9.50149L8.99381 15.0638L3.4347 9.50474L8.99381 3.94238" stroke="white" strokeWidth="1.8" />
                  </svg>
                  <p className="NetworkSelector__title">Select token</p>
                  <span className="NetworkSelector__blankIcon"></span>
                </div>
                <div className="NetworkSelector__searchBarWrapper">
                  <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
                </div>
              </div>
              <Sheet.Scroller>
                {!isLoading && !isError && data ? (
                  <ul className="NetworkSelector__networkList">
                    {filteredData.map((network, index) => (
                      <li className="NetworkSelector__networkItem" key={index} onClick={() => handleNetworkClick(network)}>
                        <div className="NetworkSelector__networkWrapper">
                          <div className="NetworkSelector__networkItemLogo">
                            <img src={network.logo} alt={`${network.name} logo`} />
                          </div>
                          <div className="NetworkSelector__networkItemInfo">
                            <p className="NetworkSelector__networkItemName">{network.name}</p>
                            <p className="NetworkSelector__networkItemToken">{network.tokenName}</p>
                          </div>
                        </div>
                        {selectedNetwork && selectedNetwork.name === network.name && (
                          <svg className="NetworkSelector__networkItemSelected" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.0625 9.375L9.0625 14.375L16.5625 5.625" stroke="#7950F2" strokeWidth="2" />
                          </svg>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  'Loading or Error...'
                )}
              </Sheet.Scroller>
            </Sheet.Content>
          </Sheet.Container>
        </Sheet>
      )}
      {(format === "tablet" || format === "desktop") && isOpen && (
        <div className="NetworksList">
          <div className="NetworksList__modal">
            <div className="NetworksList__modalHeader">
              <div className="NetworksList__iconAndTitle">
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.4347 9.50149H14.5691H3.43164M3.4347 9.50149H3.43164M3.4347 9.50149L8.99381 3.94238M3.43164 9.50149L8.99381 3.94238M3.43164 9.50149L8.99381 15.0638L3.4347 9.50474L8.99381 3.94238" stroke="white" strokeWidth="1.8" {...{ onClick: () => setOpen(false) } as any} />
                </svg>
                <p className="NetworksList__title">Select token</p>
                <span className="NetworksList__blankIcon"></span>
              </div>
              <div className="NetworksList__searchBarWrapper">
                <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
              </div>
            </div>
            <div className="NetworkSelector__modalBody">
              {!isLoading && !isError && data ? (
                <ul className="NetworkSelector__networkList">
                  {filteredData.map((network, index) => (
                    <li className="NetworkSelector__networkItem" key={index} onClick={() => handleNetworkClick(network)}>
                      <div className="NetworkSelector__networkWrapper">
                        <div className="NetworkSelector__networkItemLogo">
                          <img src={network.logo} alt={`${network.name} logo`} />
                        </div>
                        <div className="NetworkSelector__networkItemInfo">
                          <p className="NetworkSelector__networkItemName">{network.name}</p>
                          <p className="NetworkSelector__networkItemToken">{network.tokenName}</p>
                        </div>
                      </div>
                      {selectedNetwork && selectedNetwork.name === network.name && (
                        <svg className="NetworkSelector__networkItemSelected" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.0625 9.375L9.0625 14.375L16.5625 5.625" stroke="#7950F2" strokeWidth="2" />
                        </svg>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                'Loading or Error...'
              )}
            </div>
          </div>
        </div>
      )}
    </>

  );
}
