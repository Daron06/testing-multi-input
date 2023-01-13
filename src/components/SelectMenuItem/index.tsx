import React from 'react';
import styles from './SelectMenuItem.module.css';

interface SelectMenuItemProps {
  item: {
    label: string;
    flag: string;
  };
  isSelected: boolean;
  changeCheckbox: (items: string[]) => void;
  selectedItems: string[];
}

const SelectMenuItem: React.FC<SelectMenuItemProps> = ({
  item,
  isSelected,
  changeCheckbox,
  selectedItems,
}) => {
  return (
    <div className={styles.selectMenuItem} key={item.label}>
      <div className={styles.selectMenuItemLeft}>
        <img src={item.flag} alt={item.label} />
        <span className={styles.selectMenuItemLabel}>{item.label}</span>
      </div>
      <label className={styles.menuCheckbox}>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={(e) =>
            e.target.checked
              ? changeCheckbox([...selectedItems, item.label])
              : changeCheckbox(selectedItems.filter((el) => el !== item.label))
          }
        />
        <span />
      </label>
    </div>
  );
};

export default SelectMenuItem;
