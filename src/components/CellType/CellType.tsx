/** @jsx jsx */
import { AppTheme, FrameSVGUnderline, Text, FrameSVG } from "@arwes/react"
import { FC } from "react"

interface Props{
    theme:AppTheme,
    name:string
}

export const CellType:FC<Props> = ({theme,name}) => {
  return (
    <div style={{
        position: 'relative',
        width: '100%',
        display:"flex",
        alignItems:"center",
        justifyContent:'center',
        marginBottom:'1rem',
        height: 50
      }}>
        <FrameSVGUnderline />
        <style>{`
          .card .arwes-react-frames-framesvg [data-name=bg] {
            color: ${theme.colors.primary.deco(1)};
          }
          .card .arwes-react-frames-framesvg [data-name=line] {
            color: ${theme.colors.primary.main(4)};
          }
        `}</style>
        <Text as='h6'>
                    {name}
                  </Text>
    
    </div>
  )
}
