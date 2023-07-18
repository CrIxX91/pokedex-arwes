/** @jsx jsx */
// @ts-ignore 
import { jsx } from '@emotion/react'
import { css } from '@emotion/css'
import { Text } from '@arwes/react';
import { Animator } from '@arwes/react-animator';
import { FrameSVGLines, useFrameSVGAssemblingAnimation } from '@arwes/react-frames';
import { FC, ReactElement, useEffect, useRef, useState } from 'react';

interface PropsFrame{
  children?:ReactElement|ReactElement[]
}
const Frame:FC<PropsFrame> = ({children}):ReactElement =>{

    const svgRef = useRef<SVGSVGElement | null>(null);
    const { onRender } = useFrameSVGAssemblingAnimation(svgRef);

    const styleType = css({
      position: 'relative',
      width: '100%',
      height: '50vh',

      '[data-name=bg]': {
        color: 'rgba(5,81,81,.1)'
      },
      '[data-name=line]': {
        color: 'hsl(180, 75%, 50%)'
      }
    });

    return (
      // className={styleType}
        <div className={styleType}>
            <FrameSVGLines
              elementRef={svgRef}
              onRender={onRender}
            />
            {children}
        </div>
      )
}
interface PropsTextAnim{
  data:string,
  astype:keyof HTMLElementTagNameMap;
}
const TextAnim:FC<PropsTextAnim> = ({data,astype})=>{
  return(
    <Animator>
      <Text as={astype}>{data} </Text>
    </Animator>
  )
}


export const LoadingFrame:FC = () => {

  const [active, setActive] = useState(true);

  useEffect(() => {
    const tid = setInterval(() => setActive(active => !active), 2000);
    return () => clearInterval(tid);
  }, []);

  return(
    <Animator active={active} >
      
      <Frame>
        <TextAnim data='Pokedex' astype='h1'/>
        <div style={{ 
          position:'absolute', 
          inset:'4em', 
          display:'flex',
          alignItems:'center'
          }}>
              <div className='desciptionWraper'>
                <div className='desciptionContent'>
                   <TextAnim  data='Project purpose:' 
                              astype='h4'/>
                   <TextAnim  data='The purpose of the project is to develop an interactive Pokédex using modern technologies and the Pokémon API. The Pokédex will allow users to explore a list of Pokémon, obtain detailed information about each of them, and search for specific Pokémon. Additionally, the project aims to provide an engaging and visually pleasing experience by incorporating futuristic visual effects and animations. In summary, the purpose of the project is to create a fun and educational digital tool for Pokémon fans, where they can discover and learn about different Pokémon in an interactive environment.' 
                              astype='p'/>

                </div>
              </div>
          </div>
        
      </Frame>
      
        {/* <Text as='h1'> Pokedex </Text> */}
      
    </Animator>
  )
}
