import { Theme } from '@emotion/react';
import { rgba } from 'polished';

export interface SectionColor {
  icon: string;
  container?: string;
}

export type ObjectRecord = Record<string, string | SectionColor>;
export type ConfigType = Record<string, string | ObjectRecord>;

export interface IconButtonConfig {
  free: ConfigType;
  withText: ConfigType;
  contained: ConfigType;
}

const getIconButtonConfig = (theme: Theme): IconButtonConfig => {
  return {
    withText: {
      default: { normal: theme.palette.grey[300] },
      disabled: theme.palette.grey[500],
      hovered: {
        normal: theme.palette.grey[100],
        primary: theme.palette.primary.main,
        secondary: theme.palette.secondary.main,
        negative: theme.palette.error.main,
      },
      pressed: {
        normal: rgba(theme.palette.grey[500], 0.6),
        primary: rgba(theme.palette.grey[500], 0.6),
        secondary: rgba(theme.palette.grey[500], 0.6),
        negative: rgba(theme.palette.grey[500], 0.6),
      },
    },
    free: {
      default: { normal: theme.palette.grey[300], other: theme.palette.grey[400] },
      disabled: theme.palette.grey[500],
      hovered: {
        normal: theme.palette.grey[200],
        primary: theme.palette.primary.main,
        secondary: theme.palette.secondary.main,
        negative: theme.palette.error.main,
        other: theme.palette.grey[200],
      },
      pressed: {
        normal: rgba(theme.palette.grey[200], 0.2),
        primary: rgba(theme.palette.primary.main, 0.2),
        secondary: rgba(theme.palette.secondary.main, 0.2),
        negative: rgba(theme.palette.error.main, 0.2),
        other: rgba(theme.palette.grey[600], 0.2),
      },
    },
    contained: {
      default: {
        normal: {
          icon: theme.palette.grey[300],
          container: theme.palette.grey[800],
        },
        primary: {
          icon: theme.palette.grey[900],
          container: theme.palette.primary.main,
        },
        secondary: {
          icon: theme.palette.secondary.main,
          container: theme.palette.secondary.light,
        },
        negative: {
          icon: theme.palette.error.main,
          container: theme.palette.error.light,
        },
        tertiary: {
          icon: theme.palette.primary.main,
          container: rgba(theme.palette.primary.light, 0.5),
        },
        fourth: {
          icon: theme.palette.grey[900],
          container: rgba(theme.palette.secondary.dark, 0.7),
        },
      },
      hovered: {
        normal: {
          icon: theme.palette.grey[200],
          container: theme.palette.grey[600],
        },
        primary: {
          icon: theme.palette.grey[900],
          container: rgba(theme.palette.primary.main, 0.5),
        },
        secondary: {
          icon: theme.palette.grey[900],
          container: theme.palette.secondary.main,
        },
        negative: {
          icon: theme.palette.grey[900],
          container: theme.palette.error.main,
        },
        tertiary: {
          icon: theme.palette.grey[900],
          container: rgba(theme.palette.primary.main, 0.5),
        },
        fourth: {
          icon: theme.palette.grey[900],
          container: rgba(theme.palette.secondary.main, 0.8),
        },
        primaryTool: {
          icon: theme.palette.primary.main,
          container: theme.palette.primary.light,
        },
        secondaryTool: {
          icon: theme.palette.secondary.main,
          container: theme.palette.secondary.light,
        },
        negativeTool: {
          icon: theme.palette.error.main,
          container: theme.palette.error.light,
        },
      },
      pressed: {
        normal: {
          icon: theme.palette.grey[200],
          container: theme.palette.grey[800],
        },
        primary: {
          icon: theme.palette.grey[900],
          container: theme.palette.primary.dark,
        },
        secondary: {
          icon: theme.palette.grey[900],
          container: theme.palette.secondary.dark,
        },
        negative: {
          icon: theme.palette.grey[900],
          container: theme.palette.error.main,
        },
        tertiary: {
          icon: theme.palette.grey[900],
          container: theme.palette.primary.main,
        },
        fourth: {
          icon: theme.palette.grey[900],
          container: theme.palette.secondary.dark,
        },
      },
    },
  };
};

export default getIconButtonConfig;
