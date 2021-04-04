import React, { useCallback, useRef } from 'react';
import Loading from '@components/Loading';
import { colors } from '@src/styles/colors';
import styled from 'styled-components';

type InfiniteScrollProps = {
  children: React.ReactNode;
  loadMore: boolean;
  loading: boolean;
  callback: () => void;
};

const InfiniteScrollEnd = styled.div`
  color: ${colors.primary_variant};
`;

export default function InfiniteScroll({
  children,
  loadMore,
  loading,
  callback
}: InfiniteScrollProps): JSX.Element {
  const observer = useRef<IntersectionObserver>();

  const bottomRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          callback();
        }
      });
      if (node) observer.current.observe(node);
    },
    [callback, loading]
  );

  return (
    <>
      {children}
      {!loadMore && (
        <InfiniteScrollEnd data-testid="no-more-results">NOTHING ELSE TO SHOW</InfiniteScrollEnd>
      )}
      {loadMore && <div data-testid="bottom-div" ref={bottomRef}></div>}
      {loadMore && <Loading></Loading>}
    </>
  );
}
