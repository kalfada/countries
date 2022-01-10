import './css/App.css';
import List from './List'
import Header from './Header'
import axios from 'axios';
import { useState, useEffect } from 'react';

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

  function refreshMe(e) {
    setList(fullList.filter(c => c.name.common.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  return (
    <div className="App">
      <input type="search" name="" id="" placeholder='Search Country By Name' onChange={refreshMe} />
      <Header length={list.length} />

      <List list={list} refeshView={refreshMe}/>
    </div>
  );
}

export default App;
