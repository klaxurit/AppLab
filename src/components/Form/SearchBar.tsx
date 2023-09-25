import { useEffect, useRef } from "react";
import { useAppDispatch } from "../../hooks/useStore";
import { search } from "../../store/networksControlsSlice";


export const SearchBar = ({ searchValue, setSearchValue }: { searchValue: string, setSearchValue: React.Dispatch<React.SetStateAction<string>> }) => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    dispatch(search(searchValue));
  }, [searchValue]);

  return (
    <div
      className="SearchBar"
      onClick={() => inputRef.current?.focus()}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.333 13.333L16.6663 16.6663M14.9997 9.16634C14.9997 12.388 12.388 14.9997 9.16634 14.9997C5.94468 14.9997 3.33301 12.388 3.33301 9.16634C3.33301 5.94468 5.94468 3.33301 9.16634 3.33301C12.388 3.33301 14.9997 5.94468 14.9997 9.16634Z" stroke="#868391" strokeWidth="1.8" />
      </svg>
      <input
        ref={inputRef}
        type="text"
        className="SearchBar__input"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
    </div>
  );
};