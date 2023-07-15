
import { createClient } from "@supabase/supabase-js";
import { INewPokemon } from "../interfaces";

const supabase = createClient(import.meta.env.VITE_API_ENDPOINT!,import.meta.env.VITE_API_KEY!);

const supaPokeApi ={
    getPokemons: async () =>{
        const { data, error } = await supabase
            .from('Pokemon')
            .select('*')
            .order('aux_id',{ ascending: true })
        
        let PokemonList:INewPokemon[] =[];

        if(data)
            PokemonList = data.map(item=> item as INewPokemon);

        return{
            data:PokemonList,
            error
        }
    },
    addPokemon: async (pokemon:any) => {
        const { data, error } = await supabase
            .from('Pokemon')
            .insert(pokemon)
            .select();

        return { data, error };
    },
    getPokemon: async (pokemonname:string) => {
        const { data, error } = await supabase
            .from('Pokemon')
            .select()
            .eq('name', pokemonname);
        let Pokemon;

        if(data){
            Pokemon = data[0] as INewPokemon;
        }
        return { data:Pokemon, error };
    }
}

export default supaPokeApi;