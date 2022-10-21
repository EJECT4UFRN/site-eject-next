import { ptBR } from "date-fns/locale";
import { format } from "date-fns";
import { Container, ListPosts, Post, ImageContainer } from "./styles";
import { RichText } from "prismic-dom";
import Image from "next/image";
import Link from "next/link";
import { Post as ContentPost } from "../../pages/conteudos/blog";

interface PropsProps {
  totalPosts: ContentPost[];
}

function Posts({ totalPosts }: PropsProps) {
  const formattedPosts = totalPosts.map((post) => ({
    ...post,
    first_publication_date: format(
      new Date(post.first_publication_date),
      "dd MMM yyyy",
      {
        locale: ptBR,
      }
    ),
  }));
  return (
    <Container>
      <ListPosts>
        {formattedPosts.map((post) => (
          <Post key={post.id}>
            <ImageContainer>
              <Link href={`/post/${post.slug}`}>
                <a>
                  <Image
                    src={post.banner.url}
                    width={post.banner.width}
                    height={post.banner.height}
                  />
                </a>
              </Link>
            </ImageContainer>
            <div>
              <span>
                <strong>{post.category}</strong> • {post.first_publication_date}
              </span>
              <h2>{post.title}</h2>
              <span>
                por {post.author}, {post.role}
              </span>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${RichText.asHtml(post.resume)}`,
                }}
              />
            </div>
          </Post>
        ))}
      </ListPosts>
    </Container>
  );
}

export default Posts;
