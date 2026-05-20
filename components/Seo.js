import Head from 'next/head'
export default function Seo({title='iDanny',description='iDanny'}){return <Head><title>{title}</title><meta name="description" content={description}/><meta name="viewport" content="width=device-width, initial-scale=1"/></Head>}
