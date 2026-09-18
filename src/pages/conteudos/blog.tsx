import { GetStaticProps } from "next";

import axios from "axios";

import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";
import AsideFilter from "../../components/AsideFilter";
import { getPrismicClient } from "../../services/prismic";

import { Layout } from "../../components/Layout";
import MainPost from "../../components/MainPost";
import Posts from "../../components/Posts";
import ValuableMaterial from "../../components/ValuableMaterial";
import {
  Container,
  SectionPosts,
  Button,
} from "../../styles/templates/Contents";
import { Pagination } from "../../components/Pagination";
import { useState } from "react";

export interface RichType {
  spans: Array<string> | [];
  text: string;
  type: string;
}

export type Images = {
  url: string;
  width: number;
  height: number;
  alt?: string;
};

export interface Post {
  id: string;
  first_publication_date: string;
  slug: string;
  title: string;
  author: string;
  role: string;
  banner: Images;
  category: string;
  profile: Images;
  resume: RichType[];
}

interface BlogProps {
  postsPagination: {
    results: Post[];
    next_page: string;
  };
}

export default function Blog({ postsPagination }: BlogProps): JSX.Element {
  const [lastPost, ...totalPosts] = postsPagination.results;

  // if (router.isFallback) return <p>Carregando...</p>;

  const [posts, setPosts] = useState(totalPosts);
  const [nextPage, setNextPage] = useState(postsPagination.next_page);
  const [currentPage, setCurrentPage] = useState(1);

  async function handleNextPage(): Promise<void> {
    if (currentPage !== 1 && nextPage === null) {
      return;
    }

    const { data: postsResults } = await axios.get(`${nextPage}`);

    setNextPage(postsResults.next_page);
    setCurrentPage(postsResults.page);

    const newPosts: Post[] = postsResults.results.map((post) => ({
      id: post.id,
      first_publication_date: post.first_publication_date,
      slug: post.uid,
      title: post.data.titulo,
      banner: {
        url: post.data.banner.url,
        alt: post.data.banner.alt,
        width: post.data.banner.dimensions.width,
        height: post.data.banner.dimensions.height,
      },
      category: RichText.asText(post.data.categoria),
      author: post.data.autor,
      role: post.data.funcao,
      profile: {
        url: post.data.perfil_do_autor.url,
        width: post.data.perfil_do_autor.dimensions.width,
        height: post.data.perfil_do_autor.dimensions.height,
        alt: post.data.perfil_do_autor.alt,
      },
      resume: post.data.resumo,
    }));

    setPosts([...posts, ...newPosts]);
  }

  return (
    <>
      <Layout>
        <Container>
          {/* <AsideFilter /> */}
          <SectionPosts>
            <MainPost lastPost={lastPost} />
            <Posts totalPosts={posts} />
            {/* <Pagination {...pagination} /> */}
          </SectionPosts>
        </Container>
        {nextPage && (
          <Button type="button" onClick={handleNextPage}>
            Carregar mais posts
          </Button>
        )}

        {/* <ValuableMaterial /> */}
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  //   // const page = Number(context.params.params[0]);
  //   // const category = context.params.params[1] || "";
  //   // const postsPerPage = 3;

  //   // const nextPage = page + 1;
  //   // const previousPage = page - 1;

  //   // const startFrom = page - 1 * postsPerPage;

  const prismic = getPrismicClient();
  const responsePrismic = await prismic.query<any>(
    [Prismic.Predicates.at("document.type", "post")],
    {
      pageSize: 3,
      orderings: "[document.last_publication_date desc]",
    }
  );

  const posts = responsePrismic.results.map((post) => ({
    id: post.id,
    first_publication_date: post.first_publication_date,
    slug: post.uid,
    title: post.data.titulo,
    banner: {
      url: post.data.banner.url,
      alt: post.data.banner.alt,
      width: post.data.banner.dimensions.width,
      height: post.data.banner.dimensions.height,
    },
    category: RichText.asText(post.data.categoria),
    author: post.data.autor,
    role: post.data.funcao,
    profile: {
      url: post.data.perfil_do_autor.url,
      width: post.data.perfil_do_autor.dimensions.width,
      height: post.data.perfil_do_autor.dimensions.height,
      alt: post.data.perfil_do_autor.alt,
    },
    resume: post.data.resumo,
  }));

  const postsPagination = {
    next_page: responsePrismic.next_page,
    results: posts,
  };

  // const pagination = {
  //   nextPage,
  //   previousPage,
  //   postsPerPage,
  // };

  // if (!postsFormatted.length) return { notFound: true };

  return {
    props: {
      postsPagination,
    },
    revalidate: 60 * 5,
  };
};
