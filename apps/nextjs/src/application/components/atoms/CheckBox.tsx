import { keyframes } from '@emotion/css';
import styled from '@emotion/styled';
import React, { FC } from 'react';

export interface CheckBoxProps {
  id: string;
  label?: string;
  isChecked?: boolean;
  disabled?: boolean;
  className?: string;
  isHovered?: boolean;
  onChange?: (args: any) => void;
}

export const CheckBox: FC<CheckBoxProps> = (props) => {
  const { id, label, disabled = false, isChecked = false, isHovered, className, onChange } = props;
  return (
    <Wrapper disabled={disabled} onClick={!disabled ? onChange : undefined}>
      <StyledCheckBox
        isChecked={isChecked}
        disabled={disabled}
        isHovered={isHovered}
        className={className}
      >
        {isChecked && <CheckedElement />}
      </StyledCheckBox>
      {label && (
        <Label htmlFor={id} isChecked={isChecked}>
          {label}
        </Label>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ disabled: boolean }>`
  display: inline-flex;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;
interface StyledCheckBoxProps {
  disabled?: boolean;
  isChecked: boolean;
  isHovered?: boolean;
}

interface SignsProps {
  disabled?: boolean;
  isChecked?: boolean;
}

const StyledCheckBox = styled.div<StyledCheckBoxProps>`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.palette.grey[500] : theme.palette.grey[900]};
  cursor: ${({ disabled }) => (disabled ? 'unset' : 'pointer')};
  width: 18px;
  height: 18px;
  border-radius: 3px;
  position: relative;
  overflow: hidden;
  user-select: none;

  border: 2px solid
    ${({ theme, isChecked, isHovered, disabled }) =>
      disabled
        ? theme.palette.grey[500]
        : isChecked || isHovered
        ? theme.palette.primary.main
        : theme.palette.grey[300]};
`;

const Label = styled.label<SignsProps>`
  font-size: 16px;
  line-height: 18px;
  cursor: pointer;
  margin-left: 15px;
  position: relative;
  white-space: nowrap;
  display: inline-block;
  color: ${({ theme, isChecked, disabled }) =>
    disabled
      ? theme.palette.grey[300]
      : isChecked
      ? theme.palette.grey[100]
      : theme.palette.grey[200]};
  font-weight: ${({ isChecked }) => (isChecked ? 600 : 'normal')};
`;

const Transition = keyframes`
 from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const CheckedElement = styled.div<SignsProps>`
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-duration: 0.3s;
  animation-name: ${Transition};
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-color: ${({ theme, disabled }) => !disabled && theme.palette.primary.main};
`;

export default CheckBox;
