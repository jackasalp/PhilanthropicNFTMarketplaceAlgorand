import React, { createRef, FC, useState } from 'react';

import { Options, OptionsProps } from '$application/components/atoms/Options';
import { IconButton } from '$application/components/atoms/IconButton';
import { IconSize } from './IconButton/sizeUtils';
import Close from '$application/assets/Close.svg';
import MoreHorizontal from '$application/assets/MoreHorizontal.svg';
import MoreVertical from '$application/assets/MoreVertical.svg';
import { useClickAway } from 'react-use';
import styled from '@emotion/styled';

export type MoreOptionsProps = {
  size?: IconSize;
  disabled?: boolean;
  className?: string;
  variant: 'horizontal' | 'vertical';
} & Pick<OptionsProps, 'actions'>;

export const MoreOptions: FC<MoreOptionsProps> = ({
  variant,
  actions,
  className,
  size = 'Md',
  disabled = false,
}) => {
  const [isOpen, setOpen] = useState(false);
  const optionMenuElement = createRef<HTMLDivElement>();

  useClickAway(optionMenuElement, () => setOpen(false));

  const handleIconClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
    if (!disabled) {
      setOpen(!isOpen);
    }
  };

  const icon = isOpen ? (
    <Close />
  ) : variant === 'horizontal' ? (
    <MoreHorizontal />
  ) : (
    <MoreVertical />
  );

  return (
    <Container className={className}>
      <IconButton
        icon={icon}
        size={size}
        color="Normal"
        variant="Contained"
        disabled={disabled}
        onClick={handleIconClick}
      />
      {isOpen && (
        <div ref={optionMenuElement}>
          <StyledOptions actions={actions} />
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  float: right;
  position: relative;
  width: max-content;
`;

const StyledOptions = styled(Options)`
  right: 0px;
  margin-top: 6px;
  max-width: 150px;
  position: absolute;
`;
