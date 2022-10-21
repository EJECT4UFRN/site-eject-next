import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Container, InfoPost } from "./styles";
import { RichText } from "prismic-dom";

// import { Post } from '../../pages/conteudos/[...params]';
import { Post } from "../../pages/conteudos/blog";

interface MainPostProps {
  lastPost: Post;
}

function MainPost({ lastPost }: MainPostProps) {
  const formattedDate = format(
    new Date(lastPost.first_publication_date),
    "dd 'de' MMM',' yyyy",
    {
      locale: ptBR,
    }
  );
  return (
    <Container>
      <Link href={`/post/${lastPost.slug}`}>
        <a>
          <Image
            src={lastPost.banner.url}
            width={lastPost.banner.width}
            height={lastPost.banner.height}
            alt={lastPost.banner.alt}
            className="imageMain"
          />
        </a>
      </Link>

      <InfoPost>
        <span>
          <strong>{lastPost.category}</strong> • {formattedDate}
        </span>
        <h2>{lastPost.title}</h2>

        <div
          className="post-resume"
          dangerouslySetInnerHTML={{
            __html: RichText.asHtml(lastPost.resume),
          }}
        />

        <span>
          <img
            src={lastPost.profile.url}
            width={lastPost.profile.width}
            height={lastPost.profile.height}
            alt={lastPost.profile.alt}
          />
          <p>
            <span>{lastPost.author}</span>
            {lastPost.role}
          </p>
        </span>
      </InfoPost>
    </Container>
  );
}

export default MainPost;
