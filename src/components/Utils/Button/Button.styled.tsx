import styled from 'styled-components';
import type { button } from './Button';

const ButtonStyled = styled.button.attrs((props: button) => ({
  type: props.attrs?.type,
  value: props.attrs?.value
}))`
  border: none;
  border-radius: 0.2em;
  background: #f5cac3;
  height: 2em;
  margin: 0.2em 0;

  :hover {
    cursor: pointer;
  }
`;

export default ButtonStyled;
