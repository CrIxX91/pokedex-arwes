import { FrameSVGNefrex, useFrameSVGAssemblingAnimation } from "@arwes/react";
import { FC, ReactElement, useRef } from "react";

interface Props{
  children:ReactElement[]|ReactElement
}
export const NumberFrame:FC<Props> = ({children}) => {

    const svgRef = useRef<SVGSVGElement | null>(null);
    const { onRender } = useFrameSVGAssemblingAnimation(svgRef);

  return (
    <div style={{
        position: 'relative',
        width: '100%',
        display:"flex",
        alignItems:"center",
        justifyContent:'center',
        marginBottom:'1rem',
        height: 240,
        
      }}>
        <style>{`
        '[data-name=bg]': {
            color: 'hsl(60, 75%, 10%)',
            filter: 'drop-shadow(0 0 4px hsl(60, 75%, 10%))'
          },
          '[data-name=line]': {
            color: 'hsl(60, 75%, 50%)',
            filter: 'drop-shadow(0 0 4px hsl(60, 75%, 50%))'
          }
        `}

        </style>
        <FrameSVGNefrex
            elementRef={svgRef}
            onRender={onRender}
            padding={4}
            strokeWidth={2}
            squareSize={32}
            smallLineLength={32}
            largeLineLength={128}
        />
        {children}
    </div>
  )
}
