import styled from 'styled-components';
import type { textarea } from './Textarea';

const TextareaStyled = styled.textarea.attrs((props: textarea) => ({
  placeholder: props.attrs?.placeholder
}))`
  border: none;
  border-bottom: 0.15em solid #f5cac3;
  border-bottom-style: dashed;
  height: 5em;
  margin: 0.2em 0;
  outline: none;
  resize: none;

  ::placeholder {
    color: #0101015c;
    font-size: 1rem;
  }
  :focus {
    outline: none;
  }
`;

export default TextareaStyled;
