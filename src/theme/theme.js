export const calcRem = (size) => `${size / 16}rem`;

export const colors = {
  blue: '#1DA1F2',
  black: '#14171A',
  darkGray: '#657786',
  lightGray_01: '#AAB8C2',
  lightGray_02: '#E1E8ED',
  lightGray_03: '#F5F8FA',
  red: '#FF0000',
  white: `#ffffff`,
};

export const fontSizes = {
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(24),
  xxl: calcRem(28),
  xxxl: calcRem(30),
  titleBase: calcRem(45),
  titleLarge: calcRem(50),
};

export const deviceSizes = {
  mobile: '576px',
  tablet: '768px',
  desktop: '1200px',
};

export const device = {
  mobile: `@media only screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `@media only screen and (max-width: ${deviceSizes.tablet})`,
  desktop: `@media only screen and (max-width: ${deviceSizes.desktop})`,
};
