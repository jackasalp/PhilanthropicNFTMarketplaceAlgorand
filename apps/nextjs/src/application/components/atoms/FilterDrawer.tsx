import styled from '@emotion/styled';
import MuiSwipeableDrawer, { SwipeableDrawerProps } from '@mui/material/SwipeableDrawer';
import { useState } from 'react';
import { css } from '@emotion/react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface FilterDrawerProps {
  children?: any;
  width?: string;
  anchor: 'left' | 'right';
}
export const FilterDrawer = ({ children, width = '413px', anchor }: FilterDrawerProps) => {
  const [toggleFilterDrawer, setToggleFilterDrawer] = useState(false);
  const Arrow = anchor === 'right' ? ArrowForwardIosIcon : ArrowBackIosIcon;
  return (
    <>
      <FilterPanelButton
        width={width}
        anchor={anchor}
        toggleFilterDrawer={toggleFilterDrawer}
        onClick={() => setToggleFilterDrawer(!toggleFilterDrawer)}
      >
        <Arrow
          style={{
            width: '16px',
            color: '#fff',
            ...(!toggleFilterDrawer
              ? { transform: `rotateY(${anchor === 'right' ? '-' : ''}180deg)` }
              : {}),
          }}
        />
      </FilterPanelButton>

      <SwipeableDrawer
        disableBackdropTransition
        open={toggleFilterDrawer}
        anchor={anchor}
        width={width}
        swipeAreaWidth={0}
        transitionDuration={{ exit: 0, enter: 0 }}
        onOpen={() => setToggleFilterDrawer(true)}
        onClose={() => setToggleFilterDrawer(false)}
      >
        {children}
      </SwipeableDrawer>
    </>
  );
};

const FilterPanelButton = styled.div<{
  toggleFilterDrawer: boolean;
  anchor: 'left' | 'right';
  width: string;
}>`
  position: absolute;
  z-index: 1201;
  top: 234px;
  ${({ anchor }) => anchor}: 0;
  width: 32px;
  height: 72px;
  background-color: #4c4b84;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ anchor }) => (anchor === 'right' ? '12px 0 0 12px' : '0 12px 12px 0')};
  cursor: pointer;
  ${({ toggleFilterDrawer, anchor, width }) =>
    toggleFilterDrawer
      ? css`
          ${anchor}: ${width};
        `
      : css`
          padding-right: 1rem;
        `}
`;

type CustomizedSwipeableDrawer = SwipeableDrawerProps & { width: string };

const SwipeableDrawer = styled(({ width, ...props }: CustomizedSwipeableDrawer) => (
  // @ts-ignore
  <MuiSwipeableDrawer {...props} />
))`
  & .MuiPaper-root {
    width: ${({ width }) => width};
  }
`;

export default FilterDrawer;
