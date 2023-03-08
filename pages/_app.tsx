import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar';

import * as React from 'react';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <div>
        <NextNProgress color="#6c50d3" startPosition={0.3} stopDelayMs={200} height={5} showOnShallow={true} />
        <Component {...pageProps} />
      </div>
    </>
  )
}


declare namespace JSX {
  interface IntrinsicElements {
    form: any
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'my-html-custom-tag': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
