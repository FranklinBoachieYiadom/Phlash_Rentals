import './globals.css'
import type { Metadata } from 'next'
import '@mantine/dates/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';


export const metadata: Metadata = {
  title: 'Phlash Rentals',
  description: 'Drive what you can not  buy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <head>
        <ColorSchemeScript />
      </head>
      <body> <MantineProvider>{children}</MantineProvider></body>
    </html>
  )
}
