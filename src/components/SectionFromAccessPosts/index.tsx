import { Container, DemoPost, Aside } from "./styles";

import Link from "next/link";
import Router from 'next/router';

interface InfoPost {
  author: string;
  id: string;
  profile: {
    alt: string;
    height: number;
    width: number;
    url: string;
  };
  role: string;
  slug: string;
  title: string;
}

interface SectionFromAccessPostsProps {
  postContent: InfoPost[];
}

export function SectionFromAccessPosts({
  postContent,
}: SectionFromAccessPostsProps) {
  return (
    <Container bgImage="/images/back-post.png">
      <main>
        <div></div>
        <Aside>
          {postContent.map((post) => (
            <DemoPost key={post.id}>
              <div>
                <span>
                  <img src={post.profile.url} alt={post.profile.alt} />
                  <p>
                    <strong>por {post.author}</strong>
                    {post.role}
                  </p>
                </span>
                <h3>{post.title}</h3>
              </div>
              <Link href={`post/${post.slug}`}>
                <a>Ler artigo {">"}</a>
              </Link>
            </DemoPost>
          ))}
          <button onClick={() => Router.push("/conteudos/blog")}>VER MAIS CONTEÚDOS</button>
        </Aside>
      </main>
    </Container>
  );
}
