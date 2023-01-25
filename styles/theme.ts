import {createTheme} from '@mui/material';

const theme = createTheme({
    palette: {
        basketballAcademy: {
            black: '#221f1b',
            white: '#FFFFFF',
            borderGray: '#eaeaea',
            fontGray: '#9b9a9a',
            fontGraySecond: '#929191',
            fontGrayThird: '#a9a6a6',
            backgroundSectionGray: '#f4f5f5',
            primaryGreen: '#336a53',
            transparent: 'transparent',
            backgroundColor: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: 'Titillium Web',
        fontSize: 16,
        allVariants: {
            fontSize: 16,
            color: '#221f1b',
        },
    },
});

type BasketballAcademyPalette = {
    black: string;
    white: string;
    transparent: string;
    backgroundColor: string;
    primaryGreen: string;
    borderGray: string;
    fontGray: string;
    backgroundSectionGray: string;
    fontGraySecond: string;
    fontGrayThird: string;
};

declare module '@mui/material/styles/createPalette' {
    interface PaletteOptions {
        basketballAcademy?: BasketballAcademyPalette;
    }
}

export default theme;
