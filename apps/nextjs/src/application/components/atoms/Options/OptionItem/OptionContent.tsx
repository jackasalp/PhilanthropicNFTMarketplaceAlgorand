import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

export interface OptionContentProps {
  label: string;
  hovered: boolean;
  icon?: {
    hover?: ReactNode;
    default: ReactNode;
    position?: 'start' | 'end';
  };
  hoverColor?: {
    icon: string;
    background: string;
  };
}

export const OptionContent = ({ label, hovered, icon, hoverColor }: OptionContentProps) => {
  const IconComponent = hovered ? (
    <HoveredIcon $hoverColor={hoverColor?.icon}>{icon?.hover}</HoveredIcon>
  ) : (
    <Icon>{icon?.default}</Icon>
  );

  const iconPosition = icon?.position ?? 'start';

  return (
    <>
      {iconPosition === 'start' && IconComponent}
      <Label $isHovered={hovered} $hoverColor={hoverColor?.icon}>
        {label}
      </Label>
      {iconPosition === 'end' && IconComponent}
    </>
  );
};

interface LabelProps {
  $isHovered: boolean;
  $hoverColor?: string;
}

const Label = styled.div<LabelProps>`
  flex-grow: 1;
  padding: 0 6px;
  font-size: 14px;
  pointer-events: none;
  color: ${({ theme, $isHovered, $hoverColor }) =>
    $isHovered ? $hoverColor ?? theme.palette.primary.main : theme.palette.grey[100]};
`;

const svgConfig = css`
  pointer-events: none;
  svg {
    width: 18px;
    height: 18px;
    display: block;
  }
`;

const Icon = styled.div`
  ${svgConfig}
  path,
  use {
    fill: ${({ theme }) => theme.palette.grey[400]};
  }
`;

const HoveredIcon = styled(Icon)<Pick<LabelProps, '$hoverColor'>>`
  ${svgConfig}
  path,
  use {
    fill: ${({ $hoverColor, theme }) => $hoverColor ?? theme.palette.primary.main};
  }
`;
