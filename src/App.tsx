import { type CSSObject, Global } from '@emotion/react';
import { createAppTheme, createAppStylesBaseline, Animator } from '@arwes/react';
import {
  type AnimatorGeneralProviderSettings,
  AnimatorGeneralProvider
} from '@arwes/react';
import { Background } from './components/Background/Background';
import { useEffect, useState } from 'react';
import { supaPokeApi } from './api';
import { INewPokemon } from './interfaces';
import { PokemonGrid } from './components';
import './App.css'

const theme = createAppTheme();
const stylesBaseline = createAppStylesBaseline(theme);


const animatorsSettings: AnimatorGeneralProviderSettings = {
  // Durations in seconds.
  duration: {
    enter: 0.2,
    exit: 0.2,
    stagger: 0.04
  }
};


function App() {
  const [active] = useState(true);
  const [pokemons, setPokemons] = useState<INewPokemon[]>([]);

  const fetchPokeData = async ()=>{
    const {data}= await supaPokeApi.getPokemons();
    setPokemons(data);
  }
  useEffect(() => {
    fetchPokeData()
  }, [])
  
  return (
    <>
      <Global styles={stylesBaseline as Record<string, CSSObject>} />
      <AnimatorGeneralProvider {...animatorsSettings}>
        <Animator combine manager='stagger' active={active}>
          <Background theme={theme} / >
            <PokemonGrid theme={theme} pokemons={pokemons}/>
        </Animator>
      </AnimatorGeneralProvider>
    </>
  )
}

export default App
