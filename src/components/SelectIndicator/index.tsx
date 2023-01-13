import React from 'react';
import DropdownIcon from '../../assets/icons/dropdown.svg';
import styles from './SelectIndicator.module.css';

interface SelectIndicatorProps {
  changeShowMenu: () => void;
  showMenu: boolean;
}

const SelectIndicator: React.FC<SelectIndicatorProps> = ({ changeShowMenu, showMenu }) => {
  return (
    <div className={styles.selectIndicator}>
      <div className={styles.selectIndicatorDropdown} onClick={changeShowMenu}>
        <img
          src={DropdownIcon}
          alt="dropdown"
          style={{ transform: showMenu ? 'rotate(0deg)' : 'rotate(-180deg)' }}
        />
      </div>
    </div>
  );
};

export default SelectIndicator;
