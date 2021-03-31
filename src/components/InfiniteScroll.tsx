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
}: InfiniteScrollProps) {
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
      {!loadMore && <div>NOTHING ELSE TO SHOW</div>}
      {loadMore && <div ref={bottomRef}></div>}
      {<Loading></Loading>}
    </>
  );
}
