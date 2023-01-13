import React, { useState, useEffect } from 'react';
import styles from './Select.module.css';
import RemoveIcon from '../../assets/icons/remove.svg';
import SearchInput from '../SearchInput';
import SelectMenuItem from '../SelectMenuItem';
import SelectIndicator from '../SelectIndicator';

interface SelectProps {
  items: {
    label: string;
    flag: string;
  }[];
}

const Select: React.FC<SelectProps> = ({ items }) => {
  const [selectedItems, setSelectedItems] = useState(['Русский', 'Английский']);
  const [menuItems, setMenuItems] = useState(items);
  const [inputValue, setInputValue] = useState('');
  const [showMenu, setShowMenu] = useState(true);

  const changeCheckbox = (items: string[]) => {
    setSelectedItems(items);
  };

  const onChangeInput = (text: string) => {
    setInputValue(text);
  };

  const changeShowMenu = () => {
    setShowMenu((prev) => !prev);
    setInputValue('');
  };

  useEffect(() => {
    if (inputValue.trim() !== '') {
      setMenuItems(
        items.filter((item) =>
          item.label.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
        )
      );
    } else {
      setMenuItems(items);
    }
  }, [inputValue, items]);

  return (
    <div className={styles.container}>
      Язык
      <div className={styles.control}>
        <div className={styles.selectMultiValue}>
          <div className={styles.selectMultiValueItems}>
            {selectedItems.map((el) => {
              return (
                <div key={el} className={styles.selectMultiValueItem}>
                  <div className={styles.selectMultiValueLabel}>{el}</div>
                  <div
                    className={styles.selectMultiValueRemove}
                    role="button"
                    onClick={() => setSelectedItems((prev) => prev.filter((item) => item !== el))}
                  >
                    <img src={RemoveIcon} alt="remove" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <SelectIndicator changeShowMenu={changeShowMenu} showMenu={showMenu} />
      </div>
      {showMenu && (
        <div className={styles.selectMenu}>
          <SearchInput text={inputValue} onChange={onChangeInput} />
          {menuItems.length ? (
            menuItems.map((el) => {
              return (
                <SelectMenuItem
                  item={el}
                  isSelected={!!selectedItems.find((item) => item === el.label)}
                  changeCheckbox={changeCheckbox}
                  selectedItems={selectedItems}
                  key={el.label}
                />
              );
            })
          ) : (
            <div className={styles.selectMenuEmpty}>Нет элементов удовлетворяющих поиску</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Select;
