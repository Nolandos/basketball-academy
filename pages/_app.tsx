import React, {useEffect} from 'react';
import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {appWithTranslation} from 'next-i18next';
import Layout from '@/components/layout/Layout';

const App = ({Component, pageProps}: AppProps) => {
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles?.parentElement?.removeChild(jssStyles);
        }
    }, []);

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};

export default appWithTranslation(App);
