import styled from '@emotion/styled';
import React, { FC } from 'react';

interface InputLabelProps {
  label?: string;
  isFilled: boolean;
  disabled?: boolean;
  isOptional?: boolean;
  isRequired?: boolean;
}

export const InputLabel: FC<InputLabelProps> = ({
  label,
  isFilled,
  disabled = false,
  isOptional = false,
  isRequired = false,
}) => {
  return (
    <LabelContainer>
      {label && (
        <Label $isFilled={isFilled} $disabled={disabled}>
          {label}
        </Label>
      )}
      {isOptional && <Optional>(optional)</Optional>}
      {isRequired && <Required>*</Required>}
    </LabelContainer>
  );
};

export default InputLabel;

const Required = styled.span`
  padding-left: 0.2rem;
  color: ${({ theme }) => theme.palette.error.dark};
`;

const LabelContainer = styled.div`
  display: flex;
  width: max-content;
`;

const Optional = styled.div`
  font-size: 12px;
  margin-left: 3px;
  line-height: 18px;
  color: ${({ theme }) => theme.palette.grey[300]};
`;

interface LabelProps {
  $isFilled: boolean;
  $disabled: boolean;
}

const Label = styled.div<LabelProps>`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
  color: ${({ theme, $isFilled, $disabled }) => {
    if ($isFilled && $disabled) {
      return theme.palette.grey[300];
    }

    return theme.palette.grey[200];
  }};
`;
