import React, { useCallback, useRef } from 'react';
import Loading from './Loading';

type InfiniteScrollProps = {
  children: React.ReactNode;
  loadMore: boolean;
  loading: boolean;
  callback: () => void;
};

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
      {!loadMore && <div data-testid="no-more-results">NOTHING ELSE TO SHOW</div>}
      {loadMore && <div data-testid="bottom-div" ref={bottomRef}></div>}
      {loadMore && <Loading></Loading>}
    </>
  );
}
