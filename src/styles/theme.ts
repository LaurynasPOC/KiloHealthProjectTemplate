export type Colors = keyof typeof colors;

const colors = {
  primary: "#101326",
  secondary: "#29C0CD",
  accent: "#E34578",
  white: "#ffffff",
};

export const theme = {
  sizes: {
    sectionWidth: "90rem",
  },
  colors,
  radii: {
    bradius30: "1.875rem",
  },
  borders: { borderNone: "none" },

  fontFamily: { primary: "Inter" },
  fontSizes: {
    fs14: "0.875rem",
    fs16: "1rem",
    fs18: "1.125rem",
  },
  fontWeights: {
    fw300: 300,
    fw400: 400,
    fw500: 500,
    fw600: 600,
  },
  lineHeights: {
    lh16: "1rem",
    lh24: "1.5rem",
    lh32: "2rem",
  },
  breakpoints: ["24rem", "47rem", "90rem"] as unknown as Breakpoints,
  space: {
    s8: "0.5rem",
    s16: "1rem",
    s24: "1.5rem",
    s32: "2rem",
  },
  typography: {
    mobile: {
      h1: {
        fontSize: "4rem",
        fontWeight: 500,
        lineHeight: "5.25rem",
      },
      h2: {
        fontSize: "3.5rem",
        fontWeight: 500,
        lineHeight: "4.5625rem",
      },
      h3: {
        fontSize: "2.5rem",
        fontWeight: 600,
        lineHeight: "3.25rem",
      },
      h4: {
        fontSize: "2rem",
        fontWeight: 600,
        lineHeight: "2.625rem",
      },
      h5: {
        fontSize: "1.625rem",
        fontWeight: 600,
        lineHeight: "2.125rem",
      },
      h6: {
        fontSize: "1.5rem",
        fontWeight: 600,
        lineHeight: "2rem",
      },
    },
    desktop: {
      h1: {
        fontSize: "5rem",
        fontWeight: 500,
        lineHeight: "6.5rem",
      },
      h2: {
        fontSize: "4.5rem",
        fontWeight: 500,
        lineHeight: "5.875rem",
      },
      h3: {
        fontSize: "3.5rem",
        fontWeight: 600,
        lineHeight: "6.5rem",
      },
      h4: {
        fontSize: "3rem",
        fontWeight: 600,
        lineHeight: "3.9375rem",
      },
      h5: {
        fontSize: "2.5rem",
        fontWeight: 600,
        lineHeight: "3.25rem",
      },
      h6: {
        fontSize: "2rem",
        fontWeight: 600,
        lineHeight: "2.625rem",
      },
    },
    zIndices: {
      base: 0,
      upperElement: 1,
      modal: 10,
      loader: 11,
    },
  },
} as const;

export type Theme = typeof theme;

const Breakpoints = theme.breakpoints as any;
Breakpoints.lmobile = Breakpoints[0];
Breakpoints.ltablet = Breakpoints[1];
Breakpoints.desktop = Breakpoints[2];

type Breakpoints<T = string> = {
  _: T;
  lmobile: T;
  ltablet: T;
  desktop: T;
};
