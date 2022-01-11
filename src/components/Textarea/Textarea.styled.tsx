import styled from 'styled-components';

interface textareaAttrs {
  placeholder: string;
}

const Textarea = styled.textarea.attrs((props: textareaAttrs) => {
  placeholder: props.placeholder;
})`
  border: none;
  border-bottom: 0.15em solid #f5cac3;
  height: 5em;
  outline: none;
  resize: none;

  :focus {
    outline: none;
  }
`;

export default Textarea;
