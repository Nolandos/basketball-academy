import React, {FC, ReactNode, useContext, useEffect, useState} from 'react';
import {ThemeProvider as MuiThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from 'styled-components';
import theme from 'styles/theme';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import ScrollTopButton from '@/components/common/Buttons/ScrollTopButton/ScrollTopButton';
import {AppContext} from '@/context/AppContext';
import {fetchLastNews} from '@/lib/fetchStrapi';
import MessageBox from '@/components/common/MessageBox/MessageBox';
import SingUpRightSideArea from '@/components/layout/SingUpRightSideArea/SingUpRightSideArea';
import * as Styled from './Layout.styles';

type LayoutProps = {
    children: JSX.Element | ReactNode;
};

const Layout: FC<LayoutProps> = ({children}) => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);
    const [showRightSideArea, setRightSideArea] = useState(false);
    const onScrollListener = () => window.scrollY > 150;

    const {
        handleSetLastNews,
        handleCloseMessageBox,
        app: {messageBox},
    } = useContext(AppContext);

    const handleGetNews = async () => {
        const res = await fetchLastNews();
        handleSetLastNews(false, res?.data || []);
    };

    useEffect(() => {
        setShowScrollTopButton(onScrollListener());
        handleGetNews();

        window.addEventListener('scroll', () => {
            setShowScrollTopButton(onScrollListener());
        });

        return () =>
            window.removeEventListener('scroll', () => {
                setShowScrollTopButton(onScrollListener());
            });
    }, []);

    return (
        <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Styled.Layout>
                    {messageBox && (
                        <MessageBox
                            id={messageBox.id}
                            type={messageBox.type}
                            text={messageBox.text}
                            duration={5000}
                            onCloseHandler={handleCloseMessageBox}
                        />
                    )}

                    <SingUpRightSideArea
                        isOpen={showRightSideArea}
                        onCloseHandler={() => setRightSideArea(false)}
                        onOpenHandler={() => setRightSideArea(true)}
                    />
                    <Header />
                    <main>{children}</main>
                    <Footer />
                    {showScrollTopButton && <ScrollTopButton />}
                </Styled.Layout>
            </ThemeProvider>
        </MuiThemeProvider>
    );
};

export default Layout;
