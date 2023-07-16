/** @jsx jsx */
// @ts-ignore 
import { jsx } from '@emotion/react'

import { css } from '@emotion/css'
import { FrameSVGNefrex, useFrameSVGAssemblingAnimation } from "@arwes/react"
import { useRef } from "react";

export const TypeFrame = () => {

    const svgRef = useRef<SVGSVGElement | null>(null);
    const { onRender } = useFrameSVGAssemblingAnimation(svgRef);
    
    const styleType = css({
        position:'relative',
        width:'100%',
        display:'flex',
        alignContent:'center',
        justifyContent:'center',
        marginBottom:'1rem',
        height:'50px',
        '[data-name=bg]': {
            color: 'hsla(200,81%,50%,0.1)',
            filter: 'drop-shadow(0 0 4px hsla(200,81%,50%,0.1))'
          },
          '[data-name=line]': {
            color: 'hsl(78, 62%, 45%) !important',
            filter: 'drop-shadow(0 0 4px hsl(78, 62%, 45%))'
          }
    })

  return (
    <div className={styleType}>
        <style>
            {
                `
                `
            }
        </style>
        <FrameSVGNefrex
            elementRef={svgRef}
            onRender={onRender}
            padding={4}
            strokeWidth={4}
            squareSize={10}
            smallLineLength={10}
            largeLineLength={30}
        />

      </div>
  )
}
