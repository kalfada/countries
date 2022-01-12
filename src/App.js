import './css/App.css';
import List from './List'
import Header from './Header'
import axios from 'axios';
import { useState, useEffect, createContext } from 'react';

export const SearchContext = createContext()


function App() {
  const [list, setList] = useState([])
  const [fullList, setFullList] = useState([])
  
  function getCountries() {
    axios.get('https://restcountries.com/v3.1/all')
      .then(res => {
        setList(res.data.sort((a, b) => a.name.common > b.name.common ? 1 : -1))
        setFullList(res.data.sort((a, b) => a.name.common > b.name.common ? 1 : -1))
      })
  }
  useEffect(getCountries, [])

  function searchByCountryName(value) {
    setList(fullList.filter(c => c.name.common.toLowerCase().includes(value.toLowerCase())))
  }

  return (
    <div className="App">
      <SearchContext.Provider value={searchByCountryName}>
        <Header length={list.length} />
      </SearchContext.Provider>
      <List list={list} refeshView={searchByCountryName} />
    </div>
  );

}

export default App;
