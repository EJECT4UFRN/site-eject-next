import Link from 'next/link';

import { Container, NextLink, PreviousLink } from './styles';

export function Pagination({ nextPage, postsPerPage, previousPage }) {
  const nextLink = `/conteudos/${nextPage}`;
  const previousLink = `/conteudos/${previousPage}`;
  const hasNextPage = nextPage * postsPerPage < postsPerPage + 5;
  const hasPreviousPage = previousPage >= 1;

  return (
    <Container>
      {hasPreviousPage && (
        <Link as={previousLink} href="/conteudos/[...param]">
          <PreviousLink>Anterior</PreviousLink>
        </Link>
      )}

      {hasNextPage && (
        <Link as={nextLink} href="/conteudos/[...param]">
          <NextLink>Próximo</NextLink>
        </Link>
      )}
    </Container>
  );
}
