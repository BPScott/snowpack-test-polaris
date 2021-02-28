import React, { useState, useEffect } from 'react';
import {AppProvider, Button} from '@shopify/polaris';
import '@shopify/polaris/dist/styles.css';

// @shopify/polaris imports a json file from the @shopify/polaris-tokens package.
// It looks like this:
// import DefaultThemeColors from '@shopify/polaris-tokens/dist-modern/theme/base.json';
// In Snowpack 3.1.0-pre.8 That import works if we perform it app code but not
// within a package

import logo from './logo.svg';
import './App.css';

interface AppProps {}

function App({}: AppProps) {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
    <AppProvider i18n={{}}>
      <Button primary>Hello</Button>
    </AppProvider>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
