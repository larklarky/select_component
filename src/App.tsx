import { Select, SelectOption } from './Select';
import './App.css';
import { useState } from 'react';

const options = [
  {label: 'First', value: 1},
  {label: 'Second', value: 2},
  {label: 'Third', value: 3},
  {label: 'Fourth', value: 4},
  {label: 'Fifth', value: 5}
]


function App() {
  const [value, setValue] = useState<SelectOption | undefined>(options[0])
  return (
    <div className="App">
      <Select 
        options={options} 
        value={value}
        onChange={option => setValue(option)}
      />
    </div>
  );
}

export default App;
