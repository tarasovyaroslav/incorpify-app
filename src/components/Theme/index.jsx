import React from 'react';
import { ThemeProvider } from 'styled-components';

import colors from './colors';
import { fontfamilies, fontsizes, fontweights } from './fonts';

const theme = {
  colors,
  fontfamilies,
  fontsizes,
  fontweights,
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
