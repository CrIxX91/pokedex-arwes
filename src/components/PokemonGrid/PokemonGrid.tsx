import { FC } from "react"
import { INewPokemon } from "../../interfaces"
import { PokemonCard } from ".."
import { AppTheme } from "@arwes/react"

interface Props{
    theme:AppTheme
    pokemons:INewPokemon[]
}
export const PokemonGrid:FC<Props> = ({theme,pokemons}) => {
  return (
    <div className="container-wrap">
        <div className='container'>
            {
                pokemons.map((pkm)=><PokemonCard theme={theme} key={pkm.name} pokemon={pkm}/>)
            }
        </div>  
    </div>
       
  )
}
