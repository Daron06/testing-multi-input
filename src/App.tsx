import Select from './components/Select';
import Russian from './assets/icons/country/Russian.svg';
import Germany from './assets/icons/country/Germany.svg';
import Italy from './assets/icons/country/Italy.svg';
import Poland from './assets/icons/country/Poland.svg';
import Spain from './assets/icons/country/Spain.svg';
import UnitedKingdom from './assets/icons/country/UnitedKingdom.svg';

const menuItems = [
  {
    label: 'Русский',
    flag: Russian,
  },
  {
    label: 'Английский',
    flag: UnitedKingdom,
  },
  {
    label: 'Испанский',
    flag: Spain,
  },
  {
    label: 'Немецкий',
    flag: Germany,
  },
  {
    label: 'Итальянский',
    flag: Italy,
  },
  {
    label: 'Польский',
    flag: Poland,
  },
];

function App() {
  return (
    <div className="app">
      <div className="container">
        <Select items={menuItems} />
      </div>
    </div>
  );
}

export default App;
