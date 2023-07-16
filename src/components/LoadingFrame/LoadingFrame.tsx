/** @jsx jsx */
// @ts-ignore 
import { jsx } from '@emotion/react'
import { css } from '@emotion/css'
import { Text } from '@arwes/react';
import { Animator } from '@arwes/react-animator';
import { FrameSVGLines, useFrameSVGAssemblingAnimation } from '@arwes/react-frames';
import { FC, ReactElement, useEffect, useRef, useState } from 'react';

interface PropsFrame{
  children:ReactElement|ReactElement[]
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


export const LoadingFrame:FC = () => {
    const [active, setActive] = useState(false);

  useEffect(() => {
    const tid = setInterval(() => {
      setActive(true)
    }, 500);
    return () => clearInterval(tid);
  }, []);

  return(
    <Animator active={active}>
      <div style={{ 
          position:'absolute', 
          inset:'4em', 
          display:'flex',
          alignItems:'center'
          }}>
        <Frame >
          <Text as='h1'> Pokedex </Text>
          
          <hr style={{width:'90%', margin:'auto'}}/>

          <div className='desciptionWraper'>
            <div className='desciptionContent'>
              <div style={{width:'96%', margin:'auto'}}>
              <Text as='h4'>Project purpose:</Text>
              <Text as='p'>
                The purpose of the project is to develop an interactive Pokédex using modern technologies and the Pokémon API. The Pokédex will allow users to explore a list of Pokémon, obtain detailed information about each of them, and search for specific Pokémon. Additionally, the project aims to provide an engaging and visually pleasing experience by incorporating futuristic visual effects and animations. In summary, the purpose of the project is to create a fun and educational digital tool for Pokémon fans, where they can discover and learn about different Pokémon in an interactive environment.
              </Text>
              <Text as='h4'>Technologies used:</Text>
              <Text as='p'>
                <b>React:</b> Used as the primary framework for building the user interface of the Pokédex. React allows for the creation of reusable components and efficient development of a single-page application (SPA).
              </Text>
              <Text as='p'>
                <b>CSS:</b> Used for styling and designing the user interface of the Pokédex. CSS enables customization of component appearance and the creation of visually appealing experiences.
              </Text>
              <Text as='p'>
               <b> TypeScript:</b> Used to add static types to JavaScript and improve code scalability and robustness. TypeScript helps in early error detection and provides safer development.
              </Text>
              <Text as='p'>
                <b>Redux:</b> Used to manage the global state of the application. Redux provides a predictable and centralized data flow, making state management and data synchronization between different components easier.
              </Text>
              <Text as='p'>
                <b>Axios:</b> Used to make HTTP requests to the Pokémon API. Axios is a popular library for working with API calls, enabling efficient data retrieval and effective response handling.
              </Text>
              <Text as='p'>
                <b>Arwes:</b> Used to add futuristic visual effects and animations to the Pokédex. Arwes is a library that offers a user interface and graphic elements inspired by science fiction, enhancing aesthetics and the user experience in your project.
              </Text>


              {/* <pre>
               
              </pre> */}
              </div>
            
            </div>
          </div>
          
          {/* <div>
            <div></div>
            <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" style={{verticalAlign: 'middle'}}><path d="M13 6l6 6-6 6M5 6l6 6-6 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg><Text as= 'p'> Technologies used:</Text>
            
            <p>
            


CSS: Used for styling and designing the user interface of the Pokédex. CSS enables customization of component appearance and the creation of visually appealing experiences.

TypeScript: Used to add static types to JavaScript and improve code scalability and robustness. TypeScript helps in early error detection and provides safer development.

Redux: Used to manage the global state of the application. Redux provides a predictable and centralized data flow, making state management and data synchronization between different components easier.

Axios: Used to make HTTP requests to the Pokémon API. Axios is a popular library for working with API calls, enabling efficient data retrieval and effective response handling.

Arwes: Used to add futuristic visual effects and animations to the Pokédex. Arwes is a library that offers a user interface and graphic elements inspired by science fiction, enhancing aesthetics and the user experience in your project.

Project purpose:

            </p>
          </div>
           */}
        </Frame>
      </div>
    </Animator>
  )
}
