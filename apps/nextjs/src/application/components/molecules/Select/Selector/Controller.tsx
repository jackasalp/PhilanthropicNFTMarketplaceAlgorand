import React, { FC } from 'react';
import ChevronDown from '$application/assets/ChevronDown.svg';
import { LoadingData } from '$application/components/atoms/LoadingData';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

interface ControllerProps {
  focused: boolean;
  loading: boolean;
  hasLabel: boolean;
  disabled: boolean;
  icon?: JSX.Element;
  onIconClick: (e: any) => void;
}

export const Controller: FC<ControllerProps> = ({
  focused,
  loading,
  disabled,
  hasLabel,
  icon,
  onIconClick,
}) => {
  return (
    <LoadingData loading={loading} customLoaderWrapper={() => <Loader />}>
      {() => {
        return icon ? (
          <CustomIconContainer
            focused={focused}
            disabled={disabled}
            hasLabel={hasLabel}
            onClick={onIconClick}
          >
            {icon}
          </CustomIconContainer>
        ) : (
          <ArrowIcon
            focused={focused}
            disabled={disabled}
            hasLabel={hasLabel}
            onClick={onIconClick}
          />
        );
      }}
    </LoadingData>
  );
};

export default Controller;

const Transition = keyframes`
 from {
   transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  width: 18px;
  height: 18px;
  margin: 0 auto;
  border-radius: 50%;
  animation-duration: 2s;
  animation-name: ${Transition};
  animation-iteration-count: infinite;
  border-top: 3px solid ${({ theme }) => theme.palette.grey[600]};
  border: 3px solid ${({ theme }) => theme.palette.secondary.main};
`;

interface IconProps {
  focused: boolean;
  disabled: boolean;
  hasLabel: boolean;
}
const CustomIconContainer = styled.div<IconProps>`
  cursor: pointer;
  right: 12px;
  width: 20px;
  height: 20px;
  margin-right: 4px;
  position: absolute;
  transition-duration: 300ms;
  top: ${({ hasLabel }) => (hasLabel ? 50 : 18)}px;
  path,
  use {
    fill: ${({ theme, disabled }) =>
      disabled ? theme.palette.grey[400] : theme.palette.grey[300]};
  }
`;

const ArrowIcon = styled(ChevronDown)<IconProps>`
  right: 12px;
  width: 20px;
  height: 20px;
  margin-right: 4px;
  position: absolute;
  transition-duration: 300ms;
  top: ${({ hasLabel }) => (hasLabel ? 50 : 18)}px;
  transform: rotate(${({ $focused }) => ($focused ? 180 : 0)}deg);
  path,
  use {
    fill: ${({ theme, disabled }) =>
      disabled ? theme.palette.grey[400] : theme.palette.grey[300]};
  }
`;
