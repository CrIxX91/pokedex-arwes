import { Text, createFrameOctagonClip } from '@arwes/react'
import { FC } from 'react'
import { fixName } from '../../utils';

interface Props{
    text:string;
    astype:keyof HTMLElementTagNameMap;
    height:string;
    color:string;

}
export const FrameTypeOcta:FC<Props> = ({astype,text,height='40px',color='#92BC2C'}) => {
  return (
    <div style={{
        width: '200px',
        height: height,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        clipPath: createFrameOctagonClip({
          leftTop: true,
          rightTop: false,
          rightBottom: true,
          leftBottom: false
        }),
        background: color
    }}>
        <Text as={astype} >{fixName(text)}</Text>
    </div>
  )
}
