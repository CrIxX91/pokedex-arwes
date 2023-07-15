import { FC } from 'react'
import { Animated, Animator, AppTheme, FrameSVGCorners, Text, aa, aaVisibility } from '@arwes/react'
import { INewPokemon } from '../../interfaces'
import { fixName } from '../../utils'
import { CellType, NumberFrame } from '..'

interface Props{
    theme:AppTheme,
    pokemon:INewPokemon
}

export const PokemonCard:FC<Props> = ({theme,pokemon}) => {
    const {name,sprites,pokemon_id, types} = pokemon;
    
  return (
    <Animator merge combine manager='stagger'>

    <Animated
            className='card'
            style={{
            position: 'relative',
            display: 'block',
            minWidth:'220px',
            maxWidth: '290px',
            width:'25%',
            margin: theme.space([4, 'auto']),
            padding: theme.space(8),
            textAlign: 'center',
            zIndex:2,
            }}
            animated={[aaVisibility(), aa('y', '2rem', 0)]}
    >
        <style>{`
          .card .arwes-react-frames-framesvg [data-name=bg] {
            color: ${theme.colors.primary.deco(1)};
          }
          .card .arwes-react-frames-framesvg [data-name=line] {
            color: ${theme.colors.primary.main(4)};
          }
        `}</style>

            <Animator>
                <FrameSVGCorners strokeWidth={2} />
            </Animator>

            <Animator>
              <Text as='h5' style={{marginBottom:'1rem'}}>
                {String(pokemon_id).padStart(5, "0")}
              </Text>
              {/* <h5>{String(pokemon_id).padStart(5, "0")}</h5> */}
            </Animator>

            <hr />
            <NumberFrame>
            <img src={sprites.other?.['official-artwork'].front_default!} alt={name} />

              
            </NumberFrame>
            {/* <img src={sprites.other?.['official-artwork'].front_default!} alt={name} /> */}
            <CellType theme={theme} name={fixName(name)}/>

            {/* <figure>
              <figcaption> */}
                {/* <Animator>
                  <Text as='h6'>
                    {fixName(name)}
                  </Text>
                </Animator> */}
              {/* </figcaption>
             
            </figure> */}
                        


            <pre className='type-content'>
              {
                types.map((type)=>
                // <TypeCell key={type.type.name} name={type.type.name} theme={theme}/>
                <div key={type.type.name} className={`type-container ${type.type.name}`}>
                  <span >
                    {fixName(type.type.name)}
                  </span>
                </div>
                )
              }
            </pre>
            

        </Animated>
    </Animator>
  )
}
