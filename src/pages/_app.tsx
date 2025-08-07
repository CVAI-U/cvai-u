"use client";
import '@/styles/global.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

// export function Providers({ children }: { children: React.ReactNode }) {
//   return <ThemeProvider attribute="class">{children}</ThemeProvider>;
// }

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }