import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './components/CharacterCard';
import styled from 'styled-components'
import './App.css';

const MainWrapper = styled.div`
  margin: 0% 20%
`

const App = () => {
  const [data, setData] = useState(false);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log(response.data.results);
        setData(response.data.results);
      })
  },[]);

  return (
    <MainWrapper className="App">
      <h1 className="Header">React Wars</h1>
    {!data &&
      <p>...loading</p>
    }
    {data &&     
      data.map(item => {
        console.log(item)
        return <CharacterCard 
          name={item.name}
          height={item.height}
          mass={item.mass}
          hair_color={item.hair_color}
          skin_color={item.skin_color}
          eye_color={item.eye_color}
          birth_year={item.birth_year}
          gender={item.gender}
        />
      })
    }
    </MainWrapper>
  );
}

export default App;
