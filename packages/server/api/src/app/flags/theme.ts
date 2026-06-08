import tinycolor from 'tinycolor2';

function createSvgDataUri(svg: string) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const defaultBrandName = 'STS';
const defaultBrandColor = '#6e41e2';
const defaultBrandFullLogo = createSvgDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" width="240" height="64" viewBox="0 0 240 64" fill="none" role="img" aria-label="STS">
  <rect width="240" height="64" rx="16" fill="#ffffff"/>
  <circle cx="32" cy="32" r="18" fill="${defaultBrandColor}"/>
  <text x="32" y="38" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="700" fill="#ffffff">STS</text>
  <text x="62" y="39" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="700" fill="#111827">STS</text>
</svg>
`);
const defaultBrandIcon = createSvgDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none" role="img" aria-label="STS">
  <rect width="64" height="64" rx="16" fill="${defaultBrandColor}"/>
  <text x="32" y="39" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="700" fill="#ffffff">STS</text>
</svg>
`);

function generateColorVariations(defaultColor: string) {
  const defaultColorObj = tinycolor(defaultColor);

  const darkColor = defaultColorObj.clone().darken(2);
  const baseLight = tinycolor('#ffffff');
  const lightColor = tinycolor
    .mix(baseLight, defaultColorObj.toHex(), 12)
    .toHexString();
  const mediumColor = defaultColorObj.clone().lighten(26);

  return {
    default: defaultColorObj.toHexString(),
    dark: darkColor.toHexString(),
    light: lightColor,
    medium: mediumColor.toHexString(),
  };
}

function generateSelectionColor(defaultColor: string) {
  const defaultColorObj = tinycolor(defaultColor);
  const lightColor = defaultColorObj.lighten(8);
  return lightColor.toHexString();
}

export function generateTheme({
  primaryColor,
  fullLogoUrl,
  favIconUrl,
  logoIconUrl,
  websiteName,
}: {
  primaryColor: string;
  fullLogoUrl: string;
  favIconUrl: string;
  logoIconUrl: string;
  websiteName: string;
}) {
  return {
    websiteName,
    colors: {
      avatar: '#515151',
      'blue-link': '#1890ff',
      danger: '#f94949',
      primary: generateColorVariations(primaryColor),
      warn: {
        default: '#f78a3b',
        light: '#fff6e4',
        dark: '#cc8805',
      },
      success: {
        default: '#14ae5c',
        light: '#3cad71',
      },
      selection: generateSelectionColor(primaryColor),
    },
    logos: {
      fullLogoUrl,
      favIconUrl,
      logoIconUrl,
    },
  };
}

export const defaultTheme = generateTheme({
  primaryColor: defaultBrandColor,
  websiteName: defaultBrandName,
  fullLogoUrl: defaultBrandFullLogo,
  favIconUrl: defaultBrandIcon,
  logoIconUrl: defaultBrandIcon,
});
