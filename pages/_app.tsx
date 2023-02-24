import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import * as React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
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
