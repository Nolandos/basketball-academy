import {createTheme} from '@mui/material';

const theme = createTheme({
    palette: {
        footballAcademy: {
            black: '#373A3C',
            white: '#FFFFFF',
            transparent: 'transparent',
            backgroundColor: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: 'Ubuntu',
        fontSize: 16,
        allVariants: {
            fontSize: 16,
            color: '#373A3C',
        },
    },
});

type FootballAcademyPalette = {
    black: string;
    white: string;
    transparent: string;
    backgroundColor: string;
};

declare module '@mui/material/styles/createPalette' {
    interface PaletteOptions {
        footballAcademy?: FootballAcademyPalette;
    }
}

export default theme;
