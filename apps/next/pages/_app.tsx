import '@tamagui/core/reset.css'
import '@tamagui/font-inter/css/400.css'
import '@tamagui/font-inter/css/700.css'
import 'raf/polyfill'

import type React from 'react'
import Head from 'next/head'
import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'
import type { SolitoAppProps } from 'solito'
import { Provider } from 'app/provider'
import { PortalProvider } from '@tamagui/portal'
import { Metadata } from 'next'

if (process.env.NODE_ENV === 'production') {
  require('../public/tamagui.css')
}

export const metadata: Metadata = {
  title: 'Heroes of the Grid',
  description: 'Heroes of the Grid Card Game',
  manifest: '/manifest.json',
  themeColor: '#000000',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Heroes of the Grid',
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    shortcut: '/favicon.ico',
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180' }],
  },
}

function MyApp({ Component, pageProps }: SolitoAppProps) {
  return (
    <>
      <Head>
        <title>Heroes Grid • Battle Simulator</title>
        <meta
          name="description"
          content="Fan-made battle simulator for the Power Rangers: Heroes of the Grid board game. Practice combat encounters, test strategies, and master the battle phase mechanics."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
          href="/splash/iPhone_14_Pro_Max_landscape.png"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <script
          dangerouslySetInnerHTML={{
            // avoid flash of animated things on enter:
            __html: `document.documentElement.classList.add('t_unmounted')`,
          }}
        />
      </Head>
      <ThemeProvider>
        <PortalProvider shouldAddRootHost>
          <Component {...pageProps} />
        </PortalProvider>
      </ThemeProvider>
    </>
  )
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useRootTheme()

  return (
    <NextThemeProvider
      // change default theme (system) here:
      // defaultTheme="light"
      onChangeTheme={(next) => {
        setTheme(next as any)
      }}
    >
      <Provider disableRootThemeClass disableInjectCSS defaultTheme={theme}>
        {children}
      </Provider>
    </NextThemeProvider>
  )
}

export default MyApp
