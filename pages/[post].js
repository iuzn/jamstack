import Layout from "../components/layout";
import Head from "next/head";
import React from "react";
//dynamic
export async function getStaticPaths() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
    const posts = await res.json()
    const paths = posts.map((post) => ({
        params: { post: post.id.toString() },
    }))
    return { paths, fallback: false }
}

//build time
export async function getStaticProps({ params }) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${params.post}`)
    const post = await res.json()
    return { props: { post } }
}

//page
function PostPage({post}) {
    return <Layout>
        <Head>
            <title>Deneme Sayfası</title>
        </Head>
        <div>
            <div className="post-title">
                {post.title}
            </div>
            <div className="post-content">
            {post.content}
        </div></div>
        <style jsx>{`
            .post-content{
            text-align: justify;
            font-family: Bahnschrift,serif;
            margin: 20px 30px 20px 30px;
            }
            .post-title{
            text-align: center;
            }
      `}</style>
    </Layout>

}

export default PostPage