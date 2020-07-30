import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";

function HomePage() {
    return (
        <Layout>
            <Head>
                <title>Yazılar</title>
            </Head>
            <h1>Yazıları okumak için tıklayın.</h1>
            <Link href="/1">
                <a>1. Yazı</a>
            </Link>
            <Link href="/2">
                <a>2. Yazı</a>
            </Link>
            <Link href="/3">
                <a>3. Yazı</a>
            </Link>

        </Layout>
    );
}

export default HomePage;
