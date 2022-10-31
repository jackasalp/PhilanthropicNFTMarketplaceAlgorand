import styled from '@emotion/styled';
import { Tooltip as MuiTooltip, TooltipProps } from '@mui/material';

export const Tooltip = styled((props: TooltipProps) => (
  <MuiTooltip arrow classes={{ tooltip: props.className }} {...props} />
))`
  &.MuiTooltip-tooltip {
    background: ${({ theme }) => theme.palette.grey[100]};
    > span {
      color: ${({ theme }) => theme.palette.grey[100]};
    }
  }
`;
