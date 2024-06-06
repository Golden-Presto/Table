import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';
import Table from './Table';

function App() {

  const API_URL = "https://jsonplaceholder.typicode.com/todos";
  const [data, setData] = useState([]);
  const [keysSet, setKeysSet] = useState(new Set());
  

  useEffect(() => {
    
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const dataList = await response.json();
        setData(dataList);
        const newKeysSet = new Set();
        dataList.forEach(obj => {
          Object.keys(obj).forEach(key => {
            newKeysSet.add(key);
          });
        });
        setKeysSet(newKeysSet);
        console.log(Array.from(newKeysSet))
      }
      catch (err) {
        console.error(err.stack);
      }
    }

    fetchItems();
  },[]);

  return (
    <div id='tables'>
      <Table data={data} keysSet={keysSet} />
    </div>
  )
}

export default App
