/* eslint-disable linebreak-style */
const size = {
  // Basic Screen Size
  smartphone: '600px',
  mobile: '1023px',
  tablet: '1250px',
  laptop: '1524px',

  // Advanced Screen Size
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  laptopL: '2000px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptopL: `(min-width: ${size.laptopL})`,
  smartphone: `(max-width: ${size.smartphone})`,
  mobile: `(max-width: ${size.mobile})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};
