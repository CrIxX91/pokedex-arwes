import { Animated, Animator, AppTheme, FrameSVGCorners, Text, aa, aaVisibility } from '@arwes/react'
import { FC } from 'react'

interface Props{
    theme:AppTheme
}

export const Card:FC<Props> = ({theme}) => {
  return (
    <Animator merge combine manager='stagger'>

    <Animated
            className='card'
            style={{
            position: 'relative',
            display: 'block',
            maxWidth: '300px',
            margin: theme.space([4, 'auto']),
            padding: theme.space(8),
            textAlign: 'center'
            }}
            animated={[aaVisibility(), aa('y', '2rem', 0)]}
    >
        {/* <style>{`
          .card .arwes-react-frames-framesvg [data-name=bg] {
            color: ${theme.colors.primary.deco(1)};
          }
          .card .arwes-react-frames-framesvg [data-name=line] {
            color: ${theme.colors.primary.main(4)};
          }
        `}</style> */}

            <Animator>
            <FrameSVGCorners strokeWidth={2} />
            </Animator>

            <Animator>
            <Text as='h1'>
                Arwes Project
            </Text>
            </Animator>
            
            <Animator>
                <Text>
                    Futuristic science fiction user interface web framework.
                </Text>
            </Animator>
        </Animated>
    </Animator>
  )
}
