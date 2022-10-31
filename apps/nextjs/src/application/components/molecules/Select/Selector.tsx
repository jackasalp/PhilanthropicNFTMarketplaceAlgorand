import React, { FC } from 'react';
import { rgba } from 'polished';
import { SelectProps } from '../Select';
import Controller from './Selector/Controller';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export type SelectorProps = Pick<
  SelectProps,
  'icon' | 'label' | 'placeHolder' | 'loading' | 'disabled' | 'renderInput'
> & {
  isOpen: boolean;
  hasError: boolean;
  isFilled: boolean;
  isFocused: boolean;
  selectedValue: string;
  controllerIcon?: JSX.Element;
  onControllerClick?: () => void;
};

export const Selector: FC<SelectorProps> = ({ loading = false, disabled = false, ...props }) => {
  const placeholderText = props.placeHolder ?? 'Select an option';

  return (
    <Container
      $error={props.hasError}
      $filled={props.isFilled}
      $focused={props.isFocused}
      $disabled={disabled}
    >
      {props.icon && <IconContainer $disabled={disabled}>{props.icon}</IconContainer>}
      {props.renderInput && props.isOpen ? (
        props.renderInput()
      ) : (
        <SelectedOption $hasIcon={!!props.icon} $filled={props.isFilled} $disabled={disabled}>
          {props.isFilled ? props.selectedValue : placeholderText}
        </SelectedOption>
      )}

      <Controller
        loading={loading}
        disabled={disabled}
        hasLabel={!!props.label}
        focused={props.isFocused}
        icon={props.controllerIcon}
        onIconClick={(e: any) => {
          if (props.onControllerClick) {
            e.stopPropagation();
            props.onControllerClick();
          }
        }}
      />
    </Container>
  );
};

export default Selector;

interface ContainerProps {
  $filled: boolean;
  $error?: boolean;
  $focused: boolean;
  $disabled?: boolean;
}

const Container = styled.div<ContainerProps>`
  padding: 14px;
  display: flex;
  height: 3rem;
  border-radius: 8px;
  background-color: ${({ theme, $filled, $focused, $error, $disabled }) => {
    if ($disabled) {
      return rgba(theme.palette.grey[800]!, 0.5);
    }
    if ($error || $filled || $focused) {
      return theme.palette.grey[900];
    }
    return theme.palette.grey[900];
  }};
  border: 1px
    ${({ theme, $filled, $focused, $error, $disabled }) => {
      if ($disabled) {
        return $filled ? theme.palette.grey[400] : rgba(theme.palette.grey[800]!, 0.5);
      }
      if ($error) {
        return theme.palette.error.main;
      }
      if ($focused) {
        return theme.palette.secondary[200];
      }
      if ($filled) {
        return theme.palette.grey[200];
      }
      return theme.palette.grey[200];
    }}
    solid;
  box-shadow: ${({ $focused }) => ($focused ? '0 0 0 3px rgba(192, 239, 239, 0.4)' : 'none')};
  ${({ $disabled, theme }) =>
    !$disabled &&
    css`
      &:hover {
        border: 1px ${theme.palette.secondary[200]} solid;
        background-color: ${theme.palette.grey[900]};
      }
    `}
`;

interface IconContainerProps {
  $disabled?: boolean;
}

const IconContainer = styled.div<IconContainerProps>`
  margin-right: 6px;
  & > svg {
    width: 24px;
    height: 24px;
    fill: ${({ theme, $disabled }) =>
      $disabled ? theme.palette.grey[500] : theme.palette.grey[200]};
  }
`;

type TextProps = {
  $hasIcon?: boolean;
} & Omit<ContainerProps, '$focused'>;

const SelectedOption = styled.div<TextProps>`
  margin: auto;
  font-size: 16px;
  line-height: 20px;
  margin-right: 12px;
  font-weight: normal;
  width: calc(100% - 50px);
  margin-left: ${({ $hasIcon }) => ($hasIcon ? 6 : 10)}px;
  color: ${({ theme, $filled, $disabled }) => {
    if ($disabled) {
      return $filled ? theme.palette.grey[200] : theme.palette.grey[400];
    } else {
      return $filled ? theme.palette.grey[100] : theme.palette.grey[300];
    }
  }};
  /* This is to apply ellipsis (...) on lengthy item */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
