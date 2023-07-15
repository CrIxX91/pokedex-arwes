import { GridLines, Dots, MovingLines, AppTheme } from '@arwes/react';
import { FC } from 'react';

interface Props {
    theme:AppTheme
}
export const Background:FC<Props> = ({theme}) => {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: theme.colors.primary.bg(1)
      }}
    >
      <GridLines lineColor={theme.colors.primary.deco(0)} />
      <Dots color={theme.colors.primary.deco(1)} />
      <MovingLines lineColor={theme.colors.primary.deco(2)} />
    </div>
  )
}
