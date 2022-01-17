import styled from 'styled-components';
import { ButtonStyledProps } from './interfaces/Button.interfaces';

const ButtonStyled = styled.button.attrs((props: ButtonStyledProps) => ({
  ['data-testid']: props.attrs?.rtlTestID?.btn,
  type: props.attrs?.type,
  value: props.attrs?.value
}))<ButtonStyledProps>`
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
