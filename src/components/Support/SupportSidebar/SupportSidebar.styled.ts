import styled, { css } from 'styled-components';

export const Container = styled.aside<{ $isVisible: boolean }>`
  background-color: var(--clr-lighter);
  box-shadow: 1px 0 4px 0 rgb(0 0 0 / 20%);
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: calc(100dvh - 40px);
  min-width: 280px;
  padding-top: 120px;
  position: relative;
  z-index: 100;

  & > footer {
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
  }

  & > h1 {
    padding: 0 20px;
  }

  @media screen and (width <= 1024px) {
    left: ${({ $isVisible }) => ($isVisible ? 0 : '-280px')};
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    position: absolute;
    transition: left 400ms ease, opacity 400ms ease;
  }
`;

export const List = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 10;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--clr-a);
  }
`;

export const ListItem = styled.li`
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 10px;
  padding: 20px;
  transition: background-color 200ms ease;
  width: 100%;

  &:hover {
    background-color: var(--clr-light);
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--clr-light);
  }

  & > div:nth-child(2) {
    flex-grow: 10;

    & > span {
      font-size: 0.75rem;
    }
  }
`;

export const LoadingItem = styled(ListItem)`
  cursor: default;

  &:hover {
    background-color: unset;
  }
`;

export const OpenCloseContainer = styled.div`
  left: 12px;
  position: absolute;
  top: 0;
  visibility: hidden;
  z-index: 100;

  @media screen and (width <= 1024px) {
    visibility: visible;
  }
`;
