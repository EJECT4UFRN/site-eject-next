import { ReactElement, cloneElement } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

interface LinkNextProps extends LinkProps {
  children: ReactElement;

  shouldMatchExactHref?: boolean;
}

export const LinkNext = ({
  shouldMatchExactHref = false,
  children,
  ...rest
}: LinkNextProps) => {
  const { asPath } = useRouter();
  let isActive = false;

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  if (
    !shouldMatchExactHref &&
    (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true;
  }

  let classNameSelect = children.props.className || '';
  const className = isActive ? `${classNameSelect} selected` : '';

  return <Link {...rest}>{cloneElement(children, { className })}</Link>;
};
