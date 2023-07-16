/** @jsx jsx */
// @ts-ignore 
import { jsx } from '@emotion/react'
import { css } from '@emotion/css'

import { FrameSVGOctagon, useFrameSVGAssemblingAnimation } from "@arwes/react";
import { useRef } from "react";

export const OctaCell = () => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const { onRender } = useFrameSVGAssemblingAnimation(svgRef);

    const styleType = css({
        position:'relative',
        width:'100%',
        display:'flex',
        alignContent:'center',
        justifyContent:'center',
        // marginBottom:'1rem',
        height:'50px',
        '[data-name=bg]': {
            color: 'hsl(60, 75%, 10%)',
            // filter: 'drop-shadow(0 0 4px hsl(60, 75%, 10%))'
          },
          '[data-name=line]': {
            color: 'hsl(60, 75%, 50%)',
            // filter: 'drop-shadow(0 0 4px hsl(60, 75%, 50%))'
          }
    });

  return (
    <div className={styleType}>
        <FrameSVGOctagon
          elementRef={svgRef}
          onRender={onRender}
          padding={4}
        />
      </div>
  )
}
