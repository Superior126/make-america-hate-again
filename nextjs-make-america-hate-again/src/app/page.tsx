import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";
import Header from "./components/index/header/header";
import Post from "./components/index/post/post";

const POSTS_QUERY = `*[ _type == "post" ] | order(_createdAt desc) {
  _id,
  title,
  description,
  whyItsBad
}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main>
      <Header />
      <br style={{height: "2rem"}} />
      <h1 style={{marginLeft: "20px", fontWeight: "bold", fontSize: "xx-large"}}>Posts:</h1>
      <div className="post-container">
        {posts.map((post) => (
            <Post 
              key={post._id} 
              title={post.title} 
              description={post.description}
              whyItsBad={post.whyItsBad}
            />
        ))}
      </div>
    </main>
  );
}