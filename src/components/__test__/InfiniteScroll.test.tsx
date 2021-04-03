import React from 'react';
import InfiniteScroll from '@components/InfiniteScroll';
import { render } from '@testing-library/react';
import '@src/__mocks__/intersectionObserverMock';

const props = {
  loadMore: false,
  loading: false,
  callback: jest.fn()
};

describe('InfiniteScroll', () => {
  test('it shows the childrens', () => {
    const { getByTestId } = render(
      <InfiniteScroll {...props}>
        <ul data-testid="child">
          <li>TEST</li>
        </ul>
      </InfiniteScroll>
    );
    expect(getByTestId('child')).toBeTruthy();
  });

  describe('when loadMore is false', () => {
    test('it shows the NO MORE RESULT', () => {
      const { getByTestId } = render(
        <InfiniteScroll {...props} loadMore={false}>
          <div></div>
        </InfiniteScroll>
      );
      expect(getByTestId('no-more-results')).toBeTruthy();
    });

    test("it doesn't show the loading", () => {
      const { queryByTestId } = render(
        <InfiniteScroll {...props} loadMore={false}>
          <div></div>
        </InfiniteScroll>
      );
      expect(queryByTestId('loading-component')).not.toBeTruthy();
    });
    test("it doesn't show the bottom div", () => {
      const { queryByTestId } = render(
        <InfiniteScroll {...props} loadMore={false}>
          <div></div>
        </InfiniteScroll>
      );
      expect(queryByTestId('bottom-div')).not.toBeTruthy();
    });
  });

  describe('when loadMore is true', () => {
    test('it shows the loading', () => {
      const { getByTestId } = render(
        <InfiniteScroll {...props} loadMore={true}>
          <div></div>
        </InfiniteScroll>
      );
      expect(getByTestId('loading-component')).toBeTruthy();
    });

    describe('and when the observer div is intersected', () => {
      test('it calls the callback', () => {
        const callback = jest.fn();
        render(
          <InfiniteScroll loading={false} loadMore={true} callback={callback}>
            <div></div>
          </InfiniteScroll>
        );
        expect(callback).toHaveBeenCalledTimes(1);
      });

      describe("and loading it's true", () => {
        test("it doesn't call the callback", () => {
          const callback = jest.fn();
          render(
            <InfiniteScroll loading={true} loadMore={true} callback={callback}>
              <div></div>
            </InfiniteScroll>
          );
          expect(callback).not.toHaveBeenCalledTimes(1);
        });
      });
    });
  });
});
