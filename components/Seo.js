import Head from 'next/head'
export default function Seo({title='iDanny',description='iDanny',canonical='https://idanny.ru'}){return <Head><title>{title}</title><meta name="description" content={description}/><link rel="canonical" href={canonical}/><meta name="viewport" content="width=device-width, initial-scale=1"/><meta name="theme-color" content="#05070D"/></Head>}
