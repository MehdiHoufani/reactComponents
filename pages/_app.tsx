import React from "react";
import { AppProps /*, AppContext */ } from 'next/app'

import { Provider } from 'react-redux'
import store from '../redux/store';

const App = ({ Component, pageProps }: AppProps) =>
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>;

export default App;