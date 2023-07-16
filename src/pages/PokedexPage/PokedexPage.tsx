import { FC, useEffect } from "react"
import { apoloClient } from "../../api"
import { gql } from "@apollo/client"
import { PokemonGql } from "../../interfaces/PokemonGQL"

export const PokedexPage:FC = () => {

    const handleFetch = async()=>{
        // const npkms = '151';
        //149
        let auxid = 1;
        const {data} = await apoloClient.query({
            query:gql `
            query samplePokeAPIquery($limit: Int = 2) {
  pokemon_v2_pokemonspecies(limit: $limit) {
    pokemon_v2_evolutionchain {
      pokemon_v2_pokemonspecies(order_by: {id: asc}) {
        pokemon_v2_pokemons(order_by: {id: asc}) {
          name
          height
          weight
          pokemon_v2_pokemonforms {
            name
            form_name
            pokemon_v2_pokemonformnames(where: {language_id: {_eq: 9}}) {
              name
            }
            pokemon_v2_pokemon {
              pokemon_v2_pokemonstats {
                pokemon_v2_stat {
                  name
                }
                base_stat
              }
              pokemon_v2_pokemontypes {
                slot
                pokemon_v2_type {
                  name
                }
              }
            }
          }
          is_default
          id
          pokemon_v2_pokemonabilities {
            is_hidden
            pokemon_v2_ability {
              name
            }
          }
        }
        pokemon_v2_pokemonspeciesflavortexts(where: {language_id: {_eq: 9}, pokemon_v2_version: {name: {_similar: "lets-go-pikachu|diamond|x"}}}) {
          flavor_text
          pokemon_v2_version {
            name
          }
        }
        pokemon_v2_pokemonspeciesnames(where: {language_id: {_eq: 9}}) {
          name
        }
      }
    }
  }
}

              `
        });
        console.log(data);
        const pokemoninfo = data as PokemonGql;

        pokemoninfo.pokemon_v2_pokemonspecies.map((pokemonspecie)=>{
          
          pokemonspecie.pokemon_v2_evolutionchain.pokemon_v2_pokemonspecies.map((pkmspec)=>{
            pkmspec.pokemon_v2_pokemonspeciesnames.map((names)=>{
              // console.log(names.name)
              console.log(`${auxid} - ${names.name}`);
              auxid++
            })
            pkmspec.pokemon_v2_pokemons.map((pkm)=>{
              // if(!pkm.name.includes('-')){
                
              //   console.log(`${auxid} - ${pkm.name}`);
              //   auxid++
              // }
                
              
                pkm.pokemon_v2_pokemonforms.map((form)=>{
                form.pokemon_v2_pokemonformnames.map((nameform)=>{
                  if(nameform.name){
                    console.log(`${auxid} - ${nameform.name}`);
                    auxid++
                  }
                    // console.log(nameform.name)
                })
              })
            })
          })
        })
        // return data
    }

    useEffect(() => {
        // fethPokemons();
    }, [])
    
  return (
    <div style={{position:'absolute',zIndex:'90'}}>
        <button onClick={handleFetch}> <h5>Buscar</h5> </button>
    </div>
  )
}
