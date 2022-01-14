import styled from 'styled-components';
import type { input } from './Input';

const InputStyled = styled.input.attrs((props: input) => ({
  type: props.attrs?.type,
  placeholder: props.attrs?.placeholder
}))`
  border: none;
  border-bottom: 0.15em solid #f5cac3;
  border-bottom-style: dashed;
  height: 1.5em;
  margin: 0.2em 0;
  outline: none;

  ::placeholder {
    color: #0101015c;
    font-size: 1rem;
  }
  :focus {
    outline: none;
  }
`;

const InputFileStyled = styled(InputStyled)`
  display: none;
`;

export { InputFileStyled };
export default InputStyled;
