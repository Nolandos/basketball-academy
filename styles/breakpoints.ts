const size = {
    mobileMicro: '480px',
    mobileSmall: '575.98px',
    colXxs: '576px',
    colXs: '768px',
    mobile: '767.98px',
    colDesktop: '1080px',
    colLarge: '1200px',
    colXlarge: '1415px',
    colXXlarge: '1800px',
    colSuperLarge: '1920px',
};

const device = {
    mobileMicro: `screen and (max-width: ${size.mobileMicro})`,
    mobileSmall: `screen and (max-width: ${size.mobileSmall})`,
    smallDevices: `screen and (min-width: ${size.colXxs})`,
    smallDevicesOnly: `screen and (min-width: ${size.colXxs}) and (max-width: ${size.mobile}))`,
    mobile: `screen and (max-width: ${size.mobile})`,
    tablet: `screen and (min-width: ${size.colXs})`,
    tabletOnly: `screen and (min-width: ${size.colXs}) and (max-width: 1079.98px)`,
    touch: `screen and (max-width: 1079.98px)`,
    touchSec: `screen and (max-width: 1199.98px)`,
    desktop: `screen and (min-width: ${size.colDesktop})`,
    desktopOnly: `screen and (min-width: ${size.colDesktop}) and (max-width: 1199.98px)`,
    widescreen: `screen and (min-width: ${size.colLarge})`,
    widescreenOnly: `screen and (min-width: ${size.colLarge}) and (max-width: ${size.colXlarge})`,
    hd: `screen and (min-width: ${size.colXlarge})`,
    fullHd: `screen and (min-width: ${size.colXXlarge})`,
    superHd: `screen and (min-width: ${size.colSuperLarge})`,
};

export default device;
