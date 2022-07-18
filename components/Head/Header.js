import Head from 'next/head'

const Header = ({ text }) => (
    <Head>
        <title>
            { text }
        </title>
    </Head>
)

export default Header