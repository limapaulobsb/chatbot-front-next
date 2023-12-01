import styled from 'styled-components';

const Input = styled.input`
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  height: 40px;
  padding: 0 10px;
  width: 100%;

  &::placeholder {
    color: var(--clr-light-gray);
    transition: opacity 200ms ease-in-out;
  }

  &:focus::placeholder {
    opacity: 0;
  }
`;

const ChatInput = styled(Input)`
  border: none;
  border-top: 1px solid var(--clr-lighter-gray);
  font-size: 1.2em;
  height: 50px;
  margin: 0 40px;
`;

const MainInput = styled(Input)`
  border: 1px solid var(--clr-lighter-gray);
  font-size: 1em;
`;

const ChatTextArea = styled.textarea`
  border: 1px solid var(--clr-light-gray);
  border-radius: 5px;
  color: inherit;
  font-family: inherit;
  font-size: 1.2rem;
  height: 120px;
  padding: 10px;
  resize: none;
  width: 100%;

  &::placeholder {
    color: var(--clr-light-gray);
    transition: opacity 200ms ease-in-out;
  }

  &:focus::placeholder {
    opacity: 0;
  }
`;

export { Input, ChatInput, MainInput, ChatTextArea };
