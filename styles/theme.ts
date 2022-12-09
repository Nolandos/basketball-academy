import {createTheme} from '@mui/material';

const theme = createTheme({
    palette: {
        basketballAcademy: {
            black: '#000000',
            white: '#FFFFFF',
            borderGray: '#eaeaea',
            fontGray: '#9b9a9a',
            primaryGreen: '#336a53',
            transparent: 'transparent',
            backgroundColor: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: 'Ubuntu',
        fontSize: 16,
        allVariants: {
            fontSize: 16,
            color: '#000000',
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
};

declare module '@mui/material/styles/createPalette' {
    interface PaletteOptions {
        basketballAcademy?: BasketballAcademyPalette;
    }
}

export default theme;
