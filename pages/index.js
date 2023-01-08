import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Landing from '../src/components/Landing'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Shivam Weds Chandana</title>
        <meta name="description" content="Invitation from the Heart" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </>
  )
}
