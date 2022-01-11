import styled from 'styled-components';

const InputStyled = styled.input.attrs((props) => {
  type: props.type;
  placeholder: props.placeholder;
})`
  border: none;
  border-bottom: 0.15em solid #f5cac3;
  height: 1.5em;
  outline: none;

  :focus {
    outline: none;
  }
`;

export default InputStyled;
