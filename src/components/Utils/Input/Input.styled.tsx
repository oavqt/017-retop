import styled from 'styled-components';
import { InputStyledProps } from './interfaces/Input.interfaces';

const InputStyled = styled.input.attrs((props: InputStyledProps) => ({
  name: props.attrs?.name,
  placeholder: props.attrs?.placeholder,
  type: props.attrs?.type,
  value: props.attrs?.value
}))<InputStyledProps>`
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

export default InputStyled;
