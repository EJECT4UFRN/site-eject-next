import { GetStaticPaths, GetStaticProps } from "next";
import { RichText } from "prismic-dom";
import Link from "next/link";

import HeroTransform from "../../components/HeroTransform";
import { Layout } from "../../components/Layout";
import { getPrismicClient } from "../../services/prismic";
import Prismic from "@prismicio/client";

import {
  Container,
  Content,
  Left,
  Header,
  OtherPosts,
  Right,
} from "../../styles/templates/Post";

import { NextSeo } from "next-seo";

type Posts = {
  id: string;
  slug: string;
  title: string;
  banner: {
    url: string;
    alt: string;
    width: string;
    height: string;
  };
};

type PostType = {
  uid: string;
  title: string;
  author: string;
  category: string;
  profile: any;
  role: string;
  banner: any;
  textContent: string;
  textContentAsText: string;
};

type PostProps = {
  somePosts: Posts[];
  post: PostType;
  preview: boolean;
};

export default function Post({ post, preview, somePosts }: PostProps) {
  return (
    <>
      <NextSeo
        title={`EJECT | ${post?.title}`}
        description={`${post?.textContentAsText}`}
        canonical="https://www.ejectufrn.com.br"
        openGraph={{
          url: "https://www.ejectufrn.com.br",
          title: `EJECT | ${post?.title}`,
          description: post?.textContentAsText,
          images: [
            {
              url: post?.banner.url,
              width: post?.banner.width,
              height: post?.banner.height,
              alt: post?.banner.alt,
            },
          ],
        }}
      />
      <Layout>
        <Container>
          <HeroTransform />
          <Content>
            <Left>
              <Header>
                <h1>{post?.title}</h1>
                <div>
                  <img src={post?.profile.url} alt="profile" />
                  <span>
                    <strong>por {post?.author}</strong>
                    {post?.role}
                  </span>
                </div>
              </Header>

              <OtherPosts>
                <h3>OUTROS ARTIGOS</h3>
                <div>
                  {somePosts?.map((post) => (
                    <div key={post.id}>
                      <img src={post.banner.url} alt={post.banner.alt} />
                      <h4>{post.title}</h4>
                      <Link href={`/post/${post.slug}`}>
                        <a>Ver post {">"}</a>
                      </Link>
                    </div>
                  ))}
                </div>
              </OtherPosts>
            </Left>
            <Right>
              <div
                dangerouslySetInnerHTML={{
                  __html: post?.textContent,
                }}
              />

              {preview && (
                <Link href="/api/exit-preview">
                  <a className="preview">Sair do modo preview</a>
                </Link>
              )}
            </Right>
          </Content>
        </Container>
      </Layout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const { results } = await prismic.query([
    Prismic.Predicates.at("document.type", "post"),
  ]);

  const paths = results.map(({ uid }) => ({
    params: {
      slug: uid,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const prismic = getPrismicClient();
  const { slug } = params;

  const valueRef = previewData && Object.values(previewData)[0];

  const response = await prismic.getByUID<any>("post", String(slug), {
    ref: valueRef,
  });

  const responsePrismic = await prismic.query<any>(
    [Prismic.Predicates.at("document.type", "post")],
    {
      pageSize: 3,
      orderings: "[document.last_publication_date desc]",
    }
  );

  // if (!response) return { notFound: true };
  const somePosts = responsePrismic.results.map((post) => ({
    id: post.id,
    slug: post.uid,
    title: post.data.titulo,
    banner: {
      url: post.data.banner.url,
      alt: post.data.banner.alt,
      width: post.data.banner.dimensions.width,
      height: post.data.banner.dimensions.height,
    },
  }));

  const post = {
    uid: response.uid,
    title: response.data.titulo,
    author: response.data.autor,
    role: response.data.funcao,
    category: RichText.asText(response.data.categoria),
    banner: {
      url: response.data.banner?.url,
      alt: response.data.banner?.alt,
      width: response.data.banner?.dimensions.width,
      height: response.data.banner?.dimensions.height,
    },
    profile: {
      url: response.data.perfil_do_autor.url,
      width: response.data.perfil_do_autor.dimensions.width,
      height: response.data.perfil_do_autor.dimensions.height,
      alt: response.data.perfil_do_autor.alt,
    },
    textContent: RichText.asHtml(response.data.conteudo),
    textContentAsText: RichText.asText(response.data.conteudo),
  };

  return {
    props: {
      post,
      somePosts,
      preview,
    },
    revalidate: 60 * 5,
  };
};
