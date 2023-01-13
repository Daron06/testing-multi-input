import React from 'react';
import styles from './SearchInput.module.css';
import SearchIcon from '../../assets/icons/search.svg';

interface SearchInputProps {
  text: string;
  onChange: (text: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ text, onChange }) => {
  return (
    <div className={styles.selectMenuSearch}>
      <img src={SearchIcon} alt="search items" />
      <input placeholder="Поиск" value={text} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

export default SearchInput;
