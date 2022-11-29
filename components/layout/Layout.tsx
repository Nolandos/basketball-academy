import React, {FC, ReactNode} from 'react';
import {ThemeProvider as MuiThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from 'styled-components';
import theme from 'styles/theme';
import * as Styled from './Layout.styles';

type LayoutProps = {
    children: JSX.Element | ReactNode;
};

const Layout: FC<LayoutProps> = ({children}) => (
    <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Styled.Layout>
                <main>{children}</main>
            </Styled.Layout>
        </ThemeProvider>
    </MuiThemeProvider>
);

export default Layout;
