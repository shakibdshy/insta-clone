import Head from 'next/head';
import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'mantine-color-scheme',
    defaultValue: 'dark',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'light' ? 'dark' : 'light'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);
  return (
    <>
      <Head>
        <title>Instagram Clone</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme,
          }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>

    </>
  )
}

export default MyApp
