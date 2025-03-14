import { type SanityDocument, type PortableTextBlock } from "next-sanity";
import { PortableText } from "@portabletext/react";

import { client } from "@/sanity/client";

const POSTS_QUERY = `*[ _type == "post" ] | order(_createdAt desc) {
  _id,
  title,
  description,
  whyItsBad
}`;

const options = { next: { revalidate: 30 } };

type Post = {
  _id: string;
  title: string;
  description: PortableTextBlock[];
  whyItsBad: PortableTextBlock[];
}

export default async function IndexPage() {
  const posts: Post[] = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  console.log("Fetched posts:", posts);

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <header>
        <img className="header-image" src="https://www.commondreams.org/sites/default/files/views-article/make_america_hate_again.jpg" alt="header image" />
        <h1 className="header-title">Make America Hate Again</h1>
        <p className="header-description">A collection of things that republicans are doing to destroy America.</p>
        <a href="https://www.commondreams.org/views/2017/08/15/making-america-hate-again" className="header-link">Image Source</a>
      </header>
      <br style={{height: "2rem"}} />
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li key={post._id} className="post">
              <h1 className="font-semibold">{post.title}</h1>
              <PortableText value={post.description} />      
              <h1 className="section-title">Why it&apos;s bad</h1>
              <PortableText value={post.whyItsBad} />     
          </li> 
        ))}
      </ul>
    </main>
  );
}